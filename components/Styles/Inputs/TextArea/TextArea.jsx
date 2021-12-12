import { css } from '@emotion/css'

const defaultCssTextArea = css`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 2;
  color: #fff;
  border: none;
  margin-top: 6px;
  margin-bottom: 16px;
  background-color: rgba(65, 65, 65, 0.5);
  background-clip: padding-box;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-bottom: 2px solid #ffce00;
  }

  &:focus:valid {
    border-bottom: 2px solid green;
  }
`
const TextArea = ({
  rows = 'inherit',
  cols = 'inherit',
  placeholder = 'please write some thing',
  id = '',
  customCalss = '',
  required = '',
}) => {
  return (
    <>
      <textarea
        rows={rows}
        cols={cols}
        className={customCalss.length > 1 ? customCalss : defaultCssTextArea}
        placeholder={placeholder}
        id={id}
        required={required}
      />
    </>
  )
}

export default TextArea
