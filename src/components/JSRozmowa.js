1. What is Coercion in JS?
    Conversion between two build-in types.
    we have 2 types of JS coercion:
        a)Explicit
            var a = "42" // "42"
            var b = Number(a) // 42
        b)Implicit
            var a = "42" // "42"
            var b = a * 1 // 42 

2. What is scope?
    Basically are variables and rules for how those 
    variables are accessed. Variables names 
    should be unique in the same scope. Scope can be
    nested inside another scope and then inner scope have an 
    access to outer scope vars 

3. Equality in JS
    We have to comparisons (strict and abstract):
    a)Strict (===) without allowing checked
    b)Abstract (==) with coercion allowed

4. typeof operator
    JS provides typeof operator to examine a variables 
    and tell exactly what type it is  
    var a --- typeof a // undefined
    var a = "hello" --- typeof a // string

5. What is an object?
    refers to compound value where you can set properties that 
    each of them have their own values of any type  
    BRACKET NOTATION also USEFULL IN THIS EXAMPLE:
    var obj = {
        a: "hello world",
        b: 42
    };
    
    var b = "a";
    
    obj[b];            // "hello world"
    obj["b"];        // 42

6. Explain arrays in Javascript
    An array is an object that holds values (of any type) 
    in numerically  indexed positions
    typeof arr;        // "object"

7. Explain values and types in JS:
    JavaScript has typed values, not typed variables. The following built-in types are available:

    string
    number
    boolean
    null and undefined
    object
    symbol (new to ES6)

8. Null and undefined in js 
    JavaScript (and by extension TypeScript) has two bottom types: null and undefined. 
    They are intended to mean different things:

    Something hasn't been initialized : undefined.
    Something is currently unavailable: null.

9. What is Strict mode? 
    Strict Mode is a new feature in ECMAScript 5 that allows you to place 
    a program, or a function, in a "strict" operating context. 
    This strict context prevents certain actions from being taken and throws more exceptions.
    a) each variable must be declared (let,const,var)
    b) parameters can not repear with the same name
    c) can't use key words for var names like "var let"

    all those will throw an error in strict mode

10. What is POlyfill?
    A polyfill is essentially the specific code (or plugin) that would allow you to have some specific functionality that you expect in current or “modern” browsers to also work in other 
    browsers that do not have the support for that functionality built in.

11. What is let keyword?
    In addition to creating declarations for variables at 
    the function level, ES6 lets you declare variables to 
    belong to individual blocks
    (pairs of { .. }), using the let keyword.

13. Remove duplicates of an array duplicated values
    // ES6 Implementation
    var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

    Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
    array.filter((item, index) => array.indexOf(item) === index)

14. GIven a string reverse a word and full sentence  
    var string = "Welcome to this Javascript Guide!";

    // Output becomes !ediuG tpircsavaJ siht ot emocleW
    var reverseEntireSentence = reverseBySeparator(string, "");

    function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
    }

15. Enqueue array value
    var inputStack = []; // First stack
    var outputStack = []; // Second stack

    // For enqueue, just push the item into the first stack
    function enqueue(stackInput, item) {
    return stackInput.push(item);
    }

    function dequeue(stackInput, stackOutput) {
    // Reverse the stack such that the first element of the output stack is the
    // last element of the input stack. After that, pop the top of the output to
    // get the first element that was ever pushed into the input stack
    if (stackOutput.length <= 0) {
        while(stackInput.length > 0) {
        var elementToOutput = stackInput.pop();
        stackOutput.push(elementToOutput);
        }
    }

    return stackOutput.pop();
    }

16. Explain event bubbling and how to prevent it
    Event bubbling is the concept in which an event triggers
    at the deepest possible element, and triggers on parent 
    elements in nesting order. As a result, when clicking on 
    a child element one may exhibit the handler of the parent activating.
    One wa