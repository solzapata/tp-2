describe("precioMaquina()", (componentes, precios) => {
    it("Debería devolver el valor 320 cuando los parámetros son los componentes Monitor GPRS 3000 y Motherboard ASUS 1500 y los precios", () => {
        componentes = ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
        precios = [
            {componente: "Monitor GPRS 3000", precio: 200},
            {componente: "Motherboard ASUS 1500", precio: 120},
            {componente: "Monitor ASC 543", precio: 250},
            {componente: "Motherboard ASUS 1200", precio: 100},
            {componente: "Motherboard MZI", precio: 30},
            {componente: "HDD Toyiva", precio: 90},
            {componente: "HDD Wezter Dishital", precio: 75},
            {componente: "RAM Quinston", precio: 110},
            {componente: "RAM Quinston Fury", precio: 230}
        ]

        const resultado = precioMaquina(componentes, precios);
        expect(resultado).to.equal(320);
    })
    it("Debería devolver el valor 280 cuando los parámetros son los componentes Monitor ASC 543 y Motherboard MZI y los precios", () => {
        componentes = ["Monitor ASC 543", "Motherboard MZI"]
        precios = [
            {componente: "Monitor GPRS 3000", precio: 200},
            {componente: "Motherboard ASUS 1500", precio: 120},
            {componente: "Monitor ASC 543", precio: 250},
            {componente: "Motherboard ASUS 1200", precio: 100},
            {componente: "Motherboard MZI", precio: 30},
            {componente: "HDD Toyiva", precio: 90},
            {componente: "HDD Wezter Dishital", precio: 75},
            {componente: "RAM Quinston", precio: 110},
            {componente: "RAM Quinston Fury", precio: 230}
        ]

        const resultado = precioMaquina(componentes, precios);
        expect(resultado).to.equal(280);
    })
    it("Debería devolver error cuando no se le pasa un parámetro componentes", () => {
        precios = [
            {componente: "Monitor GPRS 3000", precio: 200},
            {componente: "Motherboard ASUS 1500", precio: 120},
            {componente: "Monitor ASC 543", precio: 250},
            {componente: "Motherboard ASUS 1200", precio: 100},
            {componente: "Motherboard MZI", precio: 30},
            {componente: "HDD Toyiva", precio: 90},
            {componente: "HDD Wezter Dishital", precio: 75},
            {componente: "RAM Quinston", precio: 110},
            {componente: "RAM Quinston Fury", precio: 230}
        ]

        const resultado = () => precioMaquina(precios);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa un parámetro precios", () => {
        componentes = [ "RAM Quinston Fury","RAM Quinston"];

        const resultado = () => precioMaquina(componentes);
        expect(resultado).to.throw();
    })
    it("Debería devolver 0 cuando no hay coincidencia entre el parámetro pasado como componentes y los precios", () => {
        componentes = ["Monitor 3000", "Motherboard 1500"]
        precios = [
            {componente: "Monitor GPRS 3000", precio: 200},
            {componente: "Motherboard ASUS 1500", precio: 120},
            {componente: "Monitor ASC 543", precio: 250},
            {componente: "Motherboard ASUS 1200", precio: 100},
            {componente: "Motherboard MZI", precio: 30},
            {componente: "HDD Toyiva", precio: 90},
            {componente: "HDD Wezter Dishital", precio: 75},
            {componente: "RAM Quinston", precio: 110},
            {componente: "RAM Quinston Fury", precio: 230}
        ]
        
        const resultado = precioMaquina(componentes, precios)
        expect(resultado).to.equal(0);
    })
    it("Debería devolver un valor numérico correspondiente a la suma de los precios de cada componente", () => {
        componentes = ["Monitor ASC 543", "Motherboard ASUS 1200"]
        precios = [
            {componente: "Monitor GPRS 3000", precio: 200},
            {componente: "Motherboard ASUS 1500", precio: 120},
            {componente: "Monitor ASC 543", precio: 250},
            {componente: "Motherboard ASUS 1200", precio: 100},
            {componente: "Motherboard MZI", precio: 30},
            {componente: "HDD Toyiva", precio: 90},
            {componente: "HDD Wezter Dishital", precio: 75},
            {componente: "RAM Quinston", precio: 110},
            {componente: "RAM Quinston Fury", precio: 230}
        ]

        const resultado = precioMaquina(componentes, precios);
        expect(resultado).to.be.finite;
    })  
    it("El objeto pasado como parámetro precios no debería modificarse luego de ejecutar la función", () => {
        componentes = ["Monitor GPRS 3000", "Motherboard ASUS 1200"]
        const precios = [
            {componente: "Monitor GPRS 3000", precio: 200},
            {componente: "Motherboard ASUS 1500", precio: 120},
            {componente: "Monitor ASC 543", precio: 250},
            {componente: "Motherboard ASUS 1200", precio: 100},
            {componente: "Motherboard MZI", precio: 30},
            {componente: "HDD Toyiva", precio: 90},
            {componente: "HDD Wezter Dishital", precio: 75},
            {componente: "RAM Quinston", precio: 110},
            {componente: "RAM Quinston Fury", precio: 230}
        ]
        const copiaPrecios = deepcopy(precios);

        precioMaquina(componentes, precios);
        expect(precios).to.deep.eql(copiaPrecios);
    })
})



