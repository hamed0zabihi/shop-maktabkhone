/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'

export default function Footer() {
  const footerStyle = css`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    margin-top: 50px;
  `
  return (
    <div
      className={css`
        margin-top: 50px;
      `}
    >
      <div className={footerStyle}>
        <p>Footer</p>
      </div>
    </div>
  )
}
