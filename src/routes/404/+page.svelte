<!-- 
Copyright (C) Pipin Fitriadi - All Rights Reserved

Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 19 July 2024
-->

<script>
    import PageLayout from './../PageLayout.svelte';

    export let title = 'Not Found';
</script>

<svelte:head>
    <title>{title}</title>
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Arvo" />
</svelte:head>

<PageLayout>
    <section slot="main" class="page_404">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-10 col-sm-offset-1 text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center">{title}</h1>
                        </div>
                        <div class="contant_box_404">
                            <h3 class="h2">Look like you're lost</h3>
                            <p>the page you are looking for not avaible!</p>
                            <a href="/" class="link_404">
                                Go to <img src="/logo.svg" alt="VOXROW" title="VOXROW" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</PageLayout>

<style>
    /*================================================================
        404 page
        https://codepen.io/Navedkhan012/pen/vrWQMY
    =================================================================*/

    .page_404 {
        padding: 40px 0;
        background: #fff;
        font-family: 'Arvo', serif;
    }

    /* .page_404 img {
        width: 100%;
    } */

    .four_zero_four_bg {
        background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        height: 400px;
        background-position: center;
    }

    .four_zero_four_bg h1 {
        font-size: 80px;
        text-shadow:
            #fff 0px 0px 2px,
            #fff 0px 0px 2px,
            #fff 0px 0px 2px,
            #fff 0px 0px 2px,
            #fff 0px 0px 2px,
            #fff 0px 0px 2px;
    }

    /* .four_zero_four_bg h3 {
        font-size: 80px;
    } */

    .link_404 {
        color: #fff !important;
        padding: 10px 20px;
        background: #39ac31;
        border-color: #39ac31;
        border-style: solid;
        border-width: thin;
        margin: 20px 0;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
    }

    .link_404:hover {
        color: #39ac31 !important;
        background: #fff;
    }

    .link_404 img {
        vertical-align: middle;
        max-height: 30pt;
        margin-left: 3px;
        filter: brightness(0) invert(1);
    }

    .link_404:hover img {
        filter: none;
    }

    .contant_box_404 {
        margin-top: -50px;
    }
</style>
