/**
 * Copyright (C) Pipin Fitriadi - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 17 July 2024
 */

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    interface Window {
        google: {
            accounts: {
                id: {
                    initialize: (object) => void;
                    prompt: () => void;
                };
            };
        };
    }

    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    declare const __APP_VERSION__: string;
}

export {};
