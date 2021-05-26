import { css } from '@emotion/css'

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
  const imageWidth = css`
    width: 100%;
  `
  return (
    <div>
      <div className={flexHeaderStyle}>
        <div>
          <img
            src="/images/0-1200x400.jpg"
            alt="Denim Jeans"
            className={imageWidth}
          />
        </div>
      </div>
      <div className={flexHeaderStyle}>
        <h1>contact</h1>
        <p
          className={css`
            margin: 1rem;
          `}
        >
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p
          className={css`
            margin: 1rem;
          `}
        >
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={flexContainerStyle}>
        <div />
      </div>
    </div>
  )
}
