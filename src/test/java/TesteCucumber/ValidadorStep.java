/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package TesteCucumber;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cofre.ValidacaoHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
/**
 *
 * @author Tamiris
 */
public class ValidadorStep {
     
    SensorPorta sensorMock;
    Memoria memoriaMock;
    CofrePM cofrePM;
    
@Then("^quando digitado somente caracteres numéricos é um valor válido$")
public void quando_digitado_somente_caracteres_numéricos_é_um_valor_válido() throws Exception {
    assertTrue(ValidacaoHelper.ehSenhaValida("120491"));
}

@Then("^um valor nulo será um valor inválido$")
public void um_valor_nulo_será_um_valor_inválido() throws Exception {
    assertFalse(ValidacaoHelper.ehNumero(""));
}

@Then("^quando digitado uma senha com caracteres letras e números é uma senha inválida$")
public void quando_digitado_uma_senha_com_caracteres_letras_e_números_é_uma_senha_inválida() throws Exception {
    assertFalse(ValidacaoHelper.ehSenhaValida("04ta"));
}

@Then("^uma senha válida somente é composta por caracteres numéricos$")
public void uma_senha_válida_somente_é_composta_por_caracteres_numéricos() throws Exception {
   assertTrue(ValidacaoHelper.ehSenhaValida("120491"));
}

}