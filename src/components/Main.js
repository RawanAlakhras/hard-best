import React from 'react';
import HornedBeasts from './HornedBeasts';
import infoData from  './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component{
    render(){
        return(
            <div className='container'>
                {/* <HornedBeasts title={'Rawan'} imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} description={'Mother (or father) rhino with two babies'}/>
                <HornedBeasts title={'Rawan'} imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} description={'Mother (or father) rhino with two babies'}/> */}
                <Row xs={1} md={3} className="g-4">
                    {infoData.map((item, idx) => (
                        <Col>
                           <HornedBeasts 
                                title= {item.title}
                                imageUrl={item.image_url}
                                description = {item.description}

                           />
                        </Col>
                    ))}
                </Row>
            </div>
            
        )
    }
}
export default Main;