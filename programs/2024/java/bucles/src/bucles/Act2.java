//act 2
package bucles;

import java.util.Scanner;

public class Act2 {

    public static void main(String[] args) {
    int numero;
    System.out.println("Decime un numero");

    Scanner teclado = new Scanner(System.in);
    numero = teclado.nextInt();

    for(int i = 0; i < numero ; i++){
        System.out.println(i + 1);
    }


    teclado.close();
        }
    }


