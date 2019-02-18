import React from 'react'
import PropTypes from 'prop-types'

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary.module.css';

function CheckoutSummary(props) {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes great!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
          <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button 
        btnType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

CheckoutSummary.propTypes = {

}

export default CheckoutSummary

