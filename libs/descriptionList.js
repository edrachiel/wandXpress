const descriptionList = [
    {
        id: 1,
        description_one: "Siargao beckons with its world-renowned surfing spots like Cloud 9 and pristine beaches perfect for relaxation. Island hopping reveals hidden gems such as Sugba Lagoon and Naked Island. By night, General Luna comes alive with vibrant nightlife. The island's diverse culinary scene and warm hospitality enrich the experience.",
        description_two: "Adventure seekers can explore natural wonders like Magpupungko Rock Pools and Taktak Falls. Engaging with the local community offers insights into Siargao's culture. In essence, Siargao caters to diverse travelers, promising an unforgettable vacation experience.",
        language: "english"
    },
    {
        id: 2,
        description_one: "Siargao llama con sus renombrados spots de surf como Cloud 9 y playas prístinas perfectas para relajarse. El recorrido por las islas revela joyas ocultas como la Laguna de Sugba y la Isla Naked. Por la noche, General Luna cobra vida con una vibrante vida nocturna. La diversa escena culinaria de la isla y su cálida hospitalidad enriquecen la experiencia.",
        description_two: "Los buscadores de aventuras pueden explorar maravillas naturales como las Pozas de Roca de Magpupungko y las Cataratas de Taktak. Interactuar con la comunidad local ofrece perspectivas sobre la cultura de Siargao. En esencia, Siargao satisface a viajeros diversos, prometiendo una experiencia vacacional inolvidable.",
        language: "spanish"
    },
    {
        id: 3,
        description_one: "Siargao lockt mit seinen weltberühmten Surfspots wie Cloud 9 und unberührten Stränden, die perfekt zur Entspannung sind. Beim Inselhopping entdeckt man versteckte Schätze wie die Sugba Lagune und die Naked Island. Nachts erwacht General Luna mit lebendigem Nachtleben zum Leben. Die vielfältige kulinarische Szene der Insel und die herzliche Gastfreundschaft bereichern das Erlebnis.",
        description_two: "Abenteuerlustige können Naturwunder wie die Magpupungko Felspools und die Taktak Wasserfälle erkunden. Die Interaktion mit der örtlichen Gemeinschaft bietet Einblicke in die Kultur von Siargao. Im Wesentlichen spricht Siargao diverse Reisende an und verspricht ein unvergessliches Urlaubserlebnis.",
        language: "german"
    },
    {
        id: 4,
        description_one: "Siargao attire avec ses spots de surf mondialement connus comme Cloud 9 et ses plages immaculées parfaites pour la détente. Le saut d'île révèle des trésors cachés comme le Lagon de Sugba et l'Île Nue. La nuit, General Luna s'anime avec une vie nocturne vibrante. La scène culinaire diversifiée de l'île et son hospitalité chaleureuse enrichissent l'expérience.",
        description_two: "Les aventuriers peuvent explorer des merveilles naturelles telles que les piscines rocheuses de Magpupungko et les chutes de Taktak. Interagir avec la communauté locale offre des perspectives sur la culture de Siargao. En essence, Siargao répond aux différents voyageurs, promettant une expérience de vacances inoubliable.",
        language: "french"
    },
    {
        id: 5,
        description_one: " סיארגאו מזמינה עם הנקודות לגלישה המפורסמות בעולם שלה, כמו ענן 9, וחופים טהורים מושלמים להתרפקות. הקפיצה בין האיים חושפת אבני חן נסתרות כמו אגם סוגבה ואי עירום. בלילה, ג'נרל לונה מתעוררת עם חיי הלילה הדונמיים. התרבות הקולינרית המגוונת של האי והאירוח החם מעשירים את החוויה.",
        description_two: "מחפשי הרפתקאות יכולים לחקור פלאים טבעיים כמו בריכות הסלע ונחל טקטק. התעסקות עם הקהילה המקומית מציעה תובנות לתרבות של סיארגאו. לעצם, סיארגאו מספקת למטיילים מגוונים, ומבטיחה חווית חופשה שלא תישכח.",
        language: "hebrew"
    },
    {
        id: 6,
        description_one: "Siargao lokt met zijn wereldberoemde surfspots zoals Cloud 9 en ongerepte stranden perfect voor ontspanning. Eilandhoppen onthult verborgen juweeltjes zoals Sugba Lagune en Naakt Eiland. 's Avonds komt General Luna tot leven met levendig nachtleven. De diverse culinaire scene van het eiland en de warme gastvrijheid verrijken de ervaring.",
        description_two: "Avontuurzoekers kunnen natuurlijke wonderen zoals de Magpupungko Rotspoelen en de Taktak Watervallen verkennen. Het contact met de lokale gemeenschap biedt inzicht in de cultuur van Siargao. In essentie voorziet Siargao in de behoeften van diverse reizigers, met een belofte van een onvergetelijke vakantie-ervaring.",
        language: "dutch"
    },
    {
        id: 7,
        description_one: "希亚高岛以其世界闻名的冲浪地点如Cloud 9和适合放松的原始海滩吸引着人们。环岛游揭示了隐藏的宝藏，如Sugba Lagoon和Naked Island。夜晚时分，General Luna的夜生活充满活力。岛上多样化的美食场景和热情好客的待客之道丰富了体验。",
        description_two: "冒险者可以探索像Magpupungko岩石池和Taktak瀑布这样的自然奇观。与当地社区互动可以深入了解锡亚高的文化。总的来说，锡亚高迎合各种旅行者，承诺带来难忘的度假体验。",
        language: "mandarin"
    },
    {
        id: 8,
        description_one: "Siargao lockar med sina världsberömda surfplatser som Cloud 9 och orörda stränder perfekta för avkoppling. Ö-hoppande avslöjar dolda pärlor som Sugba Lagoon och Naked Island. På natten vaknar General Luna till liv med ett livligt nattliv. Öns mångfaldiga kulinariska scen och varma gästfrihet förhöjer upplevelsen.",
        description_two: "Äventyrslystna kan utforska naturliga underverk som Magpupungko Rock Pools och Taktak Falls. Att interagera med det lokala samhället ger insikter i Siargaos kultur. I grund och botten tillgodoser Siargao olika resenärer och lovar en oförglömlig semestrarupplevelse.",
        language: "swedish"
    },
    {
        id: 9,
        description_one: "Сиаргао зовет своими всемирно известными местами для серфинга, такими как Облако 9, и нетронутыми пляжами, идеальными для отдыха. Путешествие по островам открывает скрытые жемчужины, такие как Лагуна Сугба и Остров Без Одежды. Ночью Генерал Луна оживает яркой ночной жизнью. Разнообразная кулинарная сцена острова и теплое гостеприимство обогащают опыт.",
        description_two: "Любители приключений могут исследовать природные чудеса, такие как Магпупунгко Рок-Пулы и водопад Тактак. Общение с местным сообществом дает понимание культуры Сиаргао. В сути, Сиаргао предлагает разнообразным путешественникам обещание незабываемого отпуска.",
        language: "russian"
    },
    {
        id: 10,
        description_one: "시아르가오는 클라우드 9와 같은 세계적으로 유명한 서핑 장소와 휴식하기에 완벽한 원시적인 해변으로 유혹합니다. 섬 여행은 숨겨진 보석인 스그바 라군과 네이키드 아일랜드와 같은 것을 드러냅니다. 밤에는 제너럴 루나가 활기찬 나이트라이프로 살아납니다. 섬의 다양한 요리 문화와 따뜻한 환대가 경험을 더욱 풍부하게 만듭니다.",
        description_two: "모험을 찾는 사람들은 맥푸푼코 암반 웅덩이와 타크타크 폭포와 같은 자연 경이를 탐험할 수 있습니다. 현지 커뮤니티와의 소통은 시아르가오의 문화에 대한 통찰력을 제공합니다. 본질적으로, 시아르가오는 다양한 여행자들을 위한 것으로, 잊지 못할 휴가 경험을 약속합니다.",
        language: "hangul"
    },
    {
        id: 11,
        description_one: "Siargao invita con i suoi spot di surf di fama mondiale come Cloud 9 e spiagge incontaminate perfette per il relax. Giro dell'isola rivela gemme nascoste come Sugba Lagoon e Naked Island. Di notte, General Luna prende vita con una vivace vita notturna. La variegata scena culinaria dell'isola e l'ospitalità calorosa arricchiscono l'esperienza.",
        description_two: "Gli avventurieri possono esplorare meraviglie naturali come le piscine rocciose di Magpupungko e le cascate di Taktak. Coinvolgersi con la comunità locale offre approfondimenti sulla cultura di Siargao. In sostanza, Siargao si rivolge a viaggiatori diversi, promettendo un'esperienza vacanziera indimenticabile.",
        language: "italian"
    },
    {
        id: 12,
        description_one: "シャルガオは、クラウド9などの世界的に有名なサーフィンスポットや、リラックスに最適な美しいビーチで誘います。島巡りでは、スグバラグーンやネイキッドアイランドなどの隠れた宝石が見つかります。夜になると、ジェネラル・ルナは活気に満ち、夜の生活が楽しめます。島の多様な料理シーンと温かいおもてなしは、体験を豊かにします。",
        description_two: "冒険心旺盛な人々は、Magpupungko Rock PoolsやTaktak Fallsなどの自然の奇跡を探検できます。地元コミュニティとの交流は、シャルガオの文化に対する洞察を提供します。要するに、シャルガオは多様な旅行者に対応し、忘れられないバケーション体験を約束します。",
        language: "japanese"
    },
    {
        id: 13,
        description_one: "Siargao atrai com seus renomados pontos de surfe como Cloud 9 e praias intocadas perfeitas para relaxar. Passeios pelas ilhas revelam joias escondidas como a Lagoa de Sugba e a Ilha Nua. À noite, General Luna ganha vida com uma vida noturna vibrante. A diversa cena culinária da ilha e sua calorosa hospitalidade enriquecem a experiência.",
        description_two: "Os aventureiros podem explorar maravilhas naturais como as Piscinas de Pedra de Magpupungko e as Cachoeiras de Taktak. Interagir com a comunidade local oferece insights sobre a cultura de Siargao. Em essência, Siargao atende a viajantes diversos, prometendo uma experiência de férias inesquecível.",
        language: "portuguese"
    },
    {
        id: 14,
        description_one: "Siargao lokker med sine verdensberømte surfespots som Cloud 9 og uberørte strande perfekte til afslapning. Ø-hop afslører skjulte perler som Sugba Lagoon og Naked Island. Om natten kommer General Luna til live med livlig natteliv. Øens mangfoldige kulinariske scene og varme gæstfrihed beriger oplevelsen.",
        description_two: "Eventyrlystne kan udforske naturlige vidundere som Magpupungko klippebassiner og Taktak Falls. At engagere sig med det lokale samfund giver indblik i Siargaos kultur. I essens imødekommer Siargao diverse rejsende og lover en uforglemmelig ferieoplevelse.",
        language: "danish"
    },
];

module.exports = descriptionList;