
//string, number, boolean, objects:

//string:
    var main_string = "string";

//number: 
    var main_number = 21;

//boolean:
    var main_boolean = true;


//Objects string, number, boolean in JS:

//string:
    var main_string_two = new String("string");

//number: 
    var main_number_two = new Number("21");

//boolean:
    var main_boolean_two = new Boolean(true);


    document.write(main_string.constructor);

    document.write(main_string_two.length);

    console.log('boolean: ' + main_boolean)



//There are local and global variables:

    var myVariable = 'global';
    OtherVariable = 'global';

    function myLocalVariable() {
        var localVariable = 'local';
        return localVariable;
    }

//See the variables:
    console.log(myVariable);
    console.log(myLocalVariable());//activate the function to get the value of the variable


//Operations:
    var num = 1;
    num = num + 2;//value 3
    num = num * 4;//value 12
    num = num / 2;//value 6
    num++;//value 7
    num--;//value 6

    //performing checks (true and false) on the variable
    console.log('num == 1 : ' + (num == 1)); // {3} 
    console.log('num === 1 : ' + (num === 1));
    console.log('num != 1 : ' + (num != 1));
    console.log('num > 1 : ' + (num > 1));
    console.log('num < 1 : ' + (num < 1));                  
    console.log('num >= 1 : ' + (num >= 1));
    console.log('num <= 1 : ' + (num <= 1));

    console.log('true && false : ' + (true && false)); // {4}
    console.log('true || false : ' + (true || false));
    console.log('!true : ' + (!true));

    console.log(num >> 1);
    console.log(num << 2);

    console.log(typeof num);
    console.log(typeof 'packet');
    console.log(typeof true);
    console.log(typeof [1,2,3]);
    console.log(typeof {name:'Eullerson'})

//'delete': deletes a property from an object. Operator JS:
    var MyObj = {
        name: 'Eullerson',
        age: 20,
        naturalness: 'Brazil'
    };   
    
    delete MyObj.naturalness;

    console.log(MyObj);

//The difference between == and ===:

    var ab;
    var ba;

    console.log(ab === ba);

    console.log('packet'== true)

//Conditional statements:
    //if statements:
    var one = 3;

    if (one === 3){
        one--;
    } else {
        one++;
    }

    //new structure if:
    (one === 1) ? one-- : one++;

    console.log(one);

//Switch:

    var month = 4;
        switch(month) {
            case 1: console.log("January");
            break;

            case 2:console.log("February");
            break;

            case 3: console.log("March");
            break;

            default: console.log("Month is not January, February or March");
        }
    
//Loops:
    //for
    for (var i=0; i<6; i++) {
        console.log(i);
    }

    //while:
    var c = 5;
    while(c>=0) {
        console.log(c);
        c--;
    }

    //do...while:
    var d = 0;
    do {
        console.log(d);
        d++;
    } while(d<6);


//Functions:
    function helloworld() {
        console.log('Hello World');
    };

    helloworld();//call to function

//Objects:
    //first mode:
    var obj = new Object();

    //Other mode:
    var obj_two = {
        name: {
            first: 'Eullerson',
            last_name: 'Pires'
        },
        age: 20
        
    };

    console.log(obj_two);
    console.log(obj_two.name.first + ' ' + obj_two.name.last_name);


//OOP:

    function Book(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    };

    var book = new Book('title', 'pag', 'isbn');

    console.log(book.title)

    book.title = 'new value for Title'

    console.log(book.title)

    Book.prototype.printTitle = function () {}
        console.log(this.title);
    ;

    book.printTitle();

/*ECMAScript*/
//What does ECMAScript have to do with JavaScript and is there a difference?
//ECMAScript is a scripting language specification. JavaScript is an implementation of this specification, as are Jscript and ActionScript.

    let language = 'JavaScript!'; //{1}
//let language = 'Ruby!'; // {2} - throws error
    console.log(language);

    let movie = 'Lord of the Rings'; //{1}
