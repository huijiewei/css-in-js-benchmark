import {createCss} from '@stitches/react';

export const {styled, css} = createCss({
    prefix: 'ag-',
    tokens: {
        colors: {
            $main: '#FFF',
            $dark: '#000'
        }
    },
    breakpoints: {
        sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    },
    utils: {},
});