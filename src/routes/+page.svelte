<!-- 
Copyright (C) Pipin Fitriadi - All Rights Reserved

Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 17 July 2024
-->

<svelte:head>
    <title>VOXROW</title>
</svelte:head>

<div class="voxrow">
    <img src="/logo.svg" alt="VOXROW" title="VOXROW" />
</div>

<style>
    .voxrow {
        background-color: rgba(255, 255, 255, .75);
    }

    .voxrow > img {
        /* Style Alternative Text */
        -webkit-background-clip: text;
        background-clip: text;
        font-style: italic;
        font-family: "Foo Regular", "Bar Sans", sans-serif;
        font-size: 60pt;
        text-transform: uppercase;
        /*
        New line in text area
        https://stackoverflow.com/questions/8627902/new-line-in-text-area
        */
        text-align: center;
        white-space: pre-wrap;
        /*
        How do I vertically center text with CSS? [duplicate]
        https://stackoverflow.com/questions/8865458/how-do-i-vertically-center-text-with-css
        */
        display: flex;
        justify-content: center;
        align-items: center;
        /*
        Gradient text color
        https://stackoverflow.com/questions/37831837/gradient-text-color
        CSS Gradients
        https://www.w3schools.com/css/css3_gradients.asp
        */
        background-image: -webkit-radial-gradient(
            closest-side at 60% 55%,
            #ADCC36,
            #1790D4,
            #971497,
            #97040C,
            #FC6621,
            #FECB2F
        ); /* For Chrome and Safari */
        background-image: -moz-radial-gradient(
            closest-side at 60% 55%,
            #ADCC36,
            #1790D4,
            #971497,
            #97040C,
            #FC6621,
            #FECB2F
        ); /* For old Fx (3.6 to 15) */
        background-image: -ms-radial-gradient(
            closest-side at 60% 55%,
            #ADCC36,
            #1790D4,
            #971497,
            #97040C,
            #FC6621,
            #FECB2F
        ); /* For pre-releases of IE 10*/
        background-image: -o-radial-gradient(
            closest-side at 60% 55%,
            #ADCC36,
            #1790D4,
            #971497,
            #97040C,
            #FC6621,
            #FECB2F
        ); /* For old Opera (11.1 to 12.0) */
        background-image: radial-gradient(
            closest-side at 60% 55%,
            #ADCC36,
            #1790D4,
            #971497,
            #97040C,
            #FC6621,
            #FECB2F
        ); /* Standard syntax; must be last */
        color: transparent;

        /* 
        True Center Vertical and Horizontal CSS Div [duplicate]
        https://stackoverflow.com/questions/14189625/true-center-vertical-and-horizontal-css-div
        */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;

        /*
        SVG drop shadow using css3
        https://stackoverflow.com/questions/6088409/svg-drop-shadow-using-css3
        */
        -webkit-filter: drop-shadow(
            0 0 5px rgba(255, 255, 255, .75)
        );
        filter: drop-shadow(
            0 0 5px rgba(255, 255, 255, .75)
        );
    }
</style>
