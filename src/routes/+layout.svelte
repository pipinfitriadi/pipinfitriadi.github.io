<!-- 
Copyright (C) Pipin Fitriadi - All Rights Reserved

Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 19 July 2024
-->

<script>
    import { onMount } from 'svelte';

    const appVersion = __APP_VERSION__;
    let userName = 'Continue with Google',
        alt = 'Google logo',
        src = 'https://developers.google.com/identity/images/g-logo.png';

    /**
     * @param {string} token
     */
    function parseJwt(token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map((c) => {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join('')
            );

            return JSON.parse(jsonPayload);
        } catch (e) {
            console.error('Error parsing JWT token:', e);
            return {};
        }
    }

    /**
     * @param {{ credential: string; }} response
     */
    function handleCredentialResponse(response) {
        const decodedToken = parseJwt(response.credential);

        userName = decodedToken.name;
        alt = decodedToken.email;
        src = decodedToken.picture;

        // You can store this in localStorage or pass it to your backend if needed
        localStorage.setItem('googleToken', response.credential);
    }

    // Function to re-trigger the Google One Tap prompt (for account switching)
    function switchAccount() {
        if (typeof window !== 'undefined') {
            window.google.accounts.id.prompt(); // Re-trigger the One Tap prompt
        }
    }

    onMount(() => {
        window.google.accounts.id.initialize({
            client_id: '1084721860548-vnjs2l4cifur6b4b072gldcoiev6uu1f.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            close_on_tap_outside: false,
            context: 'use',
            itp_support: true
        });

        // Access the stored token
        const googleToken = localStorage.getItem('googleToken');

        if (googleToken) {
            // User is logged in
            const decodedToken = parseJwt(googleToken);

            userName = decodedToken.name;
            alt = userName;
            src = decodedToken.picture;
        } else {
            switchAccount();
        }
    });
</script>

<svelte:head>
    <!-- Google Identity Services (GIS) -->
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<header>
    <button title={alt} on:click={switchAccount}>
        <span>{userName}</span>
        <img {src} {alt} />
    </button>
</header>

<slot />

<footer>Version: {appVersion}</footer>

<style>
    header {
        position: fixed;
        right: 0;
        margin-right: 5px;
        margin-top: 5px;
    }

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px; /* Smaller padding for a more compact button */
        border: none;
        border-radius: 20px; /* Pill shape */
        background-color: #4285f4; /* Google's blue */
        color: #ffffff;
        font-family: Roboto, sans-serif;
        font-size: 12px; /* Smaller font for a compact button */
        font-weight: 500;
        cursor: pointer;
        text-align: center;
        width: auto;
        overflow: hidden;
        transition: background-color 0.3s;
    }

    button:hover,
    button:focus {
        background-color: #3367d6; /* Slightly darker blue on hover */
    }

    button:active {
        background-color: #2a56c6; /* Even darker blue when active */
    }

    button img {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        height: 16px;
        width: 16px;
        border-radius: 50%; /* Make the logo a round circle */
        background-color: #ffffff; /* White background for the logo */
        padding: 2px; /* Padding inside the circle to create some space around the logo */
        margin-left: 0; /* Space between logo and text */
        transition: margin-left 0.3s;
    }

    button:hover img,
    button:focus img,
    button:active img {
        margin-left: 8px;
    }

    button span {
        white-space: nowrap;
        font-size: 12px;
        opacity: 0;
        width: 0;
        margin-left: 0;
        transition:
            auto 0.3s,
            margin-left 0.3s;
    }

    button:hover span,
    button:focus span,
    button:active span {
        opacity: 1;
        width: auto;
        margin-left: 8px;
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-left: 5px;
        margin-bottom: 5px;
        color: rgba(0, 0, 0, 0.25);
        font-size: 8pt;
        font-family: 'Foo Regular', 'Bar Sans', sans-serif;
    }
</style>
