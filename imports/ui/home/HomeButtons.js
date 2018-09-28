import React from 'react';
import PropTypes from 'prop-types';

export default class HomeButtons extends React.Component {
    render() {
        return(
            <span>
                <button className={this.props.class} type="button" name={this.props.name} onClick={this.props.click}>{this.props.label}</button>
            </span>
        );
    }
}

HomeButtons.propTypes = {
    class: PropTypes.string,
    click: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

HomeButtons.defaultProps = {
    class: 'btn btn--spacing__Home'
}