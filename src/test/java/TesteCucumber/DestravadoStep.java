/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package TesteCucumber;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author Tamiris
 */
public class DestravadoStep {
    
    SensorPorta sensorMock;
    Memoria memoriaMock;
    CofrePM cofrePM;
   

@Given("^que foi executada a inicialização do cofre$")
public void que_foi_executada_a_inicialização_do_cofre() throws Exception {
    sensorMock = mock(SensorPorta.class);
    memoriaMock = mock(Memoria.class);
    cofrePM = new CofrePM(sensorMock, memoriaMock);
}

@Then("^deverá ser exibido o alerta \"([^\"]*)\"$")
public void deverá_ser_exibido_o_alerta(String arg1) throws Exception {
   Assert.assertEquals(arg1, cofrePM.getDisplay()); 
}

@Then("^e o cofre será destravado$")
public void e_o_cofre_será_destravado() throws Exception {
    sensorMock = mock(SensorPorta.class);
    memoriaMock = mock(Memoria.class);
    cofrePM = new CofrePM(sensorMock, memoriaMock);

    verify(sensorMock).destravar();
}

@Given("^que foi executada a função de limpar dados$")
public void que_foi_executada_a_função_de_limpar_dados() throws Exception {
    sensorMock = mock(SensorPorta.class);
    memoriaMock = mock(Memoria.class);
    cofrePM = new CofrePM(sensorMock, memoriaMock);
    
    cofrePM.clear();
}


@Then("^nada será mostrado$")
public void nada_será_mostrado() throws Exception {
    Assert.assertEquals("", cofrePM.getDisplay()); 
}

@Given("^que a porta do cofre estará aberta$")
public void que_a_porta_do_cofre_estará_aberta() throws Exception {
    sensorMock = mock(SensorPorta.class);
    memoriaMock = mock(Memoria.class);
    cofrePM = new CofrePM(sensorMock, memoriaMock);

    when(sensorMock.travada())
                .thenReturn(Boolean.FALSE);
}

@When("^pressionar o botão (\\d+) do cofre$")
public void pressionar_o_botão_do_cofre(int arg1) throws Exception {
    cofrePM.pressButton(arg1);
}

@When("^pressionar o botão OK$")
public void pressionar_o_botão_OK() throws Exception {
    cofrePM.ok();
}

@Given("^que a porta do cofre está fechada$")
public void que_a_porta_do_cofre_está_fechada() throws Exception {
   sensorMock = mock(SensorPorta.class);
   memoriaMock = mock(Memoria.class);
   cofrePM = new CofrePM(sensorMock, memoriaMock);

   when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
}

@Given("^que a porta do cofre esta fechada e destravada$")
public void que_a_porta_do_cofre_esta_fechada_e_destravada() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.FALSE);
        when(memoriaMock.getSenha())
                .thenReturn("193566");
}

@Given("^que porta será aberta$")
public void que_porta_será_aberta() throws Exception {
    sensorMock = mock(SensorPorta.class);
    memoriaMock = mock(Memoria.class);
    cofrePM = new CofrePM(sensorMock, memoriaMock);

    when(sensorMock.fechada()).thenReturn(Boolean.FALSE);
}

@Given("^que porta será fechada$")
public void que_porta_será_fechada() throws Exception {
    sensorMock = mock(SensorPorta.class);
    memoriaMock = mock(Memoria.class);
    cofrePM = new CofrePM(sensorMock, memoriaMock);

    when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
}
   
}