describe("cantidadVentasComponente()", (componente, ventas) => {
    it("Debería devolver el valor numérico 6 cuando se le pasan los parámetros Monitor GPRS 3000 y en un parámetro de ventas", () => {
        componente = "Monitor GPRS 3000"
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = cantidadVentasComponente(componente, ventas);
        expect(resultado).to.equal(6);
    })
    it("Debería devolver el valor numérico 5 cuando se le pasan los parámetros Motherboard ASUS 1500 y en un parámetro de ventas", () => {
        componente = "Motherboard ASUS 1500"
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = cantidadVentasComponente(componente, ventas);
        expect(resultado).to.equal(5);
    })   
    it("Debería devolver error cuando no se le pasa un parámetro componente", () => {
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = () => cantidadVentasComponente(ventas);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa un parámetro ventas", () => {
        componente = "Monitor GPRS 3000";

        const resultado = () => cantidadVentasComponente(componente);
        expect(resultado).to.throw();
    })   
    it("Debería devolver 0 cuando no hay coincidencia entre el parámetro pasado como componente y las ventas", () => {
        componente = "Monitor 3000";
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]
        
        const resultado = cantidadVentasComponente(componente, ventas)
        expect(resultado).to.equal(0);
    })
    it("Debería devolver un valor numérico correspondiente a la cantidad de ventas del componente", () => {
        componente = "Monitor ASC 543";
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = cantidadVentasComponente(componente, ventas);
        expect(resultado).to.be.finite;
    }) 
    it("El objeto pasado como parámetro ventas no debería modificarse luego de ejecutar la función", () => {
        componente = "Motherboard ASUS 1500";
        const ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]
        const copiaVentas = deepcopy(ventas);


        cantidadVentasComponente(componente, copiaVentas);
        expect(ventas).to.deep.eql(copiaVentas);
    })
})



describe("vendedoraDelMes()", (mes, anio, local) => {
    it("Debería devolver Ada cuando los parámetros son mes 1, anio 2019 y el parámetro local", () => {
        mes = 1;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = vendedoraDelMes(mes, anio, local);
        expect(resultado).to.equal("Ada");
    })
    it("Debería devolver Ada cuando los parámetros son mes 2, anio 2019 y el parámetro local", () => {
        mes = 2;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = vendedoraDelMes(mes, anio, local);
        expect(resultado).to.equal("Ada");
    })
    it("Debería devolver error cuando no se le pasa el parámetro mes", () => {
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => vendedoraDelMes(anio, local);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro año", () => {
        mes = 1; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => vendedoraDelMes(mes, dataLocal);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        mes = 1;
        anio = 2019; 

        const resultado = () => vendedoraDelMes(mes, anio);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando se le pasa un mes que no coincide con el parámetro local", () => {
        mes = 7;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => vendedoraDelMes(mes, anio, local);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando se le pasa un año que no coincide con el parámetro local", () => {
        mes = 2;
        anio = 2020; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const fn = () => vendedoraDelMes(mes, anio, dataLocal);
        expect(fn).to.throw();
    })
    it("Debería devolver un string si se le pasa el mes y año de las ventas y el parámetro local", () => {
        mes = 1;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
    
        const resultado = vendedoraDelMes(mes, anio, local);
        expect(resultado).to.be.a.string;
        })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        mes = 1; 
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        vendedoraDelMes(mes, anio, local);
        expect(local).to.deep.eql(copiaLocal);
    })
})



