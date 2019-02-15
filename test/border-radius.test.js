const postcss = require('postcss');
const css = `
    .test {
        border-radius: 12px / 6px;
    }
`;
const expectCss = `
    .test {
        border-radius: 12px / 6px;
    }
`
describe('automath', () => {
    test('border-radius', async () => {
        const res = await postcss([
            require('../postcss-automath')
        ]).process(css, {
            from: undefined
        });
        expect(res.css).toBe(expectCss);
    });
});