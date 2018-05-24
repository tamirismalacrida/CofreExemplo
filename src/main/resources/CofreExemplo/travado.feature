# language: en
Feature: Verificar se o cofre aceita 
         senhas válidas e faz verificação de senhas inválidas 

Scenario: Solicitar abertura do cofre com senha inválida
Given que a porta do cofre esta travada
When pressionar o botão 1 do cofre
And  pressionar o botão 2 do cofre
And  pressionar o botão 3 do cofre
And  pressionar o botão 4 do cofre
And  pressionar o botão 6 do cofre
And  pressionar o botão 6 do cofre
And  pressionar o botão OK
Then deverá ser exibido o alerta "senha errada. Tente novamente"


Scenario: Solicitar abertura do cofre com a senha com menos de 6 dígitos
Given que a porta do cofre esta travada
When  pressionar o botão 1 do cofre
And  pressionar o botão OK
Then deverá ser exibido o alerta "senha errada. Tente novamente"

Given que a porta do cofre esta travada
When pressionar o botão 1 do cofre
And  pressionar o botão 1 do cofre
And  pressionar o botão OK
Then deverá ser exibido o alerta "senha errada. Tente novamente"


Scenario: Solicitar abertura do cofre com senha válida
Given que a porta do cofre esta travada
When pressionar o botão 1 do cofre
And  pressionar o botão 2 do cofre
And  pressionar o botão 3 do cofre
And  pressionar o botão 4 do cofre
And  pressionar o botão 5 do cofre
And  pressionar o botão 6 do cofre
And  pressionar o botão OK
Then deverá ser exibido o alerta "senha correta. Cofre aberto"
