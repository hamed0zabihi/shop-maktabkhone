import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART_ACTION } from '../../redux/actions/cart'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { keyframes } from '@emotion/react'
import Image from '../Styles/Image/Image'

const ProductDetailsPage = (product) => {
  const {
    title = 'title',
    image = '/images/product/01-shoes.png',
    price = '100000000',
    description = 'In addition to the Nike WMNS Air Force 1 Shadow Sisterhood in the Orange and White colorway, another colorway has surfaced in a much more colorful rendition. This double-layered women’s colorway of the Nike Air Force 1 gets hit with a mix of smooth and tumbled leather construction all over the upper in hues that include black, gold, light purple, and a couple of shades of red. Highlights of this colorway include gold “Sister” lace dubraes and “We Ride Together” printed on the insoles with a dice hanging from Swooshe',
    imageGallery = [
      '/images/product/p-01-01.png',
      '/images/product/p-01-02.png',
      '/images/product/p-01-03.png',
    ],
    inventory = 1,
    id = 1,
  } = product
  const dispatch = useDispatch()

  // increase and decrease product
  const [numberOfProduct, setNumberOfProduct] = useState(1)
  const handleIncDecProduct = (type) => {
    if (type === 'inc' && numberOfProduct < inventory) {
      return setNumberOfProduct(numberOfProduct + 1)
    } else if (type === 'dec' && numberOfProduct > 1) {
      return setNumberOfProduct(numberOfProduct - 1)
    }
  }
  // check product is exist in cart or not
  const cart = useSelector((state) => state.cart)
  const isExistProductToCart = cart.find((el) => el.id === id)
  // add to cart
  const [addClassAnimation, setAddClassAnimation] =
    useState('add-to-cart-button')

  const handleClickAddToCard = async () => {
    !isExistProductToCart
      ? await dispatch(ADD_TO_CART_ACTION(product, numberOfProduct))
      : ''
    setAddClassAnimation('add-to-cart-button added')
    setTimeout(() => {
      setAddClassAnimation('add-to-cart-button')
    }, 2000)
  }

  // theme
  const theme = useTheme()
  const colorFont = `${theme.productDetailsPage.colors.colorFont}`
  const bgSliderTwo = `${theme.productDetailsPage.colors.bgSliderTwo}`
  const bgSliderOne = `${theme.productDetailsPage.colors.bgSliderOne}`
  const bgDotSlider = `${theme.productDetailsPage.colors.bgDotSlider}`
  const bgDotSliderActive = `${theme.productDetailsPage.colors.bgDotSliderActive}`
  const bgProductDetails = `${theme.productDetailsPage.colors.bgProductDetails}`
  const bgAddToCart = `${theme.productDetailsPage.colors.bgAddToCart}`
  const colorAddToCart = `${theme.productDetailsPage.colors.colorAddToCart}`
  const bgAddedToCart = `${theme.productDetailsPage.colors.bgAddedToCart}`
  const tickAddedToCart = `${theme.productDetailsPage.colors.tickAddedToCart}`
  const star = `${theme.productDetailsPage.colors.star}`
  const starDeactive = `${theme.productDetailsPage.colors.starDeactive}`
  const discount = `${theme.productDetailsPage.colors.discount}`

  // keyframes for add to cart
  const grow = keyframes`
  0% {
    transform: scale(0);
    visibility:visible;
  }
  50% {
    transform: scale(1.2);
    visibility:visible;
  }
  100% {
    transform: scale(1);
    visibility:visible;
  }
`
  const drop = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(1px);
  }
