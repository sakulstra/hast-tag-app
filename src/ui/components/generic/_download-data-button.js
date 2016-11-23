import React from 'react';
import fileDownload from 'react-file-download';
import { hashesListContainer } from './../../../api/hashes';


const DownloadDataButton = ({container: {list: hashes}}) => (
  <div>
    <a href="#" onClick={() => fileDownload(JSON.stringify(hashes), 'hash-diary.json')}>Export Data as Json</a>
  </div>
);

export default hashesListContainer(DownloadDataButton);
