/*
 *
 * Show
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectShow from './selectors';
import messages from './messages';

export class Show extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Show"
          meta={[
            { name: 'description', content: 'Description of Show' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Show.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Show: makeSelectShow(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
