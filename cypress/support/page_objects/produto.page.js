class Produto {

    addProduto(nome, tamanho, cor, quantidade){
        cy.get('.product-block').contains(nome).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.woocommerce-variation-add-to-cart > .quantity').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        if(quantidade > 1){
            cy.get('.woocommerce-message')
        .should('contain', `${quantidade} × “${nome}” foram adicionados no seu carrinho.`)
        }else{
            cy.get('.woocommerce-message')
        .should('contain', `“${nome}” foi adicionado no seu carrinho.`)
        }
    }

}

export default new Produto()