`
  const containerDetails = css`
    margin: ${theme.productDetailsPage.containerDetails.margin};
    width: ${theme.productDetailsPage.containerDetails.width};
    max-width: ${theme.productDetailsPage.containerDetails.maxWidth};
    display: ${theme.productDetailsPage.containerDetails.display};
    flex-direction: ${theme.productDetailsPage.containerDetails.flexDirection};
    justify-content: ${theme.productDetailsPage.containerDetails.justifyContent};
    align-items: ${theme.productDetailsPage.containerDetails.alignItems};
    @media (max-width: 900px) {
      flex-direction: ${theme.productDetailsPage.containerDetails.media.flexDirection};
    }
    .product-image {
      width: ${theme.productDetailsPage.containerDetails.productImage.width};
      display: ${theme.productDetailsPage.containerDetails.productImage.display};
      flex: ${theme.productDetailsPage.containerDetails.productImage.flex};
      flex-direction: ${theme.productDetailsPage.containerDetails.productImage.flexDirection};
      justify-content: ${theme.productDetailsPage.containerDetails.productImage.justifyContent};
      align-items: ${theme.productDetailsPage.containerDetails.productImage.alignItems};
      background: linear-gradient(
        to bottom,
        ${bgSliderOne} 0%,
        ${bgSliderTwo} 100%
      );
      border-radius: ${theme.productDetailsPage.containerDetails.productImage.borderRadius};
      padding: ${theme.productDetailsPage.containerDetails.productImage.padding};
      width: ${theme.productDetailsPage.containerDetails.productImage.width};
      margin: ${theme.productDetailsPage.containerDetails.productImage.margin};
      position: ${theme.productDetailsPage.containerDetails.productImage.position};
    }
    .product-pic {
      min-width: ${theme.productDetailsPage.containerDetails.productPic.minWidth};
      max-width: ${theme.productDetailsPage.containerDetails.productPic.maxWidth};
      position: ${theme.productDetailsPage.containerDetails.productPic.position};
      left: ${theme.productDetailsPage.containerDetails.productPic.left};
      margin: ${theme.productDetailsPage.containerDetails.productPic.margin};
      filter: ${theme.productDetailsPage.containerDetails.productPic.filter};
    }
    .dots {
      display: ${theme.productDetailsPage.containerDetails.dots.display};
      align-content: ${theme.productDetailsPage.containerDetails.dots.alignContent};
      justify-content: ${theme.productDetailsPage.containerDetails.dots.justifyContent};
      margin-top: ${theme.productDetailsPage.containerDetails.dots.marginTop};
      > a {
        background-color: ${bgDotSlider};
        width: ${theme.productDetailsPage.containerDetails.dots.a.width};
        height: ${theme.productDetailsPage.containerDetails.dots.a.height};
        margin: ${theme.productDetailsPage.containerDetails.dots.a.margin};
        border-radius: ${theme.productDetailsPage.containerDetails.dots.a.borderRadius};
        &:hover,
        &.active {
          background-color: ${bgDotSliderActive};
        }
      }
      i {
        display: ${theme.productDetailsPage.containerDetails.dots.i.display};
      }
    }
    // product detail
    .product-details {
      background-color: ${bgProductDetails};
      color: ${colorFont};
      border-radius: ${theme.productDetailsPage.containerDetails.productDetails.borderRadius};
      padding: ${theme.productDetailsPage.containerDetails.productDetails.padding};
      display: ${theme.productDetailsPage.containerDetails.productDetails.display};
      flex-direction: ${theme.productDetailsPage.containerDetails.productDetails.flexDirection};
      // width: ${theme.productDetailsPage.containerDetails.productDetails.width};
      header {
        margin-bottom: ${theme.productDetailsPage.containerDetails.productDetails.header.marginBottom};
        position: ${theme.productDetailsPage.containerDetails.productDetails.header.position};
        .title {
          text-transform: ${theme.productDetailsPage.containerDetails.productDetails.header.title.textTransform};
          margin: ${theme.productDetailsPage.containerDetails.productDetails.header.title.margin};
          font-weight: ${theme.productDetailsPage.containerDetails.productDetails.header.title.fontWeight};
        }
        .price {
          font-weight: ${theme.productDetailsPage.containerDetails.productDetails.header.price.fontWeight};
          margin-top: ${theme.productDetailsPage.containerDetails.productDetails.header.price.marginTop};
          font-size: ${theme.productDetailsPage.containerDetails.productDetails.header.price.fontSize};
          .current {
            color: ${discount};
            margin-left: ${theme.productDetailsPage.containerDetails.productDetails.header.price.current.marginLeft};
          }
        }
        .rate {
          position: ${theme.productDetailsPage.containerDetails.productDetails.header.rate.position};
          margin-top: ${theme.productDetailsPage.containerDetails.productDetails.header.rate.marginTop};
          top: ${theme.productDetailsPage.containerDetails.productDetails.header.rate.top};
          right: ${theme.productDetailsPage.containerDetails.productDetails.header.rate.right};
          a {
            font-size: ${theme.productDetailsPage.containerDetails.productDetails.header.rate.a.fontSize};
            color: ${starDeactive};
            &.active,
            &:hover {
              color: ${star};
            }
          }
        }
      }
      // description
      .descriptionSec {
        text-align: ${theme.productDetailsPage.containerDetails.productDetails.descriptionSec.textAlign};
      }
      // add to cart
      .buttons-bottom {
        margin-top: ${theme.productDetailsPage.containerDetails.productDetails.buttonsBottom.marginTop};
      }
      .add-and-increase-buttons {
        display: ${theme.productDetailsPage.containerDetails.productDetails.addAndIncreaseButtons.display};
        align-items: ${theme.productDetailsPage.containerDetails.productDetails.addAndIncreaseButtons.alignItems};
        justify-content: ${theme.productDetailsPage.containerDetails.productDetails.addAndIncreaseButtons.justifyContent};
      }
      .add-to-cart-button {
        background: ${bgAddToCart};
        border: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.border};
        border-radius: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.borderRadius};
        -webkit-box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.webkitBoxShadow};
        box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.boxShadow};
        color: ${colorAddToCart};
        display: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.display};
        justify-content: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.justifyContent};
        min-width: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.minWidth};
        overflow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.overflow};
        outline: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.outline};
        padding: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.padding};
        position: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.position};
        text-transform: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.textTransform};
        transition: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.transition};
        width: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.width};
        &:active {
          -webkit-box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.active.webkitBoxShadow};
          box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.active.boxShadow};
          -webkit-transform: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.active.webkitTransform};
          transform: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.active.transform};
        }

        &:hover {
          cursor: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.hover.cursor};
        }

        &:hover,
        &:focus {
          -webkit-box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.focus.webkitBoxShadow};
          box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.focus.boxShadow};
          -webkit-transform: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.focus.webkitTransform};
          transform: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.focus.transform};
        }

        &.added {
          background: ${bgAddedToCart};
          -webkit-box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.added.webkitBoxShadow};
          box-shadow: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.added.boxShadow};

          .add-to-cart {
            display: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.added.addToCart.display};
          }

          .added-to-cart {
            display: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.added.addedToCart.display};
          }

          .cart-icon {
            animation: ${drop} 0.3s forwards;
            -webkit-animation: ${drop} 0.3s forwards;
            animation-delay: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.added.cartIcon.animationDelay};
          }

          .box-1,
          .box-2 {
            top: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.added.box.top};
          }
          .tick {
            animation: ${grow} 0.6s forwards;
            -webkit-animation: ${grow} 0.6s forwards;
            animation-delay: ${theme.productDetailsPage.containerDetails.productDetails.addToCartButton.added.tik.animationDelay};
          }
        }

      }


      .add-to-cart,
      .added-to-cart {
        margin-left: ${theme.productDetailsPage.containerDetails.productDetails.addedToCart.marginLeft};
      }

      .added-to-cart {
        display: ${theme.productDetailsPage.containerDetails.productDetails.addedToCart.display};
        position: ${theme.productDetailsPage.containerDetails.productDetails.addedToCart.position};
      }

      .add-to-cart-box {
        height: ${theme.productDetailsPage.containerDetails.productDetails.addToCartBox.height};
        position: ${theme.productDetailsPage.containerDetails.productDetails.addToCartBox.position};
        top: ${theme.productDetailsPage.containerDetails.productDetails.addToCartBox.top};
        width: ${theme.productDetailsPage.containerDetails.productDetails.addToCartBox.width};
      }

      .box-1,
      .box-2 {
        transition: ${theme.productDetailsPage.containerDetails.productDetails.box.transition};
        top: ${theme.productDetailsPage.containerDetails.productDetails.box.top};
      }

      .box-1 {
        left: ${theme.productDetailsPage.containerDetails.productDetails.box.box1.left};
        transform: ${theme.productDetailsPage.containerDetails.productDetails.box.box1.transform};
      }

      .box-2 {
        left: ${theme.productDetailsPage.containerDetails.productDetails.box.box2.left};
        transform: ${theme.productDetailsPage.containerDetails.productDetails.box.box2.transform};
      }

      .cart-icon {
        left: ${theme.productDetailsPage.containerDetails.productDetails.cartIcon.left};
        position: ${theme.productDetailsPage.containerDetails.productDetails.cartIcon.position};
        top: ${theme.productDetailsPage.containerDetails.productDetails.cartIcon.top};
      }

      .tick {
        background: ${tickAddedToCart};
        border-radius: ${theme.productDetailsPage.containerDetails.productDetails.tick.top};
        position: ${theme.productDetailsPage.containerDetails.productDetails.tick.position};
        left:  ${theme.productDetailsPage.containerDetails.productDetails.tick.left};
        transform:  ${theme.productDetailsPage.containerDetails.productDetails.tick.transform});
        top:  ${theme.productDetailsPage.containerDetails.productDetails.tick.top};
        z-index:  ${theme.productDetailsPage.containerDetails.productDetails.tick.zIndex};
        visibility:${theme.productDetailsPage.containerDetails.productDetails.tick.visibility};
      }
    }
  `
  const incDecSec = css`
    display: ${theme.productDetailsPage.containerDetails.productDetails
      .incDecSec.display};
    outline: ${theme.productDetailsPage.containerDetails.productDetails
      .incDecSec.outline};
    background: ${theme.productDetailsPage.containerDetails.productDetails
      .incDecSec.background};

    border-radius: ${theme.productDetailsPage.containerDetails.productDetails
      .incDecSec.borderRadius};
    overflow: ${theme.productDetailsPage.containerDetails.productDetails
      .incDecSec.overflow};
    height: 35px;
    .incBtn {
      width: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incBtn.width};
      display: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incBtn.display};
      justify-content: ${theme.productDetailsPage.containerDetails
        .productDetails.incDecSec.incBtn.justifyContent};
      align-items: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incBtn.alignItems};
      color: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incBtn.color};
      padding: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.padding};
      border: none;
      cursor: pointer;
    }
    .decBtn {
      display: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.decBtn.display};
      justify-content: ${theme.productDetailsPage.containerDetails
        .productDetails.incDecSec.decBtn.justifyContent};
      align-items: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.decBtn.alignItems};
      width: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.decBtn.width};
      color: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.decBtn.color};
      padding: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.padding};
      border: none;
      cursor: pointer;
    }
    .incDecInput {
      width: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incDecInput.width};
      border: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incDecInput.border};
      -webkit-appearance: ${theme.productDetailsPage.containerDetails
        .productDetails.incDecSec.incDecInput.webkitAppearance};
      text-align: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incDecInput.textAlign};
      appearance: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incDecInput.appearance};
      -moz-appearance: ${theme.productDetailsPage.containerDetails
        .productDetails.incDecSec.incDecInput.mozAppearance};
      margin: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incDecInput.margin};
      font-weight: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incDecInput.fontWeight};
      background: ${theme.productDetailsPage.containerDetails.productDetails
        .incDecSec.incDecInput.background};
      cursor: not-allowed;
    }
  `

  return (
    <>
      <div className={containerDetails}>
        <div className="product-image">
          <Image src={image} alt={title} className="product-pic" />
          <div className="dots">
            <a href="#!" className="active">
              <i>1</i>
            </a>
            <a href="#!">
              <i>2</i>
            </a>
            <a href="#!">
              <i>3</i>
            </a>
            <a href="#!">
              <i>4</i>
            </a>
          </div>
        </div>
        <div className="product-details">
          <header>
            <h1 className="title">{title}</h1>
            <div className="price">
              <span className="current">${price}</span>
            </div>
            <div className="rate">
              <a href="#!" className="active">
                ★
              </a>
              <a href="#!" className="active">
                ★
              </a>
              <a href="#!" className="active">
                ★
              </a>
              <a href="#!">★</a>
              <a href="#!">★</a>
            </div>
          </header>
          <article>
            <h5>Description:</h5>
            <p className="descriptionSec">{description}</p>
          </article>
          <div className="buttons-bottom">
            <div className="add-and-increase-buttons">
              <div>
                <button
                  type="button"
                  className={addClassAnimation}
                  onClick={handleClickAddToCard}
                >
                  <svg
                    className="add-to-cart-box box-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="2" fill="#ffffff" />
                  </svg>
                  <svg
                    className="add-to-cart-box box-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="2" fill="#ffffff" />
                  </svg>
                  <svg
                    className="cart-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <svg
                    className="tick"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
                    />
                  </svg>
                  <span className="add-to-cart">Add to cart</span>
                  <span className="added-to-cart">Added to cart</span>
                </button>
              </div>
              <div>
                <div className={incDecSec}>
                  <button
                    type="button"
                    className="decBtn"
                    onClick={() => handleIncDecProduct('dec')}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="incDecInput"
                    min="1"
                    value={numberOfProduct}
                    readOnly
                  />
                  <button
                    type="button"
                    className="incBtn"
                    onClick={() => handleIncDecProduct('inc')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage
