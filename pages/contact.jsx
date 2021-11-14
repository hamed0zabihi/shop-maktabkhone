import { css } from '@emotion/css'
import Image from '../components/Styles/Image/Image'
import {
  Button,
  Input,
  InputEmail,
  TextArea,
} from '../components/Styles/Inputs'

export default function Contact() {
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

  const inputStyle = css`
    input,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      margin-top: 6px;
      margin-bottom: 16px;
      resize: vertical;
    }
  `
  const marginRightLeftFifteen = css`
    margin: auto 15px;
  `
  const marginAutoOneRem = css`
    margin: 1rem;
  `
  return (
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
        <h1>contact</h1>
        <div>
          <p className={marginAutoOneRem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()} className={inputStyle}>
            <label>Name</label>
            <Input />
            <label>email</label>
            <InputEmail />
            <label htmlFor="subject">Subject</label>
            <TextArea />
            <Button type="submit">submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
