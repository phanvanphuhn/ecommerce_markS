#!/bin/bash

encodeReservedCharacters() {
  # local inputString="$1"
  # local charactersToEncode='[?:\\/&=+<>]'

  # echo "$inputString" | sed -E "s/$charactersToEncode/$(printf '%%%02X\n' "'\0")/g"
  local input_string=$1
  local characters_to_encode='[?:\\/&=+<>]'
  local match
  local encoded_string
  
  for ((i = 0; i < ${#input_string}; i++)); do
    match=${input_string:i:1}
    if [[ $match =~ $characters_to_encode ]]; then
      encoded_string+='%'
      encoded_string+=$(printf '%02X' "'$match")
    else
      encoded_string+=$match
    fi
  done
  echo "$encoded_string"
}

set -e

# read from SECRETS_FILE_PATH
export $(cat $SECRETS_FILE_PATH | jq -r 'to_entries | .[] | .key + "=" + (.value|tostring)')

# rename host to DB_HOST, username to POSTGRES_USER, password to POSTGRES_PASSWORD, port to DB_PORT
export DB_HOST=$host
export POSTGRES_USER=$username
export POSTGRES_PASSWORD=$(encodeReservedCharacters "$password")
export DB_PORT=$port
export DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer"

echo "DATABASE_URL: $DATABASE_URL"

echo "Starting migration..."
yarn migrate:deploy

echo "Starting server..."
yarn start:prod