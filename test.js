// Importar la función sum del archivo app.js
const { sum, fromDollarToYen } = require('./app.js');

// Comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    //let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
   //// expect(total).toBe(23);
//});
    test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(10);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 10 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(10)).toBe(10.700000000000001); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


     test ("One dollar should be 156,5 yen", function() {
        // Importo la funcion desde app.js 
        const { fromDollarToYen} = require('./app.js');

    // si un euro son 156,5 yenes, entonces 10 euros debe ser ( 10*156.5)
    
    const yen = fromDollarToYen(10);

    // Si 1 euro son 1.07 dólares, entonces 10 euros debe ser (10 * 156.5)
    const expected = 10 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1462.6168224299065); // 1 euro son 156.5 yenes, entonces 10 euros deberían ser = (10 * 156.5)
})

test("One yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const {fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1000);

    // Si 1 euro son 0.87 pounds, entonces 1000 yenes debe ser (1000 * 0.87)
    const expected = 1000 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(5.559105431309905); // 1000 yenes por 0.87pounds, entonces 1000 yenes deberían ser = (1000 * 0.87)
})
    

    