import {GADataScreen, makeTextByLength} from './index'


const event_parameter_case5 = () => {

    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case5',
        ep_TestCaseDescription : `event_parameter_case5 - 특수 문자가 포함된 키 인경우`
    }
    params['ep_!@#$%^^&*'] = 'TEST DATA';

    GADataScreen(params);
}

export default event_parameter_case5;