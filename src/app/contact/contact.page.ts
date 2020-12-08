import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {


  datas = {
    name: "",
    email: "",
    msg: ""
  };
  constructor(private emailComposer: EmailComposer) { }//private emailComposer: EmailComposer

  ngOnInit() {
  }


  sendMail(){
    if(this.datas.name != "" && this.datas.email != "" && this.datas.msg != ""){
      let email = {
        to: 'fddsol12@gmail.com',
        cc: this.datas.email,
        //bcc: ['john@doe.com', 'jane@doe.com'],
        attachments: [],
        subject: 'Cordova Icons',
        body: this.datas.msg,
        isHtml: true
      }
      
      // Send a text message using default options
      this.emailComposer.open(email);
     }
  }

}
