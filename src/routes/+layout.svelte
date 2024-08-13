<!-- 
Copyright (C) Pipin Fitriadi - All Rights Reserved

Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 19 July 2024
-->

<script lang="ts">
    import { parse, serialize } from 'cookie';
    import { onMount } from 'svelte';

    const appVersion = __APP_VERSION__;
    let email: string, name: string, picture: string;

    function parseJwt(token: string) {
        try {
            const base64Url = token.split('.')[1],
                base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'),
                jsonPayload = decodeURIComponent(
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

    function loginSuccess(token: string) {
        const decodedToken = parseJwt(token);

        email = decodedToken.email;
        name = decodedToken.name;
        picture = decodedToken.picture;

        return new Date(decodedToken.exp * 1e3);
    }

    function callbackGIS(response: { credential: string }) {
        const googleToken = response.credential;

        document.cookie = serialize('googleToken', googleToken, {
            path: '/',
            httpOnly: false, // set to true if you don't want client-side access
            expires: loginSuccess(googleToken),
            sameSite: 'strict',
            secure: true // Only sent over HTTPS
        });
    }

    // Function to re-trigger the Google One Tap prompt (for account switching)
    function switchAccount() {
        if (typeof window !== 'undefined') {
            if (window.google) {
                window.google.accounts.id.prompt(); // Re-trigger the One Tap prompt
            }
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('load', () => {
                if (window.google) {
                    window.google.accounts.id.initialize({
                        client_id:
                            '1084721860548-vnjs2l4cifur6b4b072gldcoiev6uu1f.apps.googleusercontent.com',
                        auto_select: true,
                        callback: callbackGIS,
                        cancel_on_tap_outside: false,
                        skip_prompt_cookie: 'googleToken',
                        state_cookie_domain: 'voxrow.com',
                        context: 'use',
                        itp_support: true,
                        use_fedcm_for_prompt: true
                    });
                }
            });
        }

        // Access the stored token
        const googleToken = parse(document.cookie)['googleToken'];

        if (!googleToken) {
            email = '';
            name = 'Continue with Google';
            picture = 'https://developers.google.com/identity/images/g-logo.png';

            window.addEventListener('load', () => {
                switchAccount();
            });
        } else {
            loginSuccess(googleToken);
        }
    });
</script>

<svelte:head>
    <!-- Google Identity Services (GIS) -->
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<header>
    <button on:click={switchAccount}>
        <span>
            {name}
            <dfn>{email}</dfn>
        </span>
        <img src={picture} alt="🤡" />
    </button>
</header>

<slot />

<footer>Version: {appVersion}</footer>

<style>
    header {
        z-index: 1;
        position: fixed;
        right: 0;
        margin-right: 5px;
        margin-top: 5px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px; /** Smaller padding for a more compact button */
        height: 20px;
        border: none;
        border-radius: 10px; /** Pill shape */
        color: #ffffff;
        font-family: 'Google Sans', Roboto, arial, sans-serif;
        font-size: 11px; /** Smaller font for a compact button */
        font-weight: 300;
        letter-spacing: 0.3px;
        cursor: pointer;
        text-align: center;
        width: auto;
        background-color: #1a73e8; /** Google's blue */
        transition: background-color 0.3s;
    }

    button:active {
        background-color: #5195ee;
    }

    button img {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        height: 16px;
        width: 16px;
        line-height: 18px;
        border-radius: 50%; /** Make the logo a round circle */
        background-color: #ffffff; /** White background for the logo */
        margin-left: 0; /** Space between logo and text */
        transition: margin-left 0.3s;
    }

    button:hover img,
    button:focus img,
    button:active img {
        margin-left: 8px;
    }

    button span {
        line-height: normal;
        text-align: right;
        white-space: nowrap;
        margin-left: 0;
        width: 0;
        opacity: 0;
        transition:
            margin-left 0.3s,
            width 0.3s;
    }

    button:hover span,
    button:focus span,
    button:active span {
        margin-left: 8px;
        width: auto;
        opacity: 1;
    }

    button span:has(dfn:not(:empty)) {
        font-size: 9px;
    }

    button span dfn {
        font-size: 6px;
        display: block;
        opacity: 0.75;
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
        color: rgba(0, 0, 0, 0.25);
        font-size: 8pt;
        font-family: 'Foo Regular', 'Bar Sans', sans-serif;
    }
</style>
