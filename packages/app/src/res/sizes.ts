// best desing in
// iphone 6 (w:375)
// android (w:420)
import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const {width, height} = Dimensions.get('screen');

class Size {
  // HEIGHT_POINT_IOS = 667;
  width = width < height ? width : height;

  os = Platform.OS;

  // _csreen_width = Dimensions.get("window").width;

  // _csreen_height = Dimensions.get("window").height;

  _screen_width = Dimensions.get('window').width;

  _screen_height = Dimensions.get('window').height;

  _getSize = (value: number) =>
    (value * this.width) / (this.os === 'ios' ? 414 : 414);

  _1sdp = this._getSize(1);

  _2sdp = this._getSize(2);

  _3sdp = this._getSize(3);

  _4sdp = this._getSize(4);

  _5sdp = this._getSize(5);

  _6sdp = this._getSize(6);

  _7sdp = this._getSize(7);

  _8sdp = this._getSize(8);

  _9sdp = this._getSize(9);

  _10sdp = this._getSize(10);

  _11sdp = this._getSize(11);

  _12sdp = this._getSize(12);

  _13sdp = this._getSize(13);

  _14sdp = this._getSize(14);

  _15sdp = this._getSize(15);

  _16sdp = this._getSize(16);

  _17sdp = this._getSize(17);

  _18sdp = this._getSize(18);

  _19sdp = this._getSize(19);

  _20sdp = this._getSize(20);

  _21sdp = this._getSize(21);

  _22sdp = this._getSize(22);

  _23sdp = this._getSize(23);

  _24sdp = this._getSize(24);

  _25sdp = this._getSize(25);

  _26sdp = this._getSize(26);

  _27sdp = this._getSize(27);

  _28sdp = this._getSize(28);

  _29sdp = this._getSize(29);

  _30sdp = this._getSize(30);

  _31sdp = this._getSize(31);

  _32sdp = this._getSize(32);

  _33sdp = this._getSize(33);

  _34sdp = this._getSize(34);

  _35sdp = this._getSize(35);

  _36sdp = this._getSize(36);

  _37sdp = this._getSize(37);

  _38sdp = this._getSize(38);

  _39sdp = this._getSize(39);

  _40sdp = this._getSize(40);

  _41sdp = this._getSize(41);

  _42sdp = this._getSize(42);

  _43sdp = this._getSize(43);

  _44sdp = this._getSize(44);

  _45sdp = this._getSize(45);

  _46sdp = this._getSize(46);

  _47sdp = this._getSize(47);

  _48sdp = this._getSize(48);

  _49sdp = this._getSize(49);

  _50sdp = this._getSize(50);

  _51sdp = this._getSize(51);

  _52sdp = this._getSize(52);

  _53sdp = this._getSize(53);

  _54sdp = this._getSize(54);

  _55sdp = this._getSize(55);

  _56sdp = this._getSize(56);

  _57sdp = this._getSize(57);

  _58sdp = this._getSize(58);

  _59sdp = this._getSize(59);

  _60sdp = this._getSize(60);

  _61sdp = this._getSize(61);

  _62sdp = this._getSize(62);

  _63sdp = this._getSize(63);

  _64sdp = this._getSize(64);

  _65sdp = this._getSize(65);

  _66sdp = this._getSize(66);

  _67sdp = this._getSize(67);

  _68sdp = this._getSize(68);

  _69sdp = this._getSize(69);

  _70sdp = this._getSize(70);

  _71sdp = this._getSize(71);

  _72sdp = this._getSize(72);

  _73sdp = this._getSize(73);

  _74sdp = this._getSize(74);

  _75sdp = this._getSize(75);

  _76sdp = this._getSize(76);

  _77sdp = this._getSize(77);

  _78sdp = this._getSize(78);

  _79sdp = this._getSize(79);

  _80sdp = this._getSize(80);

  _81sdp = this._getSize(81);

  _82sdp = this._getSize(82);

  _83sdp = this._getSize(83);

  _84sdp = this._getSize(84);

  _85sdp = this._getSize(85);

  _86sdp = this._getSize(86);

  _87sdp = this._getSize(87);

  _88sdp = this._getSize(88);

  _89sdp = this._getSize(89);

  _90sdp = this._getSize(90);

  _91sdp = this._getSize(91);

  _92sdp = this._getSize(92);

  _93sdp = this._getSize(93);

  _94sdp = this._getSize(94);

  _95sdp = this._getSize(95);

  _96sdp = this._getSize(96);

  _97sdp = this._getSize(97);

  _98sdp = this._getSize(98);

  _99sdp = this._getSize(99);

  _100sdp = this._getSize(100);

  _101sdp = this._getSize(101);

  _102sdp = this._getSize(102);

  _103sdp = this._getSize(103);

  _104sdp = this._getSize(104);

  _105sdp = this._getSize(105);

  _106sdp = this._getSize(106);

  _107sdp = this._getSize(107);

  _108sdp = this._getSize(108);

  _109sdp = this._getSize(109);

  _110sdp = this._getSize(110);

  _111sdp = this._getSize(111);

  _112sdp = this._getSize(112);

  _113sdp = this._getSize(113);

  _114sdp = this._getSize(114);

  _115sdp = this._getSize(115);

  _116sdp = this._getSize(116);

  _117sdp = this._getSize(117);

  _118sdp = this._getSize(118);

