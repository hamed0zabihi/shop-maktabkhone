import React from 'react'

import { HeaderDefaultStoryBook } from './HeaderDefaultStoryBook'

export default {
  title: 'Example/Header-Default-Story-Book',
  component: HeaderDefaultStoryBook,
}

const Template = (args) => <HeaderDefaultStoryBook {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
