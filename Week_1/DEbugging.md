**What is debugging?**

A debugger is a tool in your IDE (integrated development environment) that lets you see the values of different variables at different points in the program. It's like a really powerful magnifying glass. While a few details vary between Eclipse/IntelliJ/NetBeans/VS Code, the concepts are the same.

When you run your code, you can choose to launch it in regular/run mode or debug mode. This allows you to deicde when you want to debug.

 

**Why not Println?**

When first learning how to code, we often write code like this to see what is going on:

`System.out.println(numCats);`

There's nothing wrong with using println (as long as you don't commit it). However, it can quickly get unmanagable in a more complicated program especally if you have multiple things to keep track of or a lot of loops. It can also be hard to find when there is a lot of logging in the application. (I used the stars and my initials to mitigate that, but still can get past the point where println is useful.)

`System.out.println("*** JB i=%s numCats=%s numDogs=%s".formatted(i, numCats, numDogs));`

Even if println() does meet your needs at the moment, it won't forever. Learning how to use a debugger helps avoid the problem that you use println just because it is all you know.

 
**Why not unit testing?**

Unit testing is writing code to test small pieces of code at the click of a button. Nothing is wrong with unit testing. Unit tests are great. They document expected behavior. They tell you if an unexpected value is returned. They help you understand the behavior of the code. And sometimes they can even give you big clues about what is wrong with the code. However, they don't tell you what is happening inside the broken code when it isn't returning the right value. For that, you use a debugger with the unit test to see what is going on inside the method. And once you fix your code, unit tests can help catch new bugs from being introduced!
```
@Test
void magic() {
     assertEquals(42, target.magic(), "magic number incorrect");
}
```
 

**What is a breakpoint?**

I've (improperly) implemented the magic method. It's supposed to multiply six times seven and get 42. However, that's not what happens. After (not) much investigation, I am baffled and realize I want to know what the values of part1 and part2 are on line 5.

That's what a breakpoint is for. It lets me tell the debugger to pause the program there and let me poke around. How do I set a breakpoint you ask? In the left bar near your code, you can double click (or right click and chose to turn on the breakpoint.) A little circle will appear showing the breakpoint I set.
```
public class Answer {
    public  int magic() {
        int part1 = 3 + 2;  // BUG!
        int part2 = 7;
        return part1 * part2;
    }
}
```
It is important to run the program in debug mode for the breakpoints to take effect. (Remember, if you don't run in debug mode, all breakpoints are ignored.) When the debugger stops on line 5, I see that part2 is the seven that I expected. However part1 is five, not six. I found the bug! Thanks to the debugger allowing me to set a breakpoint.

 

**How can debuggers be used?**

There are a number of reasons why you might want to use a debugger. Three of the most common are:

`Fixing broken code` - The debugger allows you to see the values of variables as the code runs. This allows you to see where it stops behaving as expected.

`Understanding unfamiliar code` - Watching the values of each variable as the code runs can help you understand it better.

`Tracing the path of the code` - When stopping at a breakpoint, the debugger shows what classes/methods were called in order to get there. You can even click on them to see what the variables in scope at those points are.
 

**Debugger Basics**

There are four basic debugger commands to control the flow of execution once the debugger stops at your first breakpoint. For each of these commands, we will use the Flow class as an example.
```
public class Flow {
    public static void main(String args[]) {
      System.out.println(debugging());
    }
    
    public static int debugging() {
        int num = investigate();
        num++;
        return num;
    }
    
    public static int investigate() {
        int found = 5;
        return found;
    }
}
```
**Step into** - Tells the program to execute, but only to the first line of the method call. Suppose I have a breakpoint on line 7. When I tell the debugger to "step into", it goes to line 13.

**Step over** - Tells the program to execute but not stop in any methods. If I have a breakpoint on line 7 and tell the debugger to "step over", the debugger will then be on line 8. Choosing "step over" again will bring the debugger to line 9.

**Step out/return** - Tells the program to run to the end of the method and go back to the caller. If I have a breakpoint on line 13 and choose "step out" or "step return", the debugger will be on line 7 with the result from the method call. (Step out and step return are the same thing. Different IDEs use different names.)
**Resume** - Tells the program to keep going until it hits another breakpoint or completes.
