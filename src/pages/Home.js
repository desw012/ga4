import {Accordion, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {gtag} from "../gtag";
import screen_view_case1 from "../api/test/screen_view_case1";
import screen_view_case4 from "../api/test/screen_view_case4";
import screen_view_case3 from "../api/test/screen_view_case3";
import screen_view_case2 from "../api/test/screen_view_case2";
import screen_view_case5 from "../api/test/screen_view_case5";
import screen_view_case6 from "../api/test/screen_view_case6";
import event_case1 from "../api/test/event_case1";
import event_case2 from "../api/test/event_case2";
import event_case3 from "../api/test/event_case3";
import view_item_list_case1 from "../api/test/ec1_view_item_list/view_item_list_case1";
import view_item_list_case2 from "../api/test/ec1_view_item_list/view_item_list_case2";
import event_parameter_case1 from "../api/test/event_parameter_case1";
import view_item_list_case3 from "../api/test/ec1_view_item_list/view_item_list_case3";
import select_item_case1 from "../api/test/ec2_select_item/select_item_case1";
import select_item_case2 from "../api/test/ec2_select_item/select_item_case2";
import select_item_case3 from "../api/test/ec2_select_item/select_item_case3";
import view_item_case1 from "../api/test/ec3_view_item/view_item_case1";
import view_item_case3 from "../api/test/ec3_view_item/view_item_case3";
import view_item_case4 from "../api/test/ec3_view_item/view_item_case4";
import view_item_case5 from "../api/test/ec3_view_item/view_item_case5";
import view_item_case6 from "../api/test/ec3_view_item/view_item_case6";
import view_item_case2 from "../api/test/ec3_view_item/view_item_case2";
import add_to_cart_case1 from "../api/test/ec4_add_to_cart/add_to_cart_case1";
import add_to_cart_case2 from "../api/test/ec4_add_to_cart/add_to_cart_case2";
import add_to_cart_case3 from "../api/test/ec4_add_to_cart/add_to_cart_case3";
import add_to_cart_case4 from "../api/test/ec4_add_to_cart/add_to_cart_case4";
import remove_from_cart_case1 from "../api/test/ec5_remove_from_cart/remove_from_cart_case1";
import remove_from_cart_case2 from "../api/test/ec5_remove_from_cart/remove_from_cart_case2";
import remove_from_cart_case3 from "../api/test/ec5_remove_from_cart/remove_from_cart_case3";
import remove_from_cart_case4 from "../api/test/ec5_remove_from_cart/remove_from_cart_case4";
import purchase_case1 from "../api/test/ec8_refund/purchase_mockup";
import purchase_case2 from "../api/test/ec7_purchase/purchase_case2";
import purchase_case3 from "../api/test/ec7_purchase/purchase_case3";
import purchase_case4 from "../api/test/ec7_purchase/purchase_case4";
import purchase_case5 from "../api/test/ec7_purchase/purchase_case5";
import refund_case1 from "../api/test/ec8_refund/refund_case1";
import refund_case2 from "../api/test/ec8_refund/refund_case2";
import refund_case3 from "../api/test/ec8_refund/refund_case3";
import refund_case4 from "../api/test/ec8_refund/refund_case4";
import event_parameter_case2 from "../api/test/event_parameter_case2";
import event_parameter_case3 from "../api/test/event_parameter_case3";
import event_parameter_case4 from "../api/test/event_parameter_case4";
import event_parameter_case5 from "../api/test/event_parameter_case5";
import user_properties_case1 from "../api/test/user_properties_case1";
import user_properties_case2 from "../api/test/user_properties_case2";
import user_properties_case3 from "../api/test/user_properties_case3";
import user_properties_case5 from "../api/test/user_properties_case5";
import user_properties_case4 from "../api/test/user_properties_case4";
import begin_checkout_case1 from "../api/test/ec6_begin_checkout/begin_checkout_case1";
import begin_checkout_case2 from "../api/test/ec6_begin_checkout/begin_checkout_case2";
import begin_checkout_case3 from "../api/test/ec6_begin_checkout/begin_checkout_case3";
import view_item_list_case4 from "../api/test/ec1_view_item_list/view_item_list_case4";

function Home(){
    const pageViewHandler = () => {
        gtag('event', 'myEvent');
    }

    const purchase = ()=>{
        // gtag("event",  "purchase",  {
        //     "transaction_id": "00002",
        //     "items": [{
        //         "id": "P001",
        //         "name": "제품1"
        //     }]
        // });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Accordion>
                        <Accordion.Item eventKey="100">
                            <Accordion.Header>SCREEN VIEW</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { screen_view_case1() } } as={Button}>screen_view_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case2() } } as={Button}>screen_view_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case3() } } as={Button}>screen_view_case3</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case4() } } as={Button}>screen_view_case4</ListGroupItem>

                                    <ListGroupItem onClick={ () => { screen_view_case5(101) } } as={Button}>screen_view_case5(101)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case5(100) } } as={Button}>screen_view_case5(100)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case6(101) } } as={Button}>screen_view_case6(101)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case6(100) } } as={Button}>screen_view_case6(100)</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="99">
                            <Accordion.Header>Event Parameter Test</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { event_parameter_case1() } } as={Button}>event_parameter_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { event_parameter_case2() } } as={Button}>event_parameter_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { event_parameter_case3(1000) } } as={Button}>event_parameter_case3(1000)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { event_parameter_case3(101) } } as={Button}>event_parameter_case3(101)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { event_parameter_case4(1000) } } as={Button}>event_parameter_case4(1000)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { event_parameter_case5() } } as={Button}>event_parameter_case5</ListGroupItem>

                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="98">
                            <Accordion.Header>User Properties Test</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { user_properties_case1() } } as={Button}>user_properties_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { user_properties_case2() } } as={Button}>user_properties_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { user_properties_case3(1000) } } as={Button}>user_properties_case3(1000)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { user_properties_case3(36) } } as={Button}>user_properties_case3(36)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { user_properties_case4(25) } } as={Button}>user_properties_case4(25)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { user_properties_case5() } } as={Button}>user_properties_case5</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="101">
                            <Accordion.Header>EVENT VIEW</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { event_case1() } } as={Button}>event_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { event_case2() } } as={Button}>event_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { event_case3() } } as={Button}>event_case3</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="102">
                            <Accordion.Header>E-COMMERCE TEST (view_item_list)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { view_item_list_case1() } } as={Button}>view_item_list_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_list_case2() } } as={Button}>view_item_list_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_list_case3() } } as={Button}>view_item_list_case3</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_list_case4(101) } } as={Button}>view_item_list_case4(101)</ListGroupItem>


                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="103">
                            <Accordion.Header>E-COMMERCE TEST (select_item)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { select_item_case1() } } as={Button}>select_item_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { select_item_case2() } } as={Button}>select_item_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { select_item_case3() } } as={Button}>select_item_case3</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="104">
                            <Accordion.Header>E-COMMERCE TEST (view_item)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { view_item_case1() } } as={Button}>view_item_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_case2() } } as={Button}>view_item_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_case3() } } as={Button}>view_item_case3</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_case4() } } as={Button}>view_item_case4</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_case5() } } as={Button}>view_item_case5</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_case6() } } as={Button}>view_item_case6</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="105">
                            <Accordion.Header>E-COMMERCE TEST (add_to_cart)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { add_to_cart_case1() } } as={Button}>add_to_cart_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { add_to_cart_case2() } } as={Button}>add_to_cart_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { add_to_cart_case3() } } as={Button}>add_to_cart_case3</ListGroupItem>
                                    <ListGroupItem onClick={ () => { add_to_cart_case4() } } as={Button}>add_to_cart_case4</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="106">
                            <Accordion.Header>E-COMMERCE TEST (remove_to_cart)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { remove_from_cart_case1() } } as={Button}>remove_from_cart_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { remove_from_cart_case2() } } as={Button}>remove_from_cart_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { remove_from_cart_case3() } } as={Button}>remove_from_cart_case3</ListGroupItem>
                                    <ListGroupItem onClick={ () => { remove_from_cart_case4() } } as={Button}>remove_from_cart_case4</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="107">
                            <Accordion.Header>E-COMMERCE TEST (begin_checkout)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { begin_checkout_case1() } } as={Button}>begin_checkout_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { begin_checkout_case2() } } as={Button}>begin_checkout_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { begin_checkout_case3() } } as={Button}>begin_checkout_case3</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="108">
                            <Accordion.Header>E-COMMERCE TEST (purchase)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { purchase_case1() } } as={Button}>purchase_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { purchase_case2() } } as={Button}>purchase_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { purchase_case3() } } as={Button}>purchase_case3</ListGroupItem>
                                    <ListGroupItem onClick={ () => { purchase_case4() } } as={Button}>purchase_case4</ListGroupItem>
                                    <ListGroupItem onClick={ () => { purchase_case5() } } as={Button}>purchase_case5</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="109">
                            <Accordion.Header>E-COMMERCE TEST (refund)</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { refund_case1() } } as={Button}>refund_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { refund_case2() } } as={Button}>refund_case2</ListGroupItem>
                                    <ListGroupItem onClick={ () => { refund_case3() } } as={Button}>refund_case3</ListGroupItem>
                                    <ListGroupItem onClick={ () => { refund_case4() } } as={Button}>refund_case4</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>EVENT TEST</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={pageViewHandler} as={Button}>Event TEST</ListGroupItem>
                                    <ListGroupItem onClick={purchase} as={Button}>Event TEST purchase</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>GA4/GTM E-COMMERCE TEST</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={pageViewHandler} as={Button}>구매</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Other Domain Link</Accordion.Header>
                            <Accordion.Body>
                                <a href="https://www.naver.com" target="_blank" onClick={(e)=>{e.stopPropagation();}}>NAVER</a>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Home;