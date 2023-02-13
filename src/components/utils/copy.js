import React, { useState } from 'react';

const copyToClipboard = (content) => {
    const el = document.createElement(`textarea`);
    el.value = content;
    el.setAttribute(`readonly`, ``);
    el.style.position = `absolute`;
    el.style.left = `-9999px`;
    document.body.appendChild(el);
    el.select();
    document.execCommand(`copy`);
    document.body.removeChild(el);
};

const delay = (duration) =>
    // eslint-disable-next-line no-promise-executor-return
    new Promise((resolve) => setTimeout(resolve, duration));

function Copy({ className, content, duration, fileName, trim = false }) {
    const [copied, setCopied] = useState(false);

    const label = copied
        ? `${fileName ? `${fileName} ` : ``}copied to clipboard`
        : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;

    return (
        <button
            type="button"
            name={label}
            className={className}
            disabled={copied}
            style={{
                backgroundColor: `transparent`,
                border: `none`,
                cursor: `pointer`,
                '&[disabled]': {
                    cursor: `not-allowed`,
                },
                ':not([disabled]):hover': {},
                ':active': {},
            }}
            onClick={async () => {
                copyToClipboard(trim ? content.trim() : content);

                setCopied(true);

                await delay(duration);

                setCopied(false);
            }}
        >
            {copied ? `Copied` : `Copy`}
        </button>
    );
}
export default Copy;
