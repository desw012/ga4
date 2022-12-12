import {Accordion, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {gtag} from "../gtag";

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
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>UA EVENT TEST</Accordion.Header>
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