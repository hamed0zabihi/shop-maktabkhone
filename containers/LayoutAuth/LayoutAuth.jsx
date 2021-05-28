/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'

const LayoutAuth = ({ children }) => {
  const flexStyle = css`
    margin: 0;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
  return <div className={flexStyle}>{children}</div>
}

export default LayoutAuth
