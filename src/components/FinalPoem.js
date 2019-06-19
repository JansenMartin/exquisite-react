import React from 'react';
import PropTypes from 'prop-types';

import './FinalPoem.css';

const FinalPoem = (props) => {

  // console.log(props);

  const { finalSubmission } = props;

  // console.log(finalSubmission);

  const finalPoem = finalSubmission.map(line => <p>{line}</p>);

  // console.log(finalPoem);

  // const finalPoem = {finalSubmission}.map((line) => {

  //   return (
  //     <p>
  //       {line}
  //     </p>
  //   )

  // });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

        {finalPoem}

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  finalSubmission: PropTypes.arrayOf(PropTypes.string),
}

export default FinalPoem;
