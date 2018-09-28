import React from 'react';
import PropTypes from 'prop-types';

export default class HomeScores extends React.Component {
    render() {
        return(
            <span className={this.props.outClass}>
                <span className={this.props.inClass}>
                    {this.props.label}
                </span>
                {this.props.score}
            </span>
        );
    }
}

HomeScores.propTypes = {
    outClass: PropTypes.string,
    inClass: PropTypes.string,
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
}

HomeScores.defaultProps = {
    outClass: 'span-score__Home',
    inClass: 'score-labels__Home'
}