  _119sdp = this._getSize(119);

  _120sdp = this._getSize(120);

  _121sdp = this._getSize(121);

  _122sdp = this._getSize(122);

  _123sdp = this._getSize(123);

  _124sdp = this._getSize(124);

  _125sdp = this._getSize(125);

  _126sdp = this._getSize(126);

  _127sdp = this._getSize(127);

  _128sdp = this._getSize(128);

  _129sdp = this._getSize(129);

  _130sdp = this._getSize(130);

  _131sdp = this._getSize(131);

  _132sdp = this._getSize(132);

  _133sdp = this._getSize(133);

  _134sdp = this._getSize(134);

  _135sdp = this._getSize(135);

  _136sdp = this._getSize(136);

  _137sdp = this._getSize(137);

  _138sdp = this._getSize(138);

  _139sdp = this._getSize(139);

  _140sdp = this._getSize(140);

  _141sdp = this._getSize(141);

  _142sdp = this._getSize(142);

  _143sdp = this._getSize(143);

  _144sdp = this._getSize(144);

  _145sdp = this._getSize(145);

  _146sdp = this._getSize(146);

  _147sdp = this._getSize(147);

  _148sdp = this._getSize(148);

  _149sdp = this._getSize(149);

  _150sdp = this._getSize(150);

  _151sdp = this._getSize(151);

  _152sdp = this._getSize(152);

  _153sdp = this._getSize(153);

  _154sdp = this._getSize(154);

  _155sdp = this._getSize(155);

  _156sdp = this._getSize(156);

  _157sdp = this._getSize(157);

  _158sdp = this._getSize(158);

  _159sdp = this._getSize(159);

  _160sdp = this._getSize(160);

  _161sdp = this._getSize(161);

  _162sdp = this._getSize(162);

  _163sdp = this._getSize(163);

  _164sdp = this._getSize(164);

  _165sdp = this._getSize(165);

  _166sdp = this._getSize(166);

  _167sdp = this._getSize(167);

  _168sdp = this._getSize(168);

  _169sdp = this._getSize(169);

  _170sdp = this._getSize(170);

  _171sdp = this._getSize(171);

  _172sdp = this._getSize(172);

  _173sdp = this._getSize(173);

  _174sdp = this._getSize(174);

  _175sdp = this._getSize(175);

  _176sdp = this._getSize(176);

  _177sdp = this._getSize(177);

  _178sdp = this._getSize(178);

  _179sdp = this._getSize(179);

  _180sdp = this._getSize(180);

  _181sdp = this._getSize(181);

  _182sdp = this._getSize(182);

  _183sdp = this._getSize(183);

  _184sdp = this._getSize(184);

  _185sdp = this._getSize(185);

  _186sdp = this._getSize(186);

  _187sdp = this._getSize(187);

  _188sdp = this._getSize(188);

  _189sdp = this._getSize(189);

  _190sdp = this._getSize(190);

  _191sdp = this._getSize(191);

  _192sdp = this._getSize(192);

  _193sdp = this._getSize(193);

  _194sdp = this._getSize(194);

  _195sdp = this._getSize(195);

  _196sdp = this._getSize(196);

  _197sdp = this._getSize(197);

  _198sdp = this._getSize(198);

  _199sdp = this._getSize(199);

  _200sdp = this._getSize(200);

  _201sdp = this._getSize(201);

  _202sdp = this._getSize(202);

  _203sdp = this._getSize(203);

  _204sdp = this._getSize(204);

  _205sdp = this._getSize(205);

  _206sdp = this._getSize(206);

  _207sdp = this._getSize(207);

  _208sdp = this._getSize(208);

  _209sdp = this._getSize(209);

  _210sdp = this._getSize(210);

  _211sdp = this._getSize(211);

  _212sdp = this._getSize(212);

  _213sdp = this._getSize(213);

  _214sdp = this._getSize(214);

  _215sdp = this._getSize(215);

  _216sdp = this._getSize(216);

  _217sdp = this._getSize(217);

  _218sdp = this._getSize(218);

  _219sdp = this._getSize(219);

  _220sdp = this._getSize(220);

  _221sdp = this._getSize(221);

  _222sdp = this._getSize(222);

  _223sdp = this._getSize(223);

  _224sdp = this._getSize(224);

  _225sdp = this._getSize(225);

  _226sdp = this._getSize(226);

  _227sdp = this._getSize(227);

  _228sdp = this._getSize(228);

  _229sdp = this._getSize(229);

  _230sdp = this._getSize(230);

  _231sdp = this._getSize(231);

  _232sdp = this._getSize(232);

  _233sdp = this._getSize(233);

  _234sdp = this._getSize(234);

  _235sdp = this._getSize(235);

  _236sdp = this._getSize(236);

  _237sdp = this._getSize(237);

  _238sdp = this._getSize(238);

  _239sdp = this._getSize(239);

  _240sdp = this._getSize(240);

  _241sdp = this._getSize(241);

  _242sdp = this._getSize(242);

  _243sdp = this._getSize(243);

  _244sdp = this._getSize(244);

  _245sdp = this._getSize(245);

  _246sdp = this._getSize(246);

  _247sdp = this._getSize(247);

  _248sdp = this._getSize(248);

  _249sdp = this._getSize(249);

  _250sdp = this._getSize(250);

  _251sdp = this._getSize(251);

