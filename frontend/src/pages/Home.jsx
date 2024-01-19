import React, { useEffect, useState } from 'react'
import { Products } from '../components/Products'

export const Home = () => {

    const [products, setProducts] =useState([])
    const [loading, setLoading] =useState(false);
    console.log(products)

    useEffect(() => {
        setLoading(true)
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        .then(() => setLoading(false))
        .catch(err => console.log(err))
    }, [])
  return (
    <>
    <Products products={products} loading={loading} />
    </>
  )
}
