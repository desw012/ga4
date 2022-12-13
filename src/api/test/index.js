export const GADataScreen = window.GADataScreen;
export const GA_Event = window.GA_Event;
export const GA_Event2 = window.GA_Event2;
export const EcommerceSet = window.EcommerceSet;

export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export const makeTextByLength = (len) => {
    let text = '';

    for(let i = 0; i < len; i++){
        text += String.fromCharCode(getRandomArbitrary(65, 91));
    }
    return text;
}