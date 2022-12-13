import { GADataScreen } from './index'

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const makeTextByLength = (len) => {
    let text = '';

    for(let i = 0; i < len; i++){
        text += String.fromCharCode(getRandomArbitrary(65, 91));
    }
    return text;
}
const screen_view_case5 = (length) => {
    let title = makeTextByLength(length - 'TEST SCREEN : '.length);
    console.log(title);
    GADataScreen({
        title : 'TEST SCREEN : ' + title,
        location : '/TEST/screen_view_case5',
        ep_TestCaseDescription : `screen_view_case5 - 비 정상적인 Title length인 경우 (length ${length}`
    });
}

export default screen_view_case5;