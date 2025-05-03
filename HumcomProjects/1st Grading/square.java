import java.util.Scanner;

public class square {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int width , length , i = 1 , i2 = 1;
        
        System.out.println("Enter Width: ");
        width = input.nextInt();

        System.out.println("Enter Length: ");
        length = input.nextInt();

        while (length >= i){
            while (width >= i2){
                System.out.print("===");
                i2++;
            }
            i++;
        }
        
    }
} 

