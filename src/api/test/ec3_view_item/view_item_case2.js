import {EcommerceSet} from "../index";

const view_item_case2 = () => {

    const action = {
        currency : 'KRW',
        value : 10000
    }

    const items = [];

    const dimensions = {
        ep_TestCaseDescription : 'view_item_case2 - 아이템이 없는 경우 '
    }

    EcommerceSet('view_item', items, action, [], dimensions, []);
}

export default view_item_case2;