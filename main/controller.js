// var xhr = new XMLHttpRequest();

window.onload = function () {
    const signIn = document.getElementById("signIn"),
        register = document.getElementById("register"),
        done = document.getElementById("done");

    // signIn.onclick = signInClick
    register.onclick = registerClick
    // done.onclick = doneClick
  }

// signInClick = function() {
//         const textField = document.getElementById("text-field");
//
//         debugger;
//
// }

registerClick = function() {
    if (document.getElementById("register").innerText === "Register") {
        document.getElementById("register").innerText = "Login"
        document.getElementById("login-fields").classList.remove("move-right")
        document.getElementById("login-fields").classList.add("move-left")
        document.getElementById("login-green-msg").innerText = "Already have an account?"
    } else {
        document.getElementById("register").innerText = "Register"
        document.getElementById("login-green-msg").innerText = "Don't have an account?"
        document.getElementById("login-fields").classList.add("move-right")
    }

}

// doneClick = function() {
//     const fieldEmail = document.getElementById("text-field-email"),
//     fieldNascimento = document.getElementById("text-field-nascimento"),
//     fieldPassword = document.getElementById("text-field-password"),
//     fieldRepeatPassword = document.getElementById("text-field-repeat-password");
//
//     if (isValidFieldRegister(fieldEmail, fieldNascimento, fieldPassword, fieldRepeatPassword)) {
//         debugger;
//         xhr.open("POST", "http://localhost:8080/clientes/cadastro");
//         xhr.setRequestHeader("Content-type", "application/json");
//
//         const dia = fieldNascimento.value.substring("0", "2"),
//         mes = fieldNascimento.value.substring("2", "4"),
//         ano = fieldNascimento.value.substring("4", "8");
//
//         var documento = JSON.stringify(
//             {
//                 "usuario" : fieldEmail.value,
//                 "senha" : fieldPassword.value,
//                 "dataNacimento" : `${ano}-${mes}-${dia}`,
//             }
//         )
//
//         xhr.send(documento);
//         xhr.onload= () => {
//             if (xhr.status === 201) {
//                 alert(`user ${fieldEmail.value} criado com sucesso!`);
//             } else {
//                 alert('Algo deu errado')
//             }
//         }
//     }
// }
//
// isValidFieldRegister = function(email, nascimento, password, repeat) {
//     if (email.value && nascimento.value && password.value && repeat.value) {
//         if (password.value === repeat.value) {
//             return true
//         } else {
//             showToast("As senhas divergem", "error")
//         }
//     } else {
//         showToast("Todos os campos sao obrigatorios", "error")
//     }
//
//     return false
// }
//
// showToast = function(msg, type) {
//     debugger;
//     const toast = document.getElementById("toast");
//
//     toast.style.display = "none"
//     toast.innerText=msg
//
//     setTimeout(function() {
//         switch(type) {
//             case "alert": toast.classList.remove("toast--sucess")
//                           toast.classList.add("toast--alert")
//             break;
//             case "sucess": toast.classList.remove("toast--alert")
//                            toast.classList.add("toast--sucess")
//             break;
//             default: toast.classList.remove("toast--alert")
//                      toast.classList.remove("toast--sucess")
//             break;
//         }
//         debugger;
//         document.getElementById("toast").style.display = "flex"
//     }, 100)
// }

// TODO - Chamar toast nos momentos corretos, alterar corres para mensagens de sucesso,
// no desfoque do campo de nascimento adequar ao formato com barras, registrar corretamente, logar corretamente
// ajustar compatibilidade com diferentes tamanhos de monitor