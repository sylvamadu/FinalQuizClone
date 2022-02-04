//varaibles

const form = document.getElementById("form")
const errorUser = document.getElementById("usererror")
const errorPass = document.getElementById("passerror")
const userData = [
    {
        name: "user1",
        pass: "pass1"
    },
    {
        name: "user2",
        pass: "pass2"
    },
    {
        name: "user3",
        pass: "pass3"
    },
    {
        name: "user4",
        pass: "pass4"
    },
]
//addEventListener

form.addEventListener("submit", (event)=>handleSubmit(event));


function handleSubmit(event){
    //preventReloading
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // //check if values are empty
    // if(!username && !password) return;
    // //collect the values and compare with the login details
    userData.forEach(item=>{
        if(username === item.name){
            if(password === item.pass){
                window.location.replace("/startpage.html");
            }else{
                errorPass.innerText =  "Password is not correct";
            }
        }else{
            errorUser.innerText =  "Username is not correct";
            errorPass.innerText =  "Password is not correct";
        }
        
    }
    )
            

    //redirect if the above test is passed..
    
}


// if(username === item.name && password === item.pass){
//     window.location.replace("/startpage.html");
// }else{
//     if(username !== item.name){
//         errorUser.innerText =  "Username is not correct";
//     }
//     if(password !== item.pass)
//     {
//         errorPass.innerText =  "Password is not correct";
//     }

// }