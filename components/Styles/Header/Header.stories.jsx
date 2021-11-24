import React from 'react'
import Header from './Header'

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <Header />
export const DefaultHeader = Template.bind({})
