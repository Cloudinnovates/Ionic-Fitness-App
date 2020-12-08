import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {


  
  recipe_datas = [
    {
      name:'SWEET POTATO AND FONTINA PANINI',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_017_Sweet_potato_and_fontina_panini.jpg) no-repeat center center / cover',
    },
    {
      name:'BRUSCHETTA WITH TOMATOES AND RICOTTA',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_018_Bruschetta_with_tomatoes_and_ricotta.jpg) center bottom no-repeat',
    },
    {
      name:'CROSTINI WITH PEA AND RICOTTA PESTO',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_019_Crostini_with_pea_and_ricotta_pesto.jpg) center bottom no-repeat',
    },
    {
      name:'GOATS CHEESE FRITTATA',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_020_Goats_cheese_frittata.jpg) center bottom no-repeat',
    },
    {
      name:'BAKED FIGS WITH GOATS CHEESE',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_021_Baked_figs_with_goats_cheese.jpg) center bottom no-repeat',
    },
    {
      name:'TOFU WITH CHILLI VINEGAR DRESSING',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_022_Tofu_with_chilli_vinegar_dressing.jpg) center bottom no-repeat',
    },
    {
      name:'AUBERGINE DIP WITH FLATBREADS',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_023_Aubergine_dip_with_flatbreads.jpg) center bottom no-repeat',
    },
    {
      name:'FELAFEL PITTA POCKETS',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_024_Felafel_pitta_pockets.jpg) center bottom no-repeat',
    },
    {
      name:'PUMPKIN WITH WALNUT PESTO',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_025_Pumpkin_with_walnut_pesto.jpg) center bottom no-repeat',
    },
    {
      name:'MUSHROOM AND GINGER WONTONS',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_026_Mushroom_and_ginger_wontons.jpg) center bottom no-repeat',
    },
    {
      name:'BEAN LEMON AND ROSEMARY HUMMUS',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_027_Bean_lemon_and_rosemary_hummus.jpg) center bottom no-repeat',
    },
    {
      name:'ONION WALNUT AND BLUE CHEESE TARTS',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_028_Onion_walnut_and_blue_cheese_tarts.jpg) center bottom no-repeat',
    },
    {
      name:'GRILLED VEGETABLES AND COUSCOUS',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_029_Grilled_vegetables_and_couscous.jpg) center bottom no-repeat',
    },
    {
      name:'ROASTED STUFFED PEPPERS',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_030_Roasted_stuffed_peppers.jpg) center bottom no-repeat',
    },
    {
      name:'CREAMY PEA AND MINT RISOTTO WITH BRIE',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_031_Сreamy_pea_and_mint_risotto_with_brie.jpg) center bottom no-repeat',
    },
    {
      name:'BEANS AND SUN DRIED TOMATOES SPAGHETTI',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_032_Beans_and_sun_dried_tomatoes_spaghetti.jpg) center bottom no-repeat',
    },
    {
      name:'LEEK AND THYME SAUSAGES WITH RELISH',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_033_Leek_and_thyme_sausages_with_relish.jpg) center bottom no-repeat',
    },
    {
      name:'AUBERGINE TOASTIES WITH PESTO',
      img: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/AM24_034_Aubergine_toasties_with_pesto.jpg) center bottom no-repeat',
    },
  ];

  constructor() { }

  ngOnInit() {
    //document.body.style.setProperty('--my-var', "url('../../assets/imgs/home-page-bg.jpg') no-repeat center center / cover");
  }

}
