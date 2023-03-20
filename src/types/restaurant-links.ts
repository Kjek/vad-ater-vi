export const RestaurantURL = {
  Augustas:
    'https://www.baltichotell.com/mamma-augustas-kok-restaurang-sundsvall/lunch',
  'Berg & Hjort':
    'https://www.matochmat.se/lunch/sundsvall/berg-och-hjort-foajen',
  Bryners: 'https://bryners.se/veckans-lunch-v-j/bryners-bistro.html',
  'E Street': 'https://www.estreet.nu',
  Innegården: 'http://www.innergarden.se/#lunchmeny',
  Invito: 'http://sundsvall.invitobar.se/mat/#veckans-lunch',
} as const;

export type RestaurantType =
  | 'Augustas'
  | 'Berg & Hjort'
  | 'Bryners'
  | 'E Street'
  | 'Innegården'
  | 'Invito';
