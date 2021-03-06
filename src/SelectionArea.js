import React from 'react';
import './SelectionArea.css';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


class SelectionArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="SelectionAreaBox">
                <div className="FastRatioButtons">
                    <Container>
                        <Button className="FastRatioButtons" onClick={() => this.props.handleAddFast(16)}> 16:8 </Button>
                        <Button className="FastRatioButtons" onClick={() => this.props.handleAddFast(18)}> 18:6 </Button>
                        <InputGroup className="CustomRatio">
                            <InputGroup.Prepend>
                            </InputGroup.Prepend>
                            <FormControl type="number" id="hours" name="hours" required minLength="1" required maxLength="2" placeholder="Hours here" />
                            <FormControl type="number" id="minutes" name="minutes" required minLength="1" required maxLength="2" placeholder="Minutes here" />
                        </InputGroup>
                        <div>
                            <Button
                                className="Submit"
                                onClick={() => this.props.handleAddFast(parseFloat(document.getElementById("minutes").value) / 60.0 + parseFloat(document.getElementById("hours").value))}>
                                Submit Custom Time
                            </Button>
                        </div>

                    </Container>
                </div>
            </div >
        );
    }
}


export default SelectionArea;