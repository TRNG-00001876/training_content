package org.example;
import io.javalin.Javalin;

public class Main {
    private static String updatedData="";
    public static void main(String[] args) {
        Javalin app=Javalin.create().start(7000);// created and started the Javalin instance o the port 7000

        // define get endpoint
        app.get("/",c->c.result("Hello,Java Team"));

        //define post endpoint
        app.post("/data",c->{
            String body=c.body(); // get the body of the post request
            updatedData=body;
            c.result("The obtained data is: "+body);
        });

        // define get endpoint to retrieve the updated data

        app.get("/data",c->c.result(updatedData));



        System.out.println("Hello world!");
    }
}