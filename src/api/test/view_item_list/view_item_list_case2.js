import {EcommerceSet} from "../index";

const view_item_list_case2 = () => {

    const action = {
        currencyCode : 'KRW'
    }

    const items = undefined;

    const dimensions = {
        ep_TestCaseDescription : 'view_item_list_case2 - 아이템이 없는 경우 '
    }

    EcommerceSet('view_item_list', items, action, [], dimensions, []);
}

export default view_item_list_case2;