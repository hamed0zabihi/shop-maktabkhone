import React from 'react'
import H2 from './H2'

export default {
  title: 'Example/Typoghraphy',
  component: H2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <H2 {...args} />
export const H2Default = Template.bind({})
H2Default.args = {
  children: 'H2 Typhography',
}
