import {Accordion, Button, ListGroup, ListGroupItem} from "react-bootstrap";

function Home(){


    const buttonHandler = () => {
        window.sendEvent({
            event : 'ga-event',
            eventName : 'AAAA'
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Accordion>
                        <Accordion.Item eventKey="80">
                            <Accordion.Header>Event</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem className="ga-event" ga-ep1="TEST DATA" ga-ep2="TEST DATA2" onClick={ (event)=>{ } } as={Button}>screen_view_case1</ListGroupItem>
                                    <ListGroupItem className="ga-event" ga-ep1="TEST DATA" ga-ep2="TEST DATA2" onClick={ buttonHandler } as={Button}>screen_view_case1</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Home;