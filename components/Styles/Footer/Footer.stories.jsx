import React from 'react'
import Footer from './Footer'

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <Footer />
export const DefaultFooter = Template.bind({})
