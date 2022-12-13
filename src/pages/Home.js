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
import view_item_list_case1 from "../api/test/view_item_list/view_item_list_case1";
import view_item_list_case2 from "../api/test/view_item_list/view_item_list_case2";

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

                                    <ListGroupItem onClick={ () => { screen_view_case5(101) } } as={Button}>screen_view_case5(100)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case5(100) } } as={Button}>screen_view_case5(101)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case6(100) } } as={Button}>screen_view_case6(100)</ListGroupItem>
                                    <ListGroupItem onClick={ () => { screen_view_case6(101) } } as={Button}>screen_view_case6(101)</ListGroupItem>
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
                            <Accordion.Header>E-COMMERCE TEST</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={ () => { view_item_list_case1() } } as={Button}>view_item_list_case1</ListGroupItem>
                                    <ListGroupItem onClick={ () => { view_item_list_case2() } } as={Button}>view_item_list_case2</ListGroupItem>

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