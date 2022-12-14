import {EcommerceSet} from "../index";

const purchase_case2 = () => {

    const action = {
        currency : 'KRW',
        value : 90000,
        transaction_id : new Date().getTime(),
        affiliation : "MyStore-1",
        coupon : "MyCoupon-1",
        shipping : 3000,
        tax : 9000
    }

    const items = []

    const dimensions = {
        ep_TestCaseDescription : 'purchase_case2 - 아이템이 없는 경우'
    }

    EcommerceSet('purchase', items, action, [], dimensions, []);
}

export default purchase_case2;