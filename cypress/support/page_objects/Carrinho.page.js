class Carrinho {
    validarCarrinho(Produtos, quantidadeCarrinho) {
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        for (var i = 0; i < quantidadeCarrinho; i++) {
            this.validarProduto(
                Produtos[i].nome,
                Produtos[i].tamanho,
                Produtos[i].cor,
                Produtos[i].preco
            )
        }
    }

    validarProduto(nome, tamanho, cor, preco) {
        cy.get('.product-name > a')
            .should('contain', `${nome} - ${tamanho}, ${cor}`)
        cy.get('.product-price').should('contain', preco)
    }
}

    export default new Carrinho()