  _252sdp = this._getSize(252);

  _253sdp = this._getSize(253);

  _254sdp = this._getSize(254);

  _255sdp = this._getSize(255);

  _256sdp = this._getSize(256);

  _257sdp = this._getSize(257);

  _258sdp = this._getSize(258);

  _259sdp = this._getSize(259);

  _260sdp = this._getSize(260);

  _261sdp = this._getSize(261);

  _262sdp = this._getSize(262);

  _263sdp = this._getSize(263);

  _264sdp = this._getSize(264);

  _265sdp = this._getSize(265);

  _266sdp = this._getSize(266);

  _267sdp = this._getSize(267);

  _268sdp = this._getSize(268);

  _269sdp = this._getSize(269);

  _270sdp = this._getSize(270);

  _271sdp = this._getSize(271);

  _272sdp = this._getSize(272);

  _273sdp = this._getSize(273);

  _274sdp = this._getSize(274);

  _275sdp = this._getSize(275);

  _276sdp = this._getSize(276);

  _277sdp = this._getSize(277);

  _278sdp = this._getSize(278);

  _279sdp = this._getSize(279);

  _280sdp = this._getSize(280);

  _281sdp = this._getSize(281);

  _282sdp = this._getSize(282);

  _283sdp = this._getSize(283);

  _284sdp = this._getSize(284);

  _285sdp = this._getSize(285);

  _286sdp = this._getSize(286);

  _287sdp = this._getSize(287);

  _288sdp = this._getSize(288);

  _289sdp = this._getSize(289);

  _290sdp = this._getSize(290);

  _291sdp = this._getSize(291);

  _292sdp = this._getSize(292);

  _293sdp = this._getSize(293);

  _294sdp = this._getSize(294);

  _295sdp = this._getSize(295);

  _296sdp = this._getSize(296);

  _297sdp = this._getSize(297);

  _298sdp = this._getSize(298);

  _299sdp = this._getSize(299);

  _300sdp = this._getSize(300);

  _301sdp = this._getSize(301);

  _302sdp = this._getSize(302);

  _303sdp = this._getSize(303);

  _304sdp = this._getSize(304);

  _305sdp = this._getSize(305);

  _306sdp = this._getSize(306);

  _307sdp = this._getSize(307);

  _308sdp = this._getSize(308);

  _309sdp = this._getSize(309);

  _310sdp = this._getSize(310);

  _311sdp = this._getSize(311);

  _312sdp = this._getSize(312);

  _313sdp = this._getSize(313);

  _314sdp = this._getSize(314);

  _315sdp = this._getSize(315);

  _316sdp = this._getSize(316);

  _317sdp = this._getSize(317);

  _318sdp = this._getSize(318);

  _319sdp = this._getSize(319);

  _320sdp = this._getSize(320);

  _321sdp = this._getSize(321);

  _322sdp = this._getSize(322);

  _323sdp = this._getSize(323);

  _324sdp = this._getSize(324);

  _325sdp = this._getSize(325);

  _326sdp = this._getSize(326);

  _327sdp = this._getSize(327);

  _328sdp = this._getSize(328);

  _329sdp = this._getSize(329);

  _330sdp = this._getSize(330);

  _331sdp = this._getSize(331);

  _332sdp = this._getSize(332);

  _333sdp = this._getSize(333);

  _334sdp = this._getSize(334);

  _335sdp = this._getSize(335);

  _336sdp = this._getSize(336);

  _337sdp = this._getSize(337);

  _338sdp = this._getSize(338);

  _339sdp = this._getSize(339);

  _340sdp = this._getSize(340);

  _341sdp = this._getSize(341);

  _342sdp = this._getSize(342);

  _343sdp = this._getSize(343);

  _344sdp = this._getSize(344);

  _345sdp = this._getSize(345);

  _346sdp = this._getSize(346);

  _347sdp = this._getSize(347);

  _348sdp = this._getSize(348);

  _349sdp = this._getSize(349);

  _350sdp = this._getSize(350);

  _351sdp = this._getSize(351);

  _352sdp = this._getSize(352);

  _353sdp = this._getSize(353);

  _354sdp = this._getSize(354);

  _355sdp = this._getSize(355);

  _356sdp = this._getSize(356);

  _357sdp = this._getSize(357);

  _358sdp = this._getSize(358);

  _359sdp = this._getSize(359);

  _360sdp = this._getSize(360);

  _361sdp = this._getSize(361);

  _362sdp = this._getSize(362);

  _363sdp = this._getSize(363);

  _364sdp = this._getSize(364);

  _365sdp = this._getSize(365);

  _366sdp = this._getSize(366);

  _367sdp = this._getSize(367);

  _368sdp = this._getSize(368);

  _369sdp = this._getSize(369);

  _370sdp = this._getSize(370);

  _371sdp = this._getSize(371);

  _372sdp = this._getSize(372);

  _373sdp = this._getSize(373);

  _374sdp = this._getSize(374);

  _375sdp = this._getSize(375);

  _376sdp = this._getSize(376);

  _377sdp = this._getSize(377);

  _378sdp = this._getSize(378);

  _379sdp = this._getSize(379);

  _380sdp = this._getSize(380);

  _381sdp = this._getSize(381);

  _382sdp = this._getSize(382);

  _383sdp = this._getSize(383);

