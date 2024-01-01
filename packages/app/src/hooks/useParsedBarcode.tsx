export function parseGS1Barcode(barcode: string) {
  const parsedData = {};

  // Define a mapping of Application Identifiers (AIs) to their lengths
  const aiLengths = {
    '01': 14, // GTIN (Global Trade Item Number)
    '17': 6, // Expiration Date
    // Add more AIs as needed
  };

  while (barcode.length > 0) {
    let foundAI = false;

    // Check each AI to see if it matches the beginning of the barcode
    for (const ai in aiLengths) {
      if (barcode.startsWith(ai)) {
        foundAI = true;
        const aiLength = aiLengths[ai];
        const value = barcode.substring(ai.length, ai.length + aiLength);
        parsedData[ai] = value;
        // Move to the next part of the barcode
        barcode = barcode.substring(ai.length + aiLength);
        break;
      }
    }

    // If no AI is found, break the loop
    if (!foundAI) {
      break;
    }
  }

  return parsedData;
}
