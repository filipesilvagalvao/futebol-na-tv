export function madeGames() {
      //canais disponíveis
      const channels = [
            {
                  channel: 'CNN Brasil',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cnnbrasil',
                        'https://embedcanaistv.com/cnnbrasil/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cnnbrasil',
                        'https://embedtv-0.icu/cnnbrasil',
                        'https://playertv.net/e/?v=cnn'
                  ]
            },
            {
                  channel: 'Globo News',
                  links: [
                        'https://reidoscanais.tv/embed/?id=globonews',
                        'https://embedcanaistv.com/globonews/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=globonews',
                        'https://embedtv-0.icu/globonews',
                        'https://playertv.net/e/?v=globoNews'
                  ]
            },
            {
                  channel: 'FX',
                  links: [
                        'https://reidoscanais.tv/embed/?id=fx',
                        'https://embedcanaistv.com/fx/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=fx',
                        'https://embedtv-0.icu/fx_hd',
                        'https://playertv.net/e/?v=fx'
                  ]
            },
            {
                  channel: 'A&E',
                  links: [
                        'https://reidoscanais.tv/embed/?id=aee',
                        'https://embedcanaistv.com/aee/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=aie',
                        'https://embedtv-0.icu/ae_hd',
                        'https://playertv.net/e/?v=ae'
                  ]
            },
            {
                  channel: 'Cinemax',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cinemax',
                        'https://embedcanaistv.com/cinemax/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cinemax',
                        'https://embedtv-0.icu/cinemax_hd'
                  ]
            },
            {
                  channel: 'Cinecanal',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cinecanal',
                        'https://embedcanaistv.com/cinecanal/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=Cinecanal',
                        'https://embedtv-0.icu/cinecanal_hd',
                        'https://playertv.net/e/?v=cineCanal'
                  ]
            },
            {
                  channel: 'Adult Swim',
                  links: [
                        'https://reidoscanais.tv/embed/?id=adultswim',
                        'https://embedcanaistv.com/adultswim/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=adultswim',
                        'https://embedtv-0.icu/adultswim',
                        'https://playertv.net/e/?v=adult'
                  ]
            },
            {
                  channel: 'H&H Discovery',
                  links: [
                        'https://embedmax.site/tvl/discoveryheh.php',
                        'https://reidoscanais.tv/embed/?id=discoveryheh',
                        'https://embedcanaistv.com/discoveryhh/',
                        '"//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discoveryhomeihealth',
                        'https://embedtv-0.icu/discovery_h&h_hd',
                        'https://playertv.net/e/?v=hh'
                  ]
            },
            {
                  channel: 'Discovery Kids',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discoverykids',
                        'https://embedcanaistv.com/discoverykids/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discoverykids',
                        'https://embedtv-0.icu/discovery_kids_hd',
                        'https://playertv.net/e/?v=kids'
                  ]
            },
            {
                  channel: 'Discovery Theater',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discoverytheater',
                        'https://embedcanaistv.com/discoverytheater/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discoverytheater',
                        'https://embedtv-0.icu/discovery_theater_hd',
                        'https://playertv.net/e/?v=theater'
                  ]
            },
            {
                  channel: 'Discovery Science',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discoveryscience',
                        'https://embedcanaistv.com/discoveryscience/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discoverysience',
                        'https://embedtv-0.icu/discoveryscience',
                        'https://playertv.net/e/?v=science'
                  ]
            },
            {
                  channel: 'Discovery World',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discoveryworld',
                        'https://embedcanaistv.com/discoveryworld/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discoveryworld',
                        'https://embedtv-0.icu/discovery_world_hd',
                        'https://playertv.net/e/?v=world'
                  ]
            },
            {
                  channel: 'Discovery ID',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discoveryid',
                        'https://embedcanaistv.com/discoveryid/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=investigacaodiscovery',
                        'https://embedtv-0.icu/discoveryid',
                        'https://playertv.net/e/?v=id'
                  ]
            },
            {
                  channel: 'Discovery Turbo',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discoveryturbo',
                        'https://embedcanaistv.com/discoveryturbo/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discoveryturbo',
                        'https://embedtv-0.icu/discovery_turbo_hd',
                        'https://playertv.net/e/?v=turbo'
                  ]
            },
            {
                  channel: 'Gloob',
                  links: [
                        'https://reidoscanais.tv/embed/?id=gloob',
                        'https://embedcanaistv.com/gloob/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=gloob',
                        'https://embedtv-0.icu/Gloob',
                        'https://playertv.net/e/?v=gloob'
                  ]
            },
            {
                  channel: 'Gloobinho',
                  links: [
                        'https://reidoscanais.tv/embed/?id=gloobinho',
                        'https://embedcanaistv.com/gloobinho/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=gloobinho',
                        'https://playertv.net/e/?v=gloobinho'
                  ]
            },
            {
                  channel: 'GNT',
                  links: [
                        'https://reidoscanais.tv/embed/?id=gnt',
                        'https://embedcanaistv.com/gnt/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=gnt',
                        'https://embedtv-0.icu/gnt_hd',
                        'https://playertv.net/e/?v=gnt'
                  ]
            },
            {
                  channel: 'HBO',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbo',
                        'https://embedcanaistv.com/hbo/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo',
                        'https://embedtv-0.icu/hbo_hd'
                  ]
            },
            {
                  channel: 'HBO 2',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbo2',
                        'https://embedcanaistv.com/hbo2/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo2',
                        'https://embedtv-0.icu/hbo_2'
                  ]
            },
            {
                  channel: 'HBO Family',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbofamily',
                        'https://embedcanaistv.com/hbofamily/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbofamily',
                        'https://embedtv-0.icu/HBO_family'
                  ]
            },
            {
                  channel: 'HBO Plus',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hboplus',
                        'https://embedcanaistv.com/hboplus/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hboplus',
                        'https://embedtv-0.icu/HBO_Plus'
                  ]
            },
            {
                  channel: 'HBO Signature',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbosignature',
                        'https://embedcanaistv.com/hbosignature/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbosignature'
                  ]
            },
            {
                  channel: 'HBO Xtreme',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hboxtreme',
                        'https://embedcanaistv.com/hboxtreme/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hboxtreme',
                        'https://embedtv-0.icu/Hbo_Xtreme'
                  ]
            },
            {
                  channel: 'HGTV',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hgtv',
                        'https://embedcanaistv.com/hgtv/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hgtv',
                        'https://embedtv-0.icu/hgtv_hd',
                        'https://playertv.net/e/?v=hgtv'
                  ]
            },
            {
                  channel: 'History 2',
                  links: [
                        'https://reidoscanais.tv/embed/?id=history2',
                        'https://embedcanaistv.com/history2/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=history2',
                        'https://embedtv-0.icu/history_2_hd',
                        'https://playertv.net/e/?v=h2'
                  ]
            },
            {
                  channel: 'History',
                  links: [
                        'https://reidoscanais.tv/embed/?id=history',
                        'https://embedcanaistv.com/history/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=history',
                        'https://embedtv-0.icu/history_hd',
                        'https://playertv.net/e/?v=h1'
                  ]
            },
            {
                  channel: 'Jovem Pan News',
                  links: [
                        'https://reidoscanais.tv/embed/?id=jpnews',
                        'https://embedcanaistv.com/jovempannews/'
                  ]
            },
            {
                  channel: 'Star Channel',
                  links: [
                        'https://reidoscanais.tv/embed/?id=starchannel',
                        'https://embedcanaistv.com/starchannel/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=starchannel',
                        'https://embedtv-0.icu/star_channel_hd',
                        'https://playertv.net/e/?v=star'
                  ]
            },
            {
                  channel: 'Multishow',
                  links: [
                        'https://reidoscanais.tv/embed/?id=multishow',
                        'https://embedcanaistv.com/multishow/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=multishow',
                        'https://embedtv-0.icu/multishow_hd',
                        'https://playertv.net/e/?v=multishow'
                  ]
            },
            {
                  channel: 'National Geographic',
                  links: [
                        'https://reidoscanais.tv/embed/?id=nationalgeographic',
                        'https://embedcanaistv.com/nationalgeografic/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=natgeo',
                        'https://embedtv-0.icu/nationalgeo',
                        'https://playertv.net/e/?v=nat'
                  ]
            },
            {
                  channel: 'Nick Jr',
                  links: [
                        'https://reidoscanais.tv/embed/?id=nickjr',
                        'https://embedcanaistv.com/nickjr/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=nickjr',
                        'https://embedtv-0.icu/nickjunior',
                        'https://playertv.net/e/?v=nickjr'
                  ]
            },
            {
                  channel: 'Nickelodeon',
                  links: [
                        'https://reidoscanais.tv/embed/?id=nickelodeon',
                        'https://embedcanaistv.com/nickelodeon/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=nick',
                        'https://embedtv-0.icu/nickelodeon',
                        'https://playertv.net/e/?v=nick'
                  ]
            },
            {
                  channel: 'Space',
                  links: [
                        'https://reidoscanais.tv/embed/?id=space',
                        'https://embedcanaistv.com/space/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=space',
                        'https://embedtv-0.icu/space_hd',
                        'https://playertv.net/e/?v=space'
                  ]
            },
            {
                  channel: 'Telecine Action',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecineaction',
                        'https://embedcanaistv.com/tcaction/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecineaction',
                        'https://embedtv-0.icu/Telecine_Action',
                        'https://playertv.net/e/?v=tcAction'
                  ]
            },
            {
                  channel: 'Telecine Cult',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecinecult',
                        'https://embedcanaistv.com/tccult/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecinecult',
                        'https://embedtv-0.icu/Telecine_Cult',
                        'https://playertv.net/e/?v=tcCult'
                  ]
            },
            {
                  channel: 'Telecine Fun',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecinefun',
                        'https://embedcanaistv.com/tcfun/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecinefun',
                        'https://embedtv-0.icu/Telecine_Fun',
                        'https://playertv.net/e/?v=tcFun'
                  ]
            },
            {
                  channel: 'Telecine Pipoca',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecinepipoca',
                        'https://embedcanaistv.com/tcpipoca/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecinepipoca',
                        'https://embedtv-0.icu/Telecine_Pipoca',
                        'https://playertv.net/e/?v=tcPipoca'
                  ]
            },
            {
                  channel: 'Telecine Premium',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecinepremium',
                        'https://embedcanaistv.com/tcpremium/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecinepremium',
                        'https://embedtv-0.icu/Telecine_Premium',
                        'https://playertv.net/e/?v=tcPremium'
                  ]
            },
            {
                  channel: 'Telecine Touch',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecinetouch',
                        'https://embedcanaistv.com/tctouch/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecinetouch',
                        'https://embedtv-0.icu/Telecine_Touch',
                        'https://playertv.net/e/?v=tcTouch'
                  ]
            },
            {
                  channel: 'TNT',
                  links: [
                        'https://reidoscanais.tv/embed/?id=tnt',
                        'https://embedcanaistv.com/tnt/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tnt',
                        'https://embedtv-0.icu/tnt_hd',
                        'https://playertv.net/e/?v=tnt'
                  ]
            },
            {
                  channel: 'TNT Novelas',
                  links: [
                        'https://reidoscanais.tv/embed/?id=tntnovelas',
                        'https://embedcanaistv.com/tntnovelas/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tntnovelas',
                        'https://embedtv-0.icu/tnt_novelas_hd',
                        'https://playertv.net/e/?v=tntNovelas'
                  ]
            },
            {
                  channel: 'UFC Fight Pass',
                  links: [
                        'https://reidoscanais.tv/embed/?id=ufcfightpass',
                        'https://embedcanaistv.com/ufcfightpass/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=ufcfightpass',
                        'https://embedtv-0.icu/ufcfightpass'
                  ]
            },
            {
                  channel: 'Universal TV',
                  links: [
                        'https://reidoscanais.tv/embed/?id=universaltv',
                        'https://embedcanaistv.com/universaltv/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=universal',
                        'https://embedtv-0.icu/universal_hd',
                        'https://playertv.net/e/?v=universal'
                  ]
            },
            {
                  channel: 'TNT Séries',
                  links: [
                        'https://embedcanaistv.com/tntseries/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tntseries',
                        'https://embedtv-0.icu/tnt_series_hd',
                        'https://playertv.net/e/?v=tntSeries'
                  ]
            },
            {
                  channel: 'VIva',
                  links: [
                        'https://reidoscanais.tv/embed/?id=viva',
                        'https://embedcanaistv.com/viva/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=viva',
                        'https://embedtv-0.icu/viva',
                        'https://playertv.net/e/?v=viva'
                  ]
            },
            {
                  channel: 'TV Cultura',
                  links: [
                        'https://reidoscanais.tv/embed/?id=tv-cultura',
                        'https://embedcanaistv.com/tvcultura/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tv-cultura',
                        'https://embedtv-0.icu/cultura',
                        'https://playertv.net/e/?v=tv-cultura'
                  ]
            },
            {
                  channel: 'RedeTV',
                  links: [
                        'https://reidoscanais.tv/embed/?id=redetv',
                        'https://embedcanaistv.com/redetv/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=redetv',
                        'https://playertv.net/e/?v=redetv'
                  ]
            },
            {
                  channel: 'BAND',
                  links: [
                        'https://reidoscanais.tv/embed/?id=band',
                        'https://embedcanaistv.com/bandsp/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=band',
                        'https://embedtv-0.icu/Band',
                        'https://playertv.net/e/?v=band'
                  ]
            },
            {
                  channel: 'Band News',
                  links: [
                        'https://reidoscanais.tv/embed/?id=bandnews',
                        'https://embedcanaistv.com/bandnews/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bandnews',
                        'https://embedtv-0.icu/bandnews',
                        'https://playertv.net/e/?v=bandNews'
                  ]
            },
            {
                  channel: 'GE.GLOBO MG',
                  links: [
                        'https://embedmax.site/tvl/globoMG.php',
                        'https://reidoscanais.tv/embed/?id=globomg-globominas'
                  ]
            },
            {
                  channel: 'GE.GLOBO SP',
                  links: [
                        'https://embedmax.site/tvl/globoSP.php',
                        'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp'
                  ]
            },
            {
                  channel: 'SBT',
                  links: [
                        'https://embedmax.site/tvl/sbt.php'
                  ]
            },
            {
                  channel: 'GE.GLOBO RJ',
                  links: [
                        'https://embedmax.site/tvl/globoRJ.php',
                        'https://reidoscanais.tv/embed/?id=globorj-globorio',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'
                  ]
            },
            {
                  channel: 'GLOBO',
                  links: [
                        'https://embedmax.site/tvl/globoMG.php',
                        'https://reidoscanais.tv/embed/?id=globomg-globominas',
                        'https://embedmax.site/tvl/globoSP.php',
                        'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp',
                        'https://embedmax.site/tvl/globoRJ.php',
                        'https://reidoscanais.tv/embed/?id=globorj-globorio',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'
                  ]
            },
            {
                  channel: 'GLOBO MG',
                  links: [
                        'https://embedmax.site/tvl/globoMG.php',
                        'https://reidoscanais.tv/embed/?id=globomg-globominas'
                  ]
            },
            {
                  channel: 'GLOBO SP',
                  links: [
                        'https://embedmax.site/tvl/globoSP.php',
                        'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp'
                  ]
            },
            {
                  channel: 'GLOBO RJ',
                  links: [
                        'https://embedmax.site/tvl/globoRJ.php',
                        'https://reidoscanais.tv/embed/?id=globorj-globorio',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'
                  ]
            },
            {
                  channel: 'DISNEY+ PREMIUM',
                  links: [
                        'https://embedcanaistv.com/disneyplus/',
                        'https://embedmax.site/tvl/disneyplus.php'
                  ]
            },
            {
                  channel: 'DISNEY+',
                  links: [
                        'https://embedcanaistv.com/disneyplus/',
                        'https://embedmax.site/tvl/disneyplus.php'
                  ]
            },
            {
                  channel: 'ESPN',
                  links: [
                        'https://embedmax.site/tvl/espn1.php',
                        'https://reidoscanais.tv/embed/?id=espn',
                        'https://embedcanaistv.com/espn/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=espn',
                        'https://embedtv-0.icu/espn',
                        'https://playertv.net/e/?v=espn'
                  ]
            },
            {
                  channel: 'ESPN 2',
                  links: [
                        'https://embedmax.site/tvl/espn2.php',
                        'https://reidoscanais.tv/embed/?id=espn2',
                        'https://embedcanaistv.com/espn2/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=espn2',
                        'https://embedtv-0.icu/espn2',
                        'https://playertv.net/e/?v=espn2'
                  ]
            },
            {
                  channel: 'ESPN 3',
                  links: [
                        'https://embedmax.site/tvl/espn3.php',
                        'https://reidoscanais.tv/embed/?id=espn3',
                        'https://embedcanaistv.com/espn3/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=espn3',
                        'https://embedtv-0.icu/espn3',
                        'https://playertv.net/e/?v=espn3'
                  ]
            },
            {
                  channel: 'ESPN 4',
                  links: [
                        'https://embedmax.site/tvl/espn4.php',
                        'https://reidoscanais.tv/embed/?id=espn4',
                        'https://embedcanaistv.com/espn4/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=espn4',
                        'https://embedtv-0.icu/espn4',
                        'https://playertv.net/e/?v=espn4'
                  ]
            },
            {
                  channel: 'BANDSPORTS',
                  links: [
                        'https://embedmax.site/tvl/bandsports.php',
                        'https://reidoscanais.tv/embed/?id=bandsports',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bandsports',
                        'https://embedcanaistv.com/bandsports/',
                        'https://embedtv-0.icu/bandsports',
                        'https://playertv.net/e/?v=bandSports'
                  ]
            },
            {
                  channel: 'PREMIERE',
                  links: [
                        'https://embedmax.site/tvl/premiere1.php',
                        'https://reidoscanais.tv/embed/?id=premiere',
                        'https://playertv.net/e/?v=premiere'
                  ]
            },
            {
                  channel: 'PREMIERE FC',
                  links: [
                        'https://embedmax.site/tvl/premiere1.php',
                        'https://reidoscanais.tv/embed/?id=premiere',
                        'https://embedcanaistv.com/premiereclubes/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=premiereclubes',
                        'https://embedtv-0.icu/premiere',
                        'https://playertv.net/e/?v=premiere'
                  ]
            },
            {
                  channel: 'PREMIERE 2',
                  links: [
                        'https://embedmax.site/tvl/premiere2.php',
                        'https://reidoscanais.tv/embed/?id=premiere2',
                        'https://embedcanaistv.com/premiere2/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=premiere2',
                        'https://embedtv-0.icu/premiere2',
                        'https://playertv.net/e/?v=premiere2'
                  ]
            },
            {
                  channel: 'PREMIERE 3',
                  links: [
                        'https://embedmax.site/tvl/premiere3.php',
                        'https://reidoscanais.tv/embed/?id=premiere3',
                        'https://embedcanaistv.com/premiere3/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=premiere3',
                        'https://embedtv-0.icu/premiere3',
                        'https://playertv.net/e/?v=premiere3'
                  ]
            },
            {
                  channel: 'PREMIERE 4',
                  links: [
                        'https://embedmax.site/tvl/premiere4.php',
                        'https://reidoscanais.tv/embed/?id=premiere4',
                        'https://embedcanaistv.com/premiere4/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=premiere4',
                        'https://embedtv-0.icu/premiere4',
                        'https://playertv.net/e/?v=premiere4'
                  ]
            },
            {
                  channel: 'CAZÉ TV',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cazetv',
                        'https://embedcanaistv.com/cazetv/',
                        'https://embedtv-0.icu/caze1',
                        'https://playertv.net/e/?v=caze1',
                        'https://reidoscanais.tv/embed/?id=cazetv2',
                        'https://embedtv-0.icu/caze2',
                        'https://playertv.net/e/?v=caze2',
                        'https://reidoscanais.tv/embed/?id=cazetv3',
                        'https://embedtv-0.icu/caze3',
                        'https://playertv.net/e/?v=caze3'
                  ]
            },
            {
                  channel: 'SPORTV 1',
                  links: [
                        'https://embedmax.site/tvl/sportv1.php',
                        'https://reidoscanais.tv/embed/?id=sportv',
                        'https://embedcanaistv.com/sportv/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=sportv1',
                        'https://embedtv-0.icu/sportv',
                        'https://playertv.net/e/?v=sportv'
                  ]
            },
            {
                  channel: 'SPORTV 2',
                  links: [
                        'https://embedmax.site/tvl/sportv2.php',
                        'https://reidoscanais.tv/embed/?id=sportv2',
                        'https://embedcanaistv.com/sportv2/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=sportv2',
                        'https://embedtv-0.icu/sportv2',
                        'https://playertv.net/e/?v=sportv2'
                  ]
            },
            {
                  channel: 'SPORTV 3',
                  links: [
                        'https://embedmax.site/tvl/sportv3.php',
                        'https://reidoscanais.tv/embed/?id=sportv3',
                        'https://embedcanaistv.com/sportv3/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=sportv3',
                        'https://embedtv-0.icu/sportv3',
                        'https://playertv.net/e/?v=sportv3'
                  ]
            },
            {
                  channel: 'CANAL GOAT',
                  links: [
                        'https://embedmax.site/tvl/canalgoat1.php',
                        'https://embedmax.site/tvl/canalgoat2.php',
                        'https://embedmax.site/tvl/canalgoat2.php'
                  ]
            },
            {
                  channel: 'RECORD',
                  links: [
                        'https://embedmax.site/tvl/recordSP.php',
                        'https://reidoscanais.tv/embed/?id=recordsp',
                        'https://playertv.net/e/?v=recordSP'
                  ]
            },
            {
                  channel: 'TV Brasil',
                  links: [
                        'https://embedmax.site/tvl/tvbrasil.php',
                        'https://reidoscanais.tv/embed/?id=tvbrasil'
                  ]
            },
            {
                  channel: 'Combate',
                  links: [
                        'https://embedmax.site/tvl/combate.php',
                        'https://reidoscanais.tv/embed/?id=combate',
                        'https://embedcanaistv.com/combate/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=combate',
                        'https://embedtv-0.icu/combate',
                        'https://playertv.net/e/?v=combate'
                  ]
            },
            {
                  channel: 'AXN',
                  links: [
                        'https://embedmax.site/tvl/axn.php',
                        'https://reidoscanais.tv/embed/?id=axn',
                        'https://embedcanaistv.com/axn/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=axn',
                        'https://embedtv-0.icu/axn',
                        'https://playertv.net/e/?v=axn'
                  ]
            },
            {
                  channel: 'Cartoon Network',
                  links: [
                        'https://embedmax.site/tvl/cartoonnetwork.php',
                        'https://reidoscanais.tv/embed/?id=cartoonnetwork',
                        'https://embedcanaistv.com/cartoonnetwork/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cartoon',
                        'https://embedtv-0.icu/cartoonnetworkn',
                        'https://playertv.net/e/?v=cartoon'
                  ]
            },
            {
                  channel: 'Discovery Channel',
                  links: [
                        'https://embedmax.site/tvl/discoverychannel.php',
                        'https://reidoscanais.tv/embed/?id=discoverychannel',
                        'https://embedcanaistv.com/discoverychannel/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery',
                        'https://embedtv-0.icu/discoverychannel',
                        'https://playertv.net/e/?v=discovery'
                  ]
            },
            {
                  channel: 'Disney Channel',
                  links: [
                        'https://embedmax.site/tvl/disneychannel.php',
                        'https://reidoscanais.tv/embed/?id=disneychannel',
                        'https://embedcanaistv.com/disneychannel/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=disney',
                        'https://embedtv-0.icu/discoverychannel',
                        'https://playertv.net/e/?v=disney'
                  ]
            },
            {
                  channel: 'Megapix',
                  links: [
                        'https://embedmax.site/tvl/megapix.php',
                        'https://reidoscanais.tv/embed/?id=megapix',
                        'https://embedcanaistv.com/megapix/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=megapix',
                        'https://embedtv-0.icu/megapix',
                        'https://playertv.net/e/?v=megapix'
                  ]
            },
            {
                  channel: 'warnertv',
                  links: [
                        'https://embedmax.site/tvl/warnertv.php',
                        'https://reidoscanais.tv/embed/?id=warnertv',
                        'https://embedcanaistv.com/warner/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=warner',
                        'https://embedtv-0.icu/warnerchannel',
                        'https://playertv.net/e/?v=warner'
                  ]
            },
            {
                  channel: 'Record News',
                  links: [
                        'https://reidoscanais.tv/embed/?id=recordnews',
                        'https://embedcanaistv.com/recordnews/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=recordnews',
                        'https://embedtv-0.icu/recordnews',
                        'https://playertv.net/e/?v=recordNews'
                  ]
            }
      ]

      // Cria um novo objeto Date com a data atual
      const dataAtual = new Date();

      // Obtém o dia, mês e ano
      const dia = String(dataAtual.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se necessário
      const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Os meses começam do 0, então adicionamos 1
      const ano = dataAtual.getFullYear();

      // Formata a data no formato desejado
      const dataFormatada = `${dia}-${mes}-${ano}`;

      //json com dados puxados do futebolnatv.com
      const URL = '/data/jogos.json'

      async function callGames() {
            const resp = await fetch(URL)
            let obj = ''
            if (resp.status === 200) {
                  obj = await resp.json()
                  //console.log(obj)
            }

            let playFilter = []

            obj.forEach((e, i) => {
                  let linkPlayers = [];
                  let nameTeam = [e.team1, e.team2]; // Define o nome do time fora do if
                  let hour = ''
                  let campeonato = ''
                  e.channels.forEach((canal) => {

                        // Verifica se o canal existe na lista de channels
                        const foundChannel = channels.find(c => c.channel.toUpperCase() === canal.toUpperCase());
                        if (foundChannel) {
                              linkPlayers.push(...foundChannel.links); // Adiciona os links ao linkPlayers
                              hour = e.time
                              campeonato = e.championship
                        }

                  });
                  // Se houver links, adiciona ao playFilter e ao nameTeam
                  if (linkPlayers.length > 0) {
                        playFilter.push({
                              links: linkPlayers,
                              teams: nameTeam, // Armazena os nomes dos times em um objeto
                              time: hour,
                              championship: campeonato
                        });
                  }
            });

            //console.log(playFilter)

            const gridPlaySoccer = document.querySelector('#grid-play-soccer')
            if (gridPlaySoccer != null) {
                  playFilter.forEach((element) => {

                        const a = document.createElement('a')
                        a.href = `/jogos-de-hoje/${element.teams[0].name.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}-vs-${element.teams[1].name.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}-${dataFormatada}/`
                        const h3 = document.createElement('h3')
                        h3.innerText = `${element.teams[0].name} -VS- ${element.teams[1].name}`

                        const divMatch = document.createElement('div')
                        divMatch.className = 'match'
                        const spanHourMatch = document.createElement('span')
                        spanHourMatch.className = 'hourMatch'
                        spanHourMatch.innerText = element.time + 'h'

                        const div = document.createElement('div')

                        const imgTeam1 = document.createElement('img')
                        imgTeam1.src = element.teams[0].logo

                        const iX = document.createElement('i')
                        iX.classList.add('fa-solid', 'fa-x')

                        const imgTeam2 = document.createElement('img')
                        imgTeam2.src = element.teams[1].logo

                        const spanChampeonship = document.createElement('span')
                        spanChampeonship.className = 'champeonship'
                        spanChampeonship.innerText = element.championship

                        div.append(imgTeam1, iX, imgTeam2)
                        divMatch.append(spanHourMatch, div, h3, spanChampeonship)
                        a.appendChild(divMatch)

                        gridPlaySoccer.appendChild(a)
                  });
            }
            window.playFilter = playFilter
            window.channels = channels
            //console.log(channels)
      }
      callGames()
}