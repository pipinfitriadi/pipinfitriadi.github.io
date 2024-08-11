/**
 * Copyright (C) Pipin Fitriadi - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 17 July 2024
 */

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const file = fileURLToPath(new URL('package.json', import.meta.url)),
    json = readFileSync(file, 'utf8'),
    pkg = JSON.parse(json);

export default defineConfig({
    plugins: [sveltekit()],
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version)
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
