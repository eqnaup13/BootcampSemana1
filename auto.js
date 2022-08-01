"use strict";
exports.__esModule = true;
var funcionesAutos_1 = require("./funcionesAutos");
var listaAutos = [
    {
        id: 1,
        modelo: 'Yaris',
        marca: 'Toyota',
        anio: 2014,
        precio: 35000
    },
    {
        id: 2,
        modelo: 'Rav4',
        marca: 'Toyota',
        anio: 2022,
        precio: 75000
    },
    {
        id: 3,
        modelo: 'Corolla',
        marca: 'Toyota',
        anio: 2021,
        precio: 48000
    }
];
var cantidadAuto = (0, funcionesAutos_1.totalAutos)(listaAutos);
console.log(cantidadAuto);
