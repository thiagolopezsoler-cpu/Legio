
package holamundo;

import java.util.Scanner;

public class HolaMundo {

    
    public static void main(String[] args) {

        
        
        

    Scanner teclado = new Scanner(System.in);
    double num1, num2,suma; 
    System.out.println("Ingrese el primer numero que quiere sumar");
    num1 = teclado.nextDouble();
    
    System.out.println("Ingrese el segundo numero que quiere sumar");
    num2 = teclado.nextDouble();
    
    suma = num1 / num2;
    
    System.out.println("el resultado es " + suma);
    }   
}
