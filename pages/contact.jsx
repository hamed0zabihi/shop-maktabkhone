import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import Image from '../components/Styles/Image/Image'
import { H1 } from '../components/Styles/Typography/index'
import ContactForm from '../components/Contact/ContactForm'

export default function Contact() {
  const theme = useTheme()
  const flexHeaderStyle = css`
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: normal;
    align-content: center;
    margin: auto;
    &:nth-child(1) {
      display: block;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      align-self: auto;
      order: 0;
      margin: auto;
    }
  `

  const marginAutoOneRem = css`
    margin: auto;
    width: 90%;
    text-align: justify;
  `

  return (
    <>
      <div>
        <div className={flexHeaderStyle}>
          <div>
            <Image
              src="/images/0-1200x400.jpg"
              alt="contact image"
              width="100%"
            />
          </div>
        </div>
        <div className={flexHeaderStyle}>
          <H1>contact</H1>
          <div>
            <p className={marginAutoOneRem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  )
}
