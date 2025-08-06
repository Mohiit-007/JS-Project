const colors = document.querySelectorAll('.color')
const body = document.querySelector('body')

colors.forEach( function(color){
    console.log(color);
    color.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'aquamarine'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'brown'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }

    })

})


