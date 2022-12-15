import {GADataScreen, makeTextByLength} from './index'


const user_properties_case6 = () => {
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/user_properties_case6',
        ep_TestCaseDescription : `user_properties_case6 - 예약된 사용자 속성으로 전송 시(first_open_time)`
    }
    params.first_open_time = new Date().getTime();

    GADataScreen(params);
}

export default user_properties_case6;