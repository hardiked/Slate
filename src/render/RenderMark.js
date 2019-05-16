import React from "react";
import Bold from "../tags/Bold";
import Italic from "../tags/Italic";
import { BOLD, ITALIC, UNDERLINE, CODE } from "../constants/Types";
import Underline from "../tags/Underline";
import Code from "../tags/Code";

const renderMark = (props, editor, next) => {
    switch (props.mark.type) {
        case CODE:
            return <Code {...props} />;
        case BOLD:
            return <Bold {...props} />;
        case ITALIC:
            return <Italic {...props} />;
        case UNDERLINE:
            return <Underline {...props} />;
        default:
            return next();
    }
};

export default renderMark;
