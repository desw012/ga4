import {EcommerceSet} from "../index";
import purchase_mockup from "./purchase_mockup";
import purchase_mockup2 from "./purchase_mockup2";
import purchase_mockup3 from "./purchase_mockup3";

const refund_case8 = () => {
    const transaction_id = new Date().getTime()
    const prefix = 'T1';
    purchase_mockup3('', 'refund_case8 - 구매, 환불 : 트랜젝션 아이디가 없는 경우', prefix);

    const action = {
        currency : 'KRW',
        value : 40000,
        // transaction_id : transaction_id,
        affiliation : "MyStore-1",
        coupon : "MyCoupon-1",
        shipping : 3000,
        tax : 9000
    }

    const items = [
        {
            item_id: `${prefix}ITEM-1`,
            item_name: `${prefix}ITEM-1`,
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
            item_id: `${prefix}ITEM-2`,
            item_name: `${prefix}ITEM-2`,
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
            item_id: `${prefix}ITEM-3`,
            item_name: `${prefix}ITEM-3`,
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
        ep_TestCaseDescription : 'refund_case8 - 구매, 환불 : 트랜젝션 아이디가 없는 경우'
    }

    EcommerceSet('refund', items, action, [], dimensions, []);
    EcommerceSet('refund', items, action, [], dimensions, []);
}

export default refund_case8;