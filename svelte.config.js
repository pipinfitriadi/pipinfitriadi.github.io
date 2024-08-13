/**
 * Copyright (C) Pipin Fitriadi - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 17 July 2024
 */

import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

export default {
    preprocess: sveltePreprocess({
        typescript: true
    }),
    kit: { adapter: adapter() }
};
