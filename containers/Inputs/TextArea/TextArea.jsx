import { css } from '@emotion/css'
const TextArea = ({ rows = 'inherit', cols = 'inherit' }) => {
  return (
    <>
      <textarea rows={rows} cols={cols} />
    </>
  )
}

export default TextArea