describe("ventasMes()", (mes, anio, local) => {
    it("Debería devolver 1250 cuando los parámetros son mes 1, anio 2019 y el parámetro local", () => {
        mes = 1;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasMes(mes, anio, local);
        expect(resultado).to.equal(1250);
    })
    it("Debería devolver 4420 cuando los parámetros son mes 1, anio 2019 y el parámetro local", () => {
        mes = 2;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasMes(mes, anio, local);
        expect(resultado).to.equal(4420);
    })
    it("Debería devolver error cuando no se le pasa el parámetro mes", () => {
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => ventasMes(anio, local);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro año", () => {
        mes = 2; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => ventasMes(mes, local);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        mes = 2;
        anio = 2019; 

        const resultado = () => ventasMes(mes, anio);
        expect(resultado).to.throw();
    })
    it("Debería devolver 0 cuando se le pasa un mes que no coincide con el parámetro local", () => {
        mes = 6;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasMes(mes, anio, local);
        expect(resultado).to.equal(0);
    })
    it("Debería devolver 0 cuando se le pasa un año que no coincide con el parámetro local", () => {
        mes = 2;
        anio = 2021; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasMes(mes, anio, local);
        expect(resultado).to.equal(0);
    })
    it("Debería devolver un valor numérico correspondiente a todas las ventas del mes y año pasados como parámetros", () => {
        mes = 1;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
    
        const resultado = ventasMes(mes, anio, local);
        expect(resultado).to.be.finite;
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        mes = 1; 
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        ventasMes(mes, anio, local);
        expect(local).to.deep.eql(copiaLocal);
    })
})



describe("ventasMes()", (nombre, local) => {
    it("Debería devolver 1750 cuando los parámetros son nombre Ada y el parámetro local", () => {
        nombre = "Ada"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasVendedora(nombre, local)
        expect(resultado).to.equal(1750);
    })
    it("Debería devolver 1970 cuando los parámetros son nombre Grace y el parámetro local", () => {
        nombre = "Grace" 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasVendedora(nombre, local)
        expect(resultado).to.equal(1970);
    })
    it("Debería devolver error cuando no se le pasa el parámetro nombre", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => ventasVendedora(local)
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        nombre = "Ada"  

        const resultado = () => ventasVendedora(nombre)
        expect(resultado).to.throw();
    })
    it("Debería devolver 0 cuando se le pasa un nombre que no coincide con el parámetro local", () => {
        nombre = "Sol" 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasVendedora(nombre, local)
        expect(resultado).to.equal(0);
    })
    it("Debería devolver un valor numérico correspondiente a todas las ventas realizadas por la vendedora pasada en el parámetro nombre", () => {
        nombre = "Ada" 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
    
        const resultado = ventasVendedora(nombre, local)
        expect(resultado).to.be.finite;
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        nombre = "Ada"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        ventasVendedora(nombre, local);
        expect(local).to.deep.eql(copiaLocal);
    })
})



