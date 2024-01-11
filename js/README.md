### Javascript

#### [] Introduction
* JavaScript is a lightweight, interpreted, object-oriented programming language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.

#### [] Learning Resources
* [Sololearn - JavaScript](https://www.sololearn.com/en/learn/courses/le-javascript) `Course`
* [Stack Learner - Javascript All You Need to Know](https://www.youtube.com/playlist?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1) `Tutorial`
* [Sololearn - JavaScript Intermediate](https://www.sololearn.com/en/learn/courses/javascript-intermediate) `Course`

#### [] Certifications
* [Sololearn - JavaScript](https://www.sololearn.com/certificates/CT-ANUVMBCE) `Course` `Certificate`
* [Sololearn - JavaScript Intermediate](https://www.sololearn.com/certificates/CC-XVJTPR9B) `Course` `Certificate`

#### [] Timelines
* `2019` Started *JavaScript* course on Sololearn
* `2019-12-01` Completed *JavaScript* course on Sololearn
* `2023` Completed *Javascript All You Need to Know* tutorial on Stack Learner
* `2023-07-24` Started *JavaScript Intermediate* course on Sololearn

#### [] Covered Topics

##### Stack Learner - Javascript All You Need to Know

**BASIC**
----------------------------------------------------------------------------------------------------

**Core 1 : CONDITIONS AND LOOPS :-**

- **JS Reserved Words** [shouldn't use this in variable name], **JS Keywords** [it can't be used in variable]
- **JS CamelCase System in Variable** [should use], **Underscore in Variable** [like cpp, python developers uses], **JS Case Sensivity**
- **JS Data Types** [primitive and object] [primitive type - number, string, boolean, null, undefined] [object type - array, object, function]
- **JS Number** [integer, floating[.] are same, child of number][JS ignores zero after point like 5.0 to 5][integer ignores all numbers after point forever][some of other parts - Infinity, NaN]
- **JS String** [literal - 'a' "a" `a`][object/constructor - String(1.25)]
- **JS Null vs Undefined** [null is used for object to refer 'the value of the object is unset, will be set soon][undefined comes when we genuinly don't set any value (even null as value) of a variable]
- **JS Number Specific** [Hexadecimal (0xff) - Base 16, Octal (0756) - Base 8, Decimal - Base 10]
- **JS Operators** [Arithmatic : + - * / % ++ --, Pre-Incremental : ++a, Post-Incremental : a++, Assignment : += -= *= /= %=, Logical : && || !, Comparison : == != > < <= >= === !==, Bitwise : & | ~ ^ << >>, Typeof : typeof a, Ternary : ? : ] []
- **JS Statements** [...optional use of semicolon in the endings of statements]
- **JS Maths** [E, PI, abs, floor, ceil, max, min, pow, sqrt, random], **Date** [toDateString, toTimeString, toLocalString, get..]
- **JS Logics** [if, else, elseif, switch conditions], **Using Logical Operator**
- **JS Ternary Operator** [logic/condition ? 'true' : 'false']
- **JS AND OR Shorthand** [var a = b || 'no value'][var a = true; a && console.log('truely');
- **JS Loops and Use** [for, while, do], Nested Loops, Break, Continue, Infinity]

**Core 2 : STRING :-**

- **JS String Comparision** [JS vs Java vs C], **literal vs constructor**
- **JS Escape Notation in String** [\n, \t, \", ...]
- **JS Lexicographic System** [for Comparing Two Strings]
- **JS String Methods** [length, concat, substr, charAt, startsWith, endsWith, toUpperCase, toLowerCase, trim, split, replace, replaceAll, padStart, padEnd]
- **JS String Length** [built-in method : text.length] [custom method : using while loop]

**Core 3 : ARRAY :-**

- **JS Array Comparision** [JS vs Java vs C], **literal vs constructor**
- **JS Array Traversing** [using 'for' loop], **Multidimensional Array and Using Multi Loops**
- **JS Array Insert, Remove, Replace, Search, Reverse** [with Loop, with Function]
- **JS Array Methods** [join, fill, concat, Array-isArray, Array-from], Array is a mutable object [suppose a=[1,2], b=a; if you change b then a will be changed for this - more details in OOP], [b=Array.from(a); it's exception, here array is immutable]

**Core 4 : OBJECT :-**

- **JS Object** [Without primitive data, everything in js is object]
- **JS Object Literal and Constructor, Accessing Object** [Array Notation or Normal]
- **JS Object Insert, Remove** [new syntax : delete obj.a;], **Compare Two Objects** [Way is Convert Object to String And Then use ===]
- **JS Iterate Object** ['x' in obj, for {var i = in obj} --KEYS] ['x' of obj, for {var i = of obj} --VALUES]
- **JS Object Methods** [Object.keys,.values,.entries,.assign]

**Core 5 : FUNCTION :-**

- **JS Function vs Loop** [both reduce reputed works but not same, function is a code block], **Function is an Abstraction** [It hides processing info, OOP Concept]
- **JS Function Defining, Invoking** [making and using], **Arguments and Parameters** [Parameters = variable names; Arguments = their values]
- **Argument Object** [return arguments], **Access Arguments without Parameter** [With for loop], [arguments is an array-like object]
- **JS Return** [Can store from function to a variable or return like - var a = Name()][You cant use any code after return, so should use return in the last place of a function]
- **JS Function Expression** [by Anonymous Function; Use in variables or more expressions], **Function Declaration** [by function keyword], **Inner Function** [Function in Function... nested function]
- **JS Function Scoping** [In ES5, only function is a block, if you put any variable in function, you cant access it globally but in function] [In ES6, every curly bracket is a block] [Child can access it's parent data mostly]

**ADVANCED**

----------------------------------------------------------------------------------------------------

**Core 6 : FUNCTIONAL PROGRAMMING :-**

- **FP Three Main Terms** :

1. Pure Functions

2. First Class Functions

3. Higher Order Functions

[] Function acts like a value

- **Closure in Function** [Use anything one scope to another scope without passing arguments]
- **Callback Function** [Passing function as an argument and using it]
- **ForEach Function :**

[] It modifies original array while map is not

[] Implementation : With for loop and callback function

- **Map Function :**

[] Except of foreach, doesnt modify original array and give new modified array

[] Implementation : With for loop and callback function

- **Filter Function :**

[] Like a map function but uses boolean and logics

[] If we return true, it will accept the value of array, otherwise it will deny

[] Implementation : With for loop and callback function

- **Reduce Function :**

[] It is high function because it doesnt use one value, also it uses another value like previous and current value

[] Implementation : With for loop and callback function

- **Find/FindIndex Function :**

[] Find Value or Index by Boolean, It returns true or false

[] Implementation : With for loop and callback function

- **Other Functions :**

[] Sort : Maintaining order, it has it's own algorithm, original array will be changed

[] Some : Maintaining at least one of logic, otherwise return false

[] Every : Maintaining full of logic, otherwise return false, original array will be changed

- **Currying** [Return function from a higher order function] :

[] Transform a function with multiple arguments into a sequence of nesting functions

```jsx
function print(a) { 
  return function (b) { 
      return a + b 
  } 
}
print(1)(2); // 3
```

- **Recursive Function :**

[] A function that calls itself, can work like a loop, Needs high memory

```jsx
function print(n) {
  if (n === 0) return print(n - 1)
}
print(10)
```

- **Function Composition :**

[] First function's input gives second function's output

```jsx
input( output(10) )
```

**Core 7 : SCOPE AND CLOSURE :**

- **JS Engine :**

[] JS engine is created by C++

[] Google - [V8], Mozilla - [Spider Monkey], Microsoft - [Chakra], Apple - [JS Core]

[] 'Parser' parse indirectly JS codes to binary codes

- **Compiled vs Interpreted**

[] JavaScript is an interpreted language but acts as a compiled language

[] Compiled takes short time than interpreted

[] Interpreted is useful for debug than compiled

- **Execution Context**

[] Execution context happens in two phases: Creation Phase and Execution Phase

[] Scope chain : function-2 scope > function-1 scope > global scope

[] Scope chain is look like a tree, three types of scope - global, function, block

- **Creation & Execution Phase :**

[] Creation : Identify all variables and functions, store variables 
with undefined, store functions with reference and make relational scope
 chain

[] Execution : Assign the values of undefined variables and this, executing everything line by line

- **Hoisting in JS :**

[] Related to when and where the situation of variables and functions will be among the creational phase and executional phase

- **Function Declaration vs Expression**

[] There is no difference between them about their output, but has difference about hoisting

[] Expression means putting anonymous function in a variable, on the 
otherside, declaration means direct function with function keyword

- **Scope in JS :**

[] Scope is an address of codes, also of accessing, {} = Scope

[] Nested scope [{ { {} } }], Lexical Scope [ Tokenize and dividing as token ]

[] Scope chain : it is look like a tree, three types of scope - 
global, function, block. A scope in a chain is relationship of all data

[] If a scope don't find any data, it will go to it's parent

- **Closure :**

[] Closure is a system by which we can store data

[] #### Able to remember and access it's lexical scope

[] #### When that function executing outside it's lexical scope

- **Closure & Loop :**

[] Problem Solving - using two scopes and closure inside the loop

<aside>
💡 In JS, function is only block, other things with {} are not block. 
So, variables are accessible outside {} without function

</aside>

**Core 8 : OBJECT ORIENTED PROGRAMMING**

- **Introduction :**

[] OOP is a programming paradigm or way, almost like grouping and designing for application

[] Paradigms : Procedural [single blocks], Object Oriented [objects]

[] Think Everything as an Object, Finding Object

- **OOP Methods, Properties, Class :**

[] Properties = Noun [name: "A"], Methods = Verb() [play: function(){}]

[] Class is a template by which you can make multiple objects, for skipping DRY, it is like a factory

- **OOP Four Pillars [Theory] :**

[] Abstraction, Encapsulation, Inheritance, Polymorphism

- **OOP Abstraction :**

[] Ability for hiding unnecessary details [private] like 
implementation or circuit machines (motherboard), which are not 
necessary for us, necessary is output

- **OOP Encapsulation :**

[] Ability for bundling properties and methods in one unit or one class

- **OOP Inheritance :**

[] Ability for deriving a class from another class for skipping DRY, 
making a base class [containing the qualities of others] which is common
 among other classes

- **OOP Polymorphism :**

[] Method overwrite, Multiform of anything like various objects from one class only

- **Intro to OOP :**
    
    **@ Object Literal :-**
    
    #### Simple object creation, is a part of an class
    
    **@ This :-**
    
    #### Can be used in anywhere, it returns root object if it is inside 
    an object, otherwise it returns 'window' object. Also it's value depends
     on where it will be executed
    
    **@ Factory :-**
    
    #### Is a pattern, returning object in a (it) function
    
    #### It can be used directly without using 'new' keyword
    
    **@ Constructor :-**
    
    #### 2 things :   [Is a pattern, using all properties and methods with
     this keyword in a (it) function, function name should be capital]
    
    [Is a property of every object, and also a reference, every object has it]
    
    #### Java/C++ Background, so it's easy for programmer
    
    **@ New :-**
    
    #### Converting a function to a object, type changing, it is used specially for constructor pattern
    
    **@ Bind, Call, Aply :-**
    
    #### Concept : Calling function with fixing execution context, 
    refering 'this' keyword [like setting object for 'this' keyword in a 
    function]
    
    #### Call : Instantly calling, (this, arguments...)
    
    #### Apply : Instantly calling, (this, [arguments...])
    
    #### Bind : No calling, but changing, (this, arguments...)
    
    **@ Pass by value / by reference :-**
    
    #### Pass by value [primitive data] in a function can't be changed outside the function really
    
    #### Pass by reference [object] in a function can be changed outside the function really
    
    #### Reference has unique id number where primitive data hasn't
    
- **Intro to Abstraction :**
    
    @ **Private property :-**
    
    #### By creating local variables in a constructor pattern
    
    @ **Getter/Setter :-**
    
    #### Getter : 
    
    1- Returning private property in a function, which is a public function
    
    ```jsx
    this.getNewName = function() { 
        return privateProperty 
    }
    ```
    
    2- By using :-
    
    ```jsx
    Object.defineProperty(this, newName, { 
       get: function() { return privateProperty } 
    })
    ```
    
    #### Setter :
    
    ```jsx
    Object.defineProperty(this, newName, { 
       set: function(value) { privateProperty = value } 
    })
    ```
    
- **Intro to Inheritance :**
    
    @ Two kinds of it are available : classical and prototypical
    
    @ JS class has prototypical inheritance
    
    @ **Prototype :-**
    
    #### By which objects inherit features from one another, where there is no code duplication
    
    #### It is a parent class, every object has a parent class that is `__proto__` [prototype]
    
    #### For getting any object's prototype, you shouldnt use `obj.__proto__`, but you can use `Object.getPrototypeOf(obj)`
    
    @ **Multi-level Inheritance :-**
    
    #### "__proto__" in "__proto__", Multiple prototype until comes Object prototype
    
    @ **Property Descriptor :-**
    
    #### Get : Object.getOwnPropertyDescriptor(obj, 'key')
    
    #### Set : Object.defineProperty(obj, 'key', { enumerable: false,... })
    
    @ **Constructor Prototype :-**
    
    #### Other way of finding prototype from a constructor function / pattern : FunctionName.prototype
    
    #### Setting prototype [for inheriting common property to all 'var
     ... = new FunctionName()', though it will be hidden in __proto__, it 
    can be used publicly as a property or method] : 
    FunctionName.prototype.newProperty = 'value'
    
    @ **Prototype vs Instance Member :-**
    
    #### Instance = body or child, Prototype = out of body or parent
    
    #### Use prototype for avoiding duplicated instance, we can use anything from instance to prototype area [we = member]
    
    <aside>
    💡 You can check `Obj.hasOwnProperty()`, Don't overwrite 
    built-in prototypes but can write for local object, `Object.keys(Obj)` = 
    Instance only, `for (i in Obj) loop` = 'Instance + Prototype' members
    
    </aside>
    
    #### Check Instance/body or Parent : {} instanceOf Circle
    
    @ **Prototypical Inheritance :-**
    
    #### Inherit normal example :  circle -> Circle -> Object
    
    #### Custom inheritance : circle -> Circle -> Shape -> 
    Object; Code: Circle.prototype = Object.create(Shape.prototype)
    
    @ **Reset Constructor After Inheritance :-**
    
    #### Previous example : Circle.prototype = Object.create(Shape.prototype)
    
    ```jsx
    Circle.prototype.constructor = Circle
    ```
    
    #### Why? Because if you don't reset, your Circle constructor will
     be overwritten by 1st line [for this you can't get Circle's Instance]
    
    @ **Calling 'Super' With Call Method :-**
    
    ```jsx
    var Shape = function(color){ 
      this.color = color;
    }
    var Circle = function(width, color){ 
       Shape.call(this, color);
       this.width = width;
    }
    ```
    
    @ **Creating 'Extends' Function :-**
    
    #### Why? For avoiding coding duplication
    
    ```jsx
    function extendNew = function(child, parent) {
       child.prototype = Object.create(parent.prototype);
       child.prototype.constructor = child;
    }
       extendNew(Circle, Shape);
       extendNew(Triangle, Shape);
    ```
    
    <aside>
    ⚠️ Don't use inheritance when the object layer ismore than two. For more than two, solution is OOP Composition.
    
    </aside>
    
- **Intro to Polymorphism :**
    
    @ Method overwriting after 'Extend' function and Prototypical Inheritance - [possible]
    
    ```jsx
    var Circle/Triangle = function(width){
      this.width = width
    }
    Shape.prototype.showMe = mainFunc();
    
    extendNew(Circle, Shape);
    extendNew(Triangle, Shape);
    
    Circle.prototype.showMe = changeFunc1();
    Triangle.prototype.showMe = changeFunc2();
    
    shape.showMe()  // I am default
    circle.showMe()  // I am from Circle after overwrite
    triangle.showMe()  // Hello World, the end
    ```
    
- **OOP Composition**
    
    @ None
    

**Core 9 : ES6**

- **Environment Setup** [We will use Webpack + BabelJS for converting ES6 to ES5]
- **[Webpack + Babel]** [Webpack = bundler] [Babel = transcompiler]
- **Template string, padWith, padEnd, repeat**
- **Let, Var, Const**
- **Arrow Function** [()=>{}]
- **Default Parameters**
- **Custom Iterable** [Symbol.iterator()]
- **Rest and Spread** [...]
- **Enhance Object** [method(){}]
- **Destructuring**
- **Object From Entries**
- **Symbols** [Symbol()]
- **Iterator** [Symbol.iterator]
- **For of loop**
- **Generator** [function* ...]
- **Set** [new Set([])]
- **Map** [new Map([ [], [] ])]
- **Weak Set** [new WeakSet([])]
- **Weak Map** [new WeakMap([])]
- **Class OOP** [class Name {...}]
- **Class Static Method** [without using 'new' keyword]
- **This keyword** [class vs constructor function] [''strict mode'']
- **Private Data with Symbol** [let _width = Symbol()] / [ [draw]() {...} ]
- **Private Properties with WeakMap**
- **Getter & Setter** [get ..., set ...]
- **Inheritance** [... extends ...]
- **Method Overriding** [Just Make a Method]
- **Module Systems** [Old: AMD,CommonJS,UMD; New: ES6 Modules]
- **Error Handling** [ with If Else, with Try Catch Finally] and Throwing
Error on Try Block; Optional Catch Binding; Custom Error Class

**Core 10 : ASYNCHRONOUS PROGRAMMING**

- **What is Synchronize** [Waiting for one service to complete]
- **What is Asynchronize** [Opposite of Synchronize; Multiple things at a time]
- **Asynchronus Programming** [Related to file system, databases, web api
system, rest api, ajax], Example [`setTimeout(callback, delay)`]
- **Why Does Javascript Act Like Asynchronous** [Because JS is a single-threaded language] [Java, Python is multi-threaded]
- **JS has two data structures : heap** [for managing variables] and **stack** [for managing functions]
- **JS can handle multiple tasks because of 4 terms though It is
single-threaded** [4 terms for making asynchronus :- Call Stack, Web API,
Event Loop, Callback/Task Queue]
- **How JS Handle Asynchronous**
[Call stack -> Web API -> Task Queue -> Call stack ->
Output] [JS really is Synchronus, but JS V8 Engine make this
asynchronus]
- **What Does V8 Engine Do** [1. Compile & Execute JS code, 2. Handling Call Stack, 3. Handling Heap Memory to Allocate Memory for Variables, 4. Collect Garbage - Release Memory Which Is No Longer Necessary, 5. Provide Data Types, Operators, Objects and Functions]
- **What Does Not V8 Engine Do** [1. DOM and It's Handling, 2. Multiple V8 Engine Never Share Variables or Context Among Themself]
- **Handle Asynchronous Tasks** [Three Ways : Callback, Promise, Async
Await], **Handle Collection on Async Operation** [Three Ways : Async
Iterator, For Await Of Loop, Async Generator]
- **AJAX** [Asynchronus Javascript and XML (Though XML in name but really JSON) -
It's a Web API, we can communicate with server through this API for
getting particular data - This Web API is similar to REST API]
- **AJAX with Callback** [Putting AJAX xhr in a custom function then use callback function as an argument]
- **General Callback Not Always Asynchronous in Javascript, Why Not
Callback Always Helpful** [Due to long chain and hard to manage chain],
**Solution** [Solution is Promise Callback]
- **Promise** [It's a constructor function, which has one callback argument and callback has two argument - resolve, reject]

<aside>
💡 Don't store part in variables, use simply then() block.

</aside>

- **Fetch API** [Use promise, don't need of callback like XMLHttpRequest], **Chain of 'then'** [Another promise after resolve]
- **Implement fetch API by Promise**; Promise All; Promise Race;
- **Async Await** [Easy to use promise; Async returns promise; Await behaves
like Then(); Await keyword must be used inside an 'async' function],T**ry
Catch with Async Await** for Handling Error
- **Async Iterator** [Convert synchronus iterator to asynchronus], **JavaScript Immediately Invoked Function Expressions** (IIFEs)
- **Async For Await Of Loop** [Convert synchronus iterator to asynchronus], **Async Generators**

**Core 11 : DOM MANIPULATION**

- **Document Object Model**

**Core 12 : JS LIBRARY**

- **What is Library** [Solution of some commonly arrises problem]
- **Library vs Framework** [We control library, but framework control us]
- **Jquery** [DOM Manipulation] - https://jquery.com/
- **Lodash** [Extend core functionalities of JS] - https://lodash.com/
- **Underscore** [Extend core functionalities of JS] - https://underscorejs.org/
- **Math** [Complex Mathematics, Calculations] - https://mathjs.org/
- **Moment** [Date and Time] - https://momentjs.com/
- **Collect** [Collections] - https://collect.js.org/
- **Axios** [Handle HTTP request] - https://axios-http.com/docs/intro
- **Learning any library** [Following documentation, exploring all features]

**Core 13 : EXTRA**

- **JS Developemt in** [front-end, back-end, web, mobile-app, desktop-app, cross-platform-app]
- **InterviewQA**
    
    1. Value vs Reference(copy by value, pass by Value, copy by reference or pass by reference)
    
    2. JavaScript Scope
    
    3. JavaScript Hoisting
    
    4. Closure
    
    5. JavaScript "this", call, bind apply, new Bindings
    
    6. Var vs Let vs const (in depth)
    
    7. Prototype and Inheritance (object oriented JavaScript)
    
    8. Javascript Event Loop
    
    9. Asynchronous JavaScript (callback, promise, Async Await)
    
    10. Higher Order Function, callback Function
    
- **CPU Intensive Task** -> No need of other server, requested server's CPU can handle the task. Like: Request 1 + 2 = ?
- **I/O Intensive Task** -> Need of going to another server or database..... like: Data Upload or Edit or Get
- **Node.JS** is not suitable for CPU intensive tasks, Only for I/O intensive tasks. Also it is event-based & asynchronus. Event loop has made it perfect
 for handling multiple task.