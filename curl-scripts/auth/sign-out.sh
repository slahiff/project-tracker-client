#!/bin/bash

curl "https://secret-chamber-24085.herokuapp.com/" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
