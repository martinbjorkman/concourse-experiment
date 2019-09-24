#!/bin/bash

# Exit immediately on error
set -e -u

pushd project
    cypress run
popd
