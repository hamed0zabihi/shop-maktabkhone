import React from 'react'
import ProductDetailsPage from './ProductDetailsPage'

export default {
  title: 'Example/DetailsPage',
  component: ProductDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductDetailsPage {...args} />
export const ProductDetailss = Template.bind({})
ProductDetailss.args = {
  title: 'title',
  image: 'http://localhost:3000/images/product/01-shoes.png',
  price: 100000,
  description:
    'In addition to the Nike WMNS Air Force 1 Shadow Sisterhood in the Orange and White colorway, another colorway has surfaced in a much more colorful rendition. This double-layered women’s colorway of the Nike Air Force 1 gets hit with a mix of smooth and tumbled leather construction all over the upper in hues that include black, gold, light purple, and a couple of shades of red. Highlights of this colorway include gold “Sister” lace dubraes and “We Ride Together” printed on the insoles with a dice hanging from Swooshe',
  imageGallery: [
    '/images/product/gallery/p-01-01.png',
    '/images/product/gallery/p-01-02.png',
    '/images/product/gallery/p-01-03.png',
  ],
  inventory: 1,
}
