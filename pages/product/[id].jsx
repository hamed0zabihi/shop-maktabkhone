import React from 'react'
import { useRouter } from 'next/router'
import { FakeDataProducts } from '../../components/Product/FakeDataProducts'
import ProductDetailsPage from '../../components/Product/ProductDetailsPage'

export default function SingleProduct() {
  const router = useRouter()
  const { id } = router.query
  const datas = FakeDataProducts()
  const filteredData = datas.filter((el) => el.id === parseInt(id, 10))

  return (
    <>
      {filteredData?.length ? (
        <ProductDetailsPage {...(filteredData[0] || {})} />
      ) : (
        'loading'
      )}
    </>
  )
}
