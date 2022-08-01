import { IAuto, totalAutos } from './funcionesAutos';

const listaAutos: IAuto [] = [
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

const cantidadAuto = totalAutos(listaAutos);
console.log(cantidadAuto);