import React from 'react';
import { withKnobs ,storiesOf, action, linkTo } from '@kadira/storybook';
import { object, array } from '@kadira/storybook-addon-knobs';
import {
    HashInput,
    HashesListEmpty,
    HashesList,
    HashForm,
    ProgressButton,
    HashListItem,
} from './../';

const hashes = [
    {hashId: 'some-id-1', text: 'some text', created: 1479569408, modified: 1439569408},
    {hashId: 'some-id-2', text: 'some text', created: 1479569408, modified: 1439569408},
    {hashId: 'some-id-3', text: 'some text', created: 1479569408, modified: 1439569408}
];

const stories = storiesOf('Diary', module)
    .add('HashInput', () => (
        <HashInput />
    ))
    .add('HashListItem', () => (
        <HashListItem data={hashes[0]} />
    ))
    .add('HashesListEmpty', () => (
        <HashesListEmpty />
    ))
    .add('HashesList', () => {
        const container = {
            list: hashes,
        }
        return (<HashesList container={container} />);
    })
    .add('ProgressButton', () => (
        <ProgressButton />
    ))
    .add('HashForm', () => (
        <HashForm />
    ));

stories.addDecorator(withKnobs);