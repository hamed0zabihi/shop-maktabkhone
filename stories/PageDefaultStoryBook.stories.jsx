import React from 'react'

import { PageDefaultStoryBook } from './PageDefaultStoryBook'
import * as HeaderDefaultStoryBook from './HeaderDefaultStoryBook.stories'

export default {
  title: 'Example/Page-Default-Story-Book',
  component: PageDefaultStoryBook,
}

const Template = (args) => <PageDefaultStoryBook {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderDefaultStoryBook.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderDefaultStoryBook.LoggedOut.args,
}
