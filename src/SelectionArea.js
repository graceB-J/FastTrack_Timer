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
                <div className="FastRatio">
                    <button className="FastRatio" onClick={() => this.props.handleAddFast(16)}> 16:8 </button>
                    <button className="FastRatio" onClick={() => this.props.handleAddFast(18)}> 18:6 </button>
                    <div className="CustomRatio">
                        <input type="number" id="hours" name="hours" required minLength="1" required maxLength="2" required max="23" min="0" placeholder="Hr" />
                        <input type="number" id="minutes" name="minutes" required minLength="1" required maxLength="2" required max="59" min="0" placeholder="Min" />
                        <button className="Submit" onClick={() => this.props.handleAddFast(((parseInt(document.getElementById("minutes").value) / 60.0) +
                            parseInt(document.getElementById("hours").value)))}> Submit Custom </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default SelectionArea;