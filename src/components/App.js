import React from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import Code from "../tags/Code";
import Bold from "../tags/Bold";
import Italic from "../tags/Italic";
import renderNode from "../render/RenderNode";
import renderMark from "../render/RenderMark";
import renderBlock from "../render/RenderBlock";
import { BOLD, ITALIC, CODE, PARAGRAPH, UNDERLINE } from "../constants/Types";

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: "block",
                type: "paragraph",
                nodes: [
                    {
                        object: "text",
                        leaves: [
                            {
                                text: "A line of text in a paragraph."
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: initialValue
        };
        this.renderNode = renderNode;
        this.renderMark = renderMark;
        this.renderBlock = renderBlock;
    }

    onChange = ({ value }) => {
        this.setState({ value });
    };

    onKeyDown = (event, editor, next) => {
        if (!event.ctrlKey) return next();

        // Decide what to do based on the key code...
        switch (event.key) {
            // When "B" is pressed, add a "bold" mark to the text.
            case "b": {
                event.preventDefault();
                editor.toggleMark(BOLD);
                break;
            }
            case "i": {
                event.preventDefault();
                editor.toggleMark(ITALIC);
                break;
            }
            case "u": {
                event.preventDefault();
                editor.toggleMark(UNDERLINE);
                break;
            }
            // When "`" is pressed, keep our existing code block logic.
            case "`": {
                const isCode = editor.value.blocks.some(
                    block => block.type == CODE
                );
                event.preventDefault();
                editor.setBlocks(isCode ? PARAGRAPH : CODE);
                break;
            }
            // Otherwise, let other plugins handle it.
            default: {
                return next();
            }
        }
    };

    render() {
        return (
            <div className="container">
                <p>Hello</p>
                <Editor
                    value={this.state.value}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    renderNode={this.renderNode}
                    renderMark={this.renderMark}
                    renderBlock={this.renderBlock}
                />
                <button
                    onClick={() => {
                        console.log(this.state.value);
                    }}
                >
                    Submit
                </button>
            </div>
        );
    }
}
