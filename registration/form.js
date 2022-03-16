const getError = (errors, prop) => {
  try {
    return errors.mapped()[prop].msg;
  } catch (error) {
    return "";
  }
};

module.exports = ({ errors }) => {
  return `
  
        <!DOCTYPE html>  
        <html>  
        <head>  
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <style>  
        body{  
            font-family: Calibri, Helvetica, sans-serif;  
            background-color: pink;  
        }  
        .container {  
            padding: 50px;  
            background-color: lightblue;  
        }  
            
        input[type=text], input[type=password], textarea {  
            width: 100%;  
            padding: 15px;  
            margin: 5px 0 22px 0;  
            display: inline-block;  
            border: none;  
            background: #f1f1f1;  
        }  
        input[type=text]:focus, input[type=password]:focus {  
            background-color: orange;  
            outline: none;  
        }  
        div {  
                    padding: 10px 0;  
                }  
        hr {  
            border: 1px solid #f1f1f1;  
            margin-bottom: 25px;  
        }  
        .registerbtn {  
            background-color: #4CAF50;  
            color: white;  
            padding: 16px 20px;  
            margin: 8px 0;  
            border: none;  
            cursor: pointer;  
            width: 100%;  
            opacity: 0.9;  
        }  
        .registerbtn:hover {  
            opacity: 1;  
        }  
        </style>  
        </head>  
        <body>  
            <div class="container">
            <form action='/info' method='POST'>  

            <center>  <h1>Registeration Form</h1> </center>  
            <hr>  
            <label> Firstname: </label>   
        <input type="text" name="firstname" placeholder= "Firstname" id="t1" size="15" required />   
        
        <label> Lastname: </label>    
        <input type="text" name="lastname" placeholder="Lastname" id="t2" size="15"required />   
        <div>  
          
            
        
        </div>  
        <div>  
        <label>   
        Gender : 
        </label><br>  
        <input type="radio" value="Male" name="gender" checked > Male   
        <input type="radio" value="Female" name="gender"> Female   
        <input type="radio" value="Other" name="gender"> Other  
            
        </div>  
        <label>   
        Phone : 
        </label>  
        <input type="text" name="country code" value="+91" size="2" readonly />   
        <input type="text" placeholder="Phone" name="phone" size="10"/> <br> <br>  
        Address :  
        <textarea cols="80" rows="5" placeholder="Address" value="address" required>  
        </textarea>  
        <label for="email"><b>Email</b></label>  
        <input type="text" placeholder="Email" name="email" required>  
            
            <label for="password"><b>password</b></label>  
            <input type="password" placeholder="Password" name="password" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$" required>  
            
            <label for="password-repeat"><b>repassword</b></label>  
            <input type="password" placeholder="RePassword" name="password_repeat" pattern= "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$" required>  
            <div>
                  <div>
                    <label class='label' id='dob'>Date Of Birth</label>
                  </div>
                  <input class='input' type='date' name='dob' 
                  placeholder='DOB' for='dob'>
                  <p class="help is-danger">${getError(errors, "dob")}</p>
                </div>
            <button type="submit" class="registerbtn">Register</button>  
            <div id="message">
  <h3>Password must contain the following:</h3>
  <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
  <p id="number" class="invalid">A <b>number</b></p>
  <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>
				
            
        </form>  
        </body>  
        </html>  
    `;
};
