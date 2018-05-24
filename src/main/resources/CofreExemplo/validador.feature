# language: en
Feature: Verificar se o cofre faz validação


Scenario: Teste para verificação de números
Then quando digitado somente caracteres numéricos é um valor válido
And um valor nulo será um valor inválido


Scenario: Teste para verificação de senha válida
Then quando digitado uma senha com caracteres letras e números é uma senha inválida
And uma senha válida somente é composta por caracteres numéricos

