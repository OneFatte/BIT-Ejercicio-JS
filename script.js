let array=[];
function mayorArray(array){
    let resultado;
    let comparador = array[0], j=0, k=0, impares=0;
    
// Segmento donde se envia NULL cuando no hayan elementos
    if (array.length==0) {
        resultado=null;    
    }
    else{
        
        // Segmento del FOR donde se busca el numero mayor
        for (let i = 0; i < array.length; i++) {
            if (array[i]>comparador) {
                comparador=array[i];
            } 
        }
        resultado = comparador;
        //
        // Segmento del WHILE donde se imprimen todos los elementos
        while (j <array.length ) {
            console.log("El  elemento en la poscicion "+j+" es: "+array[j]);
            j++; 
        }
        //
        // Segmento del DO WHILE donde se cuentan todos los impares
        do {
            
            if (array[k]%2 != 0) {
                impares++;
            }
            k++;
        } while (k < array.length);

        console.log("la cant de impares son: "+impares);
    }
    return resultado;
}
console.log(mayorArray([2,18,5,7]));