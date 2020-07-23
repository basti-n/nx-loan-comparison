import { getGreeting, getTutorialLink } from '../support/app.po';

describe('loan-comparison', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to loan-comparison!');
  });

  it('should navigate to the tutorial when clicking on the tutorial link', () => {
    const link = getTutorialLink();
    link.contains('tutorial');

    link.click();
    cy.url().should(
      'equal',
      'https://nx.dev/angular/tutorial/01-create-application'
    );
  });
});
