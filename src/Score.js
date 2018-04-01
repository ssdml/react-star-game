import React, { Component } from 'react';

class Scope extends Component {
    render () {
        return <div className="score">Очки: {this.props.points}</div>
    }
}

export default Scope;