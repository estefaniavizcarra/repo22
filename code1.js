window.onload = function () {

    var input = document.querySelector('#descuento');


    input.addEventListener('input', function () {
        console.log('input changed to: ', input.value);
        var descuento = input.value
        var porcentajedescuento = descuento / 100

        console.log("este es un porcentaje de descuento", porcentajedescuento)


        // PRECIOS POR PAQUETE

        // 25 HORAS

        var horas25 = 26680 - (26680 * porcentajedescuento)
        console.log("horas25", horas25)


        // HORAS 50

        var horas50 = 51968 - (51968 * porcentajedescuento)
        console.log("horas50", horas50)

        // HORAS 100
        var horas100 = 92800 - (92800 * porcentajedescuento)
        console.log("horas100", horas100)

        //HORAS 200

        var horas200 = 185600 - (185600 * porcentajedescuento)
        console.log("horas200", horas200)


        $("b.precio25").html(Math.round(horas25))
        $("b.precio50").html(Math.round(horas50))
        $("b.precio100").html(Math.round(horas100))
        $("b.precio200").html(Math.round(horas200))



        $("b.precio25").formatCurrency({ roundToDecimalPlace: 0 })
        $("b.precio50").formatCurrency({ roundToDecimalPlace: 2 })
        $("b.precio100").formatCurrency({ roundToDecimalPlace: 2 })
        $("b.precio200").formatCurrency({ roundToDecimalPlace: 2 })
        

    });



}
