import React, { Component } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer";

import "./Scoreboard.css";

export default class Scoreboard extends Component {
  state = {
    players: [
      { name: "Kelley", score: 11, id: 1 },
      { name: "David", score: 14, id: 2 },
      { name: "Rein", score: 4, id: 3 }
    ]
  };
  // ----
  addPlayer = name => {
    const player = {
      id: Math.round(Math.random() * 100000),
      name,
      score: 0
    };
    this.setState({
      //players: this.state.players.concat(player)
      players: [...this.state.players, player]
    });
  };
  // ---
  renderPlayer = player => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        incrementScore={this.incrementScoreOfPlayer}
      />
    );
  };

  incrementScoreOfPlayer = id => {
    // Making a new array with the same objects except for the
    //  one that should be updated,
    const updatedPlayers = this.state.players.map(player => {
      if (player.id === id) {
        // ...which we replace with a copy of the original,
        //  except for the property `score` which is incremented
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    // Finally, we use `this.setState` to replace the players array
    this.setState({ players: updatedPlayers });
  };

  render() {
    const players_copy = [...this.state.players];
    // sorting the players
    players_copy.sort((a, b) => b.score - a.score);

    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>{players_copy.map(this.renderPlayer)}</ul>
        <AddPlayer handleAddPlayer={this.addPlayer} />
      </div>
    );
  }
}