  _384sdp = this._getSize(384);

  _385sdp = this._getSize(385);

  _386sdp = this._getSize(386);

  _387sdp = this._getSize(387);

  _388sdp = this._getSize(388);

  _389sdp = this._getSize(389);

  _390sdp = this._getSize(390);

  _391sdp = this._getSize(391);

  _392sdp = this._getSize(392);

  _393sdp = this._getSize(393);

  _394sdp = this._getSize(394);

  _395sdp = this._getSize(395);

  _396sdp = this._getSize(396);

  _397sdp = this._getSize(397);

  _398sdp = this._getSize(398);

  _399sdp = this._getSize(399);

  _400sdp = this._getSize(400);

  _401sdp = this._getSize(401);

  _402sdp = this._getSize(402);

  _403sdp = this._getSize(403);

  _404sdp = this._getSize(404);

  _405sdp = this._getSize(405);

  _406sdp = this._getSize(406);

  _407sdp = this._getSize(407);

  _408sdp = this._getSize(408);

  _409sdp = this._getSize(409);

  _410sdp = this._getSize(410);

  _411sdp = this._getSize(411);

  _412sdp = this._getSize(412);

  _413sdp = this._getSize(413);

  _414sdp = this._getSize(414);

  _415sdp = this._getSize(415);

  _416sdp = this._getSize(416);

  _417sdp = this._getSize(417);

  _418sdp = this._getSize(418);

  _419sdp = this._getSize(419);

  _420sdp = this._getSize(420);

  _421sdp = this._getSize(421);

  _422sdp = this._getSize(422);

  _423sdp = this._getSize(423);

  _424sdp = this._getSize(424);

  _425sdp = this._getSize(425);

  _426sdp = this._getSize(426);

  _427sdp = this._getSize(427);

  _428sdp = this._getSize(428);

  _429sdp = this._getSize(429);

  _430sdp = this._getSize(430);

  _431sdp = this._getSize(431);

  _432sdp = this._getSize(432);

  _433sdp = this._getSize(433);

  _434sdp = this._getSize(434);

  _435sdp = this._getSize(435);

  _436sdp = this._getSize(436);

  _437sdp = this._getSize(437);

  _438sdp = this._getSize(438);

  _439sdp = this._getSize(439);

  _440sdp = this._getSize(440);

  _441sdp = this._getSize(441);

  _442sdp = this._getSize(442);

  _443sdp = this._getSize(443);

  _444sdp = this._getSize(444);

  _445sdp = this._getSize(445);

  _446sdp = this._getSize(446);

  _447sdp = this._getSize(447);

  _448sdp = this._getSize(448);

  _449sdp = this._getSize(449);

  _450sdp = this._getSize(450);

  _451sdp = this._getSize(451);

  _452sdp = this._getSize(452);

  _453sdp = this._getSize(453);

  _454sdp = this._getSize(454);

  _455sdp = this._getSize(455);

  _456sdp = this._getSize(456);

  _457sdp = this._getSize(457);

  _458sdp = this._getSize(458);

  _459sdp = this._getSize(459);

  _460sdp = this._getSize(460);

  _461sdp = this._getSize(461);

  _462sdp = this._getSize(462);

  _463sdp = this._getSize(463);

  _464sdp = this._getSize(464);

  _465sdp = this._getSize(465);

  _466sdp = this._getSize(466);

  _467sdp = this._getSize(467);

  _468sdp = this._getSize(468);

  _469sdp = this._getSize(469);

  _470sdp = this._getSize(470);

  _471sdp = this._getSize(471);

  _472sdp = this._getSize(472);

  _473sdp = this._getSize(473);

  _474sdp = this._getSize(474);

  _475sdp = this._getSize(475);

  _476sdp = this._getSize(476);

  _477sdp = this._getSize(477);

  _478sdp = this._getSize(478);

  _479sdp = this._getSize(479);

  _480sdp = this._getSize(480);

  _481sdp = this._getSize(481);

  _482sdp = this._getSize(482);

  _483sdp = this._getSize(483);

  _484sdp = this._getSize(484);

  _485sdp = this._getSize(485);

  _486sdp = this._getSize(486);

  _487sdp = this._getSize(487);

  _488sdp = this._getSize(488);

  _489sdp = this._getSize(489);

  _490sdp = this._getSize(490);

  _491sdp = this._getSize(491);

  _492sdp = this._getSize(492);

  _493sdp = this._getSize(493);

  _494sdp = this._getSize(494);

  _495sdp = this._getSize(495);

  _496sdp = this._getSize(496);

  _497sdp = this._getSize(497);

  _498sdp = this._getSize(498);

  _499sdp = this._getSize(499);

  _500sdp = this._getSize(500);

  _501sdp = this._getSize(501);

  _502sdp = this._getSize(502);

  _503sdp = this._getSize(503);

  _504sdp = this._getSize(504);

  _505sdp = this._getSize(505);

  _506sdp = this._getSize(506);

  _507sdp = this._getSize(507);

  _508sdp = this._getSize(508);

  _509sdp = this._getSize(509);

  _510sdp = this._getSize(510);

  _511sdp = this._getSize(511);

  _512sdp = this._getSize(512);

  _513sdp = this._getSize(513);

  _514sdp = this._getSize(514);

  _515sdp = this._getSize(515);

  _516sdp = this._getSize(516);

