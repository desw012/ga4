import { GADataScreen } from './index'


const event_parameter_case1 = () => {
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case1',
        ep_TestCaseDescription : 'event_parameter_case1 - 정상적인 요청'
    }
    for (let i = 0; i < 20; i++){
        params[`ep_param${i}`] = `TEST DATA ${i}`;
    }

    GADataScreen(params);
}

export default event_parameter_case1;