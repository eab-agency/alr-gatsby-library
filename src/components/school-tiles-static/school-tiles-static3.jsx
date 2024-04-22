import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultContact from './default-tiles-static';
import './school-tiles-static-v3.scss';

const styleSheet = require('!!raw-loader!./school-tiles-static-v3.scss');
const html = require('!!raw-loader!./default-tiles-static.html');

const codeFiles = [
  {
    fileName: 'school-tiles-static-v3.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    code: html.default,
    language: 'html',
  },
];

const SchoolTilesStaticThree = () => (
  <div className="🚀-school-tiles-static-v3 layout-section">
    <DefaultContact />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolTilesStaticThree;
