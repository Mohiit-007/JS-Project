let form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    let height = parseFloat(document.querySelector('#Height').value);
    let weight = parseFloat(document.querySelector('#Weight').value);
    let result = document.querySelector('#results');

    if(height === '' || weight === ''){
        alert('Please Enter a Number');
    }
    else if( weight < 0 || isNaN(weight)){
        alert('Please Enter a valid Number ');
    }
    else if(height< 0 || isNaN(height)){
        alert('Please Enter a valid Number');
    }
    else{
        let bmivalue = (weight / ((height*height))*10000);
        let bmi = bmivalue.toFixed(2)
        let category = "";
    if(bmivalue>24.9){
        category = "Overweight : ";
    }
    else if( bmivalue>=18.6 && bmivalue<=24.9 ){
        category = "Normal : ";
    }
    else if( bmivalue<18.6 ){
        category = "Underweight : ";
    }
        // let bmi = (weight / ((height*height))*10000).toFixed(2);
        result.innerHTML = `<span style="font-weight:bold">${category}</span><span style="font-weight:bold">${bmi}</span> `
    }

    
    
});