  _517sdp = this._getSize(517);

  _518sdp = this._getSize(518);

  _519sdp = this._getSize(519);

  _520sdp = this._getSize(520);

  _521sdp = this._getSize(521);

  _522sdp = this._getSize(522);

  _523sdp = this._getSize(523);

  _524sdp = this._getSize(524);

  _525sdp = this._getSize(525);

  _526sdp = this._getSize(526);

  _527sdp = this._getSize(527);

  _528sdp = this._getSize(528);

  _529sdp = this._getSize(529);

  _530sdp = this._getSize(530);

  _531sdp = this._getSize(531);

  _532sdp = this._getSize(532);

  _533sdp = this._getSize(533);

  _534sdp = this._getSize(534);

  _535sdp = this._getSize(535);

  _536sdp = this._getSize(536);

  _537sdp = this._getSize(537);

  _538sdp = this._getSize(538);

  _539sdp = this._getSize(539);

  _540sdp = this._getSize(540);

  _541sdp = this._getSize(541);

  _542sdp = this._getSize(542);

  _543sdp = this._getSize(543);

  _544sdp = this._getSize(544);

  _545sdp = this._getSize(545);

  _546sdp = this._getSize(546);

  _547sdp = this._getSize(547);

  _548sdp = this._getSize(548);

  _549sdp = this._getSize(549);

  _550sdp = this._getSize(550);

  _551sdp = this._getSize(551);

  _552sdp = this._getSize(552);

  _553sdp = this._getSize(553);

  _554sdp = this._getSize(554);

  _555sdp = this._getSize(555);

  _556sdp = this._getSize(556);

  _557sdp = this._getSize(557);

  _558sdp = this._getSize(558);

  _559sdp = this._getSize(559);

  _560sdp = this._getSize(560);

  _561sdp = this._getSize(561);

  _562sdp = this._getSize(562);

  _563sdp = this._getSize(563);

  _564sdp = this._getSize(564);

  _565sdp = this._getSize(565);

  _566sdp = this._getSize(566);

  _567sdp = this._getSize(567);

  _568sdp = this._getSize(568);

  _569sdp = this._getSize(569);

  _570sdp = this._getSize(570);

  _571sdp = this._getSize(571);

  _572sdp = this._getSize(572);

  _573sdp = this._getSize(573);

  _574sdp = this._getSize(574);

  _575sdp = this._getSize(575);

  _576sdp = this._getSize(576);

  _577sdp = this._getSize(577);

  _578sdp = this._getSize(578);

  _579sdp = this._getSize(579);

  _580sdp = this._getSize(580);

  _581sdp = this._getSize(581);

  _582sdp = this._getSize(582);

  _583sdp = this._getSize(583);

  _584sdp = this._getSize(584);

  _585sdp = this._getSize(585);

  _586sdp = this._getSize(586);

  _587sdp = this._getSize(587);

  _588sdp = this._getSize(588);

  _589sdp = this._getSize(589);

  _590sdp = this._getSize(590);

  _591sdp = this._getSize(591);

  _592sdp = this._getSize(592);

  _593sdp = this._getSize(593);

  _594sdp = this._getSize(594);

  _595sdp = this._getSize(595);

  _596sdp = this._getSize(596);

  _597sdp = this._getSize(597);

  _598sdp = this._getSize(598);

  _599sdp = this._getSize(599);

  _600sdp = this._getSize(600);

  _601sdp = this._getSize(601);

  _602sdp = this._getSize(602);

  _603sdp = this._getSize(603);

  _604sdp = this._getSize(604);

  _605sdp = this._getSize(605);

  _606sdp = this._getSize(606);

  _607sdp = this._getSize(607);

  _608sdp = this._getSize(608);

  _609sdp = this._getSize(609);

  _610sdp = this._getSize(610);

  _611sdp = this._getSize(611);

  _612sdp = this._getSize(612);

  _613sdp = this._getSize(613);

  _614sdp = this._getSize(614);

  _615sdp = this._getSize(615);

  _616sdp = this._getSize(616);

  _617sdp = this._getSize(617);

  _618sdp = this._getSize(618);

  _619sdp = this._getSize(619);

  _620sdp = this._getSize(620);

  _621sdp = this._getSize(621);

  _622sdp = this._getSize(622);

  _623sdp = this._getSize(623);

  _624sdp = this._getSize(624);

  _625sdp = this._getSize(625);

  _626sdp = this._getSize(626);

  _627sdp = this._getSize(627);

  _628sdp = this._getSize(628);

  _629sdp = this._getSize(629);

  _630sdp = this._getSize(630);

  _631sdp = this._getSize(631);

  _632sdp = this._getSize(632);

  _633sdp = this._getSize(633);

  _634sdp = this._getSize(634);

  _635sdp = this._getSize(635);

  _636sdp = this._getSize(636);

  _637sdp = this._getSize(637);

  _638sdp = this._getSize(638);

  _639sdp = this._getSize(639);

  _640sdp = this._getSize(640);

  _641sdp = this._getSize(641);

  _642sdp = this._getSize(642);

  _643sdp = this._getSize(643);

  _644sdp = this._getSize(644);

  _645sdp = this._getSize(645);

  _646sdp = this._getSize(646);

  _647sdp = this._getSize(647);

  _648sdp = this._getSize(648);

  _649sdp = this._getSize(649);

