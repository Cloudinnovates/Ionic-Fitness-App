import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.page.html',
  styleUrls: ['./term-condition.page.scss'],
})
export class TermConditionPage implements OnInit {

  term_datas = [
    {
      title: 'PLEASE READ THIS THESE TERMS OF USE CAREFULLY.',
      value: 'These Terms of Use cover important information about the Platform and any applicable fees. In particular, they include information about future changes to the Terms of Use and Platform (refer to Clause 8), the purchase and renewal of subscriptions to the Platform (refer to Clause 2) and limitations of liability (refer to Clause 7.1). The following additional terms may also apply to you:'
    },
    {
      title: 'Additional Terms:',
      value: 'If you live in certain countries, the Additional Terms found at the end of these Terms of Use may apply to you. These Additional Terms override the other terms of these Terms of Use below to the extent of any inconsistency.'
    },
    {
      title: 'Welcome to the QuickFitGuru community!',
      value: 'These terms of use and any other terms and documents expressly incorporated herein, each as may be amended, supplemented or replaced from time to time (together, the "Terms of Use") apply to your use of (and subscription to) the QuickFitGuru website, QuickFitGuru mobile application ("QuickFitGuru App"), blog, forum, online shop or one of our other products or services, all of which are part of QuickFitGuru\'s platform (the "Platform").'
    },
    {
      title: '',
      value: 'These Terms of Use are entered into by and between you as a user (referred to as "User", "you" or "your") and FDD Solutions Ltd, registered in the UK company number 12553022, and its affiliates (referred to as "QuickFitGuru", "we", "us" or "our"), and supersede and replace any terms and conditions of services that you may have previously agreed with QuickFitGuru in connection with the Platform.'
    },
    {
      title: '',
      value: 'Your access to and use of the Platform constitutes your agreement to be bound by these Terms of Use. The offering of the Platform to you is conditional on your acceptance of these Terms of Use. If you do not agree to these Terms of Use, you must not access or use the Platform.'
    },
    {
      title: '',
      value: 'For more details about QuickFitGuru\'s privacy practices, please refer to our Privacy Policy.'
    },
    {
      title: 'USER',
      value: '-Eligibility'
    },
    {
      title: '',
      value: '-User Account Creation'
    },
    {
      title: '',
      value: 'To use certain features of the Platform, you will need to create a user account (each, a "User Account") by providing your first and last names, an email address, a password, your date of birth and other information that we may require from time to time. You will also be required to create a username for your User Account in order to access the forum hosted on the Platform. Please provide accurate and current information when creating your User Account. You can also create a User Account by using your Facebook credentials.'
    },
    {
      title: '',
      value: 'QuickFitGuru may, at its sole discretion:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'limit the number of User Accounts that you may create or maintain;'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'stipulate additional conditions and requirements for the opening or maintaining of User Accounts; and/or'
    },
    {
      title: '',
      value: '(c)'
    },
    {
      title: '',
      value: 'refuse to create a User Account for you.'
    },
    {
      title: '',
      value: '-Security'
    },
    {
      title: '',
      value: 'By using the User Account, you will be responsible for maintaining the security of your User Account access credentials, for all activities that occur under the User Account and any other actions in relation to the User Account (with or without your permission). QuickFitGuru is not responsible for any loss or activity that results from the unauthorised use of your User Account due to your failure to secure your access credentials. You should not share the access credentials of your User Account (including passwords) with any other person or allow any other person to access your User Account. You must immediately notify the QuickFitGuru team in writing at fddsol12@gmail.com of any unauthorised use of your User Account or any other breaches of security. Taptronic Ltd (&quot;Taptronic&quot;), operates the site. Taptronic is a company registered in England with company registration no: 10291798 with registered offices in 20-22 Wenlock Road, London, England, N1 7GU'
    },
    {
      title: '',
      value: '-Suspension and termination'
    },
    {
      title: '',
      value: 'QuickFitGuru will have the right to suspend access to your User Account, or to terminate your User Account, at any time and for any reason (including where you are in breach of any of the provisions in this Term of Use), subject to Applicable Laws. You acknowledge and agree that these Terms of Use continue to apply even after your User Account expires or is terminated, or where you have stopped using the Platform. Taptronic reserves the right to refuse to complete registration for a prospective member for any reason at its absolute discretion.'
    },
    {
      title: 'SUBSCRIPTION SERVICE',
      value: '-Subscription'
    }, 
    {
      title: '',
      value: 'You can choose to subscribe to the Platform either on a monthly, quarterly or annual basis, or for such other periods that QuickFitGuru may offer from time to time, and the applicable fees are set forth on the on the applicable app store from which the QuickFitGuru App can be downloaded.'
    },   
    {
      title: '',
      value: 'Eligibility for any promotions or discounts is ascertained at the time you subscribe and cannot be changed during the term of your subscription. You are responsible for reading and understanding the specific terms and conditions applicable to any promotions or discounts. QuickFitGuru reserves the right to revise and update the applicable fees for subscriptions (including the fees set out on the relevant app stores where you subscribe to the Platform), and the different subscription packages available, at any time at its sole discretion. Any such revision or updates to the fees will apply prospectively to any subscription entered into following the effective date of the fee revision or update.'
    },
    {
      title: '',
      value: '-Free trials'
    },
    {
      title: '',
      value: 'We may provide a free trial subscription for a fixed period of time, as determined by QuickFitGuru in its sole discretion. Unless otherwise stated by QuickFitGuru in respect of specific promotions, free trials are only available to new QuickFitGuru users, and QuickFitGuru reserves the right to cancel any trial subscription immediately if we become aware that the subscriber has already had a trial subscription on a different User Account or using a different email address. Furthermore, any attempts to register for a further free trial on the same User Account or using the same email address may result in you being charged for the applicable subscription fees. After the trial, your subscription will renew automatically at the full subscription price unless you cancel your subscription before the end of the trial. To cancel your subscription during the trial, please refer to the instructions set out below under "Automatic renewal of subscription".'
    },
    {
      title: '',
      value: '-Payment details'
    },
    {
      title: '',
      value: 'You can pay the fees for your subscription on the QuickFitGuru App either through a credit card, PayPal payment or Stripe payment, or through your account with the applicable app store in the case of the QuickFitGuru App (i.e. through in-app purchases). The price of your subscription, as well as the currency in which your subscription is payable, will be specified during the order process, and may vary depending on your country of residence (as determined by the IP address of your device used to access the Platform). When you purchase a subscription, you must provide us with complete and accurate payment information. By submitting payment details, you represent that you are entitled to purchase a subscription using those payment details. If we do not receive payment authorization or any authorization is subsequently cancelled, we may immediately terminate or suspend your access to your subscription. QuickFitGuru reserves the right to contact the issuing bank/payment provider and/or law enforcement authorities or other appropriate third parties if there is suspicious activity. In addition to the subscription fee you are charged, certain banks and credit card issuers may charge a foreign transaction fee on transactions which take place abroad or in a foreign currency. You are responsible for paying any such fees.'
    },
    {
      title: '',
      value: '-Automatic renewal of subscription'
    },
    {
      title: '',
      value: 'Your subscription will automatically renew unless you cancel at least twenty-four (24) hours before the end of the current billing period. However, you may cancel your subscription at any time by navigating to your profile page and following the prompts to cancel your subscription. Upon such cancellation, you will still be entitled to access the subscription services on the Platform for the remainder of the duration that you have paid for.'
    },
    {
      title: '',
      value: '-Cancellation and refund of subscription fees'
    },
    {
      title: '',
      value: 'Where you have subscribed for the Platform through an app store, the cancellation and refund of subscription fees will be governed by the applicable terms and conditions of that app store. Where you have subscribed for the Platform through our website, you may change your mind and receive a full refund of the amount you have paid for the subscription within fourteen (14) days starting from the day you subscribed to the Platform through our website (the "Cooling-off Period"):'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'if you sign up for a free trial, you agree that the Cooling-off Period for the paid subscription that you are receiving the free trial in connection with ends fourteen (14) days after you start the free trial - if you use the Platform during the free trial and don’t cancel the paid subscription before the free trial ends, you lose your right of withdrawal; and'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'if you purchase a subscription, you agree that the Cooling-off Period is available for fourteen (14) days after you have paid for the subscription, but the Cooling-off Period expires once you use the Platform during that period. To exercise this right, please contact the QuickFitGuru team using the details set out in Clause 9 of these Terms of Use. Following expiry of the Cooling-off Period, subscriptions are non-refundable and there is no right to refunds or credits unless required by Applicable Laws. Although you may notify us of your intention to cancel your subscription at any time, such notice will only take effect at the end of your then current subscription period, and you will not receive a refund.'
    },
    {
      title: 'USE OF THE PLATFORM',
      value: 'By using the Platform, you confirm that you will not use the Platform for any of the following:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'Unlawful Activity – any activity that: (i) involves proceeds from any illegal or unlawful activity; (ii) publishes, distributes or disseminates any illegal or unlawful material or information; or (iii) otherwise violates, or could possibly violate, any civil and common laws, statutes, subordinate legislation, treaties, regulations, directives, decisions, by-laws, ordinances, circulars, codes, orders, notices, demands, decrees, injunctions, resolutions and judgments of any government, quasi-government, statutory, administrative or regulatory body, court, agency or association by which QuickFitGuru or the User are bound in any jurisdiction applicable to the access and use of the Platform ("Applicable Laws").'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'Unauthorised Use – any activity that: (i) interferes with, disrupts, negatively affects or inhibits other Users from accessing or fully enjoying the Platform; (ii) introduces to the Platform any malware, virus, trojan horse, worms, logic bombs or any other programme that would otherwise result in any technical glitch, malfunction, failure, delay, default or security breach; (iii) attempts to gain unauthorised access, whether through password mining or otherwise, to other User Accounts, computing systems or networks connected to the Trading Platform; (iv) undermines the security or integrity of the computing systems or networks on which the Platform is hosted; (v) attempts to modify, copy, reproduce, reverse engineer or decompile the Platform or the computer programs used to deliver the Platform; (vi) uses the User Account information of another person to access or use the Platform; or (vii) transfers access or rights to your User Account to a third party.'
    },
    {
      title: '',
      value: '(c)'
    },
    {
      title: '',
      value: 'Abusive Acts – any act that: (i) defames, abuses, extorts, harasses, stalks, threatens or otherwise violates or infringes the legal rights (such as, but not limited to, rights of privacy, publicity and intellectual property) of any other person; (ii) incites, threatens, facilitates, promotes, or encourages hate, racial intolerance or violent acts towards any other person; or (iii) harvests or otherwise collects information from the Platform about other Users including addresses, phone numbers, email addresses and credit card details.'
    },
    {
      title: '',
      value: '(d)'
    },
    {
      title: '',
      value: 'Fraud – any act that: (i) attempts to defraud QuickFitGuru or any other person; or (ii) provides false, inaccurate or misleading information to'
    },
    {
      title: '',
      value: '-QuickFitGuru'
    },
    {
      title: '',
      value: 'Contributed Content'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'You are solely responsible for all content or materials that you submit or otherwise upload to or through the Platform or to us (including any information contributed by you in respect of any blog, forum or chatroom, and any comments, feedback or ideas that you send to QuickFitGuru) ("Contributed Content") and expressly agree not to submit or upload any Contributed Content which:'
    },
    {
      title: '',
      value: '	(i) advertises or promotes any services or brands (with respect to you or any third party);'
    },
    {
      title: '',
      value: '	(ii) contains material that is defamatory, discriminatory, obscene, indecent, abusive, racist, offensive, harassing, violent, hateful, inflammatory or is otherwise objectionable or illegal;'
    },
    {
      title: '',
      value: '	(iii) you know not to be true and honest, or which spreads false or misleading statements;'
    },
    {
      title: '',
      value: '	(iv) you do not have the right to submit or upload, including where the content may infringe any Intellectual Property Rights of any party;'
    },
    {
      title: '',
      value: '	(v) impersonates any person or entity or otherwise associates, infers or misrepresents the User’s affiliation with a person or entity;'
    },
    {
      title: '',
      value: '	(vi) contains the personal details or confidential information of any third party unless that third party has expressly consented to such use and disclosure;'
    },
    {
      title: '',
      value: '	(vii) contains, or links to, viruses, corrupted data or other harmful, disruptive or destructive files;'
    },
    {
      title: '',
      value: '	(viii) constitutes unsolicited promotions, campaigning, advertising or solicitations, or other types of content which constitute "spam";'
    },
    {
      title: '',
      value: '	(ix) may expose QuickFitGuru or other Users to any harm or liability of any kind; or'
    },
    {
      title: '',
      value: '	(x) is contrary to any Applicable Laws.'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'QuickFitGuru has the right, but not the obligation, to monitor all conduct and content submitted to or through the Platform, and may in its sole discretion: (i) refuse to publish, remove or disable access to Contributed Content that it considers breaches these Terms of Use; or (ii) suspend or discontinue your opportunity to submit, post or upload content to the Platform'
    },
    {
      title: '',
      value: '(c)'
    },
    {
      title: '',
      value: 'You acknowledge and agree that some of your Contributed Content might continue to be publicly available on the Platform after your User Account is closed or otherwise terminated, subject to your right to have your Contributed Content removed upon request in accordance with Applicable Laws.'
    },
    {
      title: '',
      value: '(d)'
    },
    {
      title: '',
      value: 'If you believe that any Contributed Content violates these Terms of Use or any Applicable Laws, including any copyright laws, you should report it to the QuickFitGuru team at fddsol12@gmail.com.'
    },
    {
      title: 'AVAILABILITY OF SERVICES, SECURITY',
      value: 'QuickFitGuru shall make reasonable efforts to ensure that the Platform is available to you. However, access to the Platform may be disrupted from time to time due to necessary maintenance, technical issues, network and system overloads or events outside of QuickFitGuru\'s control. QuickFitGuru will use commercially reasonable efforts to avoid downtime of the Platform, but assumes no liability if the Platform or any part thereof is unavailable at any time or for any period. You acknowledge and agree that you are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for antivirus protection and accuracy of data input and output, and for maintaining a means external to the Platform for any reconstruction of any lost data. You acknowledge and agree that QuickFitGuru shall not have any liability or be responsible in any way for: (a) your use of the internet to connect to the Platform or any technical problems, system failures or security breaches; (b) the hardware that you use to access the Platform (including in respect of viruses and malicious software, and any inappropriate material) and the integrity and proper storage of any of your data associated with the Platform that is stored on your own hardware; or (c) any fees you may incur in order to connect to the internet for the purpose of using or accessing the Platform. You must immediately notify the QuickFitGuru team in the event that you become aware of any part of the Platform malfunctioning or if you otherwise experience any material malfunction or other connectivity problem that adversely affects your access to or use of the Platform. Users may also be required to download and install updates to the QuickFitGuru App so as to maintain access to the Platform and its services. A User\'s failure to do so might lead to certain services offered on the Platform becoming temporarily inaccessible to the User until such update has been downloaded and installed.'
    },
    {
      title: 'INTELLECTUAL PROPERTY, USE LICENCE',
      value: '-QuickFitGuru\'s ownership of the Platform'
    },
    {
      title: '',
      value: 'All of the patents, trademarks, logos, trade names, rights in domain names, copyrights, moral rights, design rights, database rights, rights in undisclosed or confidential information (such as know-how, trade secrets and inventions (whether or not patentable) and other similar intellectual property rights (whether registered or not)) and applications for such rights as may exist anywhere in the world (collectively, "Intellectual Property Rights") in the Platform and the material published on and through it (except the Contributed Content) are owned by QuickFitGuru, its licensors and other providers of such material and are protected by Applicable Laws. You may not engage in any activity on or through the Platform, including transmitting or using Contributed Content, that infringes or otherwise makes unauthorised use of another party’s Intellectual Property Rights.'
    },
    {
      title: '',
      value: 'User\'s licence to use Platform'
    },
    {
      title: '',
      value: 'You are not granted any right to use, and may not use, any of QuickFitGuru\'s Intellectual Property Rights other than as set out in these Terms of Use and subject to the following conditions:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'you are granted a limited, personal, non-transferable, non-sublicensable and revocable license to access and use the Platform (or any part of it or its contents) for your own personal use and may not copy, reproduce, republish, upload, re-post, modify, transmit, distribute or otherwise use the Platform (or any part of it or its content) in any way for non-personal, public or commercial use without prior written consent from QuickFitGuru'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'you may not remove or modify any copyright, trademark or other proprietary notices that have been placed in any part of the Platform; and'
    },
    {
      title: '',
      value: '(c)'
    },
    {
      title: '',
      value: 'you may not use any data mining, robots or similar data-gathering or extraction methods. QuickFitGuru reserves the right to monitor your use of the Platform and to alter or revoke your license or your access to the Platform at any time and for any reason. Your license shall terminate upon the expiry or termination of your User Account.'
    },
    {
      title: '',
      value: '-Contributed Content'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'By posting or otherwise providing Contributed Content, you grant QuickFitGuru a non‐exclusive, royalty‐free, transferable, sub-licensable, irrevocable, perpetual worldwide licence and right to use (including commercial use), distribute, reproduce, display and otherwise make available such Contributed Content on and through the Platform (and across different media for any purpose) and you waive (and to the extent that you cannot so waive agree irrevocably not to assert) any and all moral rights to which you may be entitled anywhere in the world in respect of such Contributed Content.'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'You represent and warrant that you own and control all of the rights to the Contributed Content, and have the lawful right to post or otherwise provide such Contributed Content on and through the Platform and otherwise provide QuickFitGuru with such Contributed Content.'
    },
    {
      title: 'THIRD PARTY SERVICES AND CONTENT',
      value: 'In using the Platform, you may view content provided by third-parties, including links to web pages and services of such parties ("Third Party Content"). Unless expressly stated otherwise, QuickFitGuru does not control, endorse or adopt any Third Party Content and has no responsibility for Third Party Content including material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable in your jurisdiction. Your dealings or correspondence with such third parties are solely between you and the third party. QuickFitGuru is not responsible or liable for any loss or damage of any sort incurred as a result of any such dealings, and you understand that your use of Third Party Content, and your interactions with third parties, is at your own risk. If you access the Platform through or using any services or software provided by third parties, you acknowledge and agree that QuickFitGuru is not responsible or liable for any loss or damage of any kind incurred as a result of your use of such third party services or software.'
    },
    {
      title: 'LIMITATIONS OF LIABILITY, DISCLAIMER, INDEMNITY',
      value: 'Limitation of Liability'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'Nothing in these Terms of Use shall exclude or restrict QuickFitGuru\'s liability for: (a) death or personal injury resulting from the negligence of QuickFitGuru or its Associated Parties (as defined in Clause 7.1(b) below); '
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'fraud or fraudulent misrepresentation; (c) any other matter that cannot be excluded or limited under Applicable Laws; or (d) the indemnities set out in Clause 7.3 and paragraph 1(c) of the Post-Pregnancy Program Addendum (where applicable).'
    },
    {
      title: '',
      value: '(c)'
    },
    {
      title: '',
      value: 'Subject to the foregoing, to the maximum extent permitted by Applicable Laws:'
    },
    {
      title: '',
      value: '	(i) in no event shall QuickFitGuru, its affiliates and its and their respective shareholders, members, directors, officers, employees, attorneys, agents, representatives, suppliers and contractors (collectively, "Associated Parties") be liable for any:'
    },
    {
      title: '',
      value: '	(A) indirect or consequential loss; or'
    },
    {
      title: '',
      value: '	(B) loss of profit, business opportunity, anticipated savings, revenue or goodwill, in each case, whether arising from breach of contract, tort (including negligence), breach of statutory duty or otherwise, arising out of or in connection with authorised or unauthorised use of the Platform, or these Terms of Use; and'
    },
    {
      title: '',
      value: '	(ii) QuickFitGuru and the Associated Parties\' aggregate liability in contract, tort, or otherwise (including any liability for any negligent act or omission) howsoever arising out of, or in connection with, the performance of its obligations under these Terms of Use in respect of any one or more incidents or occurrences shall be limited to the greater of (a) the total amount of fees received by QuickFitGuru or the Associated Parties from you in connection with your use of the Platform in the twelve (12) month period prior to the date of the first incident or series of connected incidents giving rise to a claim made by you under these Terms of Use, and (b) USD 100.00.'
    },
    {
      title: '',
      value: '-Disclaimers'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'To the maximum extent permitted under Applicable Laws, the Platform and any product, service or other item provided by or on behalf of QuickFitGuru are provided on an "as is" and "as available" basis and QuickFitGuru expressly disclaims, and you waive, any and all other warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, title or non-infringement or warranties arising from course of performance, course of dealing or usage in trade. Without limiting the foregoing, QuickFitGuru does not represent or warrant that the Platform is accurate, complete, reliable, current or error-free, or free of viruses or other harmful components.'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'The features on the Platform that promote physical activity, nutrition or general wellness are for your informational purposes only and are not intended as medical advice or services, or for diagnostic or treatment purposes. Before engaging in any physical activity or making any changes to your diet or lifestyle, we suggest seeking advice from your relevant health care professional. Never disregard any advice from a health care professional because of something that you have read on the Platform. To the maximum extent permitted under Applicable Laws, QuickFitGuru is not responsible or liable for any loss or damage of any sort incurred that result from your use of, or inability to use, the features of the Platform. Indemnification To the maximum extent permitted by Applicable Laws, you agree to indemnify and hold harmless immediately upon demand QuickFitGuru and the Associated Parties from any claim, demand, lawsuit, action, proceeding, investigation, liability, damage, loss, cost or expense including reasonable attorneys\' fees, in any way arising out of, in relation to or in'
    },
    {
      title: '',
      value: '-connection with directly or indirectly:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'your use of, or conduct in connection with, the Platform;'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'your breach of these Terms of Use or any other policy; '
    },
    {
      title: '',
      value: '(c)'
    },
    {
      title: '',
      value: 'the Contributed Content you provide; or'
    },
    {
      title: '',
      value: '(d)'
    },
    {
      title: '',
      value: 'your violation of any Applicable Laws or the rights of any other person or entity. '
    },
    {
      title: '',
      value: 'You will provide QuickFitGuru and the Associated Parties with any assistance that QuickFitGuru and the Associated Parties reasonably requests in defending any such action or proceeding.'
    },
    {
      title: 'CHANGES AND UPDATES TO PLATFORM, TERMS OF USE',
      value: 'QuickFitGuru may terminate or modify any feature or part of the Platform at any time without notice. QuickFitGuru may also revise and update these Terms of Use at any time in its sole discretion by posting an updated Terms of Use on the Platform. All such changes to the Terms of Use are effective immediately when posted to the Platform and apply to all access to and use of the Platform (including orders placed on the Platform) thereafter. Your continued use of the Platform following the posting of such revised Terms of Use constitutes your acceptance and agreement to the changes which are binding on you.'
    },
    {
      title: 'COMPLAINTS, GOVERNING LAW AND DISPUTE RESOLUTION',
      value: 'If you have any questions, feedback or complaints, please contact the QuickFitGuru team at the following email address:fddsol12@gmail.com. Alternatively, you can contact the QuickFitGuru team by completing a contact form in the quckfitguru app. These Terms of Use (including a dispute relating to its existence, validity or termination) and any non-contractual obligation or other matter arising out of or in connection with it are governed by the laws of the United Kingdom. The courts of UK have exclusive jurisdiction to settle any dispute arising from or connected with these Terms of Use. If you are a consumer for the purposes of the laws of the country of which you are resident, you may benefit from any mandatory provisions of such laws. Nothing in these Terms of Use, including this Clause 9, affects your rights as a consumer to rely on such mandatory provisions of law.'
    },
    {
      title: 'GENERAL',
      value: '-FORCE MAJEURE EVENT'
    },
    {
      title: '',
      value: 'A "Force Majeure Event" means any event beyond QuickFitGuru\'s reasonable control, including flood, extraordinary weather conditions or earthquake, or other act of God, fire, war, insurrection, riot, labour dispute, accident, action of government, communications, power failure, or equipment or software malfunction. If a Force Majeure Event occurs that affects QuickFitGuru\'s ability to perform its obligations under these Terms of Use, the QuickFitGuru team will contact you as soon as reasonably possible to notify you and QuickFitGuru\'s obligations under these Terms of Use will be suspended and the time of performance of our obligations will be extended for the duration of the Force Majeure Event.'
    },
    {
      title: '',
      value: '-Data Privacy'
    },
    {
      title: '',
      value: 'We will only use your personal information as set out in QuickFitGuru\'s Privacy Policy.'
    },
    {
      title: '',
      value: '-Transfers'
    },
    {
      title: '',
      value: 'QuickFitGuru may transfer its rights and obligations under these Terms of Use to another entity, but this will not affect your rights or QuickFitGuru\'s obligations under these Terms of Use. You may not transfer your rights and obligations under these Terms of Use to another person.'
    },
    {
      title: '',
      value: '-Validity'
    },
    {
      title: '',
      value: 'If any provision of these Terms of Use is deemed unlawful, void or unenforceable, that provision shall be deemed severed from the remaining provisions and shall not affect their validity and enforceability.'
    },
    {
      title: '',
      value: '-Waiver'
    },
    {
      title: '',
      value: 'No waiver of any provision hereof shall be valid unless in writing and signed by the parties. Any failure to enforce any right or remedy hereunder shall not operate as a waiver of the right to enforce such right or remedy in the future or of any other right or remedy.'
    },
    {
      title: '',
      value: '-Relationship of the parties'
    },
    {
      title: '',
      value: 'Nothing in the Terms of Use: (a) is intended to, nor shall create or be deemed to create, any partnership, joint venture, agency, consultancy or trusteeship, or (b) shall give rise to any fiduciary or equitable duties owed by QuickFitGuru to you.'
    },
    {
      title: '',
      value: '-Third party rights'
    },
    {
      title: '',
      value: 'A person who is not a party to these Terms of Use has no right whether by applicable statute or otherwise to enforce any term of these Terms of Use.'
    },
    {
      title: 'ADDITIONAL TERMS',
      value: 'If you live in one of the following countries or states, these Additional Terms apply and override any inconsistent terms in the Terms of Use:'
    },
    {
      title: 'AUSTRALIA',
      value: 'In this Section 1 (Australia) of these Additional Terms:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'Australian Consumer Law has the meaning given to that term in section 4 of the Competition and Consumer Act 2010 (Cth);'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'Consumer has the meaning given to that term in section 3 of the Australian Consumer Law; and'
    },
    {
      title: '',
      value: '(c)'
    },
    {
      title: '',
      value: 'Consumer Guarantees means the statutory guarantees conferred in relation to the supply of goods or services to a Consumer under the Australian Consumer Law and other similar legislation of Australian states and territories.'
    },
    {
      title: '',
      value: '-Where you acquire as a Consumer:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'goods or services of a kind ordinarily acquired for personal, domestic or household use or consumption, the operation of the Consumer Guarantees cannot be, and are not in these Terms of Use, excluded, restricted or modified; and'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'other goods and services, we limit our liability for a failure to comply with any Consumer Guarantee as described in Clause 7.1(b) of these Terms of Use, and we do not exclude or limit the operation of the Consumer Guarantees under any provision of these Terms of Use or in any other manner, and the parties agree it is fair and reasonable in all the circumstances for our liability to be so limited.'
    },
    {
      title: 'CANADA',
      value: 'Section 1.1 (Eligibility) is replaced with the following:'
    },
    {
      title: '',
      value: '-By accessing or using the Platform, you confirm that:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'you are of legal age in your country and not under 16 years old, or you have consent from your parent or guardian. In the case where you are resident in a province or jurisdiction where the legal age is 18 or 19 years old, you confirm that you are 18 or 19 years old or older (as applicable), or you have consent from your parent or guardian; and'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'you have full power, capacity and authority to agree to the Terms of Use and have not been previously suspended or removed from using the Platform.'
    },
    {
      title: 'UNITED STATES OF AMERICA',
      value: 'Section 1.1 (Eligibility) is replaced with the following:'
    },
    {
      title: '',
      value: '-By accessing or using the Platform, you confirm that:'
    },
    {
      title: '',
      value: '(a)'
    },
    {
      title: '',
      value: 'you are of legal age in your country and not under 16 years old, or you have consent from your parent or guardian. In the case where you are resident in a state or jurisdiction where the legal age is 18 years old, you confirm that you are 18 years old or older, or you have consent from your parent or guardian; and'
    },
    {
      title: '',
      value: '(b)'
    },
    {
      title: '',
      value: 'you have full power, capacity and authority to agree to the Terms of Use and have not been previously suspended or removed from using the Platform.TERMS OF USE CAREFULLY.'
    },
    {
      title: '',
      value: 'These Terms of Use cover important information about the Platform and any applicable fees. In particular, they include information about future changes to the Terms of Use and Platform (refer to Clause 8), the purchase and renewal of subscriptions to the Platform (refer to Clause 2) and limitations of liability (refer to Clause 7.1). The following additional terms may also apply to you:'
    },
    {
      title: '',
      value: '-Additional Terms: If you live in certain countries, the Additional Terms found at the end of these Terms of Use may apply to you. These Additional Terms override the other terms of these Terms of Use below to the extent of any inconsistency.'
    },
    {
      title: 'Welcome to the QuickFitGuru community!',
      value: ''
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
