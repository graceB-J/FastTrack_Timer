import React from 'react';
import './Button.js';
import './SelectionArea.css';

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
                <p>Please Select Your Fasting to Eating Ratio or enter the number of hours and minutes you'd like to fast on the right. </p>
                <div className="buttonDisplay">
                    <button className="FastRatio" onClick={() => this.props.handleAddFast(16)}> 16:8 </button>
                    <button className="FastRatio" onClick={() => this.props.handleAddFast(18)}> 18:6 </button>
                    <input type="number" id="hours" name="hours" maxLength="2" max="23" min="0" />
                    <input type="number" id="minutes" name="minutes" maxLength="2" max="59" min="0" />
                    <button className="Submit" onClick={() => this.props.handleAddFast(((document.getElementById("minutes").value / 60.0) +
                        parseInt(document.getElementById("hours").value)))}> Submit Custom </button>
                </div>
            </div>
        );
    }
}


export default SelectionArea;