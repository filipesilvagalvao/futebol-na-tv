export function madeGames() {
      //canais disponíveis
      const channels = [
            {
                  channel: 'CNN Brasil',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cnn-brasil',
                        'https://embedcanaistv.com/cnnbrasil/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cnn-brasil',
                        'https://embedtv-0.icu/cnnbrasil',
                        'https://playertv.net/e/?v=cnn-brasil'
                  ]
            },
            {
                  channel: 'Globo News',
                  links: [
                        'https://reidoscanais.tv/embed/?id=globo-news',
                        'https://embedcanaistv.com/globonews/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=globo-news',
                        'https://embedtv-0.icu/globonews',
                        'https://playertv.net/e/?v=globo-news'
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
                        'https://reidoscanais.tv/embed/?id=a&e',
                        'https://embedcanaistv.com/ae/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=a&e',
                        'https://embedtv-0.icu/ae_hd',
                        'https://playertv.net/e/?v=a&e'
                  ]
            },
            {
                  channel: 'Cinemax',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cinemax',
                        'https://embedcanaistv.com/cinemax/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cinemax',
                        'https://embedtv-0.icu/cinemax_hd',
                        'https://playertv.net/e/?v=cinemax'
                  ]
            },
            {
                  channel: 'Cinecanal',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cinecanal',
                        'https://embedcanaistv.com/cinecanal/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=Cinecanal',
                        'https://embedtv-0.icu/cinecanal_hd',
                        'https://playertv.net/e/?v=cinecanal'
                  ]
            },
            {
                  channel: 'Adult Swim',
                  links: [
                        'https://reidoscanais.tv/embed/?id=adult-swim',
                        'https://embedcanaistv.com/adultswim/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=adult-swim',
                        'https://embedtv-0.icu/adultswim',
                        'https://playertv.net/e/?v=adult-swim'
                  ]
            },
            {
                  channel: 'H&H Discovery',
                  links: [
                        'https://reidoscanais.tv/embed/?id=h&h-discovery',
                        'https://embedcanaistv.com/hhdiscovery/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=h&h-discovery',
                        'https://embedtv-0.icu/discovery_h&h_hd',
                        'https://playertv.net/e/?v=h&h-discovery'
                  ]
            },
            {
                  channel: 'Discovery Kids',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discovery-kids',
                        'https://embedcanaistv.com/discoverykids/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery-kids',
                        'https://embedtv-0.icu/discovery_kids_hd',
                        'https://playertv.net/e/?v=discovery-kids'
                  ]
            },
            {
                  channel: 'Discovery Theather',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discovery-theather',
                        'https://embedcanaistv.com/discoverytheather/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery-theather',
                        'https://embedtv-0.icu/discovery_theater_hd',
                        'https://playertv.net/e/?v=discovery-theather'
                  ]
            },
            {
                  channel: 'Discovery Science',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discovery-science',
                        'https://embedcanaistv.com/discoveryscience/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery-science',
                        'https://embedtv-0.icu/discoveryscience',
                        'https://playertv.net/e/?v=discovery-science'
                  ]
            },
            {
                  channel: 'Discovery World',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discovery-world',
                        'https://embedcanaistv.com/discoveryworld/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery-world',
                        'https://embedtv-0.icu/discovery_world_hd',
                        'https://playertv.net/e/?v=discovery-world'
                  ]
            },
            {
                  channel: 'Discovery ID',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discovery-id',
                        'https://embedcanaistv.com/discoveryid/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery-id',
                        'https://embedtv-0.icu/discoveryid',
                        'https://playertv.net/e/?v=discovery-id'
                  ]
            },
            {
                  channel: 'Discovery Turbo',
                  links: [
                        'https://reidoscanais.tv/embed/?id=discovery-turbo',
                        'https://embedcanaistv.com/discoveryturbo/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery-turbo',
                        'https://embedtv-0.icu/discovery_turbo_hd',
                        'https://playertv.net/e/?v=discovery-turbo'
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
                        'https://embedtv-0.icu/hbo_hd',
                        'https://playertv.net/e/?v=hbo'
                  ]
            },
            {
                  channel: 'HBO 2',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbo-2',
                        'https://embedcanaistv.com/hbo2/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo-2',
                        'https://embedtv-0.icu/hbo_2',
                        'https://playertv.net/e/?v=hbo-2'
                  ]
            },
            {
                  channel: 'HBO Family',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbo-family',
                        'https://embedcanaistv.com/hbofamily/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo-family',
                        'https://embedtv-0.icu/HBO_family',
                        'https://playertv.net/e/?v=hbo-family'
                  ]
            },
            {
                  channel: 'HBO Plus',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbo-plus',
                        'https://embedcanaistv.com/hboplus/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo-plus',
                        'https://embedtv-0.icu/HBO_Plus',
                        'https://playertv.net/e/?v=hbo-plus'
                  ]
            },
            {
                  channel: 'HBO Signature',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbo-signature',
                        'https://embedcanaistv.com/hbosignature/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo-signature',
                        'https://playertv.net/e/?v=hbo-signature'
                  ]
            },
            {
                  channel: 'HBO Xtreme',
                  links: [
                        'https://reidoscanais.tv/embed/?id=hbo-xtreme',
                        'https://embedcanaistv.com/hboxtreme/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo-xtreme',
                        'https://embedtv-0.icu/Hbo_Xtreme',
                        'https://playertv.net/e/?v=hbo-xtreme'
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
                        'https://reidoscanais.tv/embed/?id=history-2',
                        'https://embedcanaistv.com/history2/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=history-2',
                        'https://embedtv-0.icu/history_2_hd',
                        'https://playertv.net/e/?v=history-2'
                  ]
            },
            {
                  channel: 'History',
                  links: [
                        'https://reidoscanais.tv/embed/?id=history',
                        'https://embedcanaistv.com/history/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=history',
                        'https://embedtv-0.icu/history_hd',
                        'https://playertv.net/e/?v=history'
                  ]
            },
            {
                  channel: 'Jovem Pan News',
                  links: [
                        'https://reidoscanais.tv/embed/?id=jovem-pan-news',
                        'https://embedcanaistv.com/jovempannews/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=jovem-pan-news',
                        'https://playertv.net/e/?v=jovem-pan-news'
                  ]
            },
            {
                  channel: 'Star Channel',
                  links: [
                        'https://reidoscanais.tv/embed/?id=star-channel',
                        'https://embedcanaistv.com/starchannel/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=star-channel',
                        'https://embedtv-0.icu/star_channel_hd',
                        'https://playertv.net/e/?v=star-channel'
                  ]
            },
            {
                  channel: 'Multishow',
                  links: [
                        'https://reidoscanais.tv/embed/?id=multi-show',
                        'https://embedcanaistv.com/multishow/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=multi-show',
                        'https://embedtv-0.icu/multishow_hd',
                        'https://playertv.net/e/?v=multi-show'
                  ]
            },
            {
                  channel: 'National Geographic',
                  links: [
                        'https://reidoscanais.tv/embed/?id=national-geographic',
                        'https://embedcanaistv.com/nationalgeographic/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=national-geographic',
                        'https://embedtv-0.icu/nationalgeo',
                        'https://playertv.net/e/?v=national-geographic'
                  ]
            },
            {
                  channel: 'Nick Jr',
                  links: [
                        'https://reidoscanais.tv/embed/?id=nick-jr',
                        'https://embedcanaistv.com/nickjr/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=nick-jr',
                        'https://embedtv-0.icu/nickjunior',
                        'https://playertv.net/e/?v=nick-jr'
                  ]
            },
            {
                  channel: 'Nickelodeon',
                  links: [
                        'https://reidoscanais.tv/embed/?id=nickelodeon',
                        'https://embedcanaistv.com/nickelodeon/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=nickelodeon',
                        'https://embedtv-0.icu/nickelodeon',
                        'https://playertv.net/e/?v=nickelodeon'
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
                        'https://reidoscanais.tv/embed/?id=telecine-action',
                        'https://embedcanaistv.com/telecineaction/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecine-action',
                        'https://embedtv-0.icu/Telecine_Action',
                        'https://playertv.net/e/?v=telecine-action'
                  ]
            },
            {
                  channel: 'Telecine Cult',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecine-cult',
                        'https://embedcanaistv.com/telecinecult/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecine-cult',
                        'https://embedtv-0.icu/Telecine_Cult',
                        'https://playertv.net/e/?v=telecine-cult'
                  ]
            },
            {
                  channel: 'Telecine Fun',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecine-fun',
                        'https://embedcanaistv.com/telecinefun/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecine-fun',
                        'https://embedtv-0.icu/Telecine_Fun',
                        'https://playertv.net/e/?v=telecine-fun'
                  ]
            },
            {
                  channel: 'Telecine Pipoca',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecine-pipoca',
                        'https://embedcanaistv.com/telecinepipoca/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecine-pipoca',
                        'https://embedtv-0.icu/Telecine_Pipoca',
                        'https://playertv.net/e/?v=telecine-pipoca'
                  ]
            },
            {
                  channel: 'Telecine Premium',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecine-premium',
                        'https://embedcanaistv.com/telecinepremium/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecine-premium',
                        'https://embedtv-0.icu/Telecine_Premium',
                        'https://playertv.net/e/?v=telecine-premium'
                  ]
            },
            {
                  channel: 'Telecine Touch',
                  links: [
                        'https://reidoscanais.tv/embed/?id=telecine-touch',
                        'https://embedcanaistv.com/telecinetouch/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=telecine-touch',
                        'https://embedtv-0.icu/Telecine_Touch',
                        'https://playertv.net/e/?v=telecine-touch'
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
                        'https://reidoscanais.tv/embed/?id=tnt-novelas',
                        'https://embedcanaistv.com/tntnovelas/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tnt-novelas',
                        'https://embedtv-0.icu/tnt_novelas_hd',
                        'https://playertv.net/e/?v=tnt-novelas'
                  ]
            },
            {
                  channel: 'UFC Fight Pass',
                  links: [
                        'https://reidoscanais.tv/embed/?id=ufc-fight-pass',
                        'https://embedcanaistv.com/ufcfightpass/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=ufc-fight-pass',
                        'https://embedtv-0.icu/ufcfightpass',
                        'https://playertv.net/e/?v=ufc-fight-pass'
                  ]
            },
            {
                  channel: 'Universal TV',
                  links: [
                        'https://reidoscanais.tv/embed/?id=universal-tv',
                        'https://embedcanaistv.com/universaltv/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=universal-tv',
                        'https://embedtv-0.icu/universal_hd',
                        'https://playertv.net/e/?v=universal-tv'
                  ]
            },
            {
                  channel: 'TNT Séries',
                  links: [
                        'https://reidoscanais.tv/embed/?id=tnt-series',
                        'https://embedcanaistv.com/tntseries/',
                        '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tnt-series',
                        'https://embedtv-0.icu/tnt_series_hd',
                        'https://playertv.net/e/?v=tnt-series'
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
                  channel: 'RedeTV!',
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
                        'https://playertv.net/e/?v=espn'
                  ]
            },
            {
                  channel: 'ESPN 2',
                  links: [
                        'https://embedmax.site/tvl/espn2.php',
                        'https://reidoscanais.tv/embed/?id=espn2',
                        'https://playertv.net/e/?v=espn2'
                  ]
            },
            {
                  channel: 'ESPN 3',
                  links: [
                        'https://embedmax.site/tvl/espn3.php',
                        'https://reidoscanais.tv/embed/?id=espn3',
                        'https://playertv.net/e/?v=espn3'
                  ]
            },
            {
                  channel: 'ESPN 4',
                  links: [
                        'https://embedmax.site/tvl/espn4.php',
                        'https://reidoscanais.tv/embed/?id=espn4',
                        'https://playertv.net/e/?v=espn4'
                  ]
            },
            {
                  channel: 'BANDSPORTS',
                  links: [
                        'https://embedmax.site/tvl/bandsports.php',
                        'https://reidoscanais.tv/embed/?id=bandsports',
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
                        'https://playertv.net/e/?v=premiere'
                  ]
            },
            {
                  channel: 'PREMIERE 2',
                  links: [
                        'https://embedmax.site/tvl/premiere2.php',
                        'https://reidoscanais.tv/embed/?id=premiere2',
                        'https://playertv.net/e/?v=premiere2'
                  ]
            },
            {
                  channel: 'PREMIERE 3',
                  links: [
                        'https://embedmax.site/tvl/premiere3.php',
                        'https://reidoscanais.tv/embed/?id=premiere3',
                        'https://playertv.net/e/?v=premiere3'
                  ]
            },
            {
                  channel: 'PREMIERE 4',
                  links: [
                        'https://embedmax.site/tvl/premiere4.php',
                        'https://reidoscanais.tv/embed/?id=premiere4',
                        'https://playertv.net/e/?v=premiere4'
                  ]
            },
            {
                  channel: 'CAZÉ TV',
                  links: [
                        'https://reidoscanais.tv/embed/?id=cazetv',
                        'https://reidoscanais.tv/embed/?id=cazetv2',
                        'https://reidoscanais.tv/embed/?id=cazetv3'
                  ]
            },
            {
                  channel: 'SPORTV',
                  links: [
                        'https://embedmax.site/tvl/sportv1.php',
                        'https://reidoscanais.tv/embed/?id=sportv',
                        'https://playertv.net/e/?v=sportv'
                  ]
            },
            {
                  channel: 'SPORTV 2',
                  links: [
                        'https://embedmax.site/tvl/sportv2.php',
                        'https://reidoscanais.tv/embed/?id=sportv2',
                        'https://playertv.net/e/?v=sportv2'
                  ]
            },
            {
                  channel: 'SPORTV 3',
                  links: [
                        'https://embedmax.site/tvl/sportv3.php',
                        'https://reidoscanais.tv/embed/?id=sportv3',
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
      const URL = '/jogos.json'

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
                        const foundChannel = channels.find(c => c.channel === canal);
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