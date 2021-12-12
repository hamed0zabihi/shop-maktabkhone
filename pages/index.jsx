import React from 'react'
import { css } from '@emotion/css'
import Space from '../components/Styles/Typography/Space'
import HomePageProduct from '../components/Product/HomePageProduct'

export default function Home() {
  const flexHeaderStyle = css`
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin: auto;
  `
  const flexContainerStyle = css`
    margin-top: 1rem;
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: normal;
    align-content: center;
    &:nth-child(1) {
      display: block;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      align-self: auto;
      order: 0;
    }
  `
  const sliderSection = css`
    display: flex;
    justify-content: center;
    align-content: center;
    img {
      height: auto;
      width: 100%;
    }
  `
  return (
    <div>
      <div className={flexHeaderStyle}>
        <div className={sliderSection}>
          <img src="/images/product/slider/slider-2.jpg" alt="slider" />
        </div>
      </div>
      <Space />
      <Space />
      <Space />

      <div className={flexContainerStyle}>
        <HomePageProduct />
      </div>
    </div>
  )
}
