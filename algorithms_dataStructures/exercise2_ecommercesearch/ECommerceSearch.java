//Big O Notation

//Big O notation is a mathematical representation used to describe the efficiency of an algorithm in terms of time and
 // space complexity as the input size increases.


// Linear Search
// Best Case:O(1) 
// Average Case:O(n)
// Worst Case:O(n) 

// Binary Search
// Best Case:O(1) 
// Average Case:O(log n)
// Worst Case:O(log n)

//Binary Search is more suitable for an e-commerce platform because it has a time complexity of O(log n), making it 
// much faster than Linear Search for large product catalogs.


import java.util.*;


class Product{
    int productId;
    String productName;
    String category;

    Product(int productId,String productName,String category){
        this.productId=productId;
        this.productName=productName;
        this.category=category;
    }

    void display(){
        System.out.println("Product ID:"+productId);
        System.out.println("Product Name:"+productName);
        System.out.println("Category:"+category);
        }
}
public class ECommerceSearch {
    public static Product linearSearch(Product[] products,String targetName){
        for(Product product:products){
            if(product.productName.equalsIgnoreCase(targetName)){
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products,String targetName){
       int low=0;
       int high=products.length-1;

       while(low<=high){
        int mid=(low+high)/2;
        int comparison=products[mid].productName.compareToIgnoreCase(targetName);
       if(comparison==0){
        return products[mid];
    }
    if (comparison<0){
        low=mid+1;
    }else{
        high=mid-1;
    }
    }
    return null;
    
}

public static void main(String[] args) {

    Product[] products={
        new Product(101,"Laptop","Electronics"),
        new Product(102,"Mobile","Electronics"),
        new Product(103,"Shoes","Fashion"),
        new Product(104,"Watch","Accessories")
    };
    String searchItem="Shoes";
    System.out.println("Linear Search:");
    Product result1=linearSearch(products,searchItem);
    if(result1!=null){
        result1.display();
    }else{
        System.out.println("Product not found");
    }
    System.out.println("Using Binary Search:");
    Product result2 = binarySearch(products, searchItem);
        if (result2 != null) {
            result2.display();
        } else {
            System.out.println("Product not found");
        }

    
}}
