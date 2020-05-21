import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import "./FastSurvey.css";

class FastSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: "true",
            difficulty: "Just Right",
            additionalComments: ""
        };
    }

    handleRadioChangeD = (value) => {
        this.setState(prevState => {
            prevState.difficulty = value;
            return prevState;
        });
    }

    handleRadioChangeS = (value) => {
        this.setState(prevState => {
            prevState.success = value;
            return prevState;
        });
    }

    handleCommentChange = (event) => {
        this.setState({ additionalComments: event.target.value })
    };

    render() {
        return (
            <div className="SelectionAreaBox">
                <div className="FastRatio">
                    <Form>
                        <Form.Group as={Form.Row} controlId="difficulty">
                            <Form.Label as="legend" column sm={2}>
                                How was your fast?
                            </Form.Label>
                            <Form.Check
                                type="radio" label="Too Easy" name="formHorizontalRadios" id="easy" />
                            <Form.Check
                                type="radio" label="Just Right" name="formHorizontalRadios" id="perfect" />
                            <Form.Check
                                type="radio" label="Too Hard" name="formHorizontalRadios" id="hard" />
                        </Form.Group>

                        {/* <label for="Easy">Too Easy</label>
                        <input type="radio" name="difficulty" id="Easy" value="Easy" required></input>
                        <label for="Perfect">Just Right</label>
                        <input type="radio" name="difficulty" id="Perfect" value="Perfect"></input>
                        <label for="Hard">Too Hard</label>
                        <input type="radio" name="difficulty" id="Hard" value="Hard"></input> */}

                        <Form.Group as={Form.Row} controlId="success">
                            <Form.Label as="legend" column sm={2}>
                                Did you successfully complete it?
                            </Form.Label>
                            <Form.Check
                                type="radio" label="Yes" name="formHorizontalRadios" id="Yes" value="Yes" required />
                            <Form.Check
                                type="radio" label="No" name="formHorizontalRadios" id="No" value="No" />
                        </Form.Group>

                        {/* <p>Did you successfully complete it?</p>
                        <label for="Yes">Yes</label>
                        <input type="radio" name="success" id="Yes" value="Yes" required></input>
                        <label for="No">No</label>
                        <input type="radio" name="success" id="No" value="No"></input> */}

                        {/* <div className="AdditionalComments">
                            <input type="text" id="comments" value={this.state.additionalComments} onChange={this.handleCommentChange} name="commments" required maxLength="140" placeholder="Additional Comments" />  
                        </div> */}
                        <Form.Group controlId="comments">
                            <Form.Label>Additional Comments</Form.Label>
                            <Form.Control as="textarea" rows="2" value={this.state.additionalComments} onChange={this.handleCommentChange} name="commments" required maxLength="140" placeholder="Additional Comments" />
                        </Form.Group>
                        <Button className="Submit" onClick={() => this.props.handleAddSurvey(this.state)}> Submit </Button>
                    </Form>
                </div>
            </div >
        );
    }
}

export default FastSurvey;