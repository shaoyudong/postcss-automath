const postcss = require('postcss');
const css = `
    .test {
        font: normal 36rpx/100rpx Arial, "Mrcrosoft Yahei";
        font: normal 0.36rpx*100rpx Arial, "Mrcrosoft Yahei";
    }
`;
const expectCss = `
    .test {
        font: normal 36rpx/100rpx Arial, "Mrcrosoft Yahei";
        font: normal 36rpx Arial, "Mrcrosoft Yahei";
    }
`
describe('automath', () => {
    test('font', async () => {
        const res = await postcss([
            require('../postcss-automath')
        ]).process(css, {
            from: undefined
        });
        expect(res.css).toBe(expectCss);
    });
});