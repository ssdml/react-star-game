import React, { Component } from 'react';

class Star extends Component {
    render() {
        const classes = "game-field__star game-field__star_type-" + this.props.settings.color + (this.props.settings.selected ? " game-field__star_selected" : "");
        return <div className={classes} onClick={this.props.clickHandler} data-id={this.props.settings.key}></div>;
    }
}

export default Star;