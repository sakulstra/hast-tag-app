import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { HashInput } from './../';

storiesOf('Diary', module)
    .add('HashInput', () => (
        <HashInput />
    ));