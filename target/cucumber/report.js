$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/cofreexemplo/destravado.feature");
formatter.feature({
  "name": "Verificar se o cofre faz validação de senhas inválidas",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Teste de inicialização do cofre",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que foi executada a inicialização do cofre",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_foi_executada_a_inicialização_do_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"Entre com a senha 6 digitos\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e o cofre será destravado",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.e_o_cofre_será_destravado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teste de apagar dados digitados",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que foi executada a função de limpar dados",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_foi_executada_a_função_de_limpar_dados()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nada será mostrado",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.nada_será_mostrado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teste com a porta não fechada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre estará aberta",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_do_cofre_estará_aberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 2 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 3 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 4 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 5 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 6 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 7 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 8 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 9 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão OK",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"Feche a porta antes de digitar a senha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teste para digitar um numero com a porta fechada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre está fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_do_cofre_está_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 0 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teste para gravar senha valida para a porta fechada e destravada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre esta fechada e destravada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_do_cofre_esta_fechada_e_destravada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 9 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 3 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 5 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 6 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 6 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão OK",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"Senha salva. Cofre trancado\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teste de senha com menos de 6 dígitos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre está fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_do_cofre_está_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"senha precisa de 6 digitos. Tente novamente\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[senha precisa de 6 digitos. Tente novamente]\u003e but was:\u003c[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat TesteCucumber.DestravadoStep.deverá_ser_exibido_o_alerta(DestravadoStep.java:39)\r\n\tat ✽.deverá ser exibido o alerta \"senha precisa de 6 digitos. Tente novamente\"(src/main/resources/cofreexemplo/destravado.feature:51)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "que a porta do cofre está fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_do_cofre_está_fechada()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"senha precisa de 6 digitos. Tente novamente\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Teste para digitar numeros com a porta do cofre fechada  e posteriormente abrir e poder digitar novamente",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre está fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_do_cofre_está_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 9 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 8 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"98\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que porta será aberta",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_porta_será_aberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 7 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"Feche a porta antes de digitar a senha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que porta será fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_porta_será_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 7 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/main/resources/cofreexemplo/travado.feature");
formatter.feature({
  "name": "Verificar se o cofre aceita",
  "description": "         senhas válidas e faz verificação de senhas inválidas ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Solicitar abertura do cofre com senha inválida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre esta travada",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoStep.que_a_porta_do_cofre_esta_travada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat TesteCucumber.DestravadoStep.pressionar_o_botão_do_cofre(DestravadoStep.java:78)\r\n\tat ✽.pressionar o botão 1 do cofre(src/main/resources/cofreexemplo/travado.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "pressionar o botão 2 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 3 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 4 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 6 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 6 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão OK",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_OK()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"senha errada. Tente novamente\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Solicitar abertura do cofre com a senha com menos de 6 dígitos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre esta travada",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoStep.que_a_porta_do_cofre_esta_travada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat TesteCucumber.DestravadoStep.pressionar_o_botão_do_cofre(DestravadoStep.java:78)\r\n\tat ✽.pressionar o botão 1 do cofre(src/main/resources/cofreexemplo/travado.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "pressionar o botão OK",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_OK()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"senha errada. Tente novamente\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "que a porta do cofre esta travada",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoStep.que_a_porta_do_cofre_esta_travada()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão OK",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_OK()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"senha errada. Tente novamente\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Solicitar abertura do cofre com senha válida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta do cofre esta travada",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoStep.que_a_porta_do_cofre_esta_travada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionar o botão 1 do cofre",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat TesteCucumber.DestravadoStep.pressionar_o_botão_do_cofre(DestravadoStep.java:78)\r\n\tat ✽.pressionar o botão 1 do cofre(src/main/resources/cofreexemplo/travado.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "pressionar o botão 2 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 3 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 4 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 5 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão 6 do cofre",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_do_cofre(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pressionar o botão OK",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.pressionar_o_botão_OK()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deverá ser exibido o alerta \"senha correta. Cofre aberto\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.deverá_ser_exibido_o_alerta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/main/resources/cofreexemplo/validador.feature");
formatter.feature({
  "name": "Verificar se o cofre faz validação",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Teste para verificação de números",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando digitado somente caracteres numéricos é um valor válido",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadorStep.quando_digitado_somente_caracteres_numéricos_é_um_valor_válido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "um valor nulo será um valor inválido",
  "keyword": "And "
});
formatter.match({
  "location": "ValidadorStep.um_valor_nulo_será_um_valor_inválido()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teste para verificação de senha válida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando digitado uma senha com caracteres letras e números é uma senha inválida",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadorStep.quando_digitado_uma_senha_com_caracteres_letras_e_números_é_uma_senha_inválida()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "uma senha válida somente é composta por caracteres numéricos",
  "keyword": "And "
});
formatter.match({
  "location": "ValidadorStep.uma_senha_válida_somente_é_composta_por_caracteres_numéricos()"
});
formatter.result({
  "status": "passed"
});
});