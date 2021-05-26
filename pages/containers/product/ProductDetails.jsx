/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'

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
export default function ProductDetails(props) {
  return (
    <div>
      <div className={flexContainerStyle}>
        <div>
          <img
            src="../images/0-1200x400.jpg"
            alt="Denim Jeans"
            className={imageWidth}
          />
        </div>
        <div>s</div>
      </div>
    </div>
  )
}
