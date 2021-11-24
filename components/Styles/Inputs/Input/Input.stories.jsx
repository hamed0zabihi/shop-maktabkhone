import React from 'react'
import Input from './Input'

export default {
  title: 'Example/inputs',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />
export const Text = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: 'please insert text',
}
export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'please insert email',
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'please insert password',
}
