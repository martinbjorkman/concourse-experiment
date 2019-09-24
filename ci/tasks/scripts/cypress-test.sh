#!/bin/bash

# Exit immediately on error
set -e -u

pushd project
    npm i
    cypress run
popd
