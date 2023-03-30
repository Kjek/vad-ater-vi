export const RestaurantURL = {
  Augustas:
    'https://www.baltichotell.com/mamma-augustas-kok-restaurang-sundsvall/lunch',
  'Berg & Hjort':
    'https://www.matochmat.se/lunch/sundsvall/berg-och-hjort-foajen',
  Bloco: 'https://www.blocosundsvall.se/lunchmeny',
  Bryners: 'https://bryners.se/veckans-lunch-v-j/bryners-bistro.html',
  'E Street': 'https://www.estreet.nu',
  'Innergården 1891': 'http://www.innergarden.se/#lunchmeny',
  Invito: 'http://sundsvall.invitobar.se/mat/#veckans-lunch',
} as const;

export type RestaurantType =
  | 'Augustas'
  | 'Berg & Hjort'
  | 'Bloco'
  | 'Bryners'
  | 'E Street'
  | 'Innergården 1891'
  | 'Invito';