//var movie = 'Batman v Superman'; //throws error, variable movie already
    function starWarsFan(){
        let movie = 'Star Wars'; //{2}
        return movie;
    }
    function marvelFan(){
        movie = 'The Avengers'; //{3} JavaScriptA Quick Overview
        [ 35 ]
        return movie;
    }
    function blizzardFan(){
        let isFan = true;
        let phrase = 'Warcraft'; //{4}
        console.log('Before if: ' + phrase);
    if (isFan){
        let phrase = 'initial text'; //{5}
        phrase = 'For the Horde!'; //{6}
        console.log('Inside if: ' + phrase);
    }
        phrase = 'For the Alliance!'; //{7}
        console.log('After if: ' + phrase);
    }
    console.log(movie); //{8}
    console.log(starWarsFan()); //{9}
    console.log(marvelFan()); //{10}
    console.log(movie); 

/*Constants*/
    const PI = 3.141593;
//PI = 3.0; //throws error
    console.log(PI);


//Template literals
//ECS5
    var booktwo = {
        name: 'Learning JavaScript DataStructures and Algorithms'
    };

    console.log('You are reading ' + booktwo.name + '.,/n and this is a new line/n and so is this');

//ECS6
    console.log(`You are reading ${booktwo.name}., is the 
    new line and so this.`); //This is a new way to print strings and variables without the need to concatenate "+";

//Arrow functions:
    var circleArea = function circleArea(r) {
        var PI = 3.14;
        var area = PI * r * r;
        return area;
    };       

    console.log(circleArea(10));

    let cA = (r) => {
        const Pi = 3.14;
        let area = Pi * r * r;
        return area;
    }

    console.log(cA(10));

//Default parameter values for functions:
    function soma (q = 1, w = 2, e = 3) {
        return q + w + e;
    }

    console.log(soma(5, 5)); //Here it looks for the value of two parameters of the function and what remains 3

//Declaring the spread and rest operators:
//First way:
    var params = [7,3,4];
    console.log(soma(...params));

//Second way:
    console.log(soma.apply(undefined, params));

//Third way:
    function restParametersFunction (x, y, ...z) {
        return (x + y) * z.length;
    }

    console.log(restParametersFunction(1, 2, "Eullerson Soares", true , 7));

//Enhanced object properties:
    var [g, h] = ['Im G', 'Im h'];
    console.log(g,h);

    var [g, h] = [h, g];
    console.log(g,h);

//ES6 introduces a concept called array destructuring, which is a way of initializing variables at once.
    var ola = {
        nome: 'Eullerson',
        goodMorning: function goodMorning() {
            console.log('HI');
        }
    };

    console.log(ola.goodMorning());

    var hello = {
        nome: 'Eullerson',
        hello() {
            console.log(`HI, ${hello.nome}`);
        }
    };

    console.log(hello.hello());

//Object-oriented programming with classes:
    //before:
    function Book(title, pages, isbn){ //{1}
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    Book.prototype.printTitle = function(){
        console.log(this.title);
    };

    //after ES6:
    class Booktwo {
        constructor (title, pages, isbn) {
            this.title = title;
            this.pages = pages;
            this.isbn = isbn;
        }

        printIsbn () {
            console.log(this.isbn);
        }
    };

    //inheritance:
    class ITBook extends Book { //{1}
        constructor (title, pages, isbn, technology) {
        super(title, pages, isbn); //{2}
        this.technology = technology;
    }
        printTechnology(){
            console.log(this.technology);
        }
    }
    
    let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890',
       'JavaScript');

    console.log(jsBook.title);
    console.log(jsBook.printTechnology());

    //getter and setter:
    class Person {
        constructor (name) {
            this._name = name; //{1}
        }
        get name() { //{2}
            return this._name;
        }
        set name(value) { //{3}
            this._name = value;
        }
    }

    //ways to define "name person";
    let lotrChar = new Person('Frodo');
    console.log(lotrChar.name); //{4}

    lotrChar.name = 'Gandalf'; //{5}
    console.log(lotrChar.name);

    lotrChar._name = 'Sam'; //{6}
    console.log(lotrChar.name)
