import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  privacy_policy_datas = [
    {
      value:'This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing access to the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Information Collection And Use'
    },
    {
      value:'While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information"). Log Data'
    },
    {
      value:'Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").'
    },
    {
      value:'This Log Data may include information such as your mobile number (MSISDN), browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.'
    },
    {
      value:'In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this ... Cookies'
    },
    {
      value:'Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer\'s hard drive.'
    },
    {
      value:'Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site. Security'
    },
    {
      value:'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. Changes To This Privacy Policy'
    },
    {
      value:'This Privacy Policy is effective as of your subscription date to the Service and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.'
    },
    {
      value:'We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you by placing a prominent notice on our site. Contact Us'
    },
    {
      value:'If you have any questions about this Privacy Policy, please contact us.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
