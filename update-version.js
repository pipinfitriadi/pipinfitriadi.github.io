/**
 * Copyright (C) Pipin Fitriadi - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 17 July 2024
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

try {
    // Get the latest tag from Git
    const latestTag = execSync('git describe --tags $(git rev-list --tags --max-count=1)')
        .toString()
        .trim();

    if (!latestTag) {
        console.error('No tags found in the repository.');
        process.exit(1);
    }

    // Validate and ensure the tag format is semantic versioning
    const semverRegex = '^v?(\\d+\\.\\d+\\.\\d+(-[\\w\\.]+)?)$';
    const match = latestTag.match(semverRegex);

    if (!match) {
        console.error('Latest tag is not a valid semantic version.');
        process.exit(1);
    }

    const version = match[1];

    // Get __dirname equivalent in ES modules
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Read package.json
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    // Update version
    packageJson.version = version;

    // Write updated package.json back to file with a newline at the end
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

    console.log(`Updated package.json to version ${version}`);
} catch (error) {
    console.error('Error updating version:', error.message);
    process.exit(1);
}
