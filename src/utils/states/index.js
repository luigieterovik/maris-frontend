import { useState } from 'react'

export function categoriesState() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      image: 'offerCategory.png',
      name: 'Ofertas'
    },
    {
      id: 2,
      image: 'feminineCategory.png',
      name: 'Feminino'
    },
    {
      id: 3,
      image: 'masculineCategory.png',
      name: 'Masculino'
    },
    {
      id: 4,
      image: 'ambientCategory.png',
      name: 'Ambiente'
    }
  ])

  return { categories, setCategories }
}

export function productsState() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'perfume.jpg',
      name: 'Perfume 1',
      price: 142.00,
      offerPercentage: null,
      category: 'masculino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 2,
      image: 'perfume.jpg',
      name: 'Perfume 2',
      price: 142.00,
      offerPercentage: 20,
      category: 'feminino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 3,
      image: 'perfume.jpg',
      name: 'Perfume 3',
      price: 142.00,
      offerPercentage: null,
      category: 'ambiente',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 4,
      image: 'perfume.jpg',
      name: 'Perfume 4',
      price: 142.00,
      offerPercentage: 20,
      category: 'infantil',
      createdAt: '2022-04-17T14:30:00.000Z'
    },
    {
      id: 5,
      image: 'perfume.jpg',
      name: 'Perfume 5',
      price: 141.00,
      offerPercentage: null,
      category: 'masculino',
      createdAt: '2021-04-17T14:30:00.000Z'
    },
    {
      id: 6,
      image: 'perfume.jpg',
      name: 'Perfume 6',
      price: 142.00,
      offerPercentage: 20,
      category: 'masculino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 7,
      image: 'perfume.jpg',
      name: 'Perfume 7',
      price: 142.00,
      offerPercentage: null,
      category: 'feminino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 8,
      image: 'perfume.jpg',
      name: 'Perfume 8',
      price: 142.00,
      offerPercentage: 20,
      category: 'ambiente',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 9,
      image: 'perfume.jpg',
      name: 'Perfume 9',
      price: 142.00,
      offerPercentage: null,
      category: 'ambiente',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 10,
      image: 'perfume.jpg',
      name: 'Perfume 10',
      price: 142.00,
      offerPercentage: 20,
      category: 'infantil',
      createdAt: '2023-04-17T14:30:00.000Z'
    }
  ])

  return { products, setProducts }
}

export function productImagesState() {
  const [productImages, setProductImages] = useState()
}