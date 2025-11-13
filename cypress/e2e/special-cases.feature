Feature: Casos especiales de la calculadora
  Como desarrollador
  Quiero validar casos especiales
  Para asegurar la robustez del sistema

  Scenario: Multiplicar por cero
    Given ingreso 5 y 0
    When multiplico
    Then el total es 0

  Scenario: Sumar cero
    Given ingreso 42 y 0
    When sumo
    Then el total es 42

  Scenario: División por cero
    Given ingreso 10 y 0
    When intento dividir
    Then obtengo un error de división por cero
