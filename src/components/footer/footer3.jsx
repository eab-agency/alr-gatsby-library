import React from 'react';
import DefaultFooter from './default-footer';
import SnippetToggler from '../utils/SnippetToggler';
import './style-footer-v3.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-footer-v3.scss');
const html = require('!!raw-loader!./default-footer.html');

const codeFiles = [
  {
    fileName: 'style-footer-v3.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    code: html.default,
    language: 'html',
  },
];

const FooterThree = () => (
  <div className="🚀-footer-v3 layout-section">
    <DefaultFooter />;
    <SnippetToggler files={codeFiles} />
  </div>
);

export default FooterThree;
