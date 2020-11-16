import { createSlice } from '@reduxjs/toolkit';

export const markUpSlice = createSlice({
    name: 'markUp',
    initialState: {
        value: `# h1 tag example

## h2 tag example
        
Example of [links](https://www.freecodecamp.com)
        
Example of div tag: \`<div></div>\`
        
\`\`\`
//Example of functions:
        
function functionExample() {
  console.log('example');
}
\`\`\`
        
- Example of list elements
        
> Example of Block Quotes
        
![Example of img](#)
        
Example of **bold** text
        
`,
    },
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { change } = markUpSlice.actions;

export const selectMarkUp = state => state.markUp.value;

export default markUpSlice.reducer;