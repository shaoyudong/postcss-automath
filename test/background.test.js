const postcss = require('postcss');
const css = `
    .test {
        background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3949273718,1230888021&fm=26&gp=0.jpg) 5px / 50% no-repeat lightgreen;
        background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3949273718,1230888021&fm=26&gp=0.jpg) 5px + 5px no-repeat lightgreen;
    }
`;
const expectCss = `
    .test {
        background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3949273718,1230888021&fm=26&gp=0.jpg) 5px / 50% no-repeat lightgreen;
        background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3949273718,1230888021&fm=26&gp=0.jpg) 10px no-repeat lightgreen;
    }
`
describe('automath', () => {
    test('background', async () => {
        const res = await postcss([
            require('../postcss-automath')
        ]).process(css, {
            from: undefined
        });
        expect(res.css).toBe(expectCss);
    });
});