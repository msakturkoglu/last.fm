import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from './Card'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themes } from '../../utils/theme'

export default {
    title: 'Components/Card',
    component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
    <BrowserRouter>
        <ThemeProvider theme={themes.light}>
            <Card {...args} />
        </ThemeProvider>
    </BrowserRouter>
)

export const Section = Template.bind({})
Section.args = {
    link: { url: 'aaa', payload: 'Taylor Swift' },
    image: 'https://lastfm.freetls.fastly.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png',
}
