import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email; password; passwordForConfirmation;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  signup() {
    if (this.password == this.passwordForConfirmation) {
      this.fireAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.router.navigate(['/home']);
        }
      })
      .catch(err => {
        console.log(`signup failed ${err}`);
      });
    }
  }

}
