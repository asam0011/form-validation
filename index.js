let fm = document.querySelector('form');
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let ms = document.getElementById('textarea');
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let regExp = /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/;
let reguExp = /^[ .a-zA-Z0-9:-]{1,150}$/;
let fb = document.querySelector('.feedback');
let err = document.querySelector('.errors');




//---------------------------------------- Fullname Validation----------//

function handleform(event) {
    //prevent submitting form
    //preserves user input inside the form
    
    event.preventDefault();

let data = {};
let errors = [];



 //Check if user entered fullname
 if (fn.value !== '') {

    //checking if fullname is in proper format
if ( regExp.test(fn.value)) {
        //save the fullname inside data
        data.fullname = fn.value;

} else {
    //otherwise report error message
    errors.push('Please enter your fullname');
}

} else {
//otherwise report error message
errors.push ('Fullname is empty! Please enter your fullname');
}

//handle feedback/errors
if ( errors.length === 0) {
//print out the feedback
console.log(data);

} else {
    //print out the error messages
    console.log(errors);
    
}





//--------------------Message Validation---------------------------------//

 //Check if user entered a valid message
 if (ms.value !== '') {

    //checking if textarea is in proper format
if ( reguExp.test(ms.value)) {
        //save the message inside data
        data.textarea = ms.value;

} else {
    //otherwise report error message
    errors.push('Please enter your message');
}

} else {
//otherwise report error message
errors.push ('Textarea is empty! Please enter your message');
}

//handle feedback/errors
if ( errors.length === 0) {
//print out the feedback
console.log(data);

} else {
    //print out the error messages
    console.log(errors);
}







//-------------------- Email Validation------------------------------------------------------//


//Check if user entered email
if (em.value !== '') {

        //checking if email is in proper format
    if ( regex.test(em.value)) {
            //save the email inside data
            data.email = em.value;

    } else {
        //otherwise report error message
        errors.push('Please enter a valid email');
    }

} else {
    //otherwise report error message
    errors.push ('Email is empty! Please enter your email');
}

//handle feedback/errors
if ( errors.length === 0) {
    //print out the feedback
    console.log(data);
    fb.textContent = 'Thank you for filling out the form.'
    err.textContent = '';

    //clear the text input
    fm.reset();

    } else {
        //print out the error messages
        console.log(errors);
        fb.textContent = '';
      

        for ( let error of errors) {

       //programmatically create new list items
        let li = document.createElement('li');
        err.textContent = '';
       //add error message to that list
        li.textContent = errors[0];
        
       //append list item to hard-coded list
     
        err.appendChild(li);
        
        }

    }
 


}

fm.addEventListener('submit', handleform);




