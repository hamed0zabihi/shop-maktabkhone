import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SINGLE_PRODUCT_ACTION } from '../../redux/actions/product'
import ProductDetailsPage from '../../components/Product/ProductDetailsPage'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactLoading from 'react-loading'

export default function SingleProduct() {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  useEffect(() => {
    if (id && typeof id !== 'undefined') {
      dispatch(SINGLE_PRODUCT_ACTION(id))
    }
  }, [dispatch, id])
  const { product, isLoading, error } = useSelector((state) => state.product)

  return (
    <>
      {id && typeof id !== 'undefined' && !isLoading && Object.keys(product) ? (
        <ProductDetailsPage {...product} />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
          }}
        >
          <div>
            <ReactLoading type="spin" color="red" height={36} width={36} />
          </div>
        </div>
      )}
    </>
  )
}
