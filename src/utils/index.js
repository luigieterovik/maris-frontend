import { useState } from 'react'

export function stringToUrl(string) {
  const toLowerCase = string.toLowerCase()
  const removeAccentuation = toLowerCase
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const spaceToHyphen = removeAccentuation.replace(/\s+/g, '-')

  return spaceToHyphen
}

export function categoriesState() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      image: 'offerCategory.png',
      description: 'Ofertas'
    },
    {
      id: 2,
      image: 'feminineCategory.png',
      description: 'Feminino'
    },
    {
      id: 3,
      image: 'masculineCategory.png',
      description: 'Masculino'
    },
    {
      id: 4,
      image: 'ambientCategory.png',
      description: 'Ambiente'
    }
  ])

  return { categories, setCategories }
}
