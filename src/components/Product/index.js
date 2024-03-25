import React from 'react'

const index = ({ products }) => {
    return (
    <ul className='list-group'>
        {products.map(product => (
            <li key={product.id} className='list-group-item'>
                {product.title}
            </li>
        ))}
    </ul>
  )
}

export default index
