import React from 'react'
import Cardt from './Cardt'

export default {
  title: 'Example/Card',
  component: Cardt,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Cardt {...args} />
export const CardDefault = Template.bind({})
CardDefault.args = {
  id: '1',
  src: 'http://localhost:3000/images/product/01-shoes.png',
  title: 'Title Card',
  price: '$19.99',
  description: 'Description',
}
