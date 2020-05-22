import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./FastSurvey.css";

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class FastSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: "Yes",
            difficulty: "Just Right",
            additionalComments: "",
        };
    }

    handleRadioChangeS = (value) => {
        this.setState(prevState => {
            prevState.success = value;
            return prevState;
        });
        console.log(this.state.success);
    }

    handleRadioChangeD = (value) => {
        this.setState(prevState => {
            prevState.difficulty = value;
            return prevState;
        });
        console.log(this.state.difficulty);
    }

    handleCommentChange = (event) => {
        this.setState({ additionalComments: event.target.value })
    };

    render() {
        return (
            <div className="SelectionAreaBox">
                <div className="FastRatio">
                    <Form>
                        <h3>Was the fast successful?</h3>
                        <ToggleButtonGroup onChange={this.handleRadioChangeS}
                            type="radio" name="success" defaultValue={"Yes"}>
                            <ToggleButton
                                type="radio" name="radio" value="Yes">
                                Yes
                            </ToggleButton>
                            <ToggleButton
                                type="radio" name="radio" value="No">
                                No
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <h3>How did it go?</h3>
                        <ToggleButtonGroup onChange={this.handleRadioChangeD}
                            type="radio" name="difficulty" defaultValue={"Just Right"}>
                            <ToggleButton
                                type="radio" name="radio" defaultChecked value="Too Easy">
                                Too Easy
                            </ToggleButton>
                            <ToggleButton
                                type="radio" name="radio" value="Just Right">
                                Just Right
                            </ToggleButton>
                            <ToggleButton
                                type="radio" name="radio" value="Too Hard">
                                Too Hard
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <Form.Group controlId="comments">
                            <h3>Additional Comments</h3>
                            <Form.Control as="textarea" rows="2" value={this.state.additionalComments} onChange={this.handleCommentChange} name="commments" maxLength="140" placeholder="Additional Comments" required />
                        </Form.Group>
                        <Button className="Submit" onClick={() => this.props.handleAddSurvey(this.state)}> Submit </Button>
                    </Form>
                </div>
            </div >
        );
    }
}

export default FastSurvey;