#!/bin/bash


# export function encodeReservedCharacters(inputString) {
#   const charactersToEncode = /[?:\\/&=+<>]/g;
#   return inputString.replace(charactersToEncode, (match) => {
#     return '%' + match.charCodeAt(0).toString(16).toUpperCase();
#   });
# }

export LANG=C.UTF-8

encode_reserved_characters() {

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

# Example usage:
inputString="E^*y,p\`*gE2M*v>|Gpu5?7nDIOi0)>|]"
encodedString=$(encode_reserved_characters "$inputString")
echo "Encoded String: $encodedString"
