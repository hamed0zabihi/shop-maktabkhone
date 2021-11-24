import React from 'react'
import H1 from './H1'

export default {
  title: 'Example/Typoghraphy',
  component: H1,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <H1 {...args} />
export const H1Default = Template.bind({})
H1Default.args = {
  children: 'H1 Typhography',
}
