//precioMaquina(componentes, precios): dado una lista de componentes y una lista de precios, devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
const precioMaquina = (componentes, precios) => {
    const porComponentes = componente => componentes.includes(componente.componente);
    const porPrecios = componente => componente.precio;
    const sumaPrecios = (precio, precioActual) => precio + precioActual;
    
    return precios.filter(porComponentes).map(porPrecios).reduce(sumaPrecios, 0);
}



// //cantidadVentasComponente(componente, ventas): dado un componente y una lista de ventas, devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió.
const cantidadVentasComponente = (componente, ventas) => {
    const porVentas = venta => venta.componentes.includes(componente);

    return ventas.filter(porVentas).length
}



//vendedoraDelMes(mes, anio, local): dados dos parámetros numéricos (mes, anio) y un objeto local, devuelve el nombre de la vendedora que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const vendedoraDelMes = (mes, anio, local) => {
    const porFecha = venta => venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;
    const porVenta = venta => ({nombreVendedora: venta.nombreVendedora, precio: precioMaquina(venta.componentes, local.precios)})
    const porVendedora = (sumaVentas, vendedora) => {
        const keyExistente = sumaVentas.some(venta => venta.nombreVendedora === vendedora.nombreVendedora);

        if(keyExistente) {
            return sumaVentas.map(venta => venta.nombreVendedora === vendedora.nombreVendedora ? { ...venta, ventasTotales: venta.ventasTotales + vendedora.precio} : venta);
        }
        else {
            return [...sumaVentas, {nombreVendedora: vendedora.nombreVendedora, ventasTotales: vendedora.precio}];
        }
    }
    const porMayoresVentas = (mayorVendedora, vendedora) => mayorVendedora.ventasTotales > vendedora.ventasTotales ? mayorVendedora.nombreVendedora : vendedora.nombreVendedora;
   
    return local.ventas.filter(porFecha).map(porVenta).reduce(porVendedora, []).reduce(porMayoresVentas);
}



//ventasMes(mes, anio, local): obtiene el valor total de las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const ventasMes = (mes, anio, local) => {
    const porFecha = venta => venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;
    const porMayorVenta = (ventasTotales, venta) => ventasTotales + precioMaquina(venta.componentes, local.precios);

    return local.ventas.filter(porFecha).reduce(porMayorVenta, 0);
}
  


//ventasVendedora(nombre, local): obtiene el valor total de todas las ventas realizadas por una vendedora sin límite de fecha.
const ventasVendedora = (nombre, local) => {
    const porVendedora = venta => venta.nombreVendedora === nombre;
    const totalVentasVendedora = (acumuladorVentas, venta) => acumuladorVentas + precioMaquina(venta.componentes, local.precios);
    

    return local.ventas.filter(porVendedora).reduce(totalVentasVendedora, 0);
}



//componenteMasVendido(ventas): dada una lista de ventas, devuelve el nombre del componente que más cantidad de ventas tuvo históricamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

const componenteMasVendido = ventas => {
    const porComponente = venta => venta.componentes;
    const porCantidad = (sumaComponentes, componente) => [...sumaComponentes, ...componente]
    const porRepeticiones = (cantidadesParciales, componenteActual) => {
        cantidadesParciales =  {...cantidadesParciales,  [componenteActual]: cantidadVentasComponente(componenteActual, local.ventas)};
        return cantidadesParciales
    }
    const porMasVendido = (masCantidad, componente, componentes) => componentes[componente] > componentes[masCantidad] ? componente : masCantidad;
    const cantidadesParciales = ventas.map(porComponente).reduce(porCantidad).reduce(porRepeticiones, {});
    const nombresComponentes = Object.keys(cantidadesParciales)

    return nombresComponentes.reduce((masCantidad, componente) => porMasVendido(masCantidad, componente, cantidadesParciales))
}


//huboVentas(mes, anio, ventas): indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const huboVentas = (mes, anio, ventas) => {
    const porFecha = venta => venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;
    
    return ventas.some(porFecha);
}



//ventasSucursal(sucursal, local): obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
const ventasSucursal = (sucursal, local) => {
    const porSucursal = venta => venta.sucursal === sucursal;
    const ventasTotales = (sumaSucursal, venta) => sumaSucursal + precioMaquina(venta.componentes, local.precios);

    return local.ventas.filter(porSucursal).reduce(ventasTotales, 0)
}



//las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
const codigoReutilizado = (parametro, valor, local) => {
    const porParametro = venta => venta[parametro] === valor;
    const totalVentas = (acumulador, venta) => acumulador + precioMaquina(venta.componentes, local.precios)

    return local.ventas.filter(porParametro).reduce(totalVentas, 0)
}



