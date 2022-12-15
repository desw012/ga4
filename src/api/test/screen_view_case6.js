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
const screen_view_case6 = (length) => {
    let location = makeTextByLength(length - '/TEST/screen_view_case5'.length);
    GADataScreen({
        title : 'TEST SCREEN : 6',
        location : '/TEST/screen_view_case5' + location,
        ep_TestCaseDescription : `screen_view_case6 - 비 정상적인 Location length인 경우 (length ${length}`
    });
}

export default screen_view_case6;