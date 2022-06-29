//Arrays (An array is the simplest memory data structure.):

/*OBS: An array stores values sequentially that are all of the same datatype. Although JavaScript
allows us to create arrays with values from different datatypes, we will follow best practices
and assume that we cannot do this (most languages do not have this capability).*/

//is not best practice:
    var daysOfWeek = new Array();
    var daysOfWeek = new Array(7);
    var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednes day', 'Thursday', 'Friday', 'Saturday'); 

// best practice:
    var daysOfWeek = [];
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednes day', 'Thursday', 'Friday', 'Saturday'];

    console.log(daysOfWeek.length);

//print elements:
    for (let i = 0; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };

    var fibonacci = []; //{1}
    fibonacci[1] = 1; //{2}
    fibonacci[2] = 1; //{3}

    for (let i = 3; i < 20; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; ////{4}
    }

    for (let i = 1; i<fibonacci.length; i++){ //{5}
        console.log(fibonacci[i]); //{6}
    }

//Adding and removing elements from an array:
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    numbers[numbers.length] = 10;

    //or
    numbers.push(11, 12, 13); //add new values in array

    console.log(numbers);

//Add element a first position: 
    for (let i = numbers.length; i>=0; i--) {
        numbers[i] = numbers[i - 1];
    };
    numbers[0] = -1;

    //or
    numbers.unshift(-2);
    numbers.unshift(-4, -3);    
    
    console.log(numbers);
//removing element array:
    numbers.pop(); //remove the last element

    //remove the first element
    for (var i=0; i<numbers.length; i++) {
        numbers[i] = numbers[i+1];
    }

    //or
    numbers.shift(); //remove the first element

    console.log(numbers);

//Adding and removing elements from a specific position:
    numbers.splice(5,3);//we are removing three elements, starting from the index 5
    console.log(numbers);

    numbers.splice(5, 2, 3, 4, 5); //we are also adding the elements 2, 3, and 4, starting at index 5.
    console.log(numbers);
 