//sucursalDelMes(mes, anio, local): dado dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const sucursalDelMes = (mes, anio, local) => {
    const porFecha = venta => venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;
    const aSucursal = venta => venta.sucursal;
    const aValoresUnicos = (lista, item) => lista.includes(item) ? lista : [...lista, item]
    const arraySucursales = local.ventas.filter(porFecha).map(aSucursal).reduce(aValoresUnicos, [])

    const aCantidadDeVentas = venta => ({[venta]: ventasMes(mes, anio, local)})
    const sucursalesConPrecios = arraySucursales.map(aCantidadDeVentas)

    
    const conMayorCantidad = (masCantidad, venta, ventas) => ventas[venta] > ventas[masCantidad] ? venta : masCantidad

    return arraySucursales.reduce((masCantidad, venta) => conMayorCantidad(masCantidad, venta, sucursalesConPrecios));
}


// renderPorMes(local): Muestra una lista ordenada del importe total vendido por cada mes/año, p. ej. (los mostrados datos no son los resultados reales):
// Ventas por mes:
//    Total de enero 2019: XXXX
//    Total de febrero 2019: XXXX
renderPorMes = local => {
    const porVenta = venta => {                            
        const arrayMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        const objetoFecha = {mes: arrayMeses[venta.fecha.getMonth()], año: venta.fecha.getFullYear(), precio: precioMaquina(venta.componentes, local.precios)}

        return objetoFecha
    }
    const registroMensual = local.ventas.map(porVenta);

    const ventasMensuales = (acumulador, actual) => {
        const keyExistente = acumulador.some(venta => venta.mes === actual.mes);
        if(keyExistente) {
            return acumulador.map(venta => venta.mes === actual.mes ? { ...venta, mes: venta.mes, año: venta.año, precio: venta.precio + actual.precio} : venta);
        } else {
            return [...acumulador, {mes: actual.mes, año: actual.año, precio: actual.precio}];
        }
    }
    const registroTotal = registroMensual.reduce(ventasMensuales, []);

    let listaFinal = `Ventas por mes:`
    for (const indice of registroTotal) {
        listaFinal += `\n- Total de ${indice.mes} ${indice.año}: ${indice.precio}`
    }

    return listaFinal
}



//renderPorSucursal(local): Muestra una lista del importe total vendido por cada sucursal, p. ej. (los datos mostrados no son los resultados reales):
// Ventas por sucursal:
// ----------------------------
//   - Total de Centro: 4195
//   - Total de Caballito: 1265
renderPorSucursal = local => {
    const porSucursal = venta => {
        const objetoSucursal = {sucursal: venta.sucursal, precio: precioMaquina(venta.componentes, local.precios)}

        return objetoSucursal
    }
    const registroSucursal = local.ventas.map(porSucursal);

    const ventasSucursales = (acumulador, actual) => {
        const keyExistente = acumulador.some(venta => venta.sucursal === actual.sucursal);
        if(keyExistente) {
            return acumulador.map(venta => venta.sucursal === actual.sucursal ? { ...venta, sucursal: venta.sucursal, precio: venta.precio + actual.precio} : venta);
        } else {
            return [...acumulador, {sucursal: actual.sucursal, precio: actual.precio}];
        }
    }
    const registroTotal = registroSucursal.reduce(ventasSucursales, []);

    let listaFinal = `Ventas por sucursal:`
    for (const indice of registroTotal) {
        listaFinal += `\n- Total de ${indice.sucursal}: ${indice.precio}`
    }

    return listaFinal
}


//render(local): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó, p. ej. (los datos mostrados no son los resultados reales):
// Reporte
// ==========================================
//  Ventas por mes:
//   - Total de enero 2019: 1250
//   - Total de febrero 2019: 4210
// ------------------------------------------
//  Ventas por sucursal:
//   - Total de Centro: 4195
//   - Total de Caballito: 1265
// ------------------------------------------
//  Producto estrella: Monitor GPRS 3000
// ------------------------------------------ 
//  Vendedora que más ingresos generó: Grace
const render = local => {
    const aVendedora = venta => venta.nombreVendedora;
    const aValoresUnicos = (lista, item) => lista.includes(item) ? lista : [...lista, item]
    const arrayVendedoras = local.ventas.map(aVendedora).reduce(aValoresUnicos, [])

    const aCantidadDeVendedoras = vendedora => ({[vendedora]: ventasVendedora(vendedora, local)})
    const vendedorasConPrecios = arrayVendedoras.map(aCantidadDeVendedoras)

    
    const conMayorCantidad = (masCantidad, vendedora, vendedoras) => vendedoras[vendedora] > vendedoras[masCantidad] ? vendedora : masCantidad

    const mejorVendedora = arrayVendedoras.reduce((masCantidad, vendedora) => conMayorCantidad(masCantidad, vendedora, vendedorasConPrecios));

    let listaFinal = `Reporte 
    \n========================================== 
    \n${renderPorMes(local)}
    \n------------------------------------------
    \n${renderPorSucursal(local)}
    \n------------------------------------------
    \nProducto estrella: ${componenteMasVendido(local.ventas)}
    \n------------------------------------------
    \nVendedora que más ingresos generó: ${mejorVendedora}`

    return listaFinal;
}

