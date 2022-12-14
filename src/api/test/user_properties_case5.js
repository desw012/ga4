import {GADataScreen, makeTextByLength} from './index'


const user_properties_case5 = () => {
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/user_properties_case5',
        ep_TestCaseDescription : `user_properties_case5 - 특수 문자가 포함된 키 인경우`
    }
    params[`up_!@#$%^^&*`] = 'TEST DATA';

    GADataScreen(params);
}

export default user_properties_case5;