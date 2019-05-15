import React from "react";
import Bold from "../tags/Bold";
import Italic from "../tags/Italic";
import { BOLD, ITALIC, UNDERLINE } from "../constants/Types";
import Underline from "../tags/Underline";

const renderMark = (props, editor, next) => {
    switch (props.mark.type) {
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
