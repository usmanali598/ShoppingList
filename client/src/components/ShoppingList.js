import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Container } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class ShoppingList extends Component
{
    state = {
        items: [
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'fruits' },
            { id: uuid(), name: 'vegetables' },
            { id: uuid(), name: 'Yougurt' },
        ]
    }

    render()
    {
        const { items } = this.state;
        return (
            <div>
                <Container>
                    <Button
                        color="dark"
                        style={ { marginBottom: '2rem' } }
                        onClick={ () =>
                        {
                            const name = prompt( 'Enter Item' );
                            if ( name )
                            {
                                this.setState( state => ( {
                                    items: [ ...state.items, { id: uuid(), name: name } ]
                                } ) );
                            }
                        } }> Add Item</Button>

                    <ListGroup>
                        <TransitionGroup className='shopping-list'>
                            { items.map( ( { id, name } ) => (
                                <CSSTransition key={ id } timeout={ 500 } classNames='fade'>
                                    <ListGroupItem>
                                        <Button className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={ () =>
                                            {
                                                this.setState( state => ( {
                                                    items: state.items.filter( item => item.id !== id )
                                                } ) )
                                            } }
                                        >
                                            &times;
                                        </Button>
                                        { name }
                                    </ListGroupItem>
                                </CSSTransition>
                            ) ) }
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default ShoppingList;