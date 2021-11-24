import React from 'react'
import Card from './Card'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />
export const CardDefault = Template.bind({})
CardDefault.args = {
  id: '1',
  src: 'https://via.placeholder.com/200x125',
  title: 'Title Card',
  price: '$19.99',
  description: 'Description',
}
