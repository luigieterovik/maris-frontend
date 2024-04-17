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

export function priceToCurrency(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function offerPercentageCalculate(value, offerPercentage) {
  const valueDivision = value / 100
  const discount = valueDivision * offerPercentage
  const finalValue = value - discount

  return finalValue
}

export function installmentCalculation(price) {
  return Number((price / 12).toFixed(2))
}
