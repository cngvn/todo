
let email = document.getElementById('Email')
let number = document.getElementById('Number')
let pass = document.getElementById('password')
let button = document.getElementById('submit')
let pass_button = document.getElementById('button')
pass_button.innerHTML="show"
button.innerHTML="sign in"
let num_arr = [0, 1, 3, 4, 5, 6, 7, 8, 9]
let let_arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
button.addEventListener('click', function (){
    email_checker()
    number_checker()
    pass_checker()
    localStorage.setItem("email", email.value)
    window.location.href = "todo.html"
})
pass_button.addEventListener('click', function(){
    pass_shower()
})
function email_checker(){
    let email_value = email.value
 
    if (email_value.includes('@') == true){
        console.log('Email is valid')
        
    }else {
        
        alert('Email doesnt have @')
    }
}
 
function number_checker(){
    let number_length = number.value.length
    let number_value = number.value
    let number_dump = 0
 
    if (number_length == 8 ){
        for (let j = 0; j < let_arr.length; j++){
            if (number_value.includes(let_arr[j]) == true){
                console.log('')
                break
            }else {
                number_dump += 1
                if (number_dump == 26){
                    console.log('Number is valid')
                    break
                }
            }
        }
    }else{
        alert('number isnt 8 length')
    }   
 
 
 
  
}
 
 
 
let dump = 0
let no_dump = 0
 
function pass_checker(){
    let pass_value = pass.value
 
    if (pass_value.length >= 8){
        for(let h=0; h < let_arr.length; h++){
            if (pass_value.includes(let_arr[h]) == true){
                for (let i=0; i < 10; i++){
                    if (pass_value.includes(i) == true){
                        console.log('pass is valid')
                        break
                    }else{
                        dump += 1
    
                        if (dump == 10){
                            console.log('shi has no numbers')
                            break
                        }
                    }
                }
            }
        }
    }else{
        console.log('pass not long')
    }
 
 
 
}
function pass_shower(){
    if(pass.type == 'text'){
        pass.type = 'password'
    }else {
        pass.type = 'text'
    }
   
}