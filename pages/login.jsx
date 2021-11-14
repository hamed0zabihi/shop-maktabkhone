/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import LayoutAuth from '../components/Styles/LayoutAuth/LayoutAuth'
import {
  Button,
  InputEmail,
  InputPassword,
  FormControl,
} from '../components/Styles/Inputs'
import { H1, Space } from '../components/Styles/Typography/index'
export default function Login() {
  const formStyle = css`
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
    padding: auto 5px;
    input {
      &:focus {
        -webkit-box-shadow: 0 0 2px #ed1c24 inset;
        -moz-box-shadow: 0 0 2px #ed1c24 inset;
        -ms-box-shadow: 0 0 2px #ed1c24 inset;
        -o-box-shadow: 0 0 2px #ed1c24 inset;
        box-shadow: 0 0 2px #ed1c24 inset;
        background-color: #fff;
        border: 1px solid #ed1c24;
        outline: none;
      }
    }
    button {
      width: auto;
      outline: none;
      border-radius: 5px;

      padding: 5px;
    }
    label {
      margin: 5px 0;
    }
  `
  const handleSubmit = (e) => {
    console.log('handleSUBMIT')
    e.preventDefault()
  }
  return (
    <LayoutAuth>
      <Space />
      <H1>Login</H1>
      <form className={formStyle} onSubmit={handleSubmit}>
        <label>email</label>
        <FormControl>
          <InputEmail />
        </FormControl>
        <label>password</label>
        <FormControl>
          <InputPassword />
        </FormControl>
        <Space />
        <Button type="submit">login</Button>
      </form>
    </LayoutAuth>
  )
}
