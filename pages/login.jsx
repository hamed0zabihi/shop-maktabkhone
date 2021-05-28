/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import { Button, InputEmail, InputPassword } from '../containers/Inputs'
export default function Login() {
  const formStyle = css`
    display: flex;
    flex-direction: column;

    margin: auto 10px;
    padding: auto 5px;
    input {
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      width: 100%;
      height: 25px;
      margin-bottom: 25px;
      padding-left: 25px;
      background-botton: transparent;
      outline: none;
      color: #101010;
      -webkit-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;
      -moz-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;
      -ms-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;
      -o-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;
      box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;
      border: 1px solid #c8c8c8;
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
      color: #101010;
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
      <form className={formStyle} onSubmit={handleSubmit}>
        <label>email</label>
        <InputEmail />
        <label>password</label>
        <InputPassword />
        <Button type="submit">login</Button>
      </form>
    </LayoutAuth>
  )
}
