package holamundo;

import java.util.Scanner;

public class horarios {

    public static void main(String[] args) {

        // declaracion de variables
        int edad;
        Scanner teclado = new Scanner(System.in);

        System.out.println("********Bienvenido a ingles school********");
        System.out.println("ingrese la edad del alumno");
        edad = teclado.nextInt();

        if (edad >= 4 && edad <= 6) {
            System.out.println("El horario del grupo Kinder es lunes y miercoles de 16 a 17 horas");
        } else if (edad >= 7 && edad <= 9) {
            System.out.println("El horario del grupo 1st year es martes y jueves de 16:30 a 17:30");
        } else if (edad >= 10 && edad <= 11) {
            System.out.println("El horario del grupo 2nd year es martes y jueves de 17:30 a 19");
        } else if (edad >= 12 && edad <= 13) {
            System.out.println("El horario del grupo 3rd year es lunes y miercoles de 17 a 18:30");
        } else {
            System.out.println("Ingreso una edad que no corresponde");
        }

        teclado.close();
    }

}
