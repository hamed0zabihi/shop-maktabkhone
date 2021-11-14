import { css } from '@emotion/css'

const Input = ({ type = 'text', placeholder = 'please write some thing' }) => {
  const defaultCssInput = css`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `
  return (
    <>
      <input
        className={defaultCssInput}
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}
export default Input
