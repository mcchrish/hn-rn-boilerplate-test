/*
 *
 * Top
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTop from './selectors';
import { fetchListData } from './actions';

export class Top extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
  }

  onClick() {
    this.props.onClick();
  }

  renderItems(items) {
    const _items = items.slice(1, 25);
    return _items.map(item => {
      return (
        <p key={item.id}>{item.title}</p>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>get news!</button>
        <div>
          {this.renderItems(this.props.Top.items)}
        </div>
      </div>
    );
  }
}

Top.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Top: makeSelectTop(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(fetchListData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Top);
