import { css } from '@emotion/css'
const Image = ({
  src = '/images/notfoundimage.png',
  alt = 'images',
  width = 'inherit',
  height = 'inherit',
}) => {
  return (
    <>
      <img src={src} alt={alt} width={width} height={height} />
    </>
  )
}

export default Image
