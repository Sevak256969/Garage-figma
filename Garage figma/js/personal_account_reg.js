const registor = {
    email:"",
    lastName:"",
    password:"",
    firstName: "",
    middleName:"",
    passwordRepeat:""
  }
   
  const form = document.formRegistor;
  form[0].addEventListener("input",event=>{registor.email = event.target.value})
  form[1].addEventListener("input",event=>{
    if(event.target.value.match(/[A-Z]{2}[a-z][0-9]\W{8,10}$/)){
      registor.password = event.target.value;
     console.log(registor.password);

    }
  })
  form[2].addEventListener("input",event=>{
    if(registor.password=== event.target.value){
      registor.passwordRepeat = event.target.value;
      console.log(registor.passwordRepeat);
    }
  })
  form[3].addEventListener("input",event=>{
    if(event.target.value.match(/^[A-Z]/)){
      registor.firstName = event.target.value;
      console.log(registor.firstName);
    }
  })
  form[4].addEventListener("input",event=>{
    if(event.target.value.match(/^[A-Z]/)){
      registor.lastName = event.target.value;
      console.log(registor.lastName);
    }
  })
  form[5].addEventListener("input",event=>{
    if(event.target.value.match(/^[A-Z]/)){
      registor.middleName = event.target.value;
      console.log(registor.middleName);
    }
  })
  form.addEventListener("submit",e => e.preventDefault());
  form[6].addEventListener("click", function (){
    fetch("https://api-generator.retool.com/78mo0Y/registor",{
      method:'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(registor)
    })
    .then(response => console.log(response.json()))
    .catch(er => console.error(er))
  })