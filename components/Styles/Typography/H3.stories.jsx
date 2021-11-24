import React from 'react'
import H3 from './H3'

export default {
  title: 'Example/Typoghraphy',
  component: H3,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <H3 {...args} />
export const H3Default = Template.bind({})
H3Default.args = {
  children: 'H3 Typhography',
}
