import {GADataScreen, makeTextByLength} from './index'


const user_properties_case3 = (length) => {
    const text = makeTextByLength(length);

    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case3',
        ep_TestCaseDescription : `user_properties_case3 - length가 ${length}인 데이터`
    }
    params['up_prop1'] = text;

    GADataScreen(params);
}

export default user_properties_case3;