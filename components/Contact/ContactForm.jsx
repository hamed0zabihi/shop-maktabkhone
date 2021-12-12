import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { Space } from '../Styles/Typography/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons'
import { Button, Input, InputEmail, TextArea } from '../Styles/Inputs'

const ContactForm = () => {
  const theme = useTheme()

  const contactSection = css`
    width: ${theme.contact.contactForm.contactSection.width};
    border: ${theme.contact.contactForm.contactSection.border};
    display: ${theme.contact.contactForm.contactSection.display};
    flex-direction: ${theme.contact.contactForm.contactSection.flexDirection};
    justify-content: ${theme.contact.contactForm.contactSection.justifyContent};
    margin: ${theme.contact.contactForm.contactSection.margin};
    padding: ${theme.contact.contactForm.contactSection.padding};
    @media screen and (max-width: ${theme.contact.contactForm.contactSection
        .media.maxWidth}) {
      flex-direction: ${theme.contact.contactForm.contactSection.media
        .flexDirection};
      justify-content: ${theme.contact.contactForm.contactSection.media
        .justifyContent};
    }
  `

  const directionContact = css`
    flex: ${theme.contact.contactForm.directionContact.flex};
    padding: ${theme.contact.contactForm.directionContact.padding};
    .contact-list {
      list-style-type: ${theme.contact.contactForm.directionContact.contactList
        .listStyleType};
      padding-right: ${theme.contact.contactForm.directionContact.contactList
        .paddingRight};
      .list-item {
        line-height: ${theme.contact.contactForm.directionContact.contactList
          .listItem.lineHeight};
        color: ${theme.contact.contactForm.directionContact.contactList.listItem
          .color};
        svg {
          margin-right: ${theme.contact.contactForm.directionContact.contactList
            .listItem.svg.marginRight};
        }
      }
      .contact-text {
        font-size: ${theme.contact.contactForm.directionContact.contactList
          .contactText.fontSize};
        font-weight: ${theme.contact.contactForm.directionContact.contactList
          .contactText.fontWeight};
        letter-spacing: ${theme.contact.contactForm.directionContact.contactList
          .contactText.letterSpacing};
        color: ${theme.contact.contactForm.directionContact.contactList
          .contactText.color};
      }
    }
    .social-media-list {
      position: ${theme.contact.contactForm.directionContact.socialMediaList
        .position};
      font-size: ${theme.contact.contactForm.directionContact.socialMediaList
        .fontSize};
      text-align: ${theme.contact.contactForm.directionContact.socialMediaList
        .textAlign};
      width: ${theme.contact.contactForm.directionContact.socialMediaList
        .width};
      margin: ${theme.contact.contactForm.directionContact.socialMediaList
        .margin};
      padding: ${theme.contact.contactForm.directionContact.socialMediaList
        .padding};

      li {
        position: ${theme.contact.contactForm.directionContact.socialMediaList
          .li.position};
        display: ${theme.contact.contactForm.directionContact.socialMediaList.li
          .display};
        height: ${theme.contact.contactForm.directionContact.socialMediaList.li
          .height};
        width: ${theme.contact.contactForm.directionContact.socialMediaList.li
          .width};
        margin: ${theme.contact.contactForm.directionContact.socialMediaList.li
          .margin};
        line-height: ${theme.contact.contactForm.directionContact
          .socialMediaList.li.lineHeight};
        border-radius: ${theme.contact.contactForm.directionContact
          .socialMediaList.li.borderRadius};
        color: ${theme.contact.contactForm.directionContact.socialMediaList.li
          .color};
        background-color: ${theme.contact.contactForm.directionContact
          .socialMediaList.li.backgroundColor};
        cursor: ${theme.contact.contactForm.directionContact.socialMediaList.li
          .cursor};
        transition: ${theme.contact.contactForm.directionContact.socialMediaList
          .li.transition};
        a {
          color: ${theme.contact.contactForm.directionContact.socialMediaList.li
            .a.color};
        }
        &:after {
          content: ${theme.contact.contactForm.directionContact.socialMediaList
            .li.after.content};
          position: ${theme.contact.contactForm.directionContact.socialMediaList
            .li.after.position};
          top: ${theme.contact.contactForm.directionContact.socialMediaList.li
            .after.top};
          left: ${theme.contact.contactForm.directionContact.socialMediaList.li
            .after.left};
          width: ${theme.contact.contactForm.directionContact.socialMediaList.li
            .after.width};
          height: ${theme.contact.contactForm.directionContact.socialMediaList
            .li.after.height};
          line-height: ${theme.contact.contactForm.directionContact
            .socialMediaList.li.after.lineHeight};
          border-radius: ${theme.contact.contactForm.directionContact
            .socialMediaList.li.after.borderRadius};
          opacity: ${theme.contact.contactForm.directionContact.socialMediaList
            .li.after.opacity};
          box-shadow: ${theme.contact.contactForm.directionContact
            .socialMediaList.li.after.boxShadow};
          transition: ${theme.contact.contactForm.directionContact
            .socialMediaList.li.after.transition};
        }
        &:hover {
          background-color: ${theme.contact.contactForm.directionContact
            .socialMediaList.li.hover.backgroundColor};
          a {
            color: ${theme.contact.contactForm.directionContact.socialMediaList
              .li.hover.a.color};
          }
          &:after {
            opacity: ${theme.contact.contactForm.directionContact
              .socialMediaList.li.hover.after.opacity};
            transform: ${theme.contact.contactForm.directionContact
              .socialMediaList.li.hover.after.transform};
            transition-timing-function: ${theme.contact.contactForm
              .directionContact.socialMediaList.li.hover.after
              .transitionTimingFunction};
          }
        }
      }
    }
  `
  const formClass = css`
    width: ${theme.contact.contactForm.formClass.width};
    text-align: ${theme.contact.contactForm.formClass.textAlign};
    button {
      background: ${theme.contact.contactForm.formClass.button.background};
      padding: ${theme.contact.contactForm.formClass.button.padding};
      border: ${theme.contact.contactForm.formClass.button.border};
      &:hover {
        background: ${theme.contact.contactForm.formClass.button.hover
          .background};
        color: ${theme.contact.contactForm.formClass.button.hover.color};
        transition: ${theme.contact.contactForm.formClass.button.hover
          .transition};
      }
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

  return (
    <>
      <Space />
      <div className={contactSection}>
        <div className={directionContact}>
          <form onSubmit={(e) => e.preventDefault()} className={formClass}>
            <label htmlFor="name">Name</label>
            <Input id="name" required />
            <label>email</label>
            <InputEmail required />
            <label htmlFor="subject">Subject</label>
            <TextArea required />
            <Button type="submit">submit</Button>
          </form>
        </div>
        <div className={directionContact}>
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              <span className="contact-text">Iran,Tehran</span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <span className="contact-text">(9821) 555-2368</span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span className="contact-text">test@gmail.com</span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  )
}

export default ContactForm
