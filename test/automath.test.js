const postcss = require('postcss');
const css = `
    .test {
        margin-top: 4px + 2 * 3px;
        font: normal 36rpx/100rpx Arial, "Mrcrosoft Yahei";
        font: normal 0.36rpx*100rpx Arial, "Mrcrosoft Yahei";
    }
`;
const expectCss = `
    .test {
        margin-top: 10px;
        font: normal 36rpx/100rpx Arial, "Mrcrosoft Yahei";
        font: normal 36rpx Arial, "Mrcrosoft Yahei";
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