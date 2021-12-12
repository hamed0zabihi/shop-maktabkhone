/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import Link from 'next/link'
import Image from 'next/image'

const ulStyle = css`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #000;
display:flex;
align-items:center;
justify-content:center;

}
`

const liStyle = css`
  align-items: center;
  a {
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover:not(.active) {
      background-color: #4caf50;
    }
    div {
      align-items: center;
      background-color: red;
      color: red;
    }
  }
`

const imageCssHeader = css`
  display: flex;
  items-align: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

export default function Header() {
  return (
    <div>
      <ul className={ulStyle}>
        <li className={liStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={liStyle}>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/" className={liStyle}>
            <a className={imageCssHeader}>
              <Image
                src="/images/logo/logo-56px.png"
                alt="logo"
                width="48"
                height="48"
              />
            </a>
          </Link>
        </li>
        <li className={liStyle}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={liStyle}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}
