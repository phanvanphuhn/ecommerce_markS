export function encodeReservedCharacters(inputString) {
  const charactersToEncode = /[?:\\/&=+<>]/g;
  return inputString.replace(charactersToEncode, (match) => {
    return '%' + match.charCodeAt(0).toString(16).toUpperCase();
  });
}
