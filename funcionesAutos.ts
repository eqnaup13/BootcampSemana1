export interface IAuto {
    id: number;
    modelo: string;
    marca: string;
    anio: number;
    precio: number
}

export function totalAutos(Autos: IAuto[]): number {
    let total = 0;
    Autos.forEach((a)=>{
        total++;
    })
    return total;
}