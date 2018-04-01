import React, { Component } from 'react';

import GameField from './GameField'
import Score from './Score'
import GameLogic from './GameLogic'

import './StarGame.css';

class StarGame extends Component {
    constructor () {
        super();

        this.starClickHandler = this.starClickHandler.bind(this);

        this.gameLogic = new GameLogic(10);
        const stars = this.gameLogic.getStars();

        this.state = {
            stars: stars,
            points: 0,
        };
    }


    starClickHandler(event) {
        const id = event.target.dataset.id;
        this.gameLogic.nextMove(id);
        this.setState({
            stars: this.gameLogic.getStars(),
            points: this.gameLogic.getPoints(),
        });
    }
    render() {
        return (
            <div>
                <GameField stars={this.state.stars} clickHandler={this.starClickHandler}/>
                <Score points={this.state.points} />
            </div>
        );
    }
}

export default StarGame;