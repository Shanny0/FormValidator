let validator = {
  btn: document.getElementById("btn_submit"),
  nome: document.querySelector("#nome"),
  cognome: document.getElementById("cognome"),
  pw1: document.getElementById("pw1"),
  pw2: document.getElementById("pw2"),
  email: document.getElementById("idemail"),
  userdate: document.getElementById("data"),
  errorsum: document.getElementById("errorSummary"),
    errors: [],
  init: function () {
    // console.log(this);

    this.btn.addEventListener("click", (e) => {
      validator.validate(e);
    });
  },
  validate: function (e) {
     e.preventDefault();
      this.errors = [];
      this.validateName();
      this.validateCognome();
      this.validatePassword();
      this.validateEmail();
      this.validateDate();
      console.log(this.errors);

      if(this.errors.length != 0){
       
        let errormsg = "";
        this.errors.forEach(element => {
            errormsg += "<p>" + element.msg + "</p>";
            
        });
        this.errorsum.innerHTML = errormsg;
      }else{
          this.errorsum.innerHTML = "";
          alert("non sono stati trovati errori")
      }
  },
  validateName: function () {
    if (this.nome.value.length < 4) {
      this.errors.push({
        input: this.nome.value,
        msg: "il nome è inferiore a 4 char",
      });
    }
  },
  validateCognome: function () {
    if (this.cognome.value.length < 6) {
      this.errors.push({
        input: this.cognome.value,
        msg: "il cognome è inferiore a 6 char",
      });
    }
  },
  validatePassword: function () {
    if (this.pw1.value !== this.pw2.value) {
      this.errors.push({
        input: this.pw2.value,
        msg: "pw1 e pw2 non coincidono",
      });
      return;
    }

    if (this.pw1.value.length < 10) {
      this.errors.push({
        input: this.pw2.value,
        msg: "lunghezza non valida",
      });
      return;
    }

    if (!/\d/.test(pw1.value)) {
      // espressione regolare \d <= digit
      this.errors.push({
        input: this.pw2.value,
        msg: "la password deve contenere almeno un numero",
      });
      return;
    }
  },
  validateEmail: function () {
    let splitted = this.email.value.split("");
    
    if (!this.email.value.includes("@") && !this.email.value.includes(".")) {
      this.errors.push({
        input: this.email.value,
        msg: "email deve contenere @ e un punto(.)",
      });
      return;
    }

    if (splitted[0] == "@" || splitted[splitted.length - 1] == "@") {
      this.errors.push({
        input: this.email.value,
        msg: "non inserire @ al primo o ultimo posto",
      });
      return;
    }
  },
  validateDate: function () {
    let today = new Date();
    let year = today.getFullYear();
    let operazione = year - new Date(this.userdate.value).getFullYear();

    if (operazione < 18) {
      this.errors.push({
        input: this.userdate.value,
        msg: "utente minore di 18 anni",
      });
    }
  },
};

validator.init();



























/*
function fornome(){
    let nome = document.querySelector("#nome").value;
    
    if(nome.length < 4){
       console.log("piccolo di 4");
   }else{
       console.log("maggiore di 4");
   }
}

function forcognome(){
    let cognome = document.getElementById("cognome").value
    
    if(nome.length < 6){
       console.log("piccolo di 6")
   }else{
       console.log("maggiore di 6")
   }
}


function checkpw(){
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;



    if(pw1 === pw2){
        console.log("pw1 e pw2 sono uguali")
        if(pw1.length > 10){
            console.log("sono maggiori di 10")
            if(/\d/.test(pw1)){  // espressione regolare \d <= digit
                console.log("pw1 contine numeri")
            }else{
                console.log("pw1 non contiene numeri")
            }
        }else{
            console.log("numero caratteri miore di 10")
        }

    }else{
        console.log("password non coincidono")
    }


}


function checkmail(){
    let email = document.getElementById("idemail");
    let splitted = email.value.split('');

    if(splitted[0] == "@" || splitted[splitted.length -1] == "@"){
       
        console.log("non mettere a prima e ultima pos @");
        
    }else{
        console.log("email registrata");
        
    }

   
    
}


function checkdate(){
    let userdate = new Date(document.getElementById("data").value).getFullYear();
    
    let today = new Date();
    let year = today.getFullYear()
    let operazione =  year - userdate
    
    
    if(operazione >= 18){
        console.log("sei maggiorenne")
    }else{
        console.log("sei minorenne")
    }
    
}


function checkbox(){
    let cbox = document.getElementById("gridCheck").checked
    if(cbox){
        return true
    }else{
       return false
    }
}



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("btn worked");
    fornome();
    forcognome();
    checkpw();
    checkmail();
    checkdate();
    checkbox();
})

*/
