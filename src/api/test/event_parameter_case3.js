import {GADataScreen, makeTextByLength} from './index'


const event_parameter_case3 = (length) => {
    const text = makeTextByLength(length);
    
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case3',
        ep_TestCaseDescription : `event_parameter_case3 - length가 ${length}인 데이터`
    }
    params['ep_text'] = text;

    GADataScreen(params);
}

export default event_parameter_case3;