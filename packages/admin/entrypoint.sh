#!/bin/bash

percent_encode() {
  local string="$1"
  local encoded=""
  local char

  for ((i = 0; i < ${#string}; i++)); do
    char="${string:$i:1}"
    case "$char" in
      [a-zA-Z0-9.~_\(\)\$\*-]) encoded+="$char" ;;
      *) printf -v char_encoded '%%%02X' "'$char"
         encoded+="$char_encoded" ;;
    esac
  done

  echo "$encoded"
}

set -e

# read from SECRETS_FILE_PATH
export $(cat $SECRETS_FILE_PATH | jq -r 'to_entries | .[] | .key + "=" + (.value|tostring)')

# rename host to DB_HOST, username to POSTGRES_USER, password to POSTGRES_PASSWORD, port to DB_PORT
export DB_HOST=$host
export POSTGRES_USER=$username
export POSTGRES_PASSWORD=$(percent_encode "$password")
export DB_PORT=$port
export DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer"

echo "DATABASE_URL: $DATABASE_URL"

echo "Starting server..."
yarn start:prod