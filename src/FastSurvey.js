import React from 'react';
import './Button.js';
import { RadioGroup, Radio } from 'react-radio-group';
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
                    <p>How was your fast?</p>
                    {/* <RadioGroup name="difficulty" selectedValue={this.state.selectedValue} onChange={this.handleRadioChangeD}>
                        <Radio value="Too Easy" />Too Easy
                            <Radio value="Just Right" />Just Right
                            <Radio value="Too Hard" />Too Hard
                        </RadioGroup>
                    <p>Did you successfully complete it?</p>
                    <RadioGroup name="success" selectedValue={this.state.selectedValue} onChange={this.handleRadioChangeS}>
                        <Radio value="Yes" />Yes
                            <Radio value="No" />No
                        </RadioGroup> */}
                    <label for="Easy">Too Easy</label>
                    <input type="radio" name="difficulty" id="Easy" value="Easy" required></input>
                    <label for="Perfect">Just Right</label>
                    <input type="radio" name="difficulty" id="Perfect" value="Perfect"></input>
                    <label for="Hard">Too Hard</label>
                    <input type="radio" name="difficulty" id="Hard" value="Hard"></input>

                    <p>Did you successfully complete it?</p>
                    <label for="Yes">Yes</label>
                    <input type="radio" name="success" id="Yes" value="Yes" required></input>
                    <label for="No">No</label>
                    <input type="radio" name="success" id="No" value="No"></input>

                    <div className="AdditionalComments">
                        <input type="text" id="comments" value={this.state.additionalComments} onChange={this.handleCommentChange} name="commments" required maxLength="140" placeholder="Additional Comments" />
                        <button className="Submit" onClick={() => this.props.handleAddSurvey(this.state)}> Submit </button>

                    </div>
                </div>
            </div >
        );
    }
}



export default FastSurvey;