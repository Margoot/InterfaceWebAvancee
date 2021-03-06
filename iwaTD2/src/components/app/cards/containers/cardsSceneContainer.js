/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import CardsScene from '../scenes/cardsScene';

export default class CardsSceneContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ['Margot','Guillaume','Amaury', 'Julie'],
      showModal: false,
      newName: '',
    }
  }

  openModal(){
    this.setState({showModal: true});
  }

  addCard() {
    this.state.name.push(this.state.newName);
    this.setState({showModal: false});
  }

  deleteCard(i) {
    console.log(i.i);
    // this.state.name.splice(i,1);
  }

  closeModal(){
    this.setState({showModal: false})
  }

  updateName(event) {
    this.setState({newName: event.target.value});
  }

  render() {
    return (
      <CardsScene
        name={this.state.name}
        newName={this.state.newName}
        showModal={this.state.showModal}
        closeModal={this.closeModal.bind(this)}
        addCard={this.addCard.bind(this)}
        openModal={this.openModal.bind(this)}
        updateName={this.updateName.bind(this)}
        deleteCard={this.deleteCard.bind(this)}
      />
    )
  }
}