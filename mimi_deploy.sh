#!/bin/bash

source .env

npm run mimiBuild
cd public/ && zip -r ../mimi.zip * && cd ..
scp mimi.zip mshen@mimi.cs.mcgill.ca:~/public_html
rm mimi.zip
curl https://cs.mcgill.ca/~mshen/cgi-bin/rebuild.cgi?$SECRET_KEY
