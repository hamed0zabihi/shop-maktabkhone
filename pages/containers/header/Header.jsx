/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import Link from 'next/link'

const ulStyle = css`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;

}
`

const liStyle = css`
float: left;
a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover:not(.active){
    background-color: #4CAF50;
  }
`

// const activeStyle = css`
//   float: right;
// `
// const lastAnchor = css`
//   color: red;
//   a {
//     background-color: red !important;
//   }
// `
export default function Header() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <ul className={ulStyle}>
        <li className={liStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={liStyle}>
          <Link href="/about">About</Link>
        </li>
        <li className={liStyle}>
          <Link href="/contact">Contact</Link>
        </li>
        {/* <li className={liStyle}>
          <Link className={lastAnchor} href="/">
            Home
          </Link>
        </li> */}
      </ul>
    </div>
  )
}
