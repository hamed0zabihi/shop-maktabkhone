import React from 'react'
import LoginForm from './LoginForm'

export default {
  title: 'Example/forms/login',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <LoginForm />
export const DefaultLoginFrom = Template.bind({})
