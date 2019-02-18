import React, { Component } from 'react'

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';

export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true}); 
        const order = {
           ingredients: this.state.ingredients,
           price: this.props.price,
           customer: {
               name: 'Aaron Gravelle',
               address: {
                   street: 'Sesame St',
                   zipCode: '12345',
                   country: 'USA'
               },
               email: 'test@test.com'
           },
           deliveryMethod: 'fastest'
       }
        axios.post('/orders.json', order)
            .then( response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        let form = (
            <form>
                    <input className={styles.Input} type="text" name="name" placeholder="Your name" />
                    <input className={styles.Input} type="email" name="email" placeholder="Your email" />
                    <input className={styles.Input}  type="text" name="street" placeholder="Street" />
                    <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
