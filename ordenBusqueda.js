/* DUDAS
  - cada método de ordenamiento debería tener randomFill al principio considerando que antes de cada uno lo pongo?
  - comentario en tercera línea de método show()
  - como puedo comprobar que el vector tenga información en sus posiciones al inicio de cada método de búsqueda/ordenamiento?
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
    let pos=null,i;
    for(i=0;i<this.size;i++){
      if(this.array[i]==number)
        pos=i;
    }
    return pos;
  }
  BusquedaBinaria(number) {
    let min=0,med=this.size/2,max=this.size,i,pos=null;
    for(i=0;i<this.size;i++){
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
    }
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
console.log(arreglo.BusquedaSecuencial(33));

arreglo.RandomFill();
console.log(arreglo.Show());
console.log(arreglo.BusquedaBinaria(23));