  _650sdp = this._getSize(650);

  _651sdp = this._getSize(651);

  _652sdp = this._getSize(652);

  _653sdp = this._getSize(653);

  _654sdp = this._getSize(654);

  _655sdp = this._getSize(655);

  _656sdp = this._getSize(656);

  _657sdp = this._getSize(657);

  _658sdp = this._getSize(658);

  _659sdp = this._getSize(659);

  _660sdp = this._getSize(660);

  _661sdp = this._getSize(661);

  _662sdp = this._getSize(662);

  _663sdp = this._getSize(663);

  _664sdp = this._getSize(664);

  _665sdp = this._getSize(665);

  _666sdp = this._getSize(666);

  _667sdp = this._getSize(667);

  _668sdp = this._getSize(668);

  _669sdp = this._getSize(669);

  _670sdp = this._getSize(670);

  _671sdp = this._getSize(671);

  _672sdp = this._getSize(672);

  _673sdp = this._getSize(673);

  _674sdp = this._getSize(674);

  _675sdp = this._getSize(675);

  _676sdp = this._getSize(676);

  _677sdp = this._getSize(677);

  _678sdp = this._getSize(678);

  _679sdp = this._getSize(679);

  _680sdp = this._getSize(680);

  _681sdp = this._getSize(681);

  _682sdp = this._getSize(682);

  _683sdp = this._getSize(683);

  _684sdp = this._getSize(684);

  _685sdp = this._getSize(685);

  _686sdp = this._getSize(686);

  _687sdp = this._getSize(687);

  _688sdp = this._getSize(688);

  _689sdp = this._getSize(689);

  _690sdp = this._getSize(690);

  _691sdp = this._getSize(691);

  _692sdp = this._getSize(692);

  _693sdp = this._getSize(693);

  _694sdp = this._getSize(694);

  _695sdp = this._getSize(695);

  _696sdp = this._getSize(696);

  _697sdp = this._getSize(697);

  _698sdp = this._getSize(698);

  _699sdp = this._getSize(699);

  _700sdp = this._getSize(700);

  _701sdp = this._getSize(701);

  _702sdp = this._getSize(702);

  _703sdp = this._getSize(703);

  _704sdp = this._getSize(704);

  _705sdp = this._getSize(705);

  _706sdp = this._getSize(706);

  _707sdp = this._getSize(707);

  _708sdp = this._getSize(708);

  _709sdp = this._getSize(709);

  _710sdp = this._getSize(710);

  _711sdp = this._getSize(711);

  _712sdp = this._getSize(712);

  _713sdp = this._getSize(713);

  _714sdp = this._getSize(714);

  _715sdp = this._getSize(715);

  _716sdp = this._getSize(716);

  _717sdp = this._getSize(717);

  _718sdp = this._getSize(718);

  _719sdp = this._getSize(719);

  _720sdp = this._getSize(720);

  _721sdp = this._getSize(721);

  _722sdp = this._getSize(722);

  _723sdp = this._getSize(723);

  _724sdp = this._getSize(724);

  _725sdp = this._getSize(725);

  _726sdp = this._getSize(726);

  _727sdp = this._getSize(727);

  _728sdp = this._getSize(728);

  _729sdp = this._getSize(729);

  _730sdp = this._getSize(730);

  _731sdp = this._getSize(731);

  _732sdp = this._getSize(732);

  _733sdp = this._getSize(733);

  _734sdp = this._getSize(734);

  _735sdp = this._getSize(735);

  _736sdp = this._getSize(736);

  _737sdp = this._getSize(737);

  _738sdp = this._getSize(738);

  _739sdp = this._getSize(739);

  _740sdp = this._getSize(740);

  _741sdp = this._getSize(741);

  _742sdp = this._getSize(742);

  _743sdp = this._getSize(743);

  _744sdp = this._getSize(744);

  _745sdp = this._getSize(745);

  _746sdp = this._getSize(746);

  _747sdp = this._getSize(747);

  _748sdp = this._getSize(748);

  _749sdp = this._getSize(749);

  _750sdp = this._getSize(750);

  _751sdp = this._getSize(751);

  _752sdp = this._getSize(752);

  _753sdp = this._getSize(753);

  _754sdp = this._getSize(754);

  _755sdp = this._getSize(755);

  _756sdp = this._getSize(756);

  _757sdp = this._getSize(757);

  _758sdp = this._getSize(758);

  _759sdp = this._getSize(759);

  _760sdp = this._getSize(760);

  _761sdp = this._getSize(761);

  _762sdp = this._getSize(762);

  _763sdp = this._getSize(763);

  _764sdp = this._getSize(764);

  _765sdp = this._getSize(765);

  _766sdp = this._getSize(766);

  _767sdp = this._getSize(767);

  _768sdp = this._getSize(768);

  _769sdp = this._getSize(769);

  _770sdp = this._getSize(770);

  _771sdp = this._getSize(771);

  _772sdp = this._getSize(772);

  _773sdp = this._getSize(773);

  _774sdp = this._getSize(774);

  _775sdp = this._getSize(775);

  _776sdp = this._getSize(776);

  _777sdp = this._getSize(777);

  _778sdp = this._getSize(778);

  _779sdp = this._getSize(779);

  _780sdp = this._getSize(780);

  _781sdp = this._getSize(781);

  _782sdp = this._getSize(782);

