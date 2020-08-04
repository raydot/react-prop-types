/**
 * Requiring Single Child
 * With PropTypes.element you can specify that only a single child can
 * be passed to a component as children.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return <div>{children}</div>;
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

/**
 * Default Prop Values
 * You can define default values for your props by assigning the special defaultProps
 * property:
 */

 class Greeting extends React.Component {
     render() {
         return (
             <h1>Hello, {this.props.name}</h1>
         )
     }
 }

 // Specified the default values for props:
 Greeting.defaultProps = {
     name: 'Stranger'
 }

 // Renders "Hello, Stranger":
 ReactDOM.render(
     <Greeting />
     document.getElementById('example')
 )

 /**
  * If you are using a Babel transform like transform-class-properties, you can also
  * declare defaultProps as a static property within a React component class.  This
  * syntax has not yet been finalized, though, and will require a compilation step to 
  * work within a browser (https://github.com/tc39/proposal-class-fields)
  */

  class Greeting extends React.Component {
      static defaultProps = {
          name: 'stranger'
      }

      render() {
          return (
              <div>Hello, {this.props.name}</div>
          )
      }
  }