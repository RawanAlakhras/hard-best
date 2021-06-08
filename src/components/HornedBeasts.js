import React from 'react';
import Card from 'react-bootstrap/Card';
import {Modal,Button} from 'react-bootstrap/'
class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberClick: 0,
            show:false,

        }
    }

    handelClick = ()=>{
        this.setState({
            show:true,
        })
    }
    handleClose =()=>{
        this.setState({
            show:false,
        })
    }
    onClickHundel = () => {
        this.setState({
            numberClick: this.state.numberClick + 1
        })
    }


    render() {
        return (
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <img onClick={this.onClickHundel} src={this.props.imageUrl} />
            //     <p>{this.props.description}</p>
            //     <p>❤ : {this.state.numberClick}</p>
            // </div>

            <div>
                <Card style={{ width: '18rem' }} onClick={this.handelClick}>
                    <Card.Img variant="top" onClick={this.onClickHundel} src={this.props.imageUrl} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                                ❤ : {this.state.numberClick}
                        </Card.Text>
                        <Card.Text>
                                {this.props.description}
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.description}
          <img src={this.props.imageUrl} alt={this.props.title} className='card-img-top'></img>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}
export default HornedBeasts;