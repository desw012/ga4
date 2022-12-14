import {EcommerceSet} from "../index";

const select_item_case2 = () => {

    const action = {
        item_list_id : 'MY_ITEM_LIST_ID',
        item_list_name : 'MY_ITEM_LIST_NAME',
    }

    const items = []

    const dimensions = {
        ep_TestCaseDescription : 'select_item_case2 - 아이템이 없는 경우'
    }

    EcommerceSet('select_item', items, action, [], dimensions, []);
}

export default select_item_case2;