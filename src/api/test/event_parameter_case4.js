import {GADataScreen, makeTextByLength} from './index'


const event_parameter_case4 = (length) => {
    const text = makeTextByLength(length - 'ep_'.length);
    
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/event_parameter_case3',
        ep_TestCaseDescription : `event_parameter_case4 - 이벤트 파라미터의 length가 ${length}인 데이터`
    }
    params[`ep_${text}`] = 'TEST DATA';

    GADataScreen(params);
}

export default event_parameter_case4;