import { style, globalStyle } from '@vanilla-extract/css';

export const app = style({
    fontFamily: "'Inter', sans-serif",
});

globalStyle('html, body', {
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',

});