describe("componenteMasVendido()", (ventas) => {
    it("Debería devolver Motherboard ASUS 1200 cuando se le pasa el parámetro ventas del local", () => {
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = componenteMasVendido(ventas);
        expect(resultado).to.equal("Motherboard ASUS 1200");
    })
    it("Debería devolver Monitor GPRS 3000 cuando se le pasa el parámetro ventas del local", () => {
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"}
        ]

        const resultado = componenteMasVendido(ventas);
        expect(resultado).to.equal("Monitor GPRS 3000");
    })   
    it("Debería devolver error cuando no se el parámetro local", () => {
        const resultado = () => componenteMasVendido();
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando se le pasa un parámetro string", () => {
        const ventas = "Monitor GPRS 3000";

        const resultado = () => componenteMasVendido(ventas);
        expect(resultado).to.throw();
    })   
    it("Debería devolver un string correspondiente al componente más vendido según las ventas del parámetro", () => {
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = componenteMasVendido(ventas);
        expect(resultado).to.be.a.string;
    }) 
    it("El objeto pasado como parámetro ventas no debería modificarse luego de ejecutar la función", () => {
        const ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]
        const copiaVentas = deepcopy(ventas);


        componenteMasVendido(copiaVentas);
        expect(ventas).to.deep.eql(copiaVentas);
    })
})



describe("huboVentas()", (mes, anio, ventas) => {
    it("Debería devolver true cuando se le pasan los parámetros mes 1, anio 2019 y un parámetro de ventas", () => {
        mes = 1;
        anio = 2019; 
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = huboVentas(mes, anio, ventas);
        expect(resultado).to.be.true;
    })
    it("Debería devolver true cuando se le pasan los parámetros mes 2, anio 2019 y un parámetro de ventas", () => {
        mes = 2;
        anio = 2019;
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = huboVentas(mes, anio, ventas);
        expect(resultado).to.be.true;
    })   
    it("Debería devolver error cuando no se le pasa un parámetro mes", () => {
        anio = 2019;
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = () => huboVentas(anio, ventas);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa un parámetro anio", () => {
        mes = 1;
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = () => huboVentas(mes, ventas);
        expect(resultado).to.throw();
    })   
    it("Debería devolver error cuando no se le pasa un parámetro ventas", () => {
        mes = 1;
        anio = 2019;

        const resultado = () => huboVentas(mes, anio);
        expect(resultado).to.throw();
    }) 
    it("Debería devolver false cuando no haya coincidencia entre los parámetros pasados", () => {
        mes = 6;
        anio = 2019;
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]
        
        const resultado = huboVentas(mes, anio, ventas);
        expect(resultado).to.be.false;
    })
    it("Debería devolver un valor booleano correspondiente a la condición de la función", () => {
        mes = 1;
        anio = 2019;
        ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]

        const resultado = huboVentas(mes, anio, ventas);
        expect(resultado).to.be.a("boolean");
    }) 
    it("El objeto pasado como parámetro ventas no debería modificarse luego de ejecutar la función", () => {
        mes = 1;
        anio = 2019;
        const ventas = [
            {fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 27),nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro"},
            {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
            {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
        ]
        const copiaVentas = deepcopy(ventas);


        huboVentas(mes, anio, ventas);
        expect(ventas).to.deep.eql(copiaVentas);
    })
})



describe("ventasMes()", (sucursal, local) => {
    it("Debería devolver 4405 cuando los parámetros sean sucursal Centro y el parámetro local", () => {
        sucursal = "Centro"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasSucursal(sucursal, local)
        expect(resultado).to.equal(4405);
    })
    it("Debería devolver 1265 cuando los parámetros sean sucursal Caballito y el parámetro local", () => {
        sucursal = "Caballito"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasSucursal(sucursal, local)
        expect(resultado).to.equal(1265);
    })
    it("Debería devolver error cuando no se le pasa el parámetro sucursal", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => ventasSucursal(local)
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        sucursal = "Centro"   

        const resultado = () => ventasSucursal(sucursal)
        expect(resultado).to.throw();
    })
    it("Debería devolver 0 cuando se le pasa una sucursal que no coincide con el parámetro local", () => {
        sucursal = "Rosario" 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = ventasSucursal(sucursal, local);
        expect(resultado).to.equal(0);
    })
    it("Debería devolver un valor numérico correspondiente a las ventas que realizó la sucursal pasada por parámetro", () => {
        sucursal = "Centro" 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
    
        const resultado =  ventasSucursal(sucursal, local);
        expect(resultado).to.be.finite;
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        sucursal = "Centro"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        ventasSucursal(sucursal, local);
        expect(local).to.deep.eql(copiaLocal);
    })
})



