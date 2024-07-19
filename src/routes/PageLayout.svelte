<!-- 
Copyright (C) Pipin Fitriadi - All Rights Reserved

Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 19 July 2024
-->

<script>
    const appVersion = __APP_VERSION__;
</script>

<slot name="main" />

<footer>Version: {appVersion}</footer>

<style>
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-left: 5px;
        margin-bottom: 5px;
        color: rgba(0, 0, 0, 0.25);
        font-size: 8pt;
        font-family: 'Foo Regular', 'Bar Sans', sans-serif;
    }
</style>
