import {GA_Event2, makeTextByLength } from './index'

const event_case1 = (category, action, label) => {

    const text = makeTextByLength(1000);

    GA_Event2({
        category : 'MyCategory',
        action : 'MyAction',
        label : 'MyLabel',
        eventName : 'eventName' + text,
        ep_TestCaseDescription : `event_case2 - 비 정상적인 eventName length인 경우`
    });
}

export default event_case1;