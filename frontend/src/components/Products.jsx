import React from 'react'

export const Products = ({ products, loading }) => {

    const handleBuyNow = (productId) => {
        console.log(productId)
    }

    if (loading) {
        return <div>
            <p>Loading...</p>
        </div>
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-8">Product Catalog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map((product) => (
                        <div key={product.id} className="border rounded-lg shadow-md p-4 m-4">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-gray-600">BDT {product.price.toFixed(2)}</p>
                            <p className="mt-2 line-clamp-2">{product.description}</p>
                            <button
                                onClick={(() => handleBuyNow(product.id))}
                                className="font-semibold bg-gradient-to-r from-red-400 to-blue-500 text-white px-4 py-2 rounded mt-4">Buy Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
