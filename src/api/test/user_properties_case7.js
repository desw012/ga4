import {GADataScreen, makeTextByLength} from './index'


const user_properties_case7 = () => {
    const params = {
        title : 'TEST SCREEN',
        location : '/TEST/user_properties_case7',
        ep_TestCaseDescription : `user_properties_case7 - 예약된 prefix 인경우(google_, ga_, firebase_)`
    }
    params.google_test = 'TEST DATA'
    params.ga_test = 'TEST DATA'
    params.firebase_test = 'TEST DATA'

    GADataScreen(params);
}

export default user_properties_case7;