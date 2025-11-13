Feature: Binary Calculator – Verificación de interfaz de usuario

  Scenario: Título visible al abrir la calculadora
    Given la página de la calculadora está abierta
    Then el título de la calculadora debe ser "Binary Calculator"

  Scenario: Campos de número visibles
    Given la página de la calculadora está abierta
    Then el campo "First number" debe estar visible
    And el campo "Second number" debe estar visible

  Scenario: Selector de operador visible
    Given la página de la calculadora está abierta
    Then el selector de "Operator" debe estar visible

  Scenario: Botón habilitado/deshabilitado según campos
    Given la página de la calculadora está abierta
    When ingreso valores válidos en ambos campos
    Then el botón "Calculate" debe estar habilitado
    When dejo un campo vacío
    Then el botón "Calculate" debe estar deshabilitado
