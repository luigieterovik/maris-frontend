import { useState, useEffect } from 'react'
import api from '../../services/api'

export function categoriesState() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/categories')
        console.log('Fetched categories data:', response.data)
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories data:', error)
      }
    }

    fetchCategories()
  }, [])

  return { categories, setCategories }
}

export function productsState() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/catalog')
        console.log('Fetched products data: ', response.data)
        setProducts(response.data)
      } catch (error) {
        console.log('Error fetching products data: ', error)
      }
    }

    fetchProducts()
  }, [])

  return { products, setProducts }
}

export function productImagesState() {
  const [productImages, setProductImages] = useState([
    {
      productId: 1,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 2,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 3,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 4,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 5,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 6,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 7,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 8,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 9,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    },
    {
      productId: 10,
      images: ['6.png', '6.png', '6.png', '6.png', '6.png']
    }
  ])

  return { productImages, setProductImages }
}

export function ordersState() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: 'perfume.jpg',
      productId: 1,
      name: 'Perfume A',
      price: 1.0,
      quantity: 1,
      total: 100.0,
      offerPercentage: null,
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 2,
      image: 'perfume.jpg',
      name: 'Perfume B',
      productId: 2,
      price: 1.0,
      quantity: 1,
      total: 50.0,
      offerPercentage: null,
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 3,
      image: 'perfume.jpg',
      name: 'Perfume C',
      productId: 3,
      price: 1.0,
      quantity: 1,
      total: 150.0,
      offerPercentage: null,
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 4,
      image: 'perfume.jpg',
      name: 'Perfume D',
      productId: 4,
      price: 1.0,
      quantity: 1,
      total: 200.0,
      offerPercentage: null,
      createdAt: '2023-04-17T14:30:00.000Z'
    }
  ])

  return { orders, setOrders }
}
