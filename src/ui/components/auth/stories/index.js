import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { LoginButtonGoogle } from './../';

storiesOf('Auth', module)
    .add('LoginButtonGoogle', () => (
        <LoginButtonGoogle />
    ));
