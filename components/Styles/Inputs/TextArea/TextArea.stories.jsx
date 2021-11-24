import React from 'react'
import TextArea from './TextArea'

export default {
  title: 'Example/TextArea',
  component: TextArea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextArea {...args} />

export const SimpleTextArea = Template.bind({})
SimpleTextArea.args = {
  rows: 'inherit',
  cols: 'inherit',
}
