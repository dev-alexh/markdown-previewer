import React from 'react';
import { useSelector } from 'react-redux';
import { selectMarkUp } from './markUpSlice';

import marked from 'marked';

export function Preview() {
    const markUp = useSelector(selectMarkUp);

    marked.setOptions({
        breaks: true
    });

    return (
        <div id="previewBox">
            <h1 id="previewHeading">Live Preview: </h1>
            <div
                id="preview"
                dangerouslySetInnerHTML={{
                    __html: marked(markUp)
                }}
            ></div>
        </div>
    );

}