package org.example;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        List<Employee> empList=getEmpList();
        // We use filter method to fliter the data based on the condn
        //empList.stream().filter(e->e.getGender().equals("Female")).forEach(e->System.out.println(e));

        //System.out.println("----------------------------------------------------------------------");

        // sort() it will sort the emp list according to cond
        //empList.stream().sorted(Comparator.comparing(Employee::getRating)).forEach(e->System.out.println(e));

        //System.out.println("----------------------------------------------------------------------");

        // in descending order
       // empList.stream().sorted(Comparator.comparing(Employee::getRating).reversed()).forEach(e->System.out.println(e));

        //Match method
        /*boolean isSalary=empList.stream().anyMatch(e->e.getSalary()>100000);
        System.out.println(isSalary);

        boolean isSalary1=empList.stream().allMatch(e->e.getSalary()>100000);
        System.out.println(isSalary);

        boolean isSalary2=empList.stream().noneMatch(e->e.getSalary()>100000);
        System.out.println(isSalary);*/

        // max

       // empList.stream().max(Comparator.comparing(Employee::getSalary)).ifPresent(System.out::println);

        // group by
        //Map<Integer, List<Employee>> empByRating=empList.stream().collect(Collectors.groupingBy(Employee::getRating));

        //empByRating.forEach(((rating,emplist)->{System.out.println(rating);emplist.forEach(System.out::println);}));


        //empList.stream().filter(e->e.getGender().equals("Male"))
          //      .filter(e->e.getSalary()>50000)
          //      .forEach(System.out::println);

    List<String> femaleNames=empList.stream()
            .filter(e->e.getGender().equals("Female"))
            .map(Employee::getLastName)
            .map(String::toUpperCase)
            .collect(Collectors.toList());


System.out.println(femaleNames);
    }
    public static List<Employee> getEmpList()
    {
        return Arrays.asList(
                new Employee("59-385-1088","Zacharias","Schwerin","zchwerin@gmail.com","Male","True",101146,0),
                new Employee("73-274-6476","Kyle","Frudd","kfrudd1@ovh.net","Male","FALSE",29310,2),
                new Employee("85-939-9584","Axe","Gumb","agumb2@twitter.com","Female","FALSE",62291,4),
                new Employee("08-180-8292","Robinet","Batterham","rbatterham3@last.fm","Male","FALSE",142439,4),
                new Employee("21-825-2623","Ulick","Burrel","uburrel4@google.ru","Male","FALSE",128764,5),
                new Employee("66-708-5539","Tailor","Ridding","Ridding","Female","FALSE",152924,4),
                new Employee("81-697-2363","Joete","Braybrooke","jbraybrooke6@prnewswire.com","Male","TRUE",128907,0),
                new Employee("63-019-1110","Elroy","Baverstock","ebaverstock7@ehow.com","Male","TRUE",2510,0)
        );
    }
}