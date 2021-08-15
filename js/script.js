document.getElementById('submit-button').addEventListener('click', function(){
    const mailId = document.getElementById('mail-field');
    const userMail = mailId.value;

    // password field 
    const passwordId = document.getElementById('password-field');
    const passwordField = passwordId.value;
    if (passwordField == 'kawsar' && userMail == 'admin@gmail.com'){
        // console.log('valid')
        window.location.href = 'banking.html'
    }


    
    
    
    
    // console.log (userMail);
    // console.log (passwordId.value);
    // console.log(event)
})