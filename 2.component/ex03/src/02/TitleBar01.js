import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    constructor(props){
        super(props);

    }

    OnClickHander() {
        console.log('TitleBar01 clicked!!');
    }

    render() {
        return (
            <div>
                <h1
                    onClick={this.OnClickHander} >
                    Class Handler
                </h1>
            </div>
        )
    }
}