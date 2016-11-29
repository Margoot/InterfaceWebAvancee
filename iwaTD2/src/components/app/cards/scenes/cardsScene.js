/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Modal, Button,InputGroup,FormControl } from 'react-bootstrap';

const CardsScene = (props) => {
  return (
    <div>
      <div style={{marginLeft: 40}}>
        <FloatingActionButton onClick={props.openModal} mini={true}>
          <ContentAdd style={{fontSize:20, color: 'white'}}>+</ContentAdd>
        </FloatingActionButton>
      </div>
      {props.name.map((name,i) => (
        <Card key={i}>
          <CardHeader style={{textAlign: 'center'}}
            title={name}
          />
          <CardActions style={{textAlign: 'right'}}>
            <Button key={i} style={{fontSize: 10}} onClick={props.deleteCard({i})}>DELETE</Button>
          </CardActions>
        </Card>
      ))}
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