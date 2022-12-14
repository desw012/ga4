import {EcommerceSet} from "../index";

const select_item_case4 = () => {

    const action = {
        item_list_id : 'MY_ITEM_LIST_ID',
        item_list_name : 'MY_ITEM_LIST_NAME',
    }

    const items = [
        {
            affiliation : "MyStore",
            coupon : "MyCoupon",
            currency : "KRW",
            discount : 0,
            index : 0,
            item_brand : "My",
            item_category : "의복",
            item_category2 : "성인",
            item_category3 : "셔츠",
            item_category4 : "",
            item_category5 : "",
            item_list_id : "MY_ITEM_LIST_ID",
            item_list_name : "MY_ITEM_LIST_NAME",
            item_variant : "흰색",
            location_id : "ChIJe2MupwCkfDURFTPUEriw-i0",
            price : 10000,
            quantity : 1
        }
    ]

    const dimensions = {
        ep_TestCaseDescription : 'select_item_case4 - 아이템 필수 값이 없는 경우'
    }

    EcommerceSet('select_item', items, action, [], dimensions, []);
}

export default select_item_case4;