describe("codigoReutilizado()", (parametro, valor, local) => {
    it("Debería devolver 4405 cuando los parámetros sean sucursal, Centro y local", () => {
        parametro = "sucursal"
        valor = "Centro"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = codigoReutilizado(parametro, valor, local)
        expect(resultado).to.equal(4405);
    })
    it("Debería devolver 1750 cuando los parámetros sean nombreVendedora, Ada y local", () => {
        parametro = "nombreVendedora"
        valor = "Ada"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = codigoReutilizado(parametro, valor, local)
        expect(resultado).to.equal(1750);
    })
    it("Debería devolver error cuando no se le pasa el primer parámetro", () => {
        valor = "Ada"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => codigoReutilizado(valor, local)
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro valor", () => {
        parametro = "sucursal"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => codigoReutilizado(parametro, local)
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        parametro = "sucursal"
        valor = "Centro"   

        const resultado = () => codigoReutilizado(parametro, valor)
        expect(resultado).to.throw();
    })
    it("Debería devolver 0 cuando se le pasa una valor a una sucursal que no coincide con el parámetro local", () => {
        parametro = "sucursal" 
        valor = "Rosario"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = codigoReutilizado(parametro, valor, local);
        expect(resultado).to.equal(0);
    })
    it("Debería devolver 0 cuando se le pasa un nombre a una vendedora que no coincide con el parámetro local", () => {
        parametro = "nombreVendedora" 
        valor = "Sol"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = codigoReutilizado(parametro, valor, local);
        expect(resultado).to.equal(0);
    })
    it("Debería devolver un valor numérico correspondiente a los parámetros pasados", () => {
        parametro = "nombreVendedora" 
        valor = "Ada" 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
    
        const resultado =  codigoReutilizado(parametro, valor, local);
        expect(resultado).to.be.finite;
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        parametro = "nombreVendedora" 
        valor = "Ada"
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        codigoReutilizado(parametro, valor, local);
        expect(local).to.deep.eql(copiaLocal);
    })
})



describe("sucursalDelMes()", (mes, anio, local) => {
    it("Debería devolver Centro cuando los parámetros son mes 1, anio 2019 y el parámetro local", () => {
        mes = 1;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = sucursalDelMes(mes, anio, local);
        expect(resultado).to.equal("Centro");
    })
    it("Debería devolver Centro cuando los parámetros son mes 2, anio 2019 y el parámetro local", () => {
        mes = 2;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = sucursalDelMes(mes, anio, local);
        expect(resultado).to.equal("Centro");
    })
    it("Debería devolver error cuando no se le pasa el parámetro mes", () => {
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => sucursalDelMes(anio, local);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro año", () => {
        mes = 2; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => sucursalDelMes(mes, local);
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        mes = 2;
        anio = 2019; 

        const resultado = () => sucursalDelMes(mes, anio);
        expect(resultado).to.throw();
    })
    it("Debería devolver el nombre correspondiente a la sucursal que mas vendió en el mes y año pasados como parámetros", () => {
        mes = 1;
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
    
        const resultado = sucursalDelMes(mes, anio, local);
        expect(resultado).to.be.a.string;
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        mes = 1; 
        anio = 2019; 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        sucursalDelMes(mes, anio, local);
        expect(local).to.deep.eql(copiaLocal);
    })
})



