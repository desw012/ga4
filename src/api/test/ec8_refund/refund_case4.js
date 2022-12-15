import {EcommerceSet} from "../index";
import purchase_mockup from "./purchase_mockup";

const refund_case4 = () => {
    const transaction_id = new Date().getTime()
    purchase_mockup(transaction_id);

    const action = {
        currency : 'KRW',
        value : 9000,
        transaction_id : transaction_id,
        affiliation : "MyStore-1",
        coupon : "MyCoupon-1",
        shipping : 3000,
        tax : 9000
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
            price : 1000,
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
            price : 3000,
            quantity : 1
        },
        {
            item_id: "ITEM-3",
            item_name: "ITEM-3",
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
            price : 5000,
            quantity : 1
        }
    ]

    const dimensions = {
        ep_TestCaseDescription : 'refund_case4 - 환불 금액이 구매 금액이랑 다른 경우 '
    }

    EcommerceSet('refund', items, action, [], dimensions, []);
}

export default refund_case4;