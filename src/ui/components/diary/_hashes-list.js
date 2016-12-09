import React, { PropTypes } from 'react';
import { HashesListEmpty, HashListItem } from './';
import { hashesListContainer } from './../../../api/hashes';

export const HashesList = ({container: {list: hashes}}) => (
    <div>
        {hashes.length === 0 ?
            <HashesListEmpty /> :
            hashes.map((hash) => (
                <HashListItem key={hash.hashId} data={hash} />
            ))
        }
    </div>
);

HashesList.propTypes = {
    hashes: PropTypes.arrayOf(PropTypes.string),
};

export default hashesListContainer(HashesList);