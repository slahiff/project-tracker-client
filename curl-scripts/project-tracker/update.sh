curl "https://secret-chamber-24085.herokuapp.com/projects/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "project": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "status": "'"${STATUS}"'",
      "user_id": "'"${USERID}"'"
    }
  }'
