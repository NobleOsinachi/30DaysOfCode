using System;
using System.Collections.Generic;
using System.IO;

class Solution {
    static void Main(String[] args) {
        int i = 4;
        double d = 4.0;
        string s = "HackerRank ";
        
        // Declare second integer, double, and String variables.
        int num1;
        double num2;
        string message;
        
        // Read and save an integer, double, and String to your variables.
        num1 = int.Parse(Console.ReadLine());
        num2 = double.Parse(Console.ReadLine());
        message = Console.ReadLine();
        
        // Print the sum of both integer variables on a new line.
        Console.WriteLine(i + num1);
        
        double sum = d + num2;
        // Print the sum of the double variables on a new line.
        Console.WriteLine(sum.ToString("F1"));
        
        // Concatenate and print the String variables on a new line
        Console.WriteLine(s + message);
        // The 's' variable above should be printed first.

    }
}