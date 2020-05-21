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
                <p className="InfoStyle">Intermittent fasting, also known as intermittent energy restriction,
                is an umbrella term for various meal timing schedules that cycle
                between voluntary fasting and non-fasting over a given period.
                Three methods of intermittent fasting are alternate-day fasting,
                    periodic fasting, and daily time-restricted feeding.</p>
                <p>Please select your fasting to eating ratio or enter the number of hours and minutes you'd like to fast on the right. </p>
                <div className="FastRatioButtons">
                    <Container>
                        <Button className="FastRatioButtons" onClick={() => this.props.handleAddFast(16)}> 16:8 </Button>
                        <Button className="FastRatioButtons" onClick={() => this.props.handleAddFast(18)}> 18:6 </Button>
                        <div className="CustomRatio">
                            <div>
                                <InputGroup className="CustomRatio">
                                    <InputGroup.Prepend>
                                    </InputGroup.Prepend>
                                    <FormControl type="number" id="hours" name="hours" required minLength="1" required maxLength="2" required max="23" min="0" placeholder="Hours" />
                                    <FormControl type="number" id="minutes" name="minutes" required minLength="1" required maxLength="2" required max="59" min="0" placeholder="Minutes" />
                                </InputGroup>
                            </div>
                            <div>
                                <Button className="Submit" onClick={() => this.props.handleAddFast(parseInt(document.getElementById("minutes").value) / 60.0 + parseInt(document.getElementById("hours").value))}> Submit Custom </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}


export default SelectionArea;