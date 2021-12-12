/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import Link from 'next/link'
import Image from '../Image/Image'

export default function Cardt({ id, src, title, price, description }) {
  const card = css`
    position: relative;
    width: 320px;
    height: 480px;
    background: #191919;
    border-radius: 20px;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      width: 100%;
      height: 100%;
      background: #ffce00;
      transform: skewY(345deg);
      transition: 0.5s;
    }
    &:hover::before {
      top: -70%;
      transform: skewY(390deg);
    }
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      font-weight: 600;
      font-size: 6em;
      color: rgba(0, 0, 0, 0.1);
    }
    .imgBox {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      z-index: 1;
    }
    .contentBox {
      position: relative;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 2;
    }
    .contentBox h3 {
      font-size: 18px;
      color: white;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .contentBox .price {
      font-size: 24px;
      color: white;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .contentBox .buy {
      position: relative;
      top: 100px;
      opacity: 0;
      padding: 10px 30px;
      margin-top: 5px;
      color: #000000;
      text-decoration: none;
      background: #ffce00;
      border-radius: 30px;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: 0.5s;
    }
    &:hover .contentBox .buy {
      top: 0;
      opacity: 1;
    }
  `
  const mouse = css`
    height: 300px;
    width: auto;
  `

  return (
    <div>
      <div className={card}>
        <div className="imgBox">
          <Image src={src} alt="mouse corsair" className={mouse} />
        </div>

        <div className="contentBox">
          <h3>{title}</h3>
          <h2 className="price">{price}</h2>
          <Link href={`/product/${encodeURIComponent(id)}`}>
            <a className="buy">Details</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
