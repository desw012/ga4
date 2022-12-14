import { GADataScreen } from './index'


const user_properties_case2 = () => {
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case2',
        ep_TestCaseDescription : 'user_properties_case2 - 25 초과의 사용자 속성 추가'
    }
    for (let i = 0; i < 30; i++){
        params[`up_param${i}`] = `TEST DATA ${i}`;
    }

    GADataScreen(params);
}

export default user_properties_case2;