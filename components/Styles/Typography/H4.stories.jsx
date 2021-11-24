import React from 'react'
import H4 from './H4'

export default {
  title: 'Example/Typoghraphy',
  component: H4,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <H4 {...args} />
export const H4Default = Template.bind({})
H4Default.args = {
  children: 'H4 Typhography',
}
