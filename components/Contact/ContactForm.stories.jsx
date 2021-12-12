import React from 'react'
import ContactForm from './ContactForm'

export default {
  title: 'Example/forms/contact',
  component: ContactForm,
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContactForm />
export const SimpleContactForm = Template.bind({})
SimpleContactForm.args = {}
