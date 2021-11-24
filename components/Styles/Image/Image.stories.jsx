import React from 'react'
import Image from './Image'

export default {
  title: 'Example/Image',
  component: Image,
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />
export const DefaultImage = Template.bind({})
DefaultImage.args = {
  src: 'https://via.placeholder.com/200x125',
  alt: 'images',
  width: 'inherit',
  height: 'inherit',
}
