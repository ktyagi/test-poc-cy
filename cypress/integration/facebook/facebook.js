import './post'


Given(`User {string} is logged in successfully`, (user) => {
  cy.get('[data-testid="bookmark_icon_left_nav"] + div').first().should('contain', user)
})

when('User Navigates to Profile', () => {
  cy.get('a[title="Profile"]').click()
})

Then(`Want to create post with {string}`, (postText) => {
  cy.createPost(postText)
})

Then(`Want to like all posts with {string}`, (postText) => {
  cy.likePost(postText)
})


Then(`Want to delete all posts with {string}`, (postText) => {
  cy.deletePost(postText)
})