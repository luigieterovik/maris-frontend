export function stringToUrl(string) {
  const toLowerCase = string.toLowerCase()
  const removeAccentuation = toLowerCase
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const spaceToHyphen = removeAccentuation.replace(/\s+/g, '-')

  return spaceToHyphen
}

export function priceToFloat(priceString) {
  const replaceComma = priceString.replace(',', '.')
  const stringToFloat = parseFloat(replaceComma)

  return stringToFloat
}
