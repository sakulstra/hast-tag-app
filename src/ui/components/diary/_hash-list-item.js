import React from 'react';
import moment from 'moment';
import './_hash-list-item.css';

const HashListItem = ({data: {text, created}}) => (
    <div className="hash-item" data-hover={moment(created).format('l')}>
        {text}
    </div>
);

export default HashListItem;