import {EcommerceSet} from "../index";

const view_item_case1 = () => {

    const action = {
        currency : 'KRW',
        value : 10000
    }

    const items = [
        {
            item_id: "ITEM-1",
            item_name: "ITEM-1",
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
        ep_TestCaseDescription : 'view_item_case1 - 정상적인 요청 '
    }

    EcommerceSet('view_item', items, action, [], dimensions, []);
}

export default view_item_case1;