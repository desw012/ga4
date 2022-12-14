import {EcommerceSet} from "../index";

const add_to_cart_case1 = () => {

    const action = {
        currency : 'KRW',
        value : 0
    }

    const items = []

    const dimensions = {
        ep_TestCaseDescription : 'add_to_cart_case1 - 아이템이 없는 경우 '
    }

    EcommerceSet('add_to_cart', items, action, [], dimensions, []);
}

export default add_to_cart_case1;