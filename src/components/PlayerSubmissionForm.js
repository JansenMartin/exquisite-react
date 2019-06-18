import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstAdjective: undefined,
      firstNoun: undefined,
      adverb: undefined,
      verb: undefined,
      secondAdjective: undefined,
      secondNoun: undefined,
    }
  }


  onSubmitButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);

    const newSubmission = {
      firstAdjective: this.state.firstAdjective,
      firstNoun: this.state.firstNoun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      secondAdjective: this.state.secondAdjective,
      secondNoun: this.state.secondNoun,
    }

    this.setState({
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective: '',
      secondNoun: '',
    });

    this.props.receivePlayerSubmissionCallback(newSubmission);

  }

  onInputChange = (event) => {
    const updatedSubmission = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedSubmission[field] = value;
    this.setState(updatedSubmission);

  }

  render() {

    console.log(this.state);
    const { firstAdjective, firstNoun, adverb, verb, secondAdjective, secondNoun } = this.state;

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The
            <input
              name="firstAdjective"
              value={firstAdjective}
              onChange={this.onInputChange}
              placeholder="adjective"
              type="text" />

             <input
              name="firstNoun"
              value={firstNoun}
              onChange={this.onInputChange}
              placeholder="noun"
              type="text" />

              <input
              name="adverb"
              value={adverb}
              onChange={this.onInputChange}
              placeholder="adverb"
              type="text" />

              <input
              name="verb"
              value={verb}
              onChange={this.onInputChange}
              placeholder="verb"
              type="text" />

              the

              <input
              name="secondAdjective"
              value={secondAdjective}
              onChange={this.onInputChange}
              placeholder="adjective"
              type="text" />

              <input
              name="secondNoun"
              value={secondNoun}
              onChange={this.onInputChange}
              placeholder="noun"
              type="text" />
              .


          </div>

          <div className="PlayerSubmissionForm__submit">
            <input onClick={this.onSubmitButtonClick} type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  receivePlayerSubmissionCallback: PropTypes.func,
}

export default PlayerSubmissionForm;
