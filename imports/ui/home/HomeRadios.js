import React from 'react';
import PropTypes from 'prop-types';

export default class HomeRadios extends React.Component {
    render() {
        return (
            <label>
                <span className={this.props.class}>{this.props.label}</span>
                <input type="radio" name={this.props.name} value={this.props.val} checked={this.props.check} onChange={this.props.change}/> 
            </label>
        );
    }
}

HomeRadios.propTypes = {
    check: PropTypes.bool.isRequired,
    class: PropTypes.string,
    change: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    val: PropTypes.string.isRequired
}

HomeRadios.defaultProps = {
    class: 'span-score__Home'
}