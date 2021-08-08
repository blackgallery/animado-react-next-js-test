import React, {Component, Fragment} from 'react';
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor";

class FunfactItem extends Component {

    state = {
        appear: false
    }

    visibleChangeHandler = (isVisible) => {
        if(isVisible){
            this.setState({
                appear: true
            })
        }
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="facts_wrapper"> 
                    <h3 className="stat-count count">
                        <CountUp start={this.state.appear ? 0 : null} end={this.props.counterNumber}>
                            {({ countUpRef }) => (
                                <Fragment>
                                    <span ref={countUpRef} />
                                    <VisibilitySensor
                                        onChange={(isVisible) => this.visibleChangeHandler(isVisible)}>
                                        <span className="math-symb">{this.props.mathSymbol}</span>
                                    </VisibilitySensor>
                                </Fragment>
                            )}
                        </CountUp>
                    </h3>
                     {/* End: Counter Number */}

                    <h5>{this.props.counterText}</h5>
                    {/* Counter Text */}
                    
                </div>
            </div>
        );
    }
}

export default FunfactItem;