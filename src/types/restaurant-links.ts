export const RestaurantURL = {
  Augustas: {
    lunch:
      'https://www.baltichotell.com/mamma-augustas-kok-restaurang-sundsvall/lunch',
    home: 'https://www.baltichotell.com/mamma-augustas-kok-restaurang-sundsvall',
  },
  'Berg & Hjort': {
    lunch: 'https://www.matochmat.se/lunch/sundsvall/berg-och-hjort-foajen',
    home: 'https://bergochhjort.se/',
  },
  Bloco: {
    lunch: 'https://www.blocosundsvall.se/lunchmeny',
    home: 'https://www.blocosundsvall.se/',
  },
  Bryners: {
    lunch: 'https://bryners.se/veckans-lunch-v-j/bryners-bistro.html',
    home: 'https://bryners.se/',
  },
  'E Street': {
    lunch: 'https://www.estreet.nu',
    home: 'https://www.estreet.nu/',
  },
  'Innergården 1891': {
    lunch: 'http://www.innergarden.se/#lunchmeny',
    home: 'http://www.innergarden.se/',
  },
  Invito: {
    lunch: 'http://sundsvall.invitobar.se/mat/#veckans-lunch',
    home: 'http://sundsvall.invitobar.se/',
  },
  Steakhouse: {
    lunch:
      'https://www.firsthotels.se/hotell/sverige/sundsvall/first-hotel-strand/restaurang--bar/lunchmeny/',
    home: 'https://thesteakhouse.se/sundsvall-first-hotel/',
  },
} as const;

export type RestaurantType =
  | 'Augustas'
  | 'Berg & Hjort'
  | 'Bloco'
  | 'Bryners'
  | 'E Street'
  | 'Innergården 1891'
  | 'Invito'
  | 'Steakhouse';
