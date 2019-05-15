import React from "react";

const Code = function CodeNode(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    );
};

export default Code;
