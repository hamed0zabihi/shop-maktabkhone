import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { css } from '@emotion/css'
import { PRODUCT_HOME_ACTION } from '../../redux/actions/product'
import { FakeDataProducts } from './FakeDataProducts'
import Cardt from '../Styles/Card/Cardt'
import ReactLoading from 'react-loading'

const HomePageProduct = () => {
  const dispatch = useDispatch()
  const FakeDataProductsGet = FakeDataProducts()
  useEffect(() => {
    dispatch(PRODUCT_HOME_ACTION())
  }, [])
  const { products, isFetching, error } = useSelector((state) => state.products)
  const containerProducts = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: 90%;
  `
  const productItem = css`
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    margin: 2em auto;
  `

  return (
    <div className={containerProducts}>
      {isFetching && (
        <ReactLoading type="spin" color="red" height={36} width={36} />
      )}
      {!isFetching &&
        products.map((el) => (
          <div key={el.id} className={productItem}>
            <Cardt
              id={el.id}
              src={el.image}
              title={el.title}
              price={el.price}
              description={el.description}
            />
          </div>
        ))}
    </div>
  )
}

export default HomePageProduct
