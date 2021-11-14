/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import Link from 'next/link'
import Image from '../Image/Image'

export default function Card({ id, src, title, price, description }) {
  const imageWidth = css`
    width: 100%;
  `
  const card = css`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    button {
      border: none;
      outline: 0;
      padding: 12px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
      &:hover {
        opacity: 0.7;
      }
    }
  `

  const priceStyle = css`
    color: grey;
    font-size: 22px;
  `
  return (
    <div className={card}>
      <Image src={src} alt={title} width="100%" />
      <h1>{title}</h1>
      <p className={priceStyle}>{price}</p>
      <p>{description}</p>
      <p>
        <Link
          href={`/product/${encodeURIComponent(
            id
          )}?title=${title}&price=${price}`}
        >
          <button>Details</button>
        </Link>
      </p>
    </div>
  )
}
