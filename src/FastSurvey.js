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
            additionalComments: "",
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

                        <Form.Group as={Form.Row} controlId="success">
                            <Form.Label as="legend" column sm={2}>
                                Did you successfully complete it?
                            </Form.Label>
                            <Form.Check
                                type="radio" label="Yes" name="formHorizontalRadios" id="Yes" value="Yes" required />
                            <Form.Check
                                type="radio" label="No" name="formHorizontalRadios" id="No" value="No" />
                        </Form.Group>
                        
                        <Form.Group controlId="comments">
                            <Form.Label>Additional Comments</Form.Label>
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