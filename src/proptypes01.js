// React has some built-in typechecking abilities.
// To run typechecking on the props for a component,
// you can assign the special propTypes property.

/**
 * PropTypes exports a range of validators that can be used to make sure the
 * data you receive is value.  In this example, we're using PropTypes.string.abs
 * When an invalid value is provided for a prop, a warning will be shown in the
 * JavaScript console.  For performance reasons, propTypes is only checked in
 * development mode.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};
