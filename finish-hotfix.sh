#!/bin/bash

# Copyright (C) Pipin Fitriadi - All Rights Reserved

# Unauthorized copying of this file, via any medium is strictly prohibited
# Proprietary and confidential
# Written by Pipin Fitriadi <pipinfitriadi@gmail.com>, 18 July 2024

version=$1

if [ -z "$version" ]; then
  echo "Usage: finish-hotfix <version>"
  exit 1
fi

# Finish the hotfix
git flow hotfix finish "$version"

# Check if the hotfix finish was successful
if [ $? -eq 0 ]; then
  # Run the post-tag script
  ./.githooks/post-tag.sh
else
  echo "Hotfix finish failed. Post-tag script not executed."
fi
