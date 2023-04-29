const buttons = document.querySelectorAll(".btn")
const singIn = document.querySelector(".sing-in")
const singUp = document.querySelector(".sing-up")
const container = document.querySelector(".container")
const formCreateAccount = document.querySelector("#form")
const formSingIn = document.querySelector(".form")
const nameCreateAccount = formCreateAccount.querySelector(".name-login")
const emailCreateAccount = formCreateAccount.querySelector(".email-login")
const passwordCreateAccount = formCreateAccount.querySelector(".password-login")
const errorNameCreateAccount = document.querySelector(".errorName")
const errorEmailCreateAccount = document.querySelector(".errorEmail")
const errorPasswordCreateAccount = document.querySelector(".errorPassword")
const emailSingIn = document.querySelector(".email-connecting")
const passwordSingIn = document.querySelector(".password-connecting")
const errorEmailSignIn = document.querySelector(".error-Email")
const errorPasswordSignIn = document.querySelector(".error-Password")

const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//^ вверху это    позволяем использовать алфавит и цифры + к этому обязан поставить
// собачку

let users = [
    {
       id: 2,
       name: 'Vase',
       email: 'vasea@mail.ru',
       password: '123456789'
    }
]
console.log(users);

buttons.forEach(btn =>{
    btn.addEventListener("click",() =>{
        container.classList.toggle("active")//Метод toggle позволяет привязать несколько обработчиков событий к элементу. Привязанные обработчики будут поочередно вызываться после щелчка мыши на элементе т. е. после первого щелчка будет вызван первый обработчик события, после второго второй и т.
    })
})

const showNameError = (nameValue,errorMessage,minLength,maxLength) =>{
    if (nameValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
        
    } else if (nameValue.value.length < minLength || nameValue.value.length > maxLength) {
        errorMessage.textContent = `Minimum ${minLength} caracters max ${maxLength}`
        nameValue.className = "invalid"
    }  else {
        nameValue.className = "valid"
        errorMessage.textContent = ""
    }

}
nameCreateAccount.addEventListener("input",()=>{
    showNameError(nameCreateAccount,errorNameCreateAccount,3,12)
})

const showEmailError = (emailValue, errorMessage) => {
    if(emailValue.value === "") {
        errorMessage.textContent = "This field should not be empty"

    }else if (!regexEmail.test(emailValue.value)) {
        errorMessage.textContent = "Please provide a valid email address"
        emailValue.className = "invalid"
    } else {
        emailValue.className = "valid"
        errorMessage.textContent = ""
    }
}
emailCreateAccount.addEventListener("input", () =>{
    showEmailError(emailCreateAccount,errorEmailCreateAccount)
})

emailSingIn.addEventListener("input", () =>{
    showEmailError(emailSingIn,errorEmailSignIn)
} )

const showPasswordError = (passwordValue, errorMessage,minLength,maxLength) => {
    if (passwordValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
    } else if (passwordValue.value.length < minLength || passwordValue.value.length > maxLength) {
        errorMessage.textContent = `Minimum ${minLength} caracters max ${maxLength}`
        passwordValue.className = "invalid"
    }else {
        passwordValue.className = "valid"
        errorMessage.textContent = ""
    }
}

passwordCreateAccount.addEventListener("input", () => {
    showPasswordError(passwordCreateAccount,errorPasswordCreateAccount,8,20)
})

passwordSingIn.addEventListener("input", () => {
    showPasswordError(passwordSingIn,errorPasswordSignIn,8,20)
})

const btnDisabledSingUp = () =>{
    formCreateAccount.addEventListener("input", () => {
     if (nameCreateAccount.className === "valid" && emailCreateAccount.className === "valid" && passwordCreateAccount.className === "valid" ) {
        singUp.disabled = false
        singUp.classList.remove("disabled") 
     } else {
        singUp.disabled = true
        singUp.classList.add("disabled") 
     }
    })

}
btnDisabledSingUp()


const btnDisabledSingIn = () =>{
    formSingIn.addEventListener("input", (e) => {
        if (emailSingIn.className === "valid" && passwordSingIn.className === "valid" ) {
            singIn.disabled = false
            singIn.classList.remove("disabled") 
            console.log(e.target);
            console.log(singIn);
         } else {
            singIn.disabled = true
            singIn.classList.add("disabled") 
         }
    })
}
btnDisabledSingIn()

const clearForm = (form, event_btn, email, password, name = null) => {
    form.reset()
    if (name) {
        name.classList.remove("valid")
    }
    
    email.classList.remove("valid")
    password.classList.remove("valid")

    event_btn.disabled = true
    event_btn.classList.add("disabled") 
}

const createAccount = () => {
    const noneRepeatEmail = users.findIndex(user_email => user_email.email === emailCreateAccount.value)
    let newUser = {
        id: Date.now(),
        name: nameCreateAccount.value,
        email: emailCreateAccount.value,
        password: passwordCreateAccount.value,
    }
    if (noneRepeatEmail !== -1) {
        alert('Email exista')
    } else {
        alert('Creat success')
        users.push(newUser)
        clearForm(formCreateAccount,singUp,emailCreateAccount,passwordCreateAccount,nameCreateAccount)
        // console.log(users);
    }
}
formCreateAccount.addEventListener("submit", () => createAccount() )
// console.log(Date.now());

formSingIn.addEventListener("submit", () => {
    if ( !users.length) {
        alert("It's account is not register")
    } 
    users.forEach(el => {
        if(emailSingIn.value.includes(el.email) && passwordSingIn.value.includes(el.password)) {
            alert(`Numele dumnevoastra ${el.name}`)
            console.log(el);
        } else {
            alert("It's account is not register")
        }
    })
})

