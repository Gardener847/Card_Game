import React from 'react';
import PropTypes from 'prop-types';

export default class HomeSubHeader extends React.Component {
    render() {
        return(
            <div className="text-labels-heading__Home">
                {this.props.label}
            </div>
        );
    }
}

HomeSubHeader.propTypes = {
    class: PropTypes.string,
    label: PropTypes.string.isRequired
}

HomeSubHeader.defaultProps = {
    class: 'text-labels-heading__Home'
}