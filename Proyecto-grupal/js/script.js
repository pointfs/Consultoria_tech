let check = document.querySelector(".check");

check.addEventListener('click', language);

function language(){
    let lang = check.checked;
     if(lang == true){
        location.href="../html/index.html";
     } else {
        location.href="../english/index.html";
     }
}

function send() { 
   swal ('✅ Fomulario enviado correctamente');
}

function sendEnglish() { 
   swal ('✅ Form submitted successfully');
}
