import React from 'react';
import HornedBeasts from './HornedBeasts';
import infoData from './data.json';
import { Row, Form } from 'react-bootstrap/';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            horns:'all',
            arr:infoData,
        }
        this.filter = this.filter.bind(this);
    }
    filter (event) {
        event.preventDefault();
        
        this.setState({
            horns:event.target.value,
        }) 
        if(event.target.value != 'all'){
            this.setState({
                arr:infoData.filter(a => a.horns == event.target.value)
            })
           
        }else{
            this.setState({
                arr:infoData,
            })
        }

       
    }
    render() {
        return (
            <>

                <div className='container' >
                
                    <Form >
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>how many horns?</Form.Label>
                            <Form.Control as="select" custom name='select1' onChange={this.filter}>
                               <option value='all'>all</option>
                                <option value='1'>one</option>
                                <option value='2'>two</option>
                                <option value='3'>three</option>
                                <option value='100'>Wow..</option> 
                            </Form.Control>
                        </Form.Group>
                    </Form>
                  
                    <Row xs={1} md={3} className="g-4">
                        {this.state.arr.map((item, idx) => 
                            <HornedBeasts
                                title={item.title}
                                imageUrl={item.image_url}
                                description={item.description}
                                key={idx.toString()}

                            />
                        
                        )}
                    </Row>


                </div>
            </>

        )
    }
}
export default Main;