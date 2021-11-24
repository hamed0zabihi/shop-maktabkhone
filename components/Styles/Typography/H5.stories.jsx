import React from 'react'
import H5 from './H5'

export default {
  title: 'Example/Typoghraphy',
  component: H5,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <H5 {...args} />
export const H5Default = Template.bind({})
H5Default.args = {
  children: 'H5 Typhography',
}
