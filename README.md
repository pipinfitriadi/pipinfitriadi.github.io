<!-- 
Copyright (C) Pipin Fitriadi - All Rights Reserved

Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 17 July 2024
-->

# Create Svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Step-by-Step Guide to Setting Up Project-Specific Git Hooks

By setting up a custom Git hooks directory within your project and configuring Git to use it, you can ensure that your hooks are project-specific and managed within your version control system. This setup allows you to automate the process of running `npm run update-version` whenever you finish a `git flow hotfix` or `git flow release`, ensuring your versioning is always up to date without requiring manual intervention.

1. Make the scripts executable:

    ```bash
    chmod +x .githooks/post-tag.sh
    chmod +x gitflow-finish.sh
    ```

2. Use the Custom Script:

    Instead of using `git flow release finish` or `git flow hotfix finish`, use your custom script to finish the release and trigger the post-tag actions

    ```bash
    ./gitflow-finish.sh <gitflowName> <version>
    ```

3. Verify the Hooks

    When you finish a hotfix or release using step-2, the `npm run update-version` command should now run automatically.

    **Example Workflow**

    Finishing a Hotfix

    1. Start a hotfix:

        ```bash
        git flow hotfix start <version>
        ```

    2. Make changes and commit:

        ```bash
        git commit -am "Hotfix changes"
        ```

    3. Finish the hotfix:

        ```bash
        ./gitflow-finish.sh hotfix <version>
        ```

        The `.githooks/post-tag.sh` hook will automatically trigger `npm run update-version`.

    Finishing a Release

    1. Start a release:

        ```bash
        git flow release start <version>
        ```

    2. Make changes and commit:

        ```bash
        git commit -am "Release changes"
        ```

    3. Finish the release:

        ```bash
        ./gitflow-finish.sh release <version>
        ```

        The `.githooks/post-tag.sh` hook will automatically trigger `npm run update-version`.
