import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Modal from './components/Modal/Modal.js';
import ClickCard from './components/ClickCard/ClickCard.js';
import cards from './cards.json';


class App extends Component {
  state = {
      cards: cards
    }


  renderCards = (array) => {
    return this.state.cards.map(card => (
      <div className='col s4 m3 l3'>
        <ClickCard
          key={card.id} 
          name={card.name} 
          image={card.image} />
      </div>
      )
    )
  }


  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Modal />
        <br />
        <div className="container row">
          {this.renderCards(this.state.cards)}
        </div>
      </div>
    );
  }
}





export default App;




