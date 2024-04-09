#!/bin/bash


# export function encodeReservedCharacters(inputString) {
#   const charactersToEncode = /[?:\\/&=+<>]/g;
#   return inputString.replace(charactersToEncode, (match) => {
#     return '%' + match.charCodeAt(0).toString(16).toUpperCase();
#   });
# }

export LANG=C.UTF-8

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


encode_reserved_characters() {

  local input_string=$1

  local characters_to_encode='[?:\\/&=+<>`#|{}[]]'

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

# Example usage:
inputString=">~RSV#Y\|V1[ja8dA*Q27?08}yS1_)e$"
encodedString=$(percent_encode "$inputString")
echo "Encoded String: $encodedString"
