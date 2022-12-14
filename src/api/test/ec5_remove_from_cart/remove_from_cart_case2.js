import {EcommerceSet} from "../index";

const remove_from_cart_case2 = () => {

    const action = {
        currency : 'KRW',
        value : 90000
    }

    const items = [ ]

    const dimensions = {
        ep_TestCaseDescription : 'remove_from_cart_case2 - 아이템이 없는 경우'
    }

    EcommerceSet('remove_from_cart', items, action, [], dimensions, []);
}

export default remove_from_cart_case2;