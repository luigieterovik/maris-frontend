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
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'perfume.jpg',
      name: 'Perfume 1',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 0.5,
      offerPercentage: null,
      category: 'masculino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 2,
      image: 'perfume.jpg',
      name: 'Perfume 2',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 142.0,
      offerPercentage: 20,
      category: 'feminino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 3,
      image: 'perfume.jpg',
      name: 'Perfume 3',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 1.0,
      offerPercentage: null,
      category: 'ambiente',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 4,
      image: 'perfume.jpg',
      name: 'Perfume 4',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 142.0,
      offerPercentage: 20,
      category: 'infantil',
      createdAt: '2022-04-17T14:30:00.000Z'
    },
    {
      id: 5,
      image: 'perfume.jpg',
      name: 'Perfume 5',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 141.0,
      offerPercentage: null,
      category: 'masculino',
      createdAt: '2021-04-17T14:30:00.000Z'
    },
    {
      id: 6,
      image: 'perfume.jpg',
      name: 'Perfume 6',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 142.0,
      offerPercentage: 20,
      category: 'masculino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 7,
      image: 'perfume.jpg',
      name: 'Perfume 7',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 142.0,
      offerPercentage: null,
      category: 'feminino',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 8,
      image: 'perfume.jpg',
      name: 'Perfume 8',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 142.0,
      offerPercentage: 20,
      category: 'ambiente',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 9,
      image: 'perfume.jpg',
      name: 'Perfume 9',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 142.0,
      offerPercentage: null,
      category: 'ambiente',
      createdAt: '2023-04-17T14:30:00.000Z'
    },
    {
      id: 10,
      image: 'perfume.jpg',
      name: 'Perfume 10',
      description:
        'Conheça Purple Lady. O feminino oriental de Pascal Morabito. O perfume ideal para mulheres apaixonadas e cheias de si. Purple lady começa com aromas de café acompanhados de pêssego e limão. O coração de flores brancas inclui jasmim e flor de laranjeira. No rastro, as notas orientais de baunilha se misturam com as tonalidades de patchouli.',
      price: 142.0,
      offerPercentage: 20,
      category: 'infantil',
      createdAt: '2023-04-17T14:30:00.000Z'
    }
  ])

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
