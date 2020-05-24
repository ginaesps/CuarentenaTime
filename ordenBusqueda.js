/* DUDAS
  - cada método de ordenamiento debería tener randomFill al principio considerando que antes de cada uno lo pongo?
      R= No, es una confusión normal, pero el metodo ordena el vector que le pongas, si de casualidad yo 
        llenara un vector con datos que llegan de una BD, pero tu método randomFill se llama al principio, vas a borrar mis
        datos que quiero ordenar.
        Entonces aun cuando lo mandas llamar cada vez, es mejor porque así lo ocupa tu programa, pero esos métodos ya te sirven para
        datos aleatorios o datos que conseguiste de algún otro lugar, y en caso contrario el metodo debería llamarse
        llenarAleatorioYOrdenarBurbuja :: puesto que hace las dos cosas.
  - comentario en tercera línea de método show() en lugar de 0 mejor una cadena vacia ""
  - como puedo comprobar que el vector tenga información en sus posiciones al inicio de cada método de búsqueda/ordenamiento?
       R= puedes checar la longitud del vector a lo mas, pero el resto es responsabilidad del usuario que esta mandando 
         llamar tu método, tambien puedes usar un "try catch" o checar si el typeof(vector[0]) es "undefined"
  * Tus métodos de busqueda devuelven la posición del elemento, pero cuando no esta lo mejor es que devuelvan también un 
  numero que indique que no existe, lo idea es el -1, el null debemos usarlo si devolvemos el objeto como tal, 
  devuelvo el objeto si existe y en caso de que no existe, no devuelvo nada.
*/
class Info {
  constructor(size) {
    this.size = size;
    this.array = new Array(size);
  }
  RandomFill() {
    for (let i = 0; i < this.size; i++)
      this.array[i] = Math.ceil(Math.random() * 50);
  }
  Show() {
    if (this.array === null) return null;
    else {
      let info = 0; // como puedo inicializar esta variable para evitar que al inicio del vector haya un 0?
      // Mejor la inicializamos con una cadena vacia let info="";
      for (let i = 0; i < this.size; i++) info += this.array[i] + "  ";
      return info;
    }
  }
  Burbuja() {
    let temp, i, j, comparaciones=0, intercambios=0;
    for (i = 1; i < this.size; i++) {
      comparaciones++;
      for (j = 0; j < this.size - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;
          intercambios++;
        }
      }
    }
    return this.Show()+'\ncomparaciones: '+comparaciones+'\nintercambios: '+intercambios;
  }
  BurbujaMejorado() {
    let i,flag=1,j,aux,comparaciones=0,intercambios=0;
    for(i=0;i<this.size-1 && flag==1;i++){
      flag=0;
      comparaciones++;
      for(j=0;j<this.size-i-1;j++){
        if(this.array[j]<this.array[j+1]){
          flag=1;
          aux=this.array[j];
          this.array[j]=this.array[j+1];
          this.array[j+1]=aux;
          intercambios++;
        }
      }
    }
    return this.Show()+'\ncomparaciones: '+comparaciones+'\nintercambios: '+intercambios;
  }
  Monticulo() {
    return this.Show();
  }
  BusquedaSecuencial(number) {
    let pos=null,i;  //pos debería ser -1
    for(i=0;i<this.size;i++){
      if(this.array[i]==number)
        pos=i;
    }
    return pos;
  }
  BusquedaBinaria(number) {
    let min=0,med=this.size/2,max=this.size,i,pos=null; //pos debería ser -1
    for(i=0;i<this.size;i++){  //este ciclo va a recorrer todo el vector, casi igual que la busqueda binaria, es mejor usar un while para que se detenga en cuanto lo encuentre o cuando tus limites indiquen que no estará
      if(this.array[med]===number)
        pos=med;
      else if(this.array[med]>number){
          med=(min+max)/2;
          min=med+1;
        }
      else{
        max=med-1;
        med=(min+max)/2;
      }
    }  // si aqui agregas después un console.log(i) te va a decir que se repitio "n" veces que es el mismo tamaño del vector.
    return pos;
  }
}

let arreglo = new Info(20);
arreglo.RandomFill();
console.log(arreglo.Show());
console.log(arreglo.Burbuja());

arreglo.RandomFill();
console.log(arreglo.Show());
console.log(arreglo.BurbujaMejorado());

/*arreglo.RandomFill();
console.log(arreglo.Show());
console.log(arreglo.Monticulo());*/

arreglo.RandomFill();
console.log(arreglo.Show());
console.log("buscando el 33 " ,arreglo.BusquedaSecuencial(33));

arreglo.RandomFill();
console.log(arreglo.Show());
console.log("buscando el 23 ",arreglo.BusquedaBinaria(23));
