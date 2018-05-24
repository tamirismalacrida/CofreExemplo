# language: en
Feature: Verificar se o cofre faz validação de senhas inválidas

Scenario: Teste de inicialização do cofre
Given que foi executada a inicialização do cofre
Then deverá ser exibido o alerta "Entre com a senha 6 digitos" 
And e o cofre será destravado


Scenario: Teste de apagar dados digitados
Given que foi executada a função de limpar dados
Then nada será mostrado


Scenario: Teste com a porta não fechada
Given que a porta do cofre estará aberta
When pressionar o botão 1 do cofre
And  pressionar o botão 2 do cofre
And  pressionar o botão 3 do cofre
And  pressionar o botão 4 do cofre
And  pressionar o botão 5 do cofre
And  pressionar o botão 6 do cofre
And  pressionar o botão 7 do cofre
And  pressionar o botão 8 do cofre
And  pressionar o botão 9 do cofre
And  pressionar o botão OK
Then deverá ser exibido o alerta "Feche a porta antes de digitar a senha"


Scenario: Teste para digitar um numero com a porta fechada
Given que a porta do cofre está fechada
When pressionar o botão 0 do cofre
Then deverá ser exibido o alerta "0"


Scenario: Teste para gravar senha valida para a porta fechada e destravada 
Given que a porta do cofre esta fechada e destravada
When pressionar o botão 1 do cofre
And  pressionar o botão 9 do cofre
And  pressionar o botão 3 do cofre
And  pressionar o botão 5 do cofre
And  pressionar o botão 6 do cofre
And  pressionar o botão 6 do cofre
And  pressionar o botão OK
Then deverá ser exibido o alerta "Senha salva. Cofre trancado"


Scenario: Teste de senha com menos de 6 dígitos
Given que a porta do cofre está fechada
When pressionar o botão 1 do cofre
Then deverá ser exibido o alerta "senha precisa de 6 digitos. Tente novamente"
Given que a porta do cofre está fechada
When pressionar o botão 1 do cofre
And  pressionar o botão 1 do cofre
Then deverá ser exibido o alerta "senha precisa de 6 digitos. Tente novamente"


Scenario: Teste para digitar numeros com a porta do cofre fechada  e posteriormente abrir e poder digitar novamente
Given que a porta do cofre está fechada
When pressionar o botão 9 do cofre
And  pressionar o botão 8 do cofre
Then deverá ser exibido o alerta "98"
Given que porta será aberta
When pressionar o botão 7 do cofre
Then deverá ser exibido o alerta "Feche a porta antes de digitar a senha"
Given que porta será fechada
When pressionar o botão 7 do cofre
Then deverá ser exibido o alerta "7"
