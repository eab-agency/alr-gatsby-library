import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultApply from './default-apply';
import './style-apply-v2.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-apply-v2.scss');
const html = require('!!raw-loader!./default-apply.html');

const codeFiles = [
  {
    fileName: 'style-apply-v2.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'default-apply.html',
    code: html.default,
    language: 'html',
  },
];

const applyTwo = () => (
  <>
    <DefaultApply className="🚀-apply-v2 layout-section" />
    <SnippetToggler files={codeFiles} />
  </>
);

export default applyTwo;
