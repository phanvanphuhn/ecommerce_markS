import { Division, Doctor, Specialty, User } from '@prisma/client';

const password = 'default';

export const normalUsers: Omit<User, 'id' | 'role' | 'reportingToId'>[] = [
  {
    firstName: 'Hertha',
    lastName: 'Kiwitz',
    email: 'hkiwitz0@howstuffworks.com',
    password,
  },
  {
    firstName: 'Sallie',
    lastName: 'Douglass',
    email: 'sdouglass1@purevolume.com',
    password,
  },
  {
    firstName: 'Kristofer',
    lastName: 'Bosence',
    email: 'kbosence2@jugem.jp',
    password,
  },
  {
    firstName: 'Deloria',
    lastName: 'Hemerijk',
    email: 'dhemerijk3@bbb.org',
    password,
  },
  {
    firstName: 'Nannette',
    lastName: 'Britcher',
    email: 'nbritcher4@microsoft.com',
    password,
  },
  {
    firstName: 'Rycca',
    lastName: 'Shivell',
    email: 'rshivell5@google.ru',
    password,
  },
  {
    firstName: 'Ingrim',
    lastName: 'Slocket',
    email: 'islocket6@comcast.net',
    password,
  },
  {
    firstName: 'Monica',
    lastName: 'Persitt',
    email: 'mpersitt7@google.es',
    password,
  },
  {
    firstName: 'Oralia',
    lastName: 'Walworche',
    email: 'owalworche8@dot.gov',
    password,
  },
  {
    firstName: 'Fanchette',
    lastName: 'Dring',
    email: 'fdring9@state.tx.us',
    password,
  },
  {
    firstName: 'Scotti',
    lastName: 'Ablott',
    email: 'sablotta@umn.edu',
    password,
  },
  {
    firstName: 'Brigida',
    lastName: 'Addess',
    email: 'baddessb@opensource.org',
    password,
  },
  {
    firstName: 'Winne',
    lastName: 'Bremner',
    email: 'wbremnerc@xing.com',
    password,
  },
  {
    firstName: 'Belicia',
    lastName: 'Hallgath',
    email: 'bhallgathd@blogspot.com',
    password,
  },
  {
    firstName: 'Ly',
    lastName: 'Bonifas',
    email: 'lbonifase@hao123.com',
    password,
  },
  {
    firstName: 'Tawnya',
    lastName: 'Fenix',
    email: 'tfenixf@scientificamerican.com',
    password,
  },
  {
    firstName: 'Hermy',
    lastName: 'Breadon',
    email: 'hbreadong@google.es',
    password,
  },
  {
    firstName: 'Jeane',
    lastName: 'Mosedill',
    email: 'jmosedillh@sciencedaily.com',
    password,
  },
  {
    firstName: 'Carmelle',
    lastName: 'Kildea',
    email: 'ckildeai@theatlantic.com',
    password,
  },
  {
    firstName: 'Bernadina',
    lastName: 'Challes',
    email: 'bchallesj@psu.edu',
    password,
  },
  {
    firstName: 'Kellen',
    lastName: 'Taylo',
    email: 'ktaylok@bloglines.com',
    password,
  },
  {
    firstName: 'Tomas',
    lastName: 'Thoumasson',
    email: 'tthoumassonl@sun.com',
    password,
  },
  {
    firstName: 'Timmie',
    lastName: 'Spoor',
    email: 'tspoorm@plala.or.jp',
    password,
  },
  {
    firstName: 'Paige',
    lastName: 'Bullough',
    email: 'pbulloughn@xinhuanet.com',
    password,
  },
  {
    firstName: 'Bella',
    lastName: 'Leed',
    email: 'bleedo@gravatar.com',
    password,
  },
  {
    firstName: 'Elmer',
    lastName: 'Tukely',
    email: 'etukelyp@upenn.edu',
    password,
  },
  {
    firstName: 'Kettie',
    lastName: 'Corneil',
    email: 'kcorneilq@ezinearticles.com',
    password,
  },
  {
    firstName: 'Sayers',
    lastName: 'Neachell',
    email: 'sneachellr@thetimes.co.uk',
    password,
  },
  {
    firstName: 'Jody',
    lastName: 'Tubritt',
    email: 'jtubritts@t-online.de',
    password,
  },
  {
    firstName: 'Mill',
    lastName: 'Serginson',
    email: 'mserginsont@vistaprint.com',
    password,
  },
  {
    firstName: 'Jasmina',
    lastName: 'Cogley',
    email: 'jcogleyu@gizmodo.com',
    password,
  },
  {
    firstName: 'Georgia',
    lastName: 'Roja',
    email: 'grojav@ftc.gov',
    password,
  },
  {
    firstName: 'Kermie',
    lastName: 'Hasley',
    email: 'khasleyw@narod.ru',
    password,
  },
  {
    firstName: 'Sayre',
    lastName: 'Swinglehurst',
    email: 'sswinglehurstx@pen.io',
    password,
  },
  {
    firstName: 'Kelcey',
    lastName: 'Gottelier',
    email: 'kgotteliery@blogtalkradio.com',
    password,
  },
  {
    firstName: 'Vyky',
    lastName: 'Kroll',
    email: 'vkrollz@ucoz.ru',
    password,
  },
  {
    firstName: 'Magdalen',
    lastName: 'Parkin',
    email: 'mparkin10@mapquest.com',
    password,
  },
  {
    firstName: 'Agata',
    lastName: 'Grafton',
    email: 'agrafton11@bbb.org',
    password,
  },
  {
    firstName: 'Jarrid',
    lastName: 'Begwell',
    email: 'jbegwell12@gravatar.com',
    password,
  },
  {
    firstName: 'Ezra',
    lastName: 'Starton',
    email: 'estarton13@cnn.com',
    password,
  },
  {
    firstName: 'Dieter',
    lastName: 'Swadlen',
    email: 'dswadlen14@marketwatch.com',
    password,
  },
  {
    firstName: 'Millie',
    lastName: 'Barford',
    email: 'mbarford15@china.com.cn',
    password,
  },
  {
    firstName: 'Jemmie',
    lastName: 'Heffernan',
    email: 'jheffernan16@unblog.fr',
    password,
  },
  {
    firstName: 'Georgiana',
    lastName: 'Hawkswood',
    email: 'ghawkswood17@youtube.com',
    password,
  },
  {
    firstName: 'Finlay',
    lastName: 'Matheson',
    email: 'fmatheson18@sciencedirect.com',
    password,
  },
  {
    firstName: 'Fair',
    lastName: 'Dugall',
    email: 'fdugall19@plala.or.jp',
    password,
  },
  {
    firstName: 'Stanfield',
    lastName: 'Willsmore',
    email: 'swillsmore1a@tmall.com',
    password,
  },
  {
    firstName: 'Inna',
    lastName: 'McCoid',
    email: 'imccoid1b@nbcnews.com',
    password,
  },
  {
    firstName: 'Cati',
    lastName: 'Milington',
    email: 'cmilington1c@ted.com',
    password,
  },
  {
    firstName: 'Giustino',
    lastName: 'Rivelon',
    email: 'grivelon1d@unc.edu',
    password,
  },
  {
    firstName: 'Gray',
    lastName: 'Batstone',
    email: 'gbatstone1e@ameblo.jp',
    password,
  },
  {
    firstName: 'Gaynor',
    lastName: 'Feighry',
    email: 'gfeighry1f@discuz.net',
    password,
  },
  {
    firstName: 'Betteanne',
    lastName: 'Owlner',
    email: 'bowlner1g@goo.gl',
    password,
  },
  {
    firstName: 'Gerda',
    lastName: 'Ubsdall',
    email: 'gubsdall1h@csmonitor.com',
    password,
  },
  {
    firstName: 'Marcie',
    lastName: 'Jore',
    email: 'mjore1i@apache.org',
    password,
  },
  {
    firstName: 'Tybi',
    lastName: 'Mougin',
    email: 'tmougin1j@artisteer.com',
    password,
  },
  {
    firstName: 'Felicdad',
    lastName: 'Proby',
    email: 'fproby1k@guardian.co.uk',
    password,
  },
  {
    firstName: 'Jeniece',
    lastName: 'Garmey',
    email: 'jgarmey1l@cbslocal.com',
    password,
  },
  {
    firstName: 'Courtenay',
    lastName: 'McGeagh',
    email: 'cmcgeagh1m@house.gov',
    password,
  },
  {
    firstName: 'Lin',
    lastName: 'Killner',
    email: 'lkillner1n@examiner.com',
    password,
  },
  {
    firstName: 'Cassie',
    lastName: 'Daft',
    email: 'cdaft1o@usatoday.com',
    password,
  },
  {
    firstName: 'Lonny',
    lastName: 'Goodliff',
    email: 'lgoodliff1p@ovh.net',
    password,
  },
  {
    firstName: 'Winn',
    lastName: 'Rowena',
    email: 'wrowena1q@msn.com',
    password,
  },
  {
    firstName: 'Petunia',
    lastName: 'Doghartie',
    email: 'pdoghartie1r@time.com',
    password,
  },
  {
    firstName: 'Glen',
    lastName: 'Peake',
    email: 'gpeake1s@wp.com',
    password,
  },
  {
    firstName: 'Lilla',
    lastName: 'Woodall',
    email: 'lwoodall1t@ow.ly',
    password,
  },
  {
    firstName: 'Addie',
    lastName: 'Fittes',
    email: 'afittes1u@sfgate.com',
    password,
  },
  {
    firstName: 'Claudie',
    lastName: 'Phillip',
    email: 'cphillip1v@lulu.com',
    password,
  },
  {
    firstName: 'Ignatius',
    lastName: 'Scotchmore',
    email: 'iscotchmore1w@ameblo.jp',
    password,
  },
  {
    firstName: 'Bendicty',
    lastName: 'Mayman',
    email: 'bmayman1x@house.gov',
    password,
  },
  {
    firstName: 'Joelynn',
    lastName: 'Veque',
    email: 'jveque1y@oaic.gov.au',
    password,
  },
  {
    firstName: 'Mersey',
    lastName: 'Livings',
    email: 'mlivings1z@icq.com',
    password,
  },
  {
    firstName: 'Belicia',
    lastName: 'Morrel',
    email: 'bmorrel20@mit.edu',
    password,
  },
  {
    firstName: 'Maggee',
    lastName: 'Westrope',
    email: 'mwestrope21@cnn.com',
    password,
  },
  {
    firstName: 'Norry',
    lastName: 'Semmence',
    email: 'nsemmence22@oakley.com',
    password,
  },
  {
    firstName: 'Constancy',
    lastName: 'Herety',
    email: 'cherety23@behance.net',
    password,
  },
  {
    firstName: 'Adrian',
    lastName: 'Symson',
    email: 'asymson24@spotify.com',
    password,
  },
  {
    firstName: 'Tarrance',
    lastName: 'Casaro',
    email: 'tcasaro25@wired.com',
    password,
  },
  {
    firstName: 'Willard',
    lastName: 'Woodbridge',
    email: 'wwoodbridge26@i2i.jp',
    password,
  },
  {
    firstName: 'George',
    lastName: 'Warhurst',
    email: 'gwarhurst27@youku.com',
    password,
  },
  {
    firstName: 'Dalis',
    lastName: 'McKeighen',
    email: 'dmckeighen28@ftc.gov',
    password,
  },
  {
    firstName: 'Fannie',
    lastName: 'Codi',
    email: 'fcodi29@edublogs.org',
    password,
  },
  {
    firstName: 'Solomon',
    lastName: 'Cullinane',
    email: 'scullinane2a@howstuffworks.com',
    password,
  },
  {
    firstName: 'Alden',
    lastName: 'Adamsen',
    email: 'aadamsen2b@list-manage.com',
    password,
  },
  {
    firstName: 'Edna',
    lastName: 'Sutherington',
    email: 'esutherington2c@boston.com',
    password,
  },
  {
    firstName: 'Winny',
    lastName: 'Yarmouth',
    email: 'wyarmouth2d@reuters.com',
    password,
  },
  {
    firstName: 'Morey',
    lastName: 'Koppens',
    email: 'mkoppens2e@tinypic.com',
    password,
  },
  {
    firstName: 'Fredrick',
    lastName: 'Hearne',
    email: 'fhearne2f@intel.com',
    password,
  },
  {
    firstName: 'Laure',
    lastName: 'Reide',
    email: 'lreide2g@rambler.ru',
    password,
  },
  {
    firstName: 'Aldous',
    lastName: 'Clark',
    email: 'aclark2h@hubpages.com',
    password,
  },
  {
    firstName: 'Ambrose',
    lastName: 'Donohue',
    email: 'adonohue2i@va.gov',
    password,
  },
  {
    firstName: 'Zachariah',
    lastName: 'Gaul',
    email: 'zgaul2j@google.de',
    password,
  },
  {
    firstName: 'Edmon',
    lastName: 'Garmon',
    email: 'egarmon2k@addthis.com',
    password,
  },
  {
    firstName: 'Ardys',
    lastName: 'Sawdy',
    email: 'asawdy2l@a8.net',
    password,
  },
  {
    firstName: 'Kellyann',
    lastName: 'Udden',
    email: 'kudden2m@ehow.com',
    password,
  },
  {
    firstName: 'Vinny',
    lastName: "D'Costa",
    email: 'vdcosta2n@admin.ch',
    password,
  },
  {
    firstName: 'Dimitri',
    lastName: 'MacTurlough',
    email: 'dmacturlough2o@alexa.com',
    password,
  },
  {
    firstName: 'Myrlene',
    lastName: 'Chaffen',
    email: 'mchaffen2p@usnews.com',
    password,
  },
  {
    firstName: 'Georgianne',
    lastName: 'Coleyshaw',
    email: 'gcoleyshaw2q@intel.com',
    password,
  },
  {
    firstName: 'Gilles',
    lastName: 'Milstead',
    email: 'gmilstead2r@rambler.ru',
    password,
  },
];

