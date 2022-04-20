import React from 'react'
import { Link } from 'react-router-dom'

function ChefChoice() {
  return (
    <div>
      <section className="salad-images">
      <div className="container box-choice primary-font text-white-color">
        <h2 className="secondary-font larger-text text-primary-color bottom-margin">Chef's Choice</h2>
        <h3 className="bottom-margin">Prime Steer Beef</h3>
        <p className="choice-text">Wild West Sizzler with classic cu from the short loin, it has an exterior or fat along one side</p>
        <Link to='/restaurant-menu'>
        <button className="custom-button">View More</button>
        </Link>
      </div>
    </section>
    </div>
  )
}

export default ChefChoice