package bucles;

import java.util.Scanner;

public class Act5 {
    public static void main(String[] args) {
        String palabra;
        Scanner teclado = new Scanner(System.in);

        System.out.println("Decime una palabra cualquiera mientras no sea salir y si pones salir termina el bucle");
        palabra = teclado.nextLine();

        while (!palabra.equalsIgnoreCase("salir")) {
            System.out.println("La palabra es " + palabra);

            System.out.println("Decime una palabra cualquiera mientras no sea salir y si pones salir termina el bucle");
            palabra = teclado.nextLine();
        }
        teclado.close();
    }
}
