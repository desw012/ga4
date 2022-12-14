import { GADataScreen } from './index'


const event_parameter_case2 = () => {
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case2',
        ep_TestCaseDescription : 'event_parameter_case2 - 25 초과의 이벤트 파라미터 추가'
    }
    for (let i = 0; i < 30; i++){
        params[`ep_param${i}`] = `TEST DATA ${i}`;
    }

    GADataScreen(params);
}

export default event_parameter_case2;