import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import {rainbow} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CopyButton = ({target}) => {
    const handleCopy = async () => {
        if (target) {
            try {
                await navigator.clipboard.writeText(target);
                alert('copied');
            } catch (e) {
                alert(`copy failed ${e}`);
            }
        }
    }

    return (
        <button
            className="absolute right-0.5 top-0.5 px-2 bg-white rounded-md dark:text-gray-800"
            onClick={handleCopy}
        >
            copy
        </button>
    )

}

const CodeBlock = ({children}) => {
    return (
        <div className="relative">
            <CopyButton target={children}/>
            <SyntaxHighlighter showLineNumbers style={rainbow}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
