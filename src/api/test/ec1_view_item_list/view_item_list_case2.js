import {EcommerceSet} from "../index";

const view_item_list_case2 = () => {

    const action = {
        item_list_id : 'MY_ITEM_LIST_ID',
        item_list_name : 'MY_ITEM_LIST_NAME'
    }

    const items = [];

    const dimensions = {
        ep_TestCaseDescription : 'view_item_list_case2 - 아이템이 없는 경우 '
    }

    EcommerceSet('view_item_list', items, action, [], dimensions, []);
}

export default view_item_list_case2;