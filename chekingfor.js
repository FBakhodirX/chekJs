    var person = "User";
    var old = "1"
    alert ("Hello  , "+ person);
    
    if(confirm("Do you ready"))
    {
        person=prompt("Hi, whats your name?");
        old=prompt("Whats your surname?");
        if(person=="Bakhodir" && old=="Fayzulloev")
        {
            window.open('https://www.instagram.com/boxa.fayzullaev/');
            window.open('https://www.facebook.com/boxa.fayzullaev');
            window.open('https://twitter.com/fayzullaevboxa');        
        } 
        else 
        for(let i = 0; i <= old; i++)
        {
            document.write("Error "+i +"<br>"); 
        }
    }       