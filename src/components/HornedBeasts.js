import React from 'react';
import Main from './Main';
import Card from 'react-bootstrap/Card';
class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberClick: 0
        }
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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" onClick={this.onClickHundel} src={this.props.imageUrl} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <p>❤ : {this.state.numberClick}</p>
                            <p>{this.props.description}</p>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeasts;