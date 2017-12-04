import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Modal from './components/Modal/Modal.js';
import ClickCard from './components/ClickCard/ClickCard.js';
import Footer from './components/Footer/Footer.js';
import cards from './cards.json';


class App extends Component {
  state = {
      cards: cards,
      score: 0,
      topScore: 0,
      clickedCards: []
    }

  clickedCharacter = (id) => {
    console.log('Character id: ' + id);

    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []})
      alert('Game Over, Idiot')

    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        window.confirm('Brilliant! Play again?');
        this.setState({score: 0, clickedCards: []})
      } 
    }



  }

  // I copy and pasted this randomize array function from 'Fisher-Yates Shuffle'
  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:cards});
  }

  renderCards = (array) => {
    return this.state.cards.map(card => (
      <div className='col s4 m3 l3' key={card.id} id={card.id}>
        <ClickCard
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
      </div>
      )
    )
  }


  render() {
    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Modal />
        <br />
        <div className="container row">
          {this.renderCards(this.state.cards)}
        </div>
        <Footer />
      </div>
    );
  }
}





export default App;




