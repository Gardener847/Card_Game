import React from 'react';
import PropTypes from 'prop-types';

export default class HomeCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: this.props.rendType
        }
    }
    render() {
        let rndr;
        if (this.props.diff == 0) {
            rndr = (
                <label className="card-label__Home-s">
                    <input type="checkbox" checked={this.props.check} disabled={this.props.check} className="card-input__Home" name={this.props.oddEven} value={this.props.value} onChange={this.props.change}/>
                    <div className="card">
                        <div className="front">
                            <img className="img--size__Home-s" src="/images/cardDesign.jpg" alt="Card Design"/>
                        </div>
                        <div className="back-s">
                            {this.state.render}
                        </div>
                    </div>
                </label>
            );
        }
        else if (this.props.diff == 1) {
            rndr = (
                <label className="card-label__Home-m">
                    <input type="checkbox" checked={this.props.check} disabled={this.props.check} className="card-input__Home" name={this.props.oddEven} value={this.props.value} onChange={this.props.change}/>
                    <div className="card">
                        <div className="front">
                            <img className="img--size__Home-m" src="/images/cardDesign.jpg" alt="Card Design"/>
                        </div>
                        <div className="back-m">
                            {this.state.render}
                        </div>
                    </div>
                </label>
            );
        }
        else if (this.props.diff == 2) {
            rndr = (
                <label className="card-label__Home-h">
                    <input type="checkbox" checked={this.props.check} disabled={this.props.check} className="card-input__Home" name={this.props.oddEven} value={this.props.value} onChange={this.props.change}/>
                    <div className="card">
                        <div className="front">
                            <img className="img--size__Home-h" src="/images/cardDesign.jpg" alt="Card Design"/>
                        </div>
                        <div className="back-h">
                            {this.state.render}
                        </div>
                    </div>
                </label>
            );
        }
        return(
            <span className="span-card--spacing__Home">
                {rndr}
            </span>
        );
    }
}

HomeCards.propTypes = {
    check: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired
}