  _783sdp = this._getSize(783);

  _784sdp = this._getSize(784);

  _785sdp = this._getSize(785);

  _786sdp = this._getSize(786);

  _787sdp = this._getSize(787);

  _788sdp = this._getSize(788);

  _789sdp = this._getSize(789);

  _790sdp = this._getSize(790);

  _791sdp = this._getSize(791);

  _792sdp = this._getSize(792);

  _793sdp = this._getSize(793);

  _794sdp = this._getSize(794);

  _795sdp = this._getSize(795);

  _796sdp = this._getSize(796);

  _797sdp = this._getSize(797);

  _798sdp = this._getSize(798);

  _799sdp = this._getSize(799);

  _800sdp = this._getSize(800);

  _801sdp = this._getSize(801);

  _802sdp = this._getSize(802);

  _803sdp = this._getSize(803);

  _804sdp = this._getSize(804);

  _805sdp = this._getSize(805);

  _806sdp = this._getSize(806);

  _807sdp = this._getSize(807);

  _808sdp = this._getSize(808);

  _809sdp = this._getSize(809);

  _810sdp = this._getSize(810);

  _811sdp = this._getSize(811);

  _812sdp = this._getSize(812);

  _813sdp = this._getSize(813);

  _814sdp = this._getSize(814);

  _815sdp = this._getSize(815);

  _816sdp = this._getSize(816);

  _817sdp = this._getSize(817);

  _818sdp = this._getSize(818);

  _819sdp = this._getSize(819);

  _820sdp = this._getSize(820);

  _821sdp = this._getSize(821);

  _822sdp = this._getSize(822);

  _823sdp = this._getSize(823);

  _824sdp = this._getSize(824);

  _825sdp = this._getSize(825);

  _826sdp = this._getSize(826);

  _827sdp = this._getSize(827);

  _828sdp = this._getSize(828);

  _829sdp = this._getSize(829);

  _830sdp = this._getSize(830);

  _831sdp = this._getSize(831);

  _832sdp = this._getSize(832);

  _833sdp = this._getSize(833);

  _834sdp = this._getSize(834);

  _835sdp = this._getSize(835);

  _836sdp = this._getSize(836);

  _837sdp = this._getSize(837);

  _838sdp = this._getSize(838);

  _839sdp = this._getSize(839);

  _840sdp = this._getSize(840);

  _841sdp = this._getSize(841);

  _842sdp = this._getSize(842);

  _843sdp = this._getSize(843);

  _844sdp = this._getSize(844);

  _845sdp = this._getSize(845);

  _846sdp = this._getSize(846);

  _847sdp = this._getSize(847);

  _848sdp = this._getSize(848);

  _849sdp = this._getSize(849);

  _850sdp = this._getSize(850);

  _851sdp = this._getSize(851);

  _852sdp = this._getSize(852);

  _853sdp = this._getSize(853);

  _854sdp = this._getSize(854);

  _855sdp = this._getSize(855);

  _856sdp = this._getSize(856);

  _857sdp = this._getSize(857);

  _858sdp = this._getSize(858);

  _859sdp = this._getSize(859);

  _860sdp = this._getSize(860);

  _861sdp = this._getSize(861);

  _862sdp = this._getSize(862);

  _863sdp = this._getSize(863);

  _864sdp = this._getSize(864);

  _865sdp = this._getSize(865);

  _866sdp = this._getSize(866);

  _867sdp = this._getSize(867);

  _868sdp = this._getSize(868);

  _869sdp = this._getSize(869);

  _870sdp = this._getSize(870);

  _871sdp = this._getSize(871);

  _872sdp = this._getSize(872);

  _873sdp = this._getSize(873);

  _874sdp = this._getSize(874);

  _875sdp = this._getSize(875);

  _876sdp = this._getSize(876);

  _877sdp = this._getSize(877);

  _878sdp = this._getSize(878);

  _879sdp = this._getSize(879);

  _880sdp = this._getSize(880);

  _881sdp = this._getSize(881);

  _882sdp = this._getSize(882);

  _883sdp = this._getSize(883);

  _884sdp = this._getSize(884);

  _885sdp = this._getSize(885);

  _886sdp = this._getSize(886);

  _887sdp = this._getSize(887);

  _888sdp = this._getSize(888);

  _889sdp = this._getSize(889);

  _890sdp = this._getSize(890);

  _891sdp = this._getSize(891);

  _892sdp = this._getSize(892);

  _893sdp = this._getSize(893);

  _894sdp = this._getSize(894);

  _895sdp = this._getSize(895);

  _896sdp = this._getSize(896);

  _897sdp = this._getSize(897);

  _898sdp = this._getSize(898);

  _899sdp = this._getSize(899);

  _900sdp = this._getSize(900);

  _901sdp = this._getSize(901);

  _902sdp = this._getSize(902);

  _903sdp = this._getSize(903);

  _904sdp = this._getSize(904);

  _905sdp = this._getSize(905);

  _906sdp = this._getSize(906);

  _907sdp = this._getSize(907);

  _908sdp = this._getSize(908);

  _909sdp = this._getSize(909);

  _910sdp = this._getSize(910);

  _911sdp = this._getSize(911);

  _912sdp = this._getSize(912);

  _913sdp = this._getSize(913);

  _914sdp = this._getSize(914);

  _915sdp = this._getSize(915);

