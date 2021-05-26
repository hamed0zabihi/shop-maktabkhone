/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import { useRouter } from 'next/router'

export default function SingleProduct() {
  const router = useRouter()
  const { id, title, price } = router.query
  const flexContainerStyle = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    div {
      flex: 1;
      text-align: center;
    }
  `
  const priceStyle = css`
    color: grey;
    font-size: 22px;
  `
  return (
    <div>
      <div className={flexContainerStyle}>
        <div>
          <img src={`/images/${id}-400x400.jpg`} alt="Denim Jeans" />
        </div>
        <div>
          <h1>{title}</h1>
          <p className={priceStyle}>{price}</p>
          <p>sdfasd</p>
        </div>
      </div>
    </div>
  )
}
