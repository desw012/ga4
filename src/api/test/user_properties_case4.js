import {GADataScreen, makeTextByLength} from './index'


const user_properties_case4 = (length) => {
    const text = makeTextByLength(length - 'up_'.length);

    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/user_properties_case4',
        ep_TestCaseDescription : `user_properties_case4 - 사용자 속성의 length가 ${length}인 데이터`
    }
    params[`up_${text}`] = 'TEST DATA';

    GADataScreen(params);
}

export default user_properties_case4;