import { React, useState, useEffect } from "react";
import { Container } from './styles';
export function App() {
  const Register = document.querySelector(".Register");
  const Campos = document.querySelector(".Campos");
  const Dados = document.querySelector(".Dados");
  const Submit = document.querySelector(".submit");
  const Create = document.querySelector(".Create");
  const CreateAccount = document.querySelector("#CreateAccount");
  const RegisterAccount = document.querySelector("#RegisterNow");
  const ButtonBack = document.querySelector("#back");
  const GetNow = document.querySelector(".get");
  const ButtonGetNow = document.querySelector("#btnget");
  const Apresentacao = document.querySelector(".Apresentacao");
  const Title = document.querySelector(".typing-animation");
  const Teext = document.querySelector(".texto");
  const ButtonRegister = document.querySelector(".btnregister");
  const [mounted,setMounted] = useState(false)

  useEffect(() => {

  if(mounted){  
    function ToggleAlterate() {
        Campos.classList.toggle("off");
        Dados.classList.toggle("off");
        Submit.classList.toggle("off");
        Create.classList.toggle("off");
        Register.classList.toggle("off");
        Apresentacao.classList.toggle("off");
        Title.classList.toggle("off");
        Teext.classList.toggle("off");
        RegisterAccount.toggle("off");
    };

    RegisterAccount.addEventListener("click", function() {
        ToggleAlterate();
    });

    CreateAccount.addEventListener("click", function() {
        ToggleAlterate();
    });

    ButtonBack.addEventListener("click", function() {
        ToggleAlterate();
    });

    GetNow.addEventListener("click", function() {
        ToggleAlterate();
    });

    ButtonGetNow.addEventListener("click", function() {
        ToggleAlterate();
    });
  }

  else{
    setMounted(true);
  }

  },[mounted]);

  return (
    <Container>
      <main>
      <div className="Welcome">
            <h1 className="typing-animation">Welcome back!</h1>
            <p className="texto">MindGame is a social network focused on the gaming scene, developed for the study and use of people interested in this market. Don't have an account yet?</p>
            <button id="RegisterNow" className="btn-register">Register Now</button>
            <div className="Apresentacao off">
                <img src='logo.png'></img>
                <p>Welcome to our platform, here you will meet new friends, participate in communities and follow some updates from the biggest stars in the gaming world! Already have an account?</p>
                <button id="btnget">Get in Now</button>
            </div>
      </div>
        <div className="Login">
          <div className="Campos">
            <h1>Sign In</h1>
                <input type="text" placeholder="Username or email" required></input><br/>
                <input type="password" placeholder="Password" required></input>
          </div>
          <div className="Dados">
            <input type="checkbox" id="check"></input>&nbsp;<label for="check">Remember Me</label>
            <p><a href="/">Forgot password?</a></p>
          </div>
            <div className="submit">
              <button>Sign In</button>
            </div>  
          <div className="Create">
            <p>New here? <span id="CreateAccount">Create a Account</span></p>
          </div>        
        </div>
        <div className="Register off">
          <h1>User Registration</h1>
          <div className="usuario">
            <input type="text" placeholder="Username" id="username" required/>
          </div>
          <div className="name">
            <input type="text" placeholder="First Name" id="firstname" required/>
            <input type="text" placeholder="Last Name" id="lastname" required/>
          </div>
          <div className="email">
            <input type="text" placeholder="E-mail" id="email" required/>
          </div>
          <div className="password">
            <input type="password" placeholder="Password" id="password" required/>
            <input type="password" placeholder="Password Again" id="passwordagain" required/>
          </div>
          <div className="about">
            <textarea placeholder="About Me"></textarea><br/>
            <p>Already have an account? <span className="get">Get in now</span></p>
          </div>
          <div className="buttons">
            <button id="back"><img src="seta.png" />Back</button>
            <button>Register</button>
          </div>
        </div>
      </main>
      <div className="End">
        <img className="logo" src="logo.png" width="50rem" height="50rem" />
      </div>
    </Container>
  )
}