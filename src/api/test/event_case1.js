import {GA_Event, GA_Event2, GADataScreen} from './index'

const event_case1 = (category, action, label) => {
    GA_Event2({
        category : 'MyCategory',
        action : 'MyAction',
        label : 'MyLabel',
        eventName : 'click1',
        ep_TestCaseDescription : `event_case - 정상적인 요청`
    });
}

export default event_case1;