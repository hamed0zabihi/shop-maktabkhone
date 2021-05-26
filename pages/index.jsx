/* eslint-disable react/react-in-jsx-scope */
import { css } from '@emotion/css'
import Card from './containers/card/Card'

export default function Home() {
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
            src="/images/0-800x400.jpg"
            alt="Denim Jeans"
            className={imageWidth}
          />
        </div>
        <div>
          <div>
            <img src="/images/1-400x400.jpg" alt="Denim Jeans" />
          </div>
        </div>
      </div>
      <div className={flexHeaderStyle}>
        <img src="/images/1200x90.png" alt="Denim Jeans" />
      </div>
      <div className={flexContainerStyle}>
        <div>
          <Card
            id="237"
            src="/images/237-200x125.jpg"
            title="Bushwack"
            price="$19.99"
            description="a fictional hound dog created by Belgian comics.."
          />
        </div>
        <div>
          <Card
            id="111"
            src="/images/111-200x125.jpg"
            title="Fiat"
            price="$220"
            description="Year founded: 1899. Founder: Giovanni Agnelli.."
          />
        </div>
        <div>
          <Card
            id="119"
            src="/images/119-200x125.jpg"
            title="IPHON 11"
            price="$30"
            description="echnical Specifications · Liquid Retina HD display.."
          />
        </div>
        <div>
          <Card
            id="133"
            src="/images/133-200x125.jpg"
            title="Opel"
            price="$200"
            description="Opel Automobile GmbH. Year founded: 1862..."
          />
        </div>
      </div>
    </div>
  )
}
