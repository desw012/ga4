import {GA_Event, GADataScreen} from './index'

const event_case1 = (category, action, label) => {
    GA_Event('MyCategory', 'MyAction', 'MyLabel');
}

export default event_case1;