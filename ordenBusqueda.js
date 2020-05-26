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
      let info = " ";
      for (let i = 0; i < this.size; i++) info += this.array[i] + "  ";
      return info;
    }
  }
  Burbuja() {
    let temp, i, j;
    for (i = 1; i < this.size; i++) {
      for (j = 0; j < this.size - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;
        }
      }
    }
  }
  BurbujaMejorado() {
    let i,
      flag = 1,
      j,
      aux;
    for (i = 0; i < this.size - 1 && flag == 1; i++) {
      flag = 0;
      for (j = 0; j < this.size - i - 1; j++) {
        if (this.array[j] < this.array[j + 1]) {
          flag = 1;
          aux = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = aux;
        }
      }
    }
  }
  Heapsort() {
    let n = this.array.length;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) this.Heapify(n, i);
    for (let i = n - 1; i >= 0; i--) {
      this.Swap(0, i);
      this.Heapify(i, 0);
    }
  }
  Heapify(length, i) {
    // i=length/2-1
    let largest = i,
      left = 2 * i + 1,
      right = 2 * i + 2;
    if (left < length && this.array[left] > this.array[largest]) largest = left;
    if (right < length && this.array[right] > this.array[largest])
      largest = right;
    if (largest !== i) {
      this.Swap(i, largest);
      this.Heapify(length, largest);
    }
  }
  Swap(pos1, pos2) {
    let aux = this.array[pos1];
    this.array[pos1] = this.array[pos2];
    this.array[pos2] = aux;
  }
  BusquedaSecuencial(number) {
    let pos = -1,
      i;
    for (i = 0; i < this.size; i++) {
      if (this.array[i] == number) pos = i;
    }
    return pos;
  }
  BusquedaBinaria(number) {
    let min = 0,
      med = this.size / 2,
      max = this.size,
      i,
      pos = -1;
    while (max >= min) {
      if (this.array[med] === number) pos = med;
      else if (this.array[med] > number) {
        med = (min + max) / 2;
        min = med + 1;
      } else {
        max = med - 1;
        med = (min + max) / 2;
      }
    }
    return pos;
  }
}

let arreglo = new Info(20);
arreglo.RandomFill();
console.log(arreglo.Show());
arreglo.Burbuja();
console.log("Ordenado por Burbuja " + arreglo.Show());

arreglo.RandomFill();
console.log(arreglo.Show());
arreglo.BurbujaMejorado();
console.log("Ordenado por Burbuja Mejorado " + arreglo.Show());

arreglo.RandomFill();
console.log(arreglo.Show());
arreglo.Heapsort();
console.log("Ordenado por heapsort " + arreglo.Show());

arreglo.RandomFill();
console.log(arreglo.Show());
console.log(arreglo.BusquedaSecuencial(33));

arreglo.RandomFill();
console.log(arreglo.Show());
console.log(arreglo.BusquedaBinaria(23));
