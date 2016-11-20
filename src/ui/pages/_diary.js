import React from 'react';
import {HashForm, HashesListContainer} from './../components/diary';
import {Base} from './../layouts';

const Diary = () => (
    <Base>
        <HashForm />
        <HashesListContainer />
    </Base>
);

export default Diary;