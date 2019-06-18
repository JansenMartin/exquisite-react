import React from 'react';
import PropTypes from 'prop-types';

import './RecentSubmission.css';

const RecentSubmission = (props) => {
  
  const { recentSubmission } = props;

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ recentSubmission }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  recentSubmission: PropTypes.string,
}

export default RecentSubmission;
