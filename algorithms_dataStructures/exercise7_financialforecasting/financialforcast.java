//Recursion is a technique in which a method calls itself to solve smaller instances of the same problem until 
// a base condition is reached.

//T(n) = T(n-1) + O(1)

// therefore, it is O(n)


//The recursive solution can be optimized by:
//. Using Iteration (Loop)
//. Using Dynamic Programming 


import java.util.*;

public class financialforcast {

    public static double futurevalue(double currentvalue,double growthrate,int years){

        if(years==0){
            return currentvalue;
        }

        return futurevalue(currentvalue*(1+growthrate),growthrate,years-1);
    }
    public static void main(String[] args){
        double currentvalue=10000;
        double growthrate=0.10;
        int years=3;

        double Futurevalue=futurevalue(currentvalue,growthrate,years);

        System.out.println("Current value:"+currentvalue);
        System.out.println("Growth Rate:"+(growthrate*100)+"%");
        System.out.println("Years:"+years);
        System.out.println("Future Value:"+Futurevalue);

    }
}
