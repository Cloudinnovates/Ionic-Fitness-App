import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'program',
    loadChildren: () => import('./program/program.module').then( m => m.ProgramPageModule)
  },
  {
    path: 'update_details',
    loadChildren: () => import('./measurement/measurement.module').then( m => m.MeasurementPageModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'term-condition',
    loadChildren: () => import('./term-condition/term-condition.module').then( m => m.TermConditionPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'breakfast',
    loadChildren: () => import('./breakfast/breakfast.module').then( m => m.BreakfastPageModule)
  },
  {
    path: 'lunchanddinner',
    loadChildren: () => import('./lunchanddinner/lunchanddinner.module').then( m => m.LunchanddinnerPageModule)
  },
  {
    path: 'snacks',
    loadChildren: () => import('./snacks/snacks.module').then( m => m.SnacksPageModule)
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredients/ingredients.module').then( m => m.IngredientsPageModule)
  },
  {
    path: 'training-schedule',
    loadChildren: () => import('./training-schedule/training-schedule.module').then( m => m.TrainingSchedulePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'select-train',
    loadChildren: () => import('./select-train/select-train.module').then( m => m.SelectTrainPageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'select-gender',
    loadChildren: () => import('./select-gender/select-gender.module').then( m => m.SelectGenderPageModule)
  },
  {
    path: 'select-measurement',
    loadChildren: () => import('./select-measurement/select-measurement.module').then( m => m.SelectMeasurementPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
 






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
