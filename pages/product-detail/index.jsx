import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductDetailPage from './ProductDetailPage'

const ProductDetail = () => {
  return (
    <div>
        <Header navBar={false} />
        <ProductDetailPage />
        <Footer />
    </div>
  )
}

export default ProductDetail