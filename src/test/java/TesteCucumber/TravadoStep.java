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
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author Tamiris
 */
public class TravadoStep {
    
    SensorPorta sensorMock;
    Memoria memoriaMock;
    CofrePM cofrePM;
   
    @Given("^que a porta do cofre esta travada$")
    public void que_a_porta_do_cofre_esta_travada() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        
        when(sensorMock.travada()).thenReturn(Boolean.TRUE);
}
}
