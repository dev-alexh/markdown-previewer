import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    change,
    selectMarkUp,
} from './markUpSlice';

export function Editor() {
    const markUp = useSelector(selectMarkUp);
    const dispatch = useDispatch();

    return (
        <div id="editorBox">
            <h1 id="editorHeading">Test your HTML skills: </h1>
            <textarea
                id="editor"
                name="editor"
                rows="30"
                cols="50"
                value={markUp}
                onChange={(event) => dispatch(change(event.target.value))}
            />
        </div>
    );

}