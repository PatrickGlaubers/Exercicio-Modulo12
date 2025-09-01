/// <reference types="cypress" />

import ProdutoPage from "../support/page_objects/produto.page"
import CarrinhoPage from "../support/page_objects/Carrinho.page"
import CheckoutPage from "../support/page_objects/Checkout.page"
const produtos = require('../fixtures/produtos.json')

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var quantidadeProduto = 1
        var quantidadeCarrinho = 4
        for(var i = 0; i < quantidadeCarrinho; i++){
            ProdutoPage.addProduto(
            produtos[i].nome,
            produtos[i].tamanho,
            produtos[i].cor, quantidadeProduto)
            cy.get('#primary-menu > .menu-item-629 > a').click()
        }

        CarrinhoPage.validarCarrinho(produtos, quantidadeCarrinho)
        CheckoutPage.realizarCheckout()

        
        
    });


})