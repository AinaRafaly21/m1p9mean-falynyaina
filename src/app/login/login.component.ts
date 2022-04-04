import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }



showSignup(){
  console.log("thanks");
  (document.querySelector(".rec-prism") as HTMLElement).style.transform = "translateZ(-100px) rotateY( -90deg)";
}

showLogin(){
  (document.querySelector(".rec-prism") as HTMLElement).style.transform = "translateZ(-100px)";
}
showForgotPassword(){
  (document.querySelector(".rec-prism") as HTMLElement).style.transform = "translateZ(-100px) rotateY( -180deg)";
}

showSubscribe(){
  (document.querySelector(".rec-prism") as HTMLElement).style.transform = "translateZ(-100px) rotateX( -90deg)";
}

showContactUs(){
  (document.querySelector(".rec-prism") as HTMLElement).style.transform = "translateZ(-100px) rotateY( 90deg)";
}

showThankYou(){
  console.log("thanksyou");
  (document.querySelector(".rec-prism") as HTMLElement).style.transform = "translateZ(-100px) rotateX( 90deg)";
}

}
