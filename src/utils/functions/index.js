import api from '../../services/api'

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
  const parsedValue = parseFloat(value)

  const valueDivision = parsedValue / 100
  const discount = valueDivision * offerPercentage
  const finalValue = parsedValue - discount

  return finalValue
}

export function installmentCalculation(price) {
  return Number((price / 12).toFixed(2))
}

export function navigateToSearch(navigate, inputRef) {
  navigate(`/search/?q=${inputRef.current.value.trim()}`)
  inputRef.current.value = ''
}

export function searchOnProducts(string, productsArray) {
  const stringLowerCase = string.toLowerCase()

  const produtosSimilares = productsArray.filter(product => {
    const nomeLowerCase = product.name.toLowerCase()
    return nomeLowerCase.includes(stringLowerCase)
  })

  return produtosSimilares
}

export async function validateToken(token) {
  const storedUserToken = JSON.parse(
    localStorage.getItem('marisboutiks:userData').token
  )

  console.log(storedUserToken)

  if (!storedUserToken) return false

  try {
    const response = await api.post('/validate-token', {
      token
    })

    console.log(response)

    if (!response.data.valid) {
      localStorage.removeItem('marisboutiks:userData')
      return false
    }

    return true
  } catch (error) {
    console.error('Error validating token:', error)
    return false
  }
}

export async function validateAndRedirect(navigate, token) {
  try {
    const isValid = await validateToken(token)

    if (!isValid) {
      navigate('/account/login/continue')
    }
  } catch (error) {
    console.error('Error checking token validity:', error)
    navigate('/account/login/continue')
  }
}