describe("renderPorMes()", (local) => {
    it("Debería devolver un string", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = renderPorMes(local);
        expect(resultado).to.be.a.string;
    })
    it("Debería devolver un string con la suma mensual de todas las ventas", () => { 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = renderPorMes(local)
        expect(resultado).to.equal("Ventas por mes:\n- Total de febrero 2019: 4420\n- Total de enero 2019: 1250");
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = () => renderPorMes()
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando se le pasa un número como parámetro local", () => {
        local = 0;  

        const resultado = () => renderPorMes(local)
        expect(resultado).to.throw();
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        renderPorMes(local);
        expect(local).to.deep.eql(copiaLocal);
    })
})



describe("renderPorSucursal()", (local) => {
    it("Debería devolver un string", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = renderPorSucursal(local);
        expect(resultado).to.be.a.string;
    })
    it("Debería devolver un string con la suma mensual de todas las ventas", () => { 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = renderPorSucursal(local)
        expect(resultado).to.equal("Ventas por sucursal:\n- Total de Centro: 4405\n- Total de Caballito: 1265");
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        const resultado = () => renderPorSucursal()
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando se le pasa un número como parámetro local", () => {
        local = 0;  

        const resultado = () => renderPorSucursal(local)
        expect(resultado).to.throw();
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        renderPorSucursal(local);
        expect(local).to.deep.eql(copiaLocal);
    })
})


describe("render()", (local) => {
    it("Debería devolver un string", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = render(local);
        expect(resultado).to.be.a.string;
    })
    it("Debería devolver un string con la suma de todas las ventas", () => { 
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }

        const resultado = render(local)
        expect(resultado).to.equal("Reporte \n    \n========================================== \n    \nVentas por mes:\n- Total de febrero 2019: 4420\n- Total de enero 2019: 1250\n    \n------------------------------------------\n    \nVentas por sucursal:\n- Total de Centro: 4405\n- Total de Caballito: 1265\n    \n------------------------------------------\n    \nProducto estrella: Motherboard ASUS 1200\n    \n------------------------------------------\n    \nVendedora que más ingresos generó: Grace");
    })
    it("Debería devolver error cuando no se le pasa el parámetro local", () => {
        const resultado = () => render()
        expect(resultado).to.throw();
    })
    it("Debería devolver error cuando se le pasa un número como parámetro local", () => {
        local = 0;  

        const resultado = () => render(local)
        expect(resultado).to.throw();
    })
    it("El objeto pasado como parámetro local no debería modificarse luego de ejecutar la función", () => {
        local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                {
                    fecha: new Date(2019, 1, 4), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 2), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "Motherboard MZI"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 10), 
                    nombreVendedora: "Ada", 
                    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 0, 12), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 24), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 11), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 15), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 12), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 21), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 8), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 16), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 27), 
                    nombreVendedora: "Hedy", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 22), 
                    nombreVendedora: "Grace", 
                    componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 5), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 1), 
                    nombreVendedora: "Grace", 
                    componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], 
                    sucursal: "Centro" 
                },
                { 
                    fecha: new Date(2019, 1, 7), 
                    nombreVendedora: "Sheryl", 
                    componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
                    sucursal: "Caballito" 
                },
                { 
                    fecha: new Date(2019, 1, 14), 
                    nombreVendedora: "Ada", 
                    componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
                    sucursal: "Centro" 
                }
                ],
            precios: [
                { 
                    componente: "Monitor GPRS 3000", 
                    precio: 200 
                },
                { 
                    componente: "Motherboard ASUS 1500", 
                    precio: 120 
                },
                { 
                    componente: "Monitor ASC 543", 
                    precio: 250 
                },
                { 
                    componente: "Motherboard ASUS 1200",
                    precio: 100 
                    },
                { 
                    componente: "Motherboard MZI", 
                    precio: 30 
                },
                { 
                    componente: "HDD Toyiva", 
                    precio: 90 
                },
                { 
                    componente: "HDD Wezter Dishital", 
                    precio: 75 
                },
                { 
                    componente: "RAM Quinston", 
                    precio: 110 
                },
                { 
                    componente: "RAM Quinston Fury", 
                    precio: 230 
                }
                ]
        }
        const copiaLocal = deepcopy(local);

        render(local);
        expect(local).to.deep.eql(copiaLocal);
    })
})