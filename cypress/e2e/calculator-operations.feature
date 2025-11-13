Feature: Tabla de operaciones
  Como usuario
  Quiero probar múltiples casos con una tabla
  Para validar varios escenarios rápidamente

  Scenario Outline: Realizar operaciones desde tabla
    Given los valores <numero1> y <numero2>
    When aplico la operación "<operacion>"
    Then espero <resultado>

    Examples:
      | numero1 | numero2 | operacion | resultado |
      | 2       | 3       | add       | 5         |
      | 10      | 5       | subtract  | 5         |
      | 4       | 3       | multiply  | 12        |
      | 20      | 4       | divide    | 5         |
      | 7       | 0       | add       | 7         |
      | 0       | 5       | multiply  | 0         |
