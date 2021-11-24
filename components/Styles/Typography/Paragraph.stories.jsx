import React from 'react'
import Paragraph from './Paragraph'

export default {
  title: 'Example/Typoghraphy',
  component: Paragraph,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Paragraph {...args} />
export const ParagraphDefault = Template.bind({})
ParagraphDefault.args = {
  children: 'Paragraph Typhography',
}
