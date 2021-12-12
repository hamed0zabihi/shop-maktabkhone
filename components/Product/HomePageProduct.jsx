import React from 'react'
import { css } from '@emotion/css'
import { FakeDataProducts } from './FakeDataProducts'
import Cardt from '../Styles/Card/Cardt'

const HomePageProduct = () => {
  const FakeDataProductsGet = FakeDataProducts()

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
      {FakeDataProductsGet.map((el) => (
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
