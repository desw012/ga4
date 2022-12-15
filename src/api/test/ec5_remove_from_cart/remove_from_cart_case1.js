import {EcommerceSet} from "../index";

const remove_from_cart_case1 = () => {

    const action = {
        currency : 'KRW',
        value : 90000
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
        },
        {
            item_id: "ITEM-2",
            item_name: "ITEM-2",
            affiliation : "MyStore",
            coupon : "MyCoupon",
            currency : "KRW",
            discount : 0,
            index : 1,
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
            price : 30000,
            quantity : 1
        },
        {
            item_id: "ITEM-2",
            item_name: "ITEM-2",
            affiliation : "MyStore",
            coupon : "MyCoupon",
            currency : "KRW",
            discount : 1000,
            index : 2,
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
            price : 50000,
            quantity : 1
        }
    ]

    const dimensions = {
        ep_TestCaseDescription : 'remove_from_cart_case1 - 정상적인 요청 '
    }

    EcommerceSet('remove_from_cart', items, action, [], dimensions, []);
}

export default remove_from_cart_case1;