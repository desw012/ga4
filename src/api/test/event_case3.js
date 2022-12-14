import {GA_Event2, makeTextByLength } from './index'

const event_case1 = (category, action, label) => {
    GA_Event2({
        category : 'MyCategory',
        action : 'MyAction',
        label : 'MyLabel',
        eventName : 'eventName:!',
        ep_TestCaseDescription : `event_case3 - 허용하지 않은 특수문자를 가진 eventName인 경우`
    });
}

export default event_case1;