package holamundo;

import java.util.Random;
import java.util.Scanner;

public class calculadorDeIq {
    public static void main(String[] args) {
        int iq;
        String nombre;

        System.out.println("Yo te voy a decir tu iq dependiendo de tu nombre");
        Scanner teclado = new Scanner(System.in);
        nombre = teclado.nextLine();

        Random random = new Random();
        iq = random.nextInt(5000);

        System.out.println(nombre + " tu iq es igual a " + iq);

        teclado.close();
    }

}
