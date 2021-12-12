import React from 'react'
import RegisterForm from './RegisterForm'

export default {
  title: 'Example/forms/register',
  component: RegisterForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <RegisterForm />
export const DefaultRegisterForm = Template.bind({})
