import { css } from '@emotion/css'

const Image = ({
  src = '/images/notfoundimage.png',
  alt = 'images',
  width = 'inherit',
  height = 'inherit',
  className = '',
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </>
  )
}

export default Image
