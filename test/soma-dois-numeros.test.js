const {somar} = require ('../src/soma-dois-numeros')
const {expect} = require ('chai')
    
describe ('Somar dois numeros', function (){
    it ('Deve somar 2 + 3 e retornar 5', function(){
        const resultado = somar (2,3)
        expect(resultado).to.equal(5);
    });
});