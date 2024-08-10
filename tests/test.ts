/**
 * Copyright (C) Pipin Fitriadi - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 19 July 2024
 */

import { expect, test } from '@playwright/test';

test('home page has expected img', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('img')).toBeVisible();
});
