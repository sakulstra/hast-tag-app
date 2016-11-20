import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Footer, Header, LoadingIndicator, NiceWelcomeMessage } from './../';

storiesOf('Generic', module)
    .add('Header', () => (
        <Header />
    ))
    .add('Footer', () => (
        <Footer />
    ))
    .add('LoadingIndicator', () => (
        <LoadingIndicator />
    ))
    .add('NiceWelcomeMessage', () => (
        <NiceWelcomeMessage />
    ));
