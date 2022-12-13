import {EcommerceSet} from "../index";

const view_item_list_case1 = () => {

    const action = {
        item_list_id : 'MY_ITEM_LIST_ID',
        item_list_name : 'MY_ITEM_LIST_NAME',
    }

    const items = [
        {
            item_id: "1",
            item_name: "ITEM-1",
            affiliation : "",
            coupon : "",
            currency : "",
            discount : "",
            index : "",
            item_brand : "",
            item_category : "",
            item_category2 : "",
            item_category3 : "",
            item_category4 : "",
            item_category5 : "",
            item_list_id : "",
            item_list_name : "",
            item_variant : "",
            location_id : "",
            price : "",
            quantity : ""
        },
        {
            item_id: "2",
            item_name: "ITEM-1"
        }
    ]

    const dimensions = {
        ep_TestCaseDescription : 'view_item_list_case1 - 정상적인 요청 '
    }

    EcommerceSet('view_item_list', items, action, [], dimensions, []);
}

export default view_item_list_case1;