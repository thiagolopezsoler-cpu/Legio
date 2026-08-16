package holamundo;

import java.util.Scanner;

public class caculadora {
    public static void main(String[] args) {
        int number1, number2, suma, resta, potencia2, operacion2; 

        System.out.println("Soy una calculadora");

    System.out.println("primer numero");

        Scanner numberOne = new Scanner(System.in);
        number1 = numberOne.nextInt();
        
        System.out.println("segundo numero");

        Scanner numberDos = new Scanner(System.in);
        number2 = numberDos.nextInt();

        
        System.out.println("¿Eso es suma, resta, potencia divicion? Si es suma pone uno, si es resta 2 y si es potencia pone 3");
        Scanner operacion = new Scanner(System.in);
        operacion2 = operacion.nextInt();
        

        if(operacion2 == 1){
            suma = number1 + number2;
            System.out.println("La suma de estos numero es " + suma);
        } else{
            if(operacion2 == 2){
                resta = number1 - number2;
                System.out.println("La resta de estos numero es " + resta);
            } else{
                potencia2 = number1 * number1;
                System.out.println("La potencia del primer numero es " + potencia2);
            }
        }
        /*   suma = number1 + number2;
        resta = number1 - number2;
        potencia = number1 + number1;
        potencia2 = number2 * number2;
        
        System.out.println("la suma es igual a " + suma);
        System.out.println("La resta es " + resta);
        System.out.println("La potencia del primer numero es " + potencia);
        System.out.println("La potencia del sugundo numero es " + potencia2);

        numberOne.close();
        numberDos.close();
        operacion.close();
*/      
        numberDos.close();
        numberOne.close();
        operacion.close();


    }
}
