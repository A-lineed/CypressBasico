/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true; // Espero que a seja true
    expect(true).to.be.true;
    expect(b).to.be.null; //espero que b seja nullo
    expect(a).to.be.not.null; //espero que a não seja nullo
    expect(c).to.be.undefined; // Espero que c não tenha sido definido

})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 }) //Espero que o objeto tenha a propriedade a igual a 1 e b igual a 2
    expect(obj).include({ a: 1 })//Espero que o objeto possua incluido nele a propriedade a com o valor 1
    expect(obj).to.have.property('b') //Espero que exista a propriedade b no objeto
    expect(obj).to.have.property('b', 2) // Espero que exista a propriedade b no objeto com o valor 2
    expect(obj).to.not.be.empty//Espero que o objeto não esteja vazio
    expect({}).to.be.empty //Espero que o objeto esteja vazio
})

it('Arrays', () => {
    const array = [1, 2, 3]
    expect(array).to.have.members([1, 2, 3])//Espero que o array possua os seguintes membros 
    expect(array).to.include.members([1, 3])//Espero que os membros estejam incluidos
    expect(array).to.not.be.empty // Espero que o array não esteja vazio
    expect([]).to.be.empty

})

it('Types', () => {
    const num = 1;
    const str = 'String'

    expect(num).to.be.a('number')// Espero que seja do tipo número
    expect(str).to.be.a('string')  // Espero que seja do tipo string
    expect({}).to.be.a('object') //  Espero que seja do tipo objeto
    expect([]).to.be.a('array')// Espero que seja do tipo array
})

it('String', () => {
    const str = 'String de teste';
    expect(str).to.be.equal('String de teste') // Espero que a var str tenha esse valor
    expect(str).to.have.length(15) //Espero que o tamanho dessa string seja 15 caracteres
    expect(str).to.contains('de') //Espero que a var contenha o valor 
    expect(str).to.match(/de/) // Espero que dentro da var tenha 
    expect(str).to.match(/^String/) //Espero que deve iniciar com 
    expect(str).to.match(/teste$/) // Espero que deve finalizar com 
    expect(str).to.match(/.{15}/) // Espero que o tamanho deve ser 
    expect(str).to.match(/\w+/) // Espero que exista apenas letras 
    expect(str).to.match(/\D+/) // Espero que não contenha numeros 

})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4) //Espero que esse número seja igual a 4
    expect(number).to.be.above(3) //Espero que esse número seja acima de 3 
    expect(number).to.be.below(8) // Espero que esse número esteja abaixo de 7
    expect(floatNumber).to.be.equal(5.2123)  //Espero que seja igual
    expect(floatNumber).to.be.closeTo(5.2, 0.1) // Espero que o floatnumber seja proximo de 5.2
    expect(floatNumber).to.be.above(5)  //Espero que ele seja acima de 5

})


