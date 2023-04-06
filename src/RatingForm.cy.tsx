import React from 'react'
import { RatingForm } from './RatingForm'

describe('<RatingForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RatingForm />)
  })
})