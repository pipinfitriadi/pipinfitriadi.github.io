#!/bin/bash

# Copyright (C) Pipin Fitriadi - All Rights Reserved

# Unauthorized copying of this file, via any medium is strictly prohibited
# Proprietary and confidential
# Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 18 July 2024

gitflowName=$1
version=$2

if [ -z "$version" ]; then
  echo "Usage: gitflow-finish <gitflowName> <version>"
  exit 1
fi

if [ -z "$version" ]; then
  echo "Usage: gitflow-finish <gitflowName> <version>"
  exit 1
fi

# Finish the hotfix or release
git flow "$gitflowName" "$version"

# Check if the hotfix or release finish was successful
if [ $? -eq 0 ]; then
  # Run the post-tag script
  ./.githooks/post-tag.sh
else
  echo "Gitflow $gitflowName finish failed. Post-tag script not executed."
fi
