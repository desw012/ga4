import {EcommerceSet} from "../index";

const begin_checkout_case2 = () => {

    const action = {
        currency : 'KRW',
        value : 90000,
        coupon : 'MyCoupon'
    }

    const items = []

    const dimensions = {
        ep_TestCaseDescription : 'begin_checkout_case2 - 아이템이 없는 경우 '
    }

    EcommerceSet('begin_checkout', items, action, [], dimensions, []);
}

export default begin_checkout_case2;