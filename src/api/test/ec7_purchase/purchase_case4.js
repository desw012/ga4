import {EcommerceSet} from "../index";

const purchase_case4 = () => {

    const action = {
        currency : 'KRW',
        value : 90000,
        transaction_id : new Date().getTime(),
        affiliation : "MyStore-1",
        coupon : "MyCoupon-1",
        shipping : 300000,
        tax : 900000
    }

    const items = [
        {
            item_id: "1",
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
            item_id: "2",
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
            item_id: "3",
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
        ep_TestCaseDescription : 'purchase_case4 - 배송비과, 세금이 비정상적인 경우'
    }

    EcommerceSet('purchase', items, action, [], dimensions, []);
}

export default purchase_case4;