import { css } from '@emotion/css'
import { useRouter } from 'next/router'
import Image from '../../containers/Image/Image'

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
          <Image src={`/images/${id}-400x400.jpg`} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <p className={priceStyle}>{price}</p>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}
