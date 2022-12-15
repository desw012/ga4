import {EcommerceSet} from "../index";
import purchase_mockup from "./purchase_mockup";

const refund_case1 = () => {
    const transaction_id = new Date().getTime()
    purchase_mockup(transaction_id, 'refund_case2 - 아이템이 없는 경우');

    const action = {
        currency : 'KRW',
        value : 90000,
        transaction_id : transaction_id,
        affiliation : "MyStore-1",
        coupon : "MyCoupon-1",
        shipping : 3000,
        tax : 9000
    }

    const items = [ ]

    const dimensions = {
        ep_TestCaseDescription : 'refund_case2 - 아이템이 없는 경우'
    }

    EcommerceSet('refund', items, action, [], dimensions, []);
}

export default refund_case1;