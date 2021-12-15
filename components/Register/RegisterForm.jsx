import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REGISTER_ACTION, LOGIN_ACTION } from '../../redux/actions/user'
import Link from 'next/link'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import LayoutAuth from '../Styles/LayoutAuth/LayoutAuth'
import { Input, InputEmail, InputPassword } from '../Styles/Inputs/index'
import { H2 } from '../Styles/Typography/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey,
} from '@fortawesome/free-solid-svg-icons'
import ReactLoading from 'react-loading'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const { user, isLoading, message, codeStatus } = useSelector(
    (state) => state.user
  )

  // user form value
  const [formValue, setFormValue] = useState({})
  const handleOnChange = (name, value) => {
    setFormValue({ ...formValue, [name]: value })
  }

  // check confirm password
  const [confirmPassword, setConfirmPassword] = useState('')
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e)
  }
  const isEqualPasswordsValue = () => {
    if (formValue?.password === confirmPassword) {
      return true
    } else {
      return false
    }
  }

  // submit and register
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.values(formValue).length > 2 && isEqualPasswordsValue) {
      console.log('formValue', formValue)
      await dispatch(REGISTER_ACTION(formValue))
      // await dispatch(LOGIN_ACTION(formValue))
    }
  }

  // theme
  const theme = useTheme()
  const loginClass = css`
  display: ${theme.login.display};
  justify-content: ${theme.login.justifyContent};
  align-items: ${theme.login.alignItems};
  min-height: ${theme.login.minHeight};
  background-color: ${theme.login.backgroundColor};
  border-radius: ${theme.login.borderRadius};
  color: ${theme.login.color};
 .box{background-image: url(${theme.login.box.backgroundImage});
    display: ${theme.login.box.display};
    justify-content: ${theme.login.box.justifyContent};
    align-items: ${theme.login.box.alignItems};
    align-content: ${theme.login.box.alignContent};
    width: ${theme.login.box.width};
    height: ${theme.login.box.height};
    padding: ${theme.login.box.padding};
    border-radius: ${theme.login.box.borderRadius};
    box-shadow: ${theme.login.box.boxShadow};
    background-position: ${theme.login.box.backgroundPosition};
    background-size: ${theme.login.box.backgroundSize};
    .content {
      text-align: ${theme.login.box.content.textAlign};
      h2 {
        padding: ${theme.login.box.content.h2.padding};
        font-size: ${theme.login.box.content.h2.fontSize};
        color: ${theme.login.box.content.h2.color};
        text-transform: ${theme.login.box.content.h2.textTransform};
        font-weight: ${theme.login.box.content.h2.fontWeight};
        letter-spacing: ${theme.login.box.content.h2.letterSpacing};
        span {
          color: ${theme.login.box.span.color};
        }
      }
      .login-btn {
        font-size: ${theme.login.box.loginBtn.fontSize};
        font-weight: ${theme.login.box.loginBtn.fontWeight};
        width: ${theme.login.box.loginBtn.width};
        border-radius: ${theme.login.box.loginBtn.borderRadius};
        padding: ${theme.login.box.loginBtn.padding};
        background-color: ${theme.login.box.loginBtn.backgroundColor};
        border: ${theme.login.box.loginBtn.border};
        cursor: ${theme.login.box.loginBtn.cursor};
        margin-bottom: ${theme.login.box.loginBtn.marginBottom};
        display:inline-flex;
        justify-content:center;
      }
      .new-account a {
        color: ${theme.login.box.newAccount.color};
        font-weight:  ${theme.login.box.newAccount.fontWeight};
      }
      .f-pass a {
        color:  ${theme.login.box.faPass.color};
        text-decoration:  ${theme.login.box.faPass.textDecoration};
      }
      .user-input {
        position: ${theme.login.box.userInput.position};
        i{
          position: ${theme.login.box.userInput.i.position};
          right: ${theme.login.box.userInput.i.right};
          top: ${theme.login.box.userInput.i.top};
          padding: ${theme.login.box.userInput.i.padding};
          color: ${theme.login.box.userInput.i.color};
          transition: ${theme.login.box.userInput.i.transition};
        }
      }
      .pass-input {
        position: ${theme.login.box.passInput.position};
        i {
          position: ${theme.login.box.passInput.i.position};
          right: ${theme.login.box.passInput.i.right};
          top: ${theme.login.box.passInput.i.top};
          padding: ${theme.login.box.passInput.i.padding};
          color: ${theme.login.box.passInput.i.color};
          transition: ${theme.login.box.passInput.i.transition};
        }
        #hide-1 {
          display: ${theme.login.box.hide1.display};
        }
      }
      .login-input {
        color: ${theme.login.box.loginInput.color};
        border-radius: ${theme.login.box.loginInput.borderRadius};
        width: ${theme.login.box.loginInput.width};
        height: ${theme.login.box.loginInput.height};
        border: ${theme.login.box.loginInput.border};
        padding: ${theme.login.box.loginInput.padding};
        background-color: ${theme.login.box.loginInput.backgroundColor};
        margin-bottom: ${theme.login.box.loginInput.marginBottom};
        &:focus {
          outline: ${theme.login.box.loginInput.focus.outline};
          border-bottom: ${theme.login.box.loginInput.focus.borderBottom};
          &:invalid {
            border-bottom: ${theme.login.box.loginInput.focus.invalid.borderBottom};
        }
      }

      .logo {
        position:  ${theme.login.box.logo.position};
        top:  ${theme.login.box.logo.top};
        left:  ${theme.login.box.logo.left};
        width:  ${theme.login.box.logo.width};
        padding: ${theme.login.box.logo.padding};
        display:  ${theme.login.box.logo.display};
        justify-content:  ${theme.login.box.logo.justifyContent};
        align-items:  ${theme.login.box.logo.alignItems};
      }
      .logo-img {
        position: ${theme.login.box.logoImg.position};
        width: ${theme.login.box.logoImg.width};
        height: ${theme.login.box.logoImg.height};
      }
    }
   }
  `

  return (
    <LayoutAuth>
      <div className={loginClass}>
        <div className="box">
          <div className="content">
            <H2 align="center">
              Sign<span> Up</span>
            </H2>
            {message && <p>{message}</p>}
            {codeStatus !== 0 && !user.Token && (
              <>
                <div className="forms">
                  <div className="user-input">
                    <Input
                      customCalss="login-input"
                      placeholder="name"
                      id="name"
                      required
                      onChanged={(e) => handleOnChange('name', e.target.value)}
                    />
                    <i>
                      <FontAwesomeIcon icon={faUser} />
                    </i>
                  </div>
                  <div className="user-input">
                    <InputEmail
                      customCalss="login-input"
                      placeholder="email"
                      id="email"
                      required
                      onChanged={(e) => handleOnChange('email', e.target.value)}
                    />
                    <i>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                  </div>
                  <div className="pass-input">
                    <InputPassword
                      customCalss="login-input"
                      placeholder="password"
                      id="my-password"
                      required
                      onChanged={(e) =>
                        handleOnChange('password', e.target.value)
                      }
                    />
                    <span className="eye">
                      <i id="hide-1">
                        <FontAwesomeIcon icon={faEyeSlash} />
                      </i>
                      <i id="hide-2">
                        <FontAwesomeIcon icon={faEye} />
                      </i>
                    </span>
                  </div>
                  <div className="pass-input">
                    <InputPassword
                      customCalss="login-input"
                      placeholder="confirm password"
                      id="confirm-password"
                      required
                      onChanged={(e) => handleConfirmPassword(e.target.value)}
                    />
                    <span className="eye">
                      <i id="hide-1">
                        <FontAwesomeIcon icon={faEyeSlash} />
                      </i>
                      <i id="hide-2">
                        <FontAwesomeIcon icon={faKey} />
                      </i>
                    </span>
                  </div>
                </div>
                {!isLoading ? (
                  <button
                    type="button"
                    className="login-btn"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                ) : (
                  <ReactLoading
                    type="spin"
                    color="red"
                    height={36}
                    width={36}
                    className="login-btn"
                  />
                )}

                <p className="new-account">
                  you are a member?
                  <Link href="/login">Log In</Link>
                </p>
                <br />
                <p className="f-pass">
                  <a href="/#">forgot password?</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </LayoutAuth>
  )
}

export default RegisterForm
