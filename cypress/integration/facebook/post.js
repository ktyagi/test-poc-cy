//Create post 
function createPost($subject, postText) {
    cy
        .get('[data-referrer="profile_timeline_overview_switcher_pagelet"]').should('be.visible')
        .get('div[data-testid="status-attachment-mentions-input"]').click({ force: true })
        .get('div[data-testid="status-attachment-mentions-input"]').type(postText)
        .get('[data-testid="react-composer-post-button"]').click({ force: true })
        .get('[data-testid="expanded-sprout-list"]').should('not.exist')
        .get('[data-referrer="profile_timeline_overview_switcher_pagelet"]').should('be.visible')
        .get('div[class*="userContent"] p').then(($el) => {
            cy.wrap($el).first().invoke('text').should('eq', postText)
        })
    return cy.wrap($subject)
}

(function addCreatePost() {
    Cypress.Commands.add("createPost", { prevSubject: 'optional' }, createPost)
})();

// like no of posts matchig given text and loaded in page
function likePost($subject, postText) {
    let postFound = [];
    cy
        .get('[data-referrer="profile_timeline_overview_switcher_pagelet"]').should('be.visible')
        .scrollPage(Cypress.env("NO_OF_SCROLL"))
        .get('[class*="userContentWrapper"]').find('p').each(($el, index, $els) => {
            let post = $el.text().toLowerCase()
            if (post === postText) {
                postFound.push(post)
                cy.wrap($el).closest('div[class*="userContentWrapper"]').then(($el) => {
                    let noOfLiked = $el.find('a[data-testid="UFI2ReactionsCount/root"] > span[aria-hidden="true"] > span')
                    cy.log("No of like by others: " + noOfLiked.length)
                    cy.wrap($el).closest('div[class*="userContentWrapper"]').then(($el) => {
                        let currentUserLiked = $el.find("div[data-testid='UFI2ReactionLink/actionLink'] > div a[aria-pressed='true']")
                        if (currentUserLiked.length === 0) {
                            cy.wrap($el).find("div[data-testid='UFI2ReactionLink/actionLink'] > div a[aria-pressed='false']").click({ force: true })
                            cy.wrap($el).find("div[data-testid='UFI2ReactionLink/actionLink'] > div a").should('have.attr', 'aria-pressed', 'true')
                        } else {
                            cy.log("Already liked by Current User ")
                        }
                    })
                })
            }
            if (index + 1 === $els.length && postFound.length > 0) {
                postFound.forEach((el) => {
                    cy.log("Post liked " + el)
                })
            }
            if (index + 1 === $els.length) {
                cy.log("No of Post liked " + postFound.length)
            }
        }).then(() => { expect(postFound.length).to.be.greaterThan(0) })
    return cy.wrap($subject)
}


(function addlikePost() {
    Cypress.Commands.add("likePost", { prevSubject: 'optional' }, likePost)
})();

// Delete no of posts matchig given text and loaded in page
function deletePost($subject, postText) {
    let postFound = [];
    cy.get('[data-referrer="profile_timeline_overview_switcher_pagelet"]').should('be.visible')
        .scrollPage(Cypress.env("NO_OF_SCROLL"))
        .get('[class*="userContentWrapper"]').find('p').each(($el, index, $els) => {
            let post = $el.text().toLowerCase()
            if (post === postText) {
                postFound.push(post)
                cy.wrap($el).closest('div[class*="userContentWrapper"]').then(($ele) =>{
                    cy.wrap($ele).find('a[data-testid="post_chevron_button"]').click();
                    cy.get('a[data-feed-option-name="FeedDeleteOption"]').click({ force: true })
                    cy.get('button[class*="uiOverlayButton"]').click({ force: true })
                    cy.wrap($el).closest('div[class*="userContentWrapper"] p').should('not.exist')
                })
            }
            if (index + 1 === $els.length && postFound.length > 0) {
                postFound.forEach((el) => {
                    cy.log("Post deleted " + el)
                })
            }
            if (index + 1 === $els.length) {
                cy.log("No of Post deleted " + postFound.length)
            }
        }).then(() => { expect(postFound.length).to.be.greaterThan(0) })
    return cy.wrap($subject)
}


(function adddeletePost() {
    Cypress.Commands.add("deletePost", { prevSubject: 'optional' }, deletePost)
})();