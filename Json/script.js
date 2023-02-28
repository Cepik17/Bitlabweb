
        let users=[]
        
        function addUser(){
            let newUser = {}
            if (email.value == "" || password.value == ""){
                alert("Please insert email or password")
            }else{
                newUser.email = email.value
                newUser.password = password.value
                newUser.fullname = fullname.value
                newUser.country = country.value
                newUser.birthdate = birthdate.value
                users.push(newUser)
                localStorage.users = JSON.stringify(users);
            //updateStorage()
           // updateusers()
                document.getElementById("registerForm").classList.add("hidden");
                document.getElementById("login-form").classList.remove("hidden");
                alert ("You are successfully registered")
            }
        }

        // function updateStorage(){
        //     localStorage.users = JSON.stringify(users);
        //     console.log(user.email)
        //     alert ("You are successfully registered")
            
        // }

        // function getUser(){
        //     for(let user of JSON.parse(localStorage.getItem("users"))){
        //         console.log(user.email)                
        //     }
        // }

        function login(){
            let flag = false
            for(let user of JSON.parse(localStorage.getItem("users"))){
                if (user.email == email2.value && user.password == password2.value){
                    document.getElementById("fullname2").innerText = user.fullname
                    document.getElementById("login-hat").innerText = user.fullname
                    document.getElementById("email3").innerText = user.email
                    document.getElementById("fullname3").innerText = user.fullname
                    document.getElementById("country3").innerText = user.country
                    document.getElementById("birthdate3").innerText = user.birthdate
                    flag = true
                } 
                               
            }
            if (!flag) {
          
              alert("Invalid email or password");
              return
            }
            document.getElementById("registerForm").classList.add("hidden");
            document.getElementById("login-form").classList.add("hidden");
            document.getElementById("hat").classList.add("hidden");
            document.getElementById("profile").classList.remove("hidden");
            document.getElementById("hat2").classList.remove("hidden");
        }

        function loginlogin(){
            let flag = false
            for(let user of JSON.parse(localStorage.getItem("users"))){
                if (user.email == email2.value && user.password == password2.value){
                    document.getElementById("fullname2").innerText = user.fullname
                    document.getElementById("login-hat").innerText = user.fullname
                    document.getElementById("email3").innerText = user.email
                    document.getElementById("fullname3").innerText = user.fullname
                    document.getElementById("country3").innerText = user.country
                    document.getElementById("birthdate3").innerText = user.birthdate
                    flag = true
                } 
                               
            }
            if (!flag) {
          
              alert("Invalid email or password");
              return
            }
            document.getElementById("login-form").classList.add("hidden");
            document.getElementById("hat").classList.add("hidden");
            document.getElementById("profile").classList.remove("hidden");
            document.getElementById("hat2").classList.remove("hidden");
        }
        