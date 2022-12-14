import { GADataScreen } from './index'


const user_properties_case1 = () => {
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case1',
        ep_TestCaseDescription : 'user_properties_case1 - 정상적인 요청'
    }
    for (let i = 0; i < 20; i++){
        params[`up_param${i}`] = `TEST DATA ${i}`;
    }

    GADataScreen(params);
}

export default user_properties_case1;