export const doctorUsers: Omit<
  User & Doctor,
  'role' | 'id' | 'userId' | 'reportingToId'
>[] = [
  {
    firstName: 'Kev',
    lastName: 'Twiddy',
    email: 'ktwiddy0@nymag.com',
    password,
    divisions: [Division.Interventional_Cardiology],
    specialties: [Specialty.Pediatrics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Renaldo',
    lastName: 'Leonardi',
    email: 'rleonardi1@sakura.ne.jp',
    password,
    divisions: [Division.Peripheral_Intervention],
    specialties: [Specialty.Orthopedics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Tull',
    lastName: 'Esmond',
    email: 'tesmond2@flavors.me',
    password,
    divisions: [Division.Neuromodulation],
    specialties: [Specialty.Orthopedics],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Astrid',
    lastName: 'Nangle',
    email: 'anangle3@yolasite.com',
    password,
    divisions: [Division.Interventional_Cardiology],
    specialties: [Specialty.Surgery],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Gustave',
    lastName: 'Murdy',
    email: 'gmurdy4@sciencedaily.com',
    password,
    divisions: [Division.Endoscopy],
    specialties: [Specialty.Pediatrics],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Liam',
    lastName: 'Billanie',
    email: 'lbillanie5@home.pl',
    password,
    divisions: [Division.Peripheral_Intervention],
    specialties: [Specialty.Surgery],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Corella',
    lastName: 'Northin',
    email: 'cnorthin6@elegantthemes.com',
    password,
    divisions: [Division.Endoscopy],
    specialties: [Specialty.Surgery],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Dorian',
    lastName: 'Shills',
    email: 'dshills7@imdb.com',
    password,
    divisions: [Division.Endoscopy],
    specialties: [Specialty.Surgery],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Jesus',
    lastName: 'Espine',
    email: 'jespine8@who.int',
    password,
    divisions: [Division.Interventional_Cardiology],
    specialties: [Specialty.Pediatrics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Sibyl',
    lastName: 'Yakovich',
    email: 'syakovich9@icq.com',
    password,
    divisions: [Division.Endoscopy],
    specialties: [Specialty.Pediatrics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Zita',
    lastName: 'Cauley',
    email: 'zcauleya@tripod.com',
    password,
    divisions: [Division.Neuromodulation],
    specialties: [Specialty.Orthopedics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Rolando',
    lastName: 'Stainland',
    email: 'rstainlandb@freewebs.com',
    password,
    divisions: [Division.Interventional_Cardiology],
    specialties: [Specialty.Surgery],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Teddie',
    lastName: 'Inskipp',
    email: 'tinskippc@ycombinator.com',
    password,
    divisions: [Division.Peripheral_Intervention],
    specialties: [Specialty.Orthopedics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Alvis',
    lastName: 'Curr',
    email: 'acurrd@prnewswire.com',
    password,
    divisions: [Division.Endoscopy],
    specialties: [Specialty.Surgery],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Rozina',
    lastName: 'Ramsted',
    email: 'rramstede@wikipedia.org',
    password,
    divisions: [Division.Interventional_Cardiology],
    specialties: [Specialty.Pediatrics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Karleen',
    lastName: 'Leads',
    email: 'kleadsf@apache.org',
    password,
    divisions: [Division.Neuromodulation],
    specialties: [Specialty.Pediatrics],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Chloette',
    lastName: 'Rockhall',
    email: 'crockhallg@cornell.edu',
    password,
    divisions: [Division.Endoscopy],
    specialties: [Specialty.Surgery],
    title: 'Senior Consultant',
  },
  {
    firstName: 'Gayle',
    lastName: "O'Carney",
    email: 'gocarneyh@weebly.com',
    password,
    divisions: [Division.Endoscopy],
    specialties: [Specialty.Orthopedics],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Glynn',
    lastName: 'Norcliff',
    email: 'gnorcliffi@gravatar.com',
    password,
    divisions: [Division.Interventional_Cardiology],
    specialties: [Specialty.Orthopedics],
    title: 'Junior Consultant',
  },
  {
    firstName: 'Elfreda',
    lastName: 'Pietzke',
    email: 'epietzkej@paypal.com',
    password,
    divisions: [Division.Peripheral_Intervention],
    specialties: [Specialty.Orthopedics],
    title: 'Junior Consultant',
  },
];
