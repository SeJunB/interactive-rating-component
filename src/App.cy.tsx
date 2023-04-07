import React from 'react'
import App from './App'

describe('<App />', () => {
    const submitButton = 'button[data-cy="btn-submit"]';
    const getRatingButton = (r: number) => `li[data-cy=rating-${r}`;

    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<App />)
    })

    it('No Rating is selected initially', () => {
        cy.mount(<App />);
        [1, 2, 3, 4, 5].map((r) =>
            cy.get(getRatingButton(r)).should('have.class',
                'rating-background cursor-pointer hover:bg-orange hover:text-white'));
    });

    it('If the user presses the submit button while a rating has not been selected, then display an error message.',
        () => {
            cy.mount(<App />);
            cy.get(submitButton).click();
            cy.get('p[data-cy="no-rating-selected-error-msg"]').should('have.text', 'Please select a rating');
        });

    it('If the user presses a rating button and clicks submit, the rating should be displayed on the next page.', () => {
        cy.mount(<App/>);
        [1, 2, 3, 4, 5].map((r) => {
                cy.get(getRatingButton(r)).click();
                cy.get(submitButton).click();
                cy.get('h2[data-cy="rating-confirm"]').should('have.text', `You selected ${r} out of 5.`);
                cy.get('button[data-cy="btn-to-rating-form"]').click();
        });
    });



})
