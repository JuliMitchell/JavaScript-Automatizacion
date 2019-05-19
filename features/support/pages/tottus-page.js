const Selector = require('testcafe').Selector;

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.tottus = {
    btnRecetasymas: function(){
        return select('#new_tottus_nav_cliente_recetas');
    },
    filtroDificultadAlta: function () {
        return select('#myDIV').child('button').withAttribute('value', '3');
    },
    cardCoronaRollitosCanela: function () {
        return select('h3').withText(/Corona de rollitos de canela/i);
    },
    ingredientes: function(){
        return select('.divRecipe');
    }
};