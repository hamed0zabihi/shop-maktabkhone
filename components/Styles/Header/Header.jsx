/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import Link from 'next/link'
import Image from 'next/image'

const ulStyle = css`
list-style-type: none;
margin: 0;
padding: 0;
color: #000;
display: flex;
flex-direction: row;

}
`

const liStyle = css`
  align-items: center;
  a {
    color: white;
    display: block;
    padding: 20px 15px;

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
    <header style={{ width: '100%', boxSizing: ' border-box' }}>
      <div
        className="container"
        style={{
          width: '100%',
          display: 'block',
          boxSizing: 'border-box',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
          }}
        >
          <div
            className="brand"
            style={{ margin: '0', padding: '0', boxSizing: ' border-box' }}
          >
            <Link href="/">
              <a className={imageCssHeader}>
                <Image
                  src="/images/logo/logo-56px.png"
                  alt="logo"
                  width="48"
                  height="48"
                />
              </a>
            </Link>
          </div>
          <div
            className="brand"
            style={{ margin: '0', padding: '0', boxSizing: ' border-box' }}
          >
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
              <li className={liStyle}>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="widget"></div>
        </div>
      </div>
    </header>
  )
}
