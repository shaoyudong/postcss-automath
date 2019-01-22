const postcss = require('postcss');
const css = `
    .test {
        margin-top: 4px + 2 * 3px;
    }
`;
const expectCss = `
    .test {
        margin-top: 10px;
    }
`
describe('base', () => {
    test('automath', async () => {
        const res = await postcss([
            require('../postcss-automath')
        ]).process(css, {
            from: undefined
        });
        expect(res.css).toBe(expectCss);
    });
});