  _916sdp = this._getSize(916);

  _917sdp = this._getSize(917);

  _918sdp = this._getSize(918);

  _919sdp = this._getSize(919);

  _920sdp = this._getSize(920);

  _921sdp = this._getSize(921);

  _922sdp = this._getSize(922);

  _923sdp = this._getSize(923);

  _924sdp = this._getSize(924);

  _925sdp = this._getSize(925);

  _926sdp = this._getSize(926);

  _927sdp = this._getSize(927);

  _928sdp = this._getSize(928);

  _929sdp = this._getSize(929);

  _930sdp = this._getSize(930);

  _931sdp = this._getSize(931);

  _932sdp = this._getSize(932);

  _933sdp = this._getSize(933);

  _934sdp = this._getSize(934);

  _935sdp = this._getSize(935);

  _936sdp = this._getSize(936);

  _937sdp = this._getSize(937);

  _938sdp = this._getSize(938);

  _939sdp = this._getSize(939);

  _940sdp = this._getSize(940);

  _941sdp = this._getSize(941);

  _942sdp = this._getSize(942);

  _943sdp = this._getSize(943);

  _944sdp = this._getSize(944);

  _945sdp = this._getSize(945);

  _946sdp = this._getSize(946);

  _947sdp = this._getSize(947);

  _948sdp = this._getSize(948);

  _949sdp = this._getSize(949);

  _950sdp = this._getSize(950);

  _951sdp = this._getSize(951);

  _952sdp = this._getSize(952);

  _953sdp = this._getSize(953);

  _954sdp = this._getSize(954);

  _955sdp = this._getSize(955);

  _956sdp = this._getSize(956);

  _957sdp = this._getSize(957);

  _958sdp = this._getSize(958);

  _959sdp = this._getSize(959);

  _960sdp = this._getSize(960);

  _961sdp = this._getSize(961);

  _962sdp = this._getSize(962);

  _963sdp = this._getSize(963);

  _964sdp = this._getSize(964);

  _965sdp = this._getSize(965);

  _966sdp = this._getSize(966);

  _967sdp = this._getSize(967);

  _968sdp = this._getSize(968);

  _969sdp = this._getSize(969);

  _970sdp = this._getSize(970);

  _971sdp = this._getSize(971);

  _972sdp = this._getSize(972);

  _973sdp = this._getSize(973);

  _974sdp = this._getSize(974);

  _975sdp = this._getSize(975);

  _976sdp = this._getSize(976);

  _977sdp = this._getSize(977);

  _978sdp = this._getSize(978);

  _979sdp = this._getSize(979);

  _980sdp = this._getSize(980);

  _981sdp = this._getSize(981);

  _982sdp = this._getSize(982);

  _983sdp = this._getSize(983);

  _984sdp = this._getSize(984);

  _985sdp = this._getSize(985);

  _986sdp = this._getSize(986);

  _987sdp = this._getSize(987);

  _988sdp = this._getSize(988);

  _989sdp = this._getSize(989);

  _990sdp = this._getSize(990);

  _991sdp = this._getSize(991);

  _992sdp = this._getSize(992);

  _993sdp = this._getSize(993);

  _994sdp = this._getSize(994);

  _995sdp = this._getSize(995);

  _996sdp = this._getSize(996);

  _997sdp = this._getSize(997);

  _998sdp = this._getSize(998);

  _999sdp = this._getSize(999);

  _1000sdp = this._getSize(1000);

  _1001sdp = this._getSize(1001);

  _font_size_small_small_small_small = this._8sdp;

  _font_size_small_small_small = this._9sdp;

  _font_size_small_small = this._10sdp;

  _font_size_small = this._11sdp;

  _font_size_medium_medium_medium = this._12sdp;

  _font_size_medium_medium = this._13sdp;

  _font_size_medium = this._14sdp;

  _font_size_large_large = this._15sdp;

  _font_size_large = this._17sdp;

  _font_size_big_big = this._19sdp;

  _font_size_big = this._20sdp;

  _font_size_max = this._23sdp;

  _font_size_max_max = this._24sdp;

  _font_size_8 = this._8sdp;

  _font_size_9 = this._9sdp;

  _font_size_10 = this._10sdp;

  _font_size_11 = this._11sdp;

  _font_size_12 = this._12sdp;

  _font_size_13 = this._13sdp;

  _font_size_14 = this._14sdp;

  _font_size_15 = this._15sdp;

  _font_size_16 = this._16sdp;

  _font_size_17 = this._17sdp;

  _font_size_18 = this._18sdp;

  _font_size_19 = this._19sdp;

  _font_size_20 = this._20sdp;

  _font_size_21 = this._21sdp;

  _font_size_22 = this._22sdp;

  _font_size_23 = this._23sdp;

  _font_size_24 = this._24sdp;

  _statusbar_height =
    Platform.OS === 'ios'
      ? isIphoneX()
        ? this._40sdp
        : this._20sdp
      : Platform.Version >= 21
      ? StatusBar.currentHeight
        ? StatusBar.currentHeight
        : 0
      : 0;

  _header_height = this._statusbar_height + this._50sdp;

  _bottom_tab_navigator_height =
    Platform.OS === 'ios' && isIphoneX() ? this._80sdp : this._50sdp;

  _header_bar_height = this._40sdp;
}

const sizes = new Size();

export default sizes;
