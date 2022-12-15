import {EcommerceSet} from "../index";

const remove_from_cart_case2 = () => {

    const action = {
        currency : 'KRW',
        value : 50000
    }

    const items = [
        {
            item_id: "ITEM-4",
            item_name: "ITEM-4",
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
            price : 50000,
            quantity : 1
        }
    ]

    const dimensions = {
        ep_TestCaseDescription : 'remove_from_cart_case2 - 등록되지 않는 아이템을 제거하는 경우'
    }

    EcommerceSet('remove_from_cart', items, action, [], dimensions, []);
}

export default remove_from_cart_case2;