const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
const tottusPage = require('../support/pages/tottus-page');

Given('abro la pagina de google en el navegador', async function() {
    await testController.navigateTo('https://google.com');
});

When('busco por tottus sucursales', async function() {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await testController.typeText(input, "tottus sucursales");
    await testController.pressKey("enter");
});

Then('selecciono la sucursal Tottus Nataniel', async function(){
    var sucursal = Selector('.ccBEnf').child('div').withText('Tottus Nataniel');
    await testController.click(sucursal);
});

Then('ingreso al sitio web', async function(){
    var sitio_web = Selector('.rl_full-list').child('div').withText('Tottus Nataniel').find('.wLAgVc');
    await testController.click(sitio_web);
});

Then('ingreso a Recetas y mas', async function(){
    await testController.click(tottusPage.tottus.btnRecetasymas()); 
});

Then('selecciono Dificultad alta', async function(){
    await testController.click(tottusPage.tottus.filtroDificultadAlta()); 
});

Then('busco Corona de rollitos de canela', async function(){
    await testController.click(tottusPage.tottus.cardCoronaRollitosCanela()); 
});

Then('valido que la receta tenga canela', async function(){
    await testController.expect(tottusPage.tottus.ingredientes().innerText).contains('canela', 'No se ha encontrado el ingrediente');
});

Then('valido que la receta tenga azucar rubia', async function(){
    await testController.click(tottusPage.tottus.ingredientes());
    await this.addScreenshotToReport();
    await testController.expect(tottusPage.tottus.ingredientes().innerText).contains('azúcar rubia', 'No se ha encontrado el ingrediente');
});