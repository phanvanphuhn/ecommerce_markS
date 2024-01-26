#!/bin/bash

encodeReservedCharacters() {
  local inputString="$1"
  local charactersToEncode='[?:\\/&=+<>]'

  echo "$inputString" | sed -E "s/$charactersToEncode/$(printf '%%%02X\n' "'\0")/g"
}

set -e

# read from SECRETS_FILE_PATH
export $(cat $SECRETS_FILE_PATH | jq -r 'to_entries | .[] | .key + "=" + (.value|tostring)')

# rename host to DB_HOST, username to POSTGRES_USER, password to POSTGRES_PASSWORD, port to DB_PORT
export DB_HOST=$host
export POSTGRES_USER=$username
export POSTGRES_PASSWORD=$(encodeReservedCharacters $password)
export DB_PORT=$port
export DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer

echo "Starting migration..."
npm run migrate:deploy

echo "Starting server..."
npm run start:prod