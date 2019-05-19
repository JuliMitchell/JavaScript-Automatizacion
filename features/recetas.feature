Feature: Validando recetas en el sitio web de la sucursal Tottus

  El objetivo es validar los ingredientes de una receta en particular

  Scenario: Validando ingredientes de la receta Corona de rollito de canela
    Given abro la pagina de google en el navegador
    When busco por tottus sucursales
    And selecciono la sucursal Tottus Nataniel
    And ingreso al sitio web
    And ingreso a Recetas y mas
    And selecciono Dificultad alta
    And busco Corona de rollitos de canela
    Then valido que la receta tenga canela
    And valido que la receta tenga azucar rubia
