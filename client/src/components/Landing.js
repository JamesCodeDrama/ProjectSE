import React, {Component} from 'react'
import {connect} from 'react-redux'

class Landing extends Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>
                    JanChan
                </h1>
                Collect sadness from the bottom of your heart
            </div>
        )
    }
}

export default connect()(Landing)