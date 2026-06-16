public class SingletonTest{
    public static void main(String[] args){
        Logger logger1=Logger.getInstance();
        Logger logger2=Logger.getInstance();

        logger1.logMessage("application started");
        logger2.logMessage("user logged in");

        System.out.println("checking wheather both objects are same:");

        if(logger1==logger2){
            System.out.println("only one logger instnce exists");
        }else{
            System.out.println("multiple longer instances exist");


        }
    }
}