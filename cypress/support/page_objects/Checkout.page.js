class Checkout{

    realizarCheckout(nome, sobrenome, empresa, pais, endereco, complementar, cidade, estado, cep, telefone, email){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        cy.get('[name="billing_first_name"]').clear().type(nome)
        cy.get('[name="billing_last_name"]').clear().type(sobrenome)
        cy.get('[name="billing_company"]').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('[name="billing_address_1"]').clear().type(endereco)
        cy.get('[name="billing_city"]').clear().type(cidade)
        cy.get('[name="billing_address_2"]').clear().type(complementar)
        cy.get('#select2-billing_state-container').type(estado + '{enter}')
        cy.get('[name="billing_postcode"]').clear().type(cep)
        cy.get('[name="billing_phone"]').clear().type(telefone)
        cy.get('[name="billing_email"]').clear().type(email)
        cy.get('.wc_payment_method.payment_method_bacs > [name="payment_method"]').check()
        cy.get('[name="terms"]').check()
        cy.get('[name="woocommerce_checkout_place_order"]').click()
    }

}

export default new Checkout()