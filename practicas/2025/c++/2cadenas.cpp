int numeros[] = {30};
int arreglo[30];
int j = 0;
int x = 0;

for (int i = numeros[0]; i > 0; i--) {
    if (numeros[0] % i == 0) {
        arreglo[j] = i;
        j++;
    }
}

// usamos j porque es la cantidad de elementos que guardamos
for (int i = 0; i < j; i++) {
    x += arreglo[i];
}

cout << "Suma: " << x;