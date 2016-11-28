/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Modal, Button,InputGroup,FormControl } from 'react-bootstrap';

const CardsScene = (props) => {
  return (
    <div>
      {props.name.map((name,i) => (
        <Card>
          <CardHeader style={{textAlign: 'center'}}
            title={name}
          />
          <CardActions style={{textAlign: 'right'}}>
            <FlatButton labelStyle={{fontSize: 10}} label="Delete"/>
          </CardActions>
        </Card>
      ))}
      <Card>
        <CardActions style={{paddingLeft: 550}}>
          <FlatButton labelStyle={{fontSize: 30}} label="+" onClick={props.openModal} />
        </CardActions>
      </Card>
      <Modal show={props.showModal}>
        <Modal.Header>
          <Modal.Title>Add a card</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup>
            <InputGroup.Addon>Name</InputGroup.Addon>
            <FormControl type="text" onChange={props.updateName}/>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.closeModal}>Close</Button>
          <Button bsStyle="primary" onClick={props.addCard}>Save</Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
};

export default CardsScene;