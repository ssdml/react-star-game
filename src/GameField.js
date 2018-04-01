import React, { Component } from 'react';
import Star from './Star';

class GameField extends Component {
    render() {
        const clickHandler = this.props.clickHandler;
        const stars = this.props.stars.map(function (element) {
            return <Star settings={element} key={element.key} clickHandler={clickHandler}/>;
        });


        return (
            <div className="game-field">
                {stars}
            </div>
        );
    }
}

export default GameField;