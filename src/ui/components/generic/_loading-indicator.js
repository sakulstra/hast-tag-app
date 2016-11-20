import React, { Component } from 'react';

class Loadingindicator extends Component{
    state = {
        ival: null,
        dots: ''
    };

    componentWillUnmount() {
        const {ival} = this.state;
        clearInterval(ival);
    }

    increase() {
        this.setState({dots: `${this.state.dots}.`});
    }

    render() {
        const {ival, dots} = this.state;
        if (!ival) {
            const iv = setInterval(() => {
                this.increase();
            }, 500);
            this.setState({ival: iv});
        }
        return (
            <div>
                #Loading{dots}
            </div>
        );
    }
}

export default Loadingindicator;