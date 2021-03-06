import React from "react";
import Code from "../tags/Code";
import { CODE } from "../constants/Types";

const renderNode = (props, editor, next) => {
    switch (props.node.type) {
        case CODE:
            return <Code {...props} />;
        default:
            return next();
    }
};

export default renderNode;
