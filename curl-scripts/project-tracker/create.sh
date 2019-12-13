curl "https://secret-chamber-24085.herokuapp.com/projects" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "project": {
    "name": "'"${NAME}"'",
    "description": "'"${DESCRIPTION}"'",
    "status": "'"${STATUS}"'",
    "user_id": "'"${USERID}"'"  }
}'

echo
