const specificList = [
    {
        id: 1,
        question: "How to get there?",
        answer: "Fly to Siargao (IAO) airport. Take tricycle or van to General Luna. Take another tricycle or rent scooter to Cloud 9. Many accommodations are nearby.",
        language: "english",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 2,
        question: "What should I expect for food?",
        answer: "Cloud 9 has laid-back surf cafes with local & international dishes, some focusing on healthy options for surfers.",
        language: "english",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 3,
        question: "What are the safety conditions?",
        answer: "For a safe and enjoyable experience at Taktak Falls, consider guided tours, check weather before your visit, and be cautious while swimming.",
        language: "english",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 4,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 5,
        question: "Is there an ATM in TakTak Falls?",
        answer: "ATMs in Santa Monica, Surigao del Norte, near Taktak Falls, may not be readily available.",
        language: "english",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 6,
        question: "¿Cómo llegar allí?",
        answer: "Dirígete al Aeropuerto de Surigao y luego toma un autobús o alquila un vehículo hacia Santa Mónica. En Santa Mónica, alquila un triciclo o habal-habal hacia las Cataratas de Taktak",
        language: "spanish",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 7,
        question: "¿Qué puedo esperar en cuanto a comida?",
        answer: "Lleva tu propia comida y bebidas a las Cataratas de Taktak, pero también puede haber vendedores locales.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 8,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Para una experiencia segura y agradable en las Cataratas de Taktak, considera tours guiados, verifica el clima antes de tu visita y ten precaución al nadar.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 9,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 10,
        question: "¿Hay un cajero automático en Taktak Falls?",
        answer: "Los cajeros automáticos en Santa Mónica, Surigao del Norte, cerca de Taktak Falls, pueden no estar fácilmente disponibles.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 1 
    },
   
    {
        id: 11,
        question: "Wie komme ich dorthin?",
        answer: "Fahren Sie zum Flughafen von Surigao und nehmen Sie dann einen Bus oder mieten Sie ein Fahrzeug nach Santa Monica. In Santa Monica mieten Sie dann ein Dreirad oder Habal-Habal zu den Taktak Falls.",
        language: "german",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 12,
        question: "Was kann ich in Bezug auf Essen erwarten?",
        answer: "Bringen Sie Ihr eigenes Essen und Getränke zu den Taktak Falls mit, aber es könnten auch lokale Verkäufer vorhanden sein.",
        language: "german",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 13,
        question: "Wie sind die Sicherheitsbedingungen?",
        answer: "Für eine sichere und angenehme Erfahrung bei den Taktak Falls sollten Sie geführte Touren in Betracht ziehen, das Wetter vor Ihrem Besuch überprüfen und beim Schwimmen vorsichtig sein.",
        language: "german",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 14,
        question: "Was soll ich tun, wenn ich medizinische Aufmerksamkeit benötige?",
        answer: "Im Notfall informieren Sie das örtliche Personal, rufen Sie die 911 an und kennen Sie die nahegelegenen medizinischen Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 15,
        question: "Gibt es einen Geldautomaten bei den Taktak Falls?",
        answer: "Geldautomaten in Santa Monica, Surigao del Norte, in der Nähe der Taktak Falls, sind möglicherweise nicht leicht verfügbar.",
        language: "german",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 16,
        question: "Comment s'y rendre ?",
        answer: "Rendez-vous à l'aéroport de Surigao, puis prenez un bus ou louez un véhicule jusqu'à Santa Monica. À Santa Monica, louez un tricycle ou un habal-habal jusqu'aux chutes de Taktak.",
        language: "french",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 17,
        question: "À quoi dois-je m'attendre en termes de nourriture ?",
        answer: "Apportez votre propre nourriture et boissons aux chutes de Taktak, mais il peut aussi y avoir des vendeurs locaux.",
        language: "french",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 18,
        question: "Quelles sont les conditions de sécurité ?",
        answer: "Pour une expérience sûre et agréable aux chutes de Taktak, envisagez des visites guidées, vérifiez la météo avant votre visite et soyez prudent en nageant.",
        language: "french",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 19,
        question: "Que dois-je faire si j'ai besoin d'une attention médicale ?",
        answer: "En cas d'urgence, informez le personnel local, appelez le 911 et connaissez les installations médicales à proximité",
        language: "french",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 20,
        question: "Y a-t-il un distributeur automatique de billets aux chutes de Taktak ?",
        answer: "Geldautomaten in Santa Monica, Surigao del Norte, in der Nähe der Taktak Falls, sind möglicherweise nicht leicht verfügbar.",
        language: "french",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 21,
        question: "איך להגיע לשם?",
        answer: "הגע לשדה התעופה של סוריגאו, ואז שפוף אוטובוס או שכור רכב לסנטה מוניקה. בסנטה מוניקה, שכור טריקייקל או הבל-הבל למפלי טקטק.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 22,
        question: "מה לצפות לגבי אוכל?",
        answer: "הבאת את האוכל והשתייה שלך למפלי טקטק, אך ייתכן גם שיהיו סוחרים מקומיים.",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 23,
        question: "מהן תנאי הבטיחות?",
        answer: "לחווייה בטוחה ונעימה במפלי טקטק, יש לשקול סיורים מודרכים, לבדוק את המזג אוויר לפני הביקור שלך, ולהקפיד כשאתה שוחה.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 24,
        question: "מה לעשות אם נדרשת תשומת לב רפואית?",
        answer: "במקרה של חירום, יש להודיע לצוות המקומי, להתקשר ל-911 ולדעת על מתקנים רפואיים קרובים.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 25,
        question: "האם יש כספומט במפלי טקטק?",
        answer: "כספומטים בסנטה מוניקה, סוריגאו דל נורט, ליד מפלי טקטק, עשויים לא להיות זמינים בקלות.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 26,
        question: "Hoe kom ik daar?",
        answer: "Ga naar de luchthaven van Surigao en neem vervolgens een bus of huur een voertuig naar Santa Monica. In Santa Monica, huur een driewieler of habal-habal naar de Taktak Falls.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 27,
        question: "Wat kan ik verwachten qua eten?",
        answer: "Breng je eigen eten en drinken mee naar de Taktak Falls, maar er kunnen ook lokale verkopers zijn. ",
        language: "dutch",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 28,
        question: "Wat zijn de veiligheidsvoorwaarden?",
        answer: "Voor een veilige en plezierige ervaring bij de Taktak Falls, overweeg begeleide rondleidingen, controleer het weer voor je bezoek, en wees voorzichtig tijdens het zwemmen.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 29,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911 en ken de nabijgelegen medische faciliteiten.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 30,
        question: "Is er een geldautomaat bij de Taktak Falls?",
        answer: "Geldautomaten in Santa Monica, Surigao del Norte, in de buurt van de Taktak Falls, zijn mogelijk niet direct beschikbaar.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 31,
        question: "如何到达那里？",
        answer: "前往苏里高机场，然后乘坐公共汽车或租车前往圣莫尼卡。在圣莫尼卡，租用三轮车或哈巴哈巴尔前往塔克塔克瀑布。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 32,
        question: "食物方面应该期望什么",
        answer: "携带自己的食物和饮料前往塔克塔克瀑布，但也可能有当地小贩。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 33,
        question: "安全条件如何？",
        answer: "为了在塔克塔克瀑布获得安全而愉快的体验，考虑参加导游游览，在访问前检查天气，并在游泳时保持谨慎。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 34,
        question: "如果需要医疗帮助该怎么办？",
        answer: "在紧急情况下，通知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 35,
        question: "塔克塔克瀑布附近有自动取款机吗？",
        answer: "在苏里高德尔诺特省圣莫尼卡附近的塔克塔克瀑布，可能不容易找到自动取款机。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 1
    },
   
    {
        id: 36,
        question: "Hur tar jag mig dit?",
        answer: "Åk till Surigao Airport och ta sedan en buss eller hyr en bil till Santa Monica. I Santa Monica kan du hyra en trehjuling eller habal-habal till Taktak Falls.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 37,
        question: "Vad kan jag förvänta mig när det gäller mat?",
        answer: "Ta med din egen mat och dryck till Taktak Falls, men det kan också finnas lokala försäljare.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 38,
        question: "Vilka säkerhetsvillkor gäller?",
        answer: "För en säker och trevlig upplevelse vid Taktak Falls, överväg guidade turer, kontrollera vädret innan ditt besök och var försiktig vid simning.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 39,
        question: "Vad ska jag göra om jag behöver medicinsk hjälp?",
        answer: "I händelse av nödsituation, informera det lokala personalet, ring 911 och känn till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 40,
        question: "Finns det en bankomat vid Taktak Falls?",
        answer: "Bankomater i Santa Monica, Surigao del Norte, nära Taktak Falls, kanske inte är lättillgängliga.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 41,
        question: "Как туда добраться?",
        answer: "Доберитесь до аэропорта Суригао, затем возьмите автобус или арендуйте транспорт до Санта-Моники. В Санта-Монике арендуйте трицикл или хабал-хабал до водопада Тактак.",
        language: "russian",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 42,
        question: "Что я могу ожидать в плане еды?",
        answer: "Привезите свою еду и напитки к водопаду Тактак, но также могут быть местные продавцы.",
        language: "russian",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 43,
        question: "Каковы условия безопасности?",
        answer: "Для безопасного и приятного отдыха у водопада Тактак рассмотрите вариант с экскурсией, проверьте погоду перед посещением и будьте осторожны при купании.",
        language: "russian",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 44,
        question: "Что делать, если мне нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, наберите 911 и узнайте о ближайших медицинских учреждениях.",
        language: "russian",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 45,
        question: "Есть ли банкомат у водопада Тактак?",
        answer: "Банкоматы в Санта-Монике, Суригао дел Норте, возле водопада Тактак, могут быть не слишком легко доступны.",
        language: "russian",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 46,
        question: "어떻게 가나요?",
        answer: "시알가오(Iao) 공항으로 비행합니다. 트라이시클이나 밴을 타고 General Luna로 이동합니다. 그 후 다른 트라이시클이나 스쿠터를 빌려 Cloud 9로 이동합니다. 근처에는 많은 숙박시설이 있습니다.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 47,
        question: "음식으로 무엇을 기대할 수 있나요?",
        answer: "Cloud 9에는 지역 및 국제 요리를 제공하는 레이드백 서프 카페가 있으며 일부는 서퍼를 위한 건강한 옵션에 중점을 둡니다.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 48,
        question: "안전 조건은 어떻게 되나요?",
        answer: "날씨와 서핑 위험에 주의하십시오, 특히 태풍 시즌(6월-11월)에는 더욱 주의가 필요합니다. 현지 권고사항을 따르고, 서핑 초보자라면 레슨을 고려하세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 49,
        question: "의료 관련 도움이 필요한 경우 어떻게 해야 하나요?",
        answer: "긴급 상황에서는 현지 직원에게 알리고 112로 전화하고 근처 의료 시설을 파악하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 50,
        question: "Cloud 9에 ATM이 있나요?",
        answer: "Cloud 9 자체에는 ATM이 없을 수 있습니다. 근처의 General Luna에서 ATM 서비스를 확인해야 할 수 있습니다.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 51,
        question: "Come arrivarci?",
        answer: "Prendi un volo per l'aeroporto di Siargao (IAO). Prendi un triciclo o un furgone per General Luna. Successivamente, prendi un altro triciclo o noleggia uno scooter per Cloud 9. Molte sistemazioni sono nelle vicinanze.",
        language: "italian",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 52,
        question: "Cosa dovrei aspettarmi per quanto riguarda il cibo?",
        answer: "Cloud 9 ha caffè da surf rilassati con piatti locali e internazionali, alcuni incentrati su opzioni salutari per i surfisti.",
        language: "italian",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 53,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Sii consapevole delle condizioni meteorologiche e dei rischi legati al surf, specialmente durante la stagione dei tifoni (giugno-novembre). Segui le linee guida locali e considera le lezioni se sei un principiante nel surf.",
        language: "italian",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 54,
        question: "Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 112 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 55,
        question: "C'è un bancomat a Cloud 9?",
        answer: "Cloud 9 potrebbe non avere il proprio bancomat. Potrebbe essere necessario controllare nella vicina città di General Luna per i servizi bancomat.",
        language: "italian",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 56,
        question: "どうやってそこに行けばいいですか？",
        answer: "スリガオ空港に行き、そこからバスに乗るか、車を借りてサンタモニカに向かいます。サンタモニカではトライシクルまたはハバルハバルを借りてタクタクの滝に向かいます。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 57,
        question: "食べ物については何を期待すればいいですか？",
        answer: "タクタクの滝には自分の食べ物や飲み物を持参してくださいが、地元の売り手もいるかもしれません",
        language: "japanese",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 58,
        question: "安全な状態はどうですか？",
        answer: "タクタクの滝で安全で楽しい経験をするためには、ガイドツアーを検討し、訪れる前に天気を確認し、泳ぐ際には注意が必要です。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 59,
        question: "医療の必要がある場合はどうすればいいですか？",
        answer: "緊急の場合は地元のスタッフに知らせ、911に電話し、近くの医療施設を確認してください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 60,
        question: "タクタクの滝にはATMがありますか？",
        answer: "タクタクの滝の近くにあるスリガオ・デル・ノルテ州のサンタモニカには、ATMが簡単に利用できないかもしれません。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 61,
        question: "Como chegar lá?",
        answer: "Chegue ao Aeroporto de Surigao e, em seguida, pegue um ônibus ou alugue um veículo para Santa Monica. Em Santa Monica, alugue um triciclo ou habal-habal para chegar às Cataratas de Taktak.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 62,
        question: "O que devo esperar em termos de comida?",
        answer: "Traga sua própria comida e bebidas para as Cataratas de Taktak, mas também pode haver vendedores locais.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 63,
        question: "Quais são as condições de segurança?",
        answer: "Para uma experiência segura e agradável nas Cataratas de Taktak, considere passeios guiados,verifique o clima antes da visita e seja cauteloso ao nadar.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 64,
        question: "O que devo fazer se precisar de atendimento médico?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 911 e saiba das instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 65,
        question: "Há um caixa eletrônico em Cloud 9?",
        answer: "Cloud 9 em si pode não ter seu próprio caixa eletrônico. Você pode precisar verificar na cidade vizinha de General Luna para serviços de caixa eletrônico.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 66,
        question: "Hvordan kommer jeg derhen?",
        answer: "Flyv til Siargao (IAO) lufthavn. Tag en trehjulet cykel eller varevogn til General Luna. Tag derefter en anden trehjulet cykel eller lej en scooter til Cloud 9. Mange overnatningsmuligheder er i nærheden.",
        language: "danish",
        question_number: 1,
        touristspot_number: 1
    },
    {
        id: 67,
        question: "Hvad kan jeg forvente af mad?",
        answer: "Cloud 9 har afslappede surfcaféer med lokale og internationale retter, nogle fokuserer på sunde muligheder for surfere.",
        language: "danish",
        question_number: 2,
        touristspot_number: 1
    },
    {
        id: 68,
        question: "Hvad er sikkerhedsforholdene?",
        answer: "Vær opmærksom på vejr- og surfrisici, især i tyfonsæsonen (juni-november). Følg lokale retningslinjer, og overvej lektioner, hvis du er en begyndersurfer.",
        language: "danish",
        question_number: 3,
        touristspot_number: 1
    },
    {
        id: 69,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I tilfælde af nødsituationer skal du informere det lokale personale, ringe 112 og kende til nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 1
    },
    {
        id: 70,
        question: "Er der en hæveautomat i Cloud 9?",
        answer: "Cloud 9 selv har måske ikke sin egen hæveautomat. Du skal muligvis tjekke i den nærliggende by General Luna for hæveautomatservice.",
        language: "danish",
        question_number: 5,
        touristspot_number: 1
    },
    {
        id: 71,
        question: "How do I get to Sohoton Cove?",
        answer: "From General Luna, travel to Dapa. Take a boat from Dapa to Sohoton Cove.",
        language: "english",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 72,
        question: "What can I expect for food?",
        answer: "Food options on your Sohoton Cove tour: picnic lunches, local cuisine, and snacks from vendors.",
        language: "english",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 73,
        question: "What are the safety conditions?",
        answer: "To ensure a safe trip to Sohoton Cove, choose reliable tours and wear life jackets for all water activities.",
        language: "english",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 74,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 75,
        question: "Is there an ATM in Sohoton Cove?",
        answer: "Sohoton Cove is a natural attraction, and there may not be ATMs in the immediate vicinity. It's recommended to withdraw cash in larger towns before heading to Sohoton Cove.",
        language: "english",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 76,
        question: " ¿Cómo llegar allí?",
        answer: "Desde General Luna, viaje a Dapa. Tome una barca desde Dapa hasta Sohoton Cove.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 77,
        question: " ¿Qué puedo esperar en cuanto a comida?",
        answer: "Opciones de comida en su tour por Sohoton Cove: almuerzos de picnic, cocina local y aperitivos de vendedores.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 78,
        question: " ¿Cuáles son las condiciones de seguridad?",
        answer: "Para asegurar un viaje seguro a Sohoton Cove, elija tours confiables y use chalecos salvavidas para todas las actividades acuáticas.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 79,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informe al personal local, llame al 911 y conozca las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 80,
        question: " ¿Hay un cajero automático en Sohoton Cove?",
        answer: "Sohoton Cove es una atracción natural y puede que no haya cajeros automáticos en las inmediaciones. Se recomienda retirar efectivo en ciudades más grandes antes de dirigirse a Sohoton Cove.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 81,
        question: " Wie komme ich dorthin?",
        answer: "Von General Luna aus reisen Sie nach Dapa. Nehmen Sie ein Boot von Dapa nach Sohoton Cove.",
        language: "german",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 82,
        question: " Was kann ich in Bezug auf Essen erwarten?",
        answer: "Essensmöglichkeiten während Ihrer Tour in Sohoton Cove: Picknick-Mittagessen, lokale Küche und Snacks von Verkäufern.",
        language: "german",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 83,
        question: " Wie sind die Sicherheitsbedingungen?",
        answer: "Um eine sichere Reise nach Sohoton Cove zu gewährleisten, wählen Sie zuverlässige Touren und tragen Sie für alle Wasseraktivitäten Schwimmwesten.",
        language: "german",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 84,
        question: "Was sollte ich tun, wenn ich medizinische Aufmerksamkeit benötige?",
        answer: "Im Notfall informieren Sie das örtliche Personal, rufen Sie die 911 an und kennen Sie nahegelegene medizinische Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 85,
        question: " Gibt es einen Geldautomaten in Sohoton Cove?",
        answer: "Sohoton Cove ist eine natürliche Attraktion, und es gibt möglicherweise keine Geldautomaten in unmittelbarer Nähe. Es wird empfohlen, Bargeld in größeren Städten abzuheben, bevor Sie nach Sohoton Cove fahren.",
        language: "german",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 86,
        question: " Comment s'y rendre ?",
        answer: "De General Luna, voyagez jusqu'à Dapa. Prenez un bateau de Dapa à Sohoton Cove.",
        language: "french",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 87,
        question: " À quoi dois-je m'attendre en matière de nourriture ?",
        answer: "Options alimentaires lors de votre tour à Sohoton Cove : déjeuners en plein air, cuisine locale et collations auprès des vendeurs.",
        language: "french",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 88,
        question: " Quelles sont les conditions de sécurité ?",
        answer: "Pour assurer un voyage sûr vers Sohoton Cove, choisissez des tours fiables et portez des gilets de sauvetage pour toutes les activités aquatiques.",
        language: "french",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 89,
        question: " Que dois-je faire si j'ai besoin d'attention médicale ?",
        answer: "En cas d'urgence, informez le personnel local, appelez le 911 et connaissez les installations médicales à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 90,
        question: " Y a-t-il un distributeur automatique de billets à Sohoton Cove ?",
        answer: "Sohoton Cove est une attraction naturelle, et il se peut qu'il n'y ait pas de distributeurs automatiques de billets à proximité immédiate. Il est recommandé de retirer de l'argent dans les grandes villes avant de se rendre à Sohoton Cove.",
        language: "french",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 91,
        question: "  איך להגיע לשם?",
        answer: "מג'נרל לונה, נסעו לדפה. קחו סירה מדפה לסוהוטון קוב.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 92,
        question: " מה לצפות מבחינת אוכל?",
        answer: "אפשרויות אוכל בסיור שלכם בסוהוטון קוב: ארוחות פיקניק, מטבח מקומי ונפנפים ממוכרים",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 93,
        question: "מהם תנאי הבטיחות?",
        answer: "כדי להבטיח טיול בטוח לסוהוטון קוב, בחרו בסיורים אמינים ולבשו כובעי צלילה לכל פעילות מים",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 94,
        question: "מה עלי לעשות אם אני זקוק לטיפול רפואי?",
        answer: "במקרה של חירום, יש להודיע לצוות מקומי, לקרוא ל-911 ולדעת על מתקנים רפואיים קרובים.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 95,
        question: " האם יש כספומט בסוהוטון קוב?",
        answer: "סוהוטון קוב היא אטרקציה טבעית, ויתכן שאין כספומטים בקרבת מקום. מומלץ למשוך מזומנים בערים גדולות לפני היכנס לסוהוטון קוב.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 96,
        question: "Hoe kom ik daar?",
        answer: "Vanuit General Luna reis je naar Dapa. Neem een boot van Dapa naar Sohoton Cove.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 97,
        question: " Wat kan ik verwachten qua eten?",
        answer: "Voedselopties tijdens je tour in Sohoton Cove: picknicklunches, lokale gerechten en snacks van verkopers.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 98,
        question: " Wat zijn de veiligheidsvoorwaarden?",
        answer: "Om een veilige reis naar Sohoton Cove te garanderen, kies betrouwbare tours en draag reddingsvesten voor alle wateractiviteiten.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 99,
        question: " Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 112 en ken de nabijgelegen medische voorzieningen.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 100,
        question: " Is er een geldautomaat in Sohoton Cove?",
        answer: "Sohoton Cove is een natuurlijke attractie en er kunnen geen geldautomaten in de directe omgeving zijn. Het wordt aanbevolen om contant geld op te nemen in grotere steden voordat je naar Sohoton Cove gaat.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 101,
        question: " 如何到达那里？",
        answer: "从General Luna出发，前往Dapa。从Dapa乘船到Sohoton Cove。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 102,
        question: " 关于食物，我应该期待什么？",
        answer: "在Sohoton Cove的旅行中的食物选择：野餐午餐，当地美食，以及从小贩处购买的小吃。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 103,
        question: " 安全条件是什么？",
        answer: "为确保前往Sohoton Cove的安全之旅，请选择可靠的旅行团，并在所有水上活动中穿着救生衣。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 104,
        question: " 如果我需要医疗帮助，我该怎么办？",
        answer: "在紧急情况下，通知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 105,
        question: " Sohoton Cove有自动取款机吗？",
        answer: "Sohoton Cove是一个自然景点，附近可能没有自动取款机。建议在前往Sohoton Cove之前在较大的城镇取款。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 106,
        question: " Hur kommer jag dit?",
        answer: "Från General Luna, res till Dapa. Ta en båt från Dapa till Sohoton Cove.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 107,
        question: " Vad kan jag förvänta mig när det gäller mat?",
        answer: "Matalternativ under din Sohoton Cove-tur: picnic-luncher, lokal mat och snacks från försäljare.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 108,
        question: " Vilka säkerhetsvillkor gäller?",
        answer: "För att säkerställa en säker resa till Sohoton Cove, välj pålitliga turer och bära flytvästar för alla vattenaktiviteter.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 109,
        question: " Vad ska jag göra om jag behöver medicinsk hjälp?",
        answer: "I nödsituationer, informera lokal personal, ring 112 och känna till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 110,
        question: " Finns det en bankomat i Sohoton Cove?",
        answer: "Sohoton Cove är en naturlig attraktion, och det kanske inte finns några bankomater i omedelbar närhet. Det rekommenderas att ta ut kontanter i större städer innan du åker till Sohoton Cove.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 111,
        question: "Как туда попасть?",
        answer: "Из Генерал Луны отправляйтесь в Дапу. Пересаживайтесь на лодку в Дапе и направляйтесь в залив Сохотон.",
        language: "russian",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 112,
        question: " Что стоит ожидать в плане питания?",
        answer: "Варианты питания во время тура в Сохотон Ков: пикник-ланчи, местная кухня и закуски от продавцов.",
        language: "russian",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 113,
        question: " Каковы условия безопасности?",
        answer: "Для обеспечения безопасности поездки в Сохотон Ков выбирайте надежные туры и носите спасательные жилеты для всех водных видов деятельности.",
        language: "russian",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 114,
        question: " Что делать, если мне нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, наберите 112 и узнайте о ближайших медицинских учреждениях.",
        language: "russian",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 115,
        question: " Есть ли банкомат в Сохотон Ков?",
        answer: "Сохотон Ков - это природная достопримечательность, и в непосредственной близости может не быть банкоматов. Рекомендуется снять деньги в крупных городах перед поездкой в Сохотон Ков.",
        language: "russian",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 116,
        question: "어떻게 가나요?",
        answer: "General Luna에서 Dapa로 이동하세요. Dapa에서 Sohoton Cove로 보트를 타세요.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 117,
        question: "음식은 무엇을 기대해야 하나요?",
        answer: "Sohoton Cove 투어 중 음식 옵션: 소풍 도시락, 현지 음식 및 판매업자에서 파는 간식.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 118,
        question: "안전 조건은 어떻게 되나요?",
        answer: "Sohoton Cove로 안전한 여행을 위해 신뢰할 수 있는 투어를 선택하고 모든 수상 활동에 대해 구명조끼를 착용하세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 119,
        question: "응급 시 의료 도움이 필요하면 어떻게 해야 하나요?",
        answer: "비상 시 현지 스태프에게 알리고 911에 전화하며 근처 의료 시설을 파악하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 120,
        question: "Sohoton Cove에 ATM이 있나요?",
        answer: "Sohoton Cove는 자연 경치지이며 근처에 ATM이 없을 수 있습니다. Sohoton Cove로 이동하기 전에 큰 도시에서 현금을 인출하는 것이 좋습니다.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 121,
        question: "Come arrivarci?",
        answer: "Da General Luna, viaggiare verso Dapa. Prendere una barca da Dapa a Sohoton Cove.",
        language: "italian",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 122,
        question: "Cosa posso aspettarmi per quanto riguarda il cibo?",
        answer: "Opzioni alimentari durante il tour a Sohoton Cove: pranzi a picnic, cucina locale e snack dai venditori.",
        language: "italian",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 123,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Per garantire un viaggio sicuro a Sohoton Cove, scegliere tour affidabili e indossare giubbotti di salvataggio per tutte le attività in acqua.",
        language: "italian",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 124,
        question: "Cosa fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informare il personale locale, chiamare il 112 e conoscere le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 125,
        question: "C'è un bancomat a Sohoton Cove?",
        answer: "Sohoton Cove è un'attrazione naturale, e potrebbe non esserci un bancomat nelle immediate vicinanze. Si consiglia di prelevare contanti nelle città più grandi prima di recarsi a Sohoton Cove.",
        language: "italian",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 126,
        question: "どのようにそこに行けますか？",
        answer: "General LunaからDapaへ移動し、DapaからSohoton Coveへボートに乗ります。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 127,
        question: "食事について何を期待すべきですか？",
        answer: "Sohoton Coveツアーの食事オプション：ピクニックランチ、地元の料理、および売り手からのスナック。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 128,
        question: "安全条件はどうですか？",
        answer: "Sohoton Coveへの安全な旅行を確保するために、信頼性のあるツアーを選び、水上活動すべてに救命胴衣を着用してください。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 129,
        question: "医療が必要な場合はどうすればよいですか？",
        answer: "緊急の場合は地元のスタッフに知らせ、911に電話し、近くの医療施設を把握してください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 130,
        question: "Sohoton CoveにATMはありますか？",
        answer: "Sohoton Coveは自然の名所であり、近くにATMがない可能性があります。Sohoton Coveに向かう前に大きな町で現金を引き出すことをお勧めします。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 131,
        question: "Como chegar lá?",
        answer: "De General Luna, viaje para Dapa. Pegue um barco de Dapa para Sohoton Cove.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 132,
        question: "O que posso esperar em termos de comida?",
        answer: "Opções de comida durante o seu passeio em Sohoton Cove: almoços de piquenique, culinária local e lanches de vendedores.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 133,
        question: "Quais são as condições de segurança?",
        answer: "Para garantir uma viagem segura para Sohoton Cove, escolha passeios confiáveis e use coletes salva-vidas para todas as atividades aquáticas.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 134,
        question: "O que devo fazer se precisar de atenção médica?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 911 e saiba onde ficam as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 135,
        question: "Existe um caixa eletrônico em Sohoton Cove?",
        answer: "Sohoton Cove é uma atração natural e pode não haver caixas eletrônicos nas proximidades imediatas. É recomendável sacar dinheiro em cidades maiores antes de ir para Sohoton Cove.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 136,
        question: "Hvordan kommer jeg derhen?",
        answer: "Fra General Luna, rejser du til Dapa. Tag en båd fra Dapa til Sohoton Cove.",
        language: "danish",
        question_number: 1,
        touristspot_number: 2
    },
    {
        id: 137,
        question: "Hvad kan jeg forvente med hensyn til mad?",
        answer: "Madmuligheder under din tur i Sohoton Cove: picnic-frokoster, lokal køkken og snacks fra sælgere.",
        language: "danish",
        question_number: 2,
        touristspot_number: 2
    },
    {
        id: 138,
        question: "Hvad er sikkerhedsforholdene?",
        answer: "For at sikre en sikker tur til Sohoton Cove skal du vælge pålidelige ture og bære redningsveste til alle vandaktiviteter.",
        language: "danish",
        question_number: 3,
        touristspot_number: 2
    },
    {
        id: 139,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I tilfælde af nødsituation skal du informere det lokale personale, ringe til 112 og kende til nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 2
    },
    {
        id: 140,
        question: "Er der en hæveautomat i Sohoton Cove?",
        answer: "Sohoton Cove er en naturskøn attraktion, og der kan muligvis ikke være hæveautomater i umiddelbar nærhed. Det anbefales at hæve kontanter i større byer, inden du tager til Sohoton Cove.",
        language: "danish",
        question_number: 5,
        touristspot_number: 2
    },
    {
        id: 141,
        question: "How to get there?",
        answer: "Fly to Siargao's Sayak Airport, then take a tricycle to General Luna. From there, hire a tricycle or motorcycle for a 40-45 minute ride to Magpupungko on bumpy roads.",
        language: "english",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 142,
        question: "What should I expect for food?",
        answer: "Near Magpupungko: simple Filipino dishes at local eateries/stalls or picnic lunches on tours.",
        language: "english",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 143,
        question: "What are the safety conditions?",
        answer: "Always check tide schedules and wear appropriate footwear when exploring Magpupungko's tidal pools. Consider joining guided tours for enhanced experience and safety. Be cautious of currents and swim in designated areas.",
        language: "english",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 144,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 145,
        question: "Is there an ATM in Magpupungko Rock Pools?",
        answer: "Magpupungko may not have ATMs on-site. The nearest town is Pilar, and you may find ATMs there.",
        language: "english",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 146,
        question: "¿Cómo llegar allí?",
        answer: "Vuela al Aeropuerto de Sayak en Siargao, luego toma un triciclo hacia General Luna. Desde allí, alquila un triciclo o una motocicleta para un trayecto de 40-45 minutos hasta Magpupungko por caminos irregulares.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 147,
        question: "¿Qué debo esperar en cuanto a la comida?",
        answer: "Cerca de Magpupungko: platos sencillos filipinos en locales o puestos locales, o almuerzos para llevar en las excursiones.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 148,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Siempre verifica los horarios de las mareas y usa calzado apropiado al explorar las piscinas de marea en Magpupungko. Considera unirte a tours guiados para una experiencia mejorada y segura. Ten precaución con las corrientes y nada en áreas designadas.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 149,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 150,
        question: "¿Hay un cajero automático en Magpupungko?",
        answer: "Magpupungko puede no tener cajeros automáticos en el lugar. El pueblo más cercano es Pilar, y ahí podrías encontrar cajeros automáticos.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 151,
        question: "Wie komme ich dorthin?",
        answer: "Fliege zum Flughafen Sayak auf Siargao und nehme dann ein Dreirad nach General Luna. Von dort aus miete ein Dreirad oder Motorrad für eine 40-45-minütige Fahrt nach Magpupungko auf holprigen Straßen.",
        language: "german",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 152,
        question: "Was kann ich in Bezug auf Essen erwarten?",
        answer: "In der Nähe von Magpupungko: einfache philippinische Gerichte in örtlichen Imbissen oder Picknick-Mittagessen bei Touren.",
        language: "german",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 153,
        question: "Wie sind die Sicherheitsbedingungen?",
        answer: "Überprüfe immer die Gezeitenpläne und trage geeignetes Schuhwerk beim Erkunden der Gezeitenbecken in Magpupungko. Erwäge, an geführten Touren teilzunehmen, um das Erlebnis zu verbessern und die Sicherheit zu gewährleisten. Sei vorsichtig mit Strömungen und schwimme in ausgewiesenen Bereichen.",
        language: "german",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 154,
        question: "Was soll ich tun, wenn ich medizinische Hilfe benötige?",
        answer: "Im Notfall informiere das örtliche Personal, rufe die 911 an und kenne die nahegelegenen medizinischen Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 155,
        question: "Gibt es einen Geldautomaten in Magpupungko?",
        answer: "Magpupungko hat möglicherweise keine Geldautomaten vor Ort. Die nächste Stadt ist Pilar, und dort könntest du Geldautomaten finden.",
        language: "german",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 156,
        question: "Comment s'y rendre ?",
        answer: "Prenez un vol pour l'aéroport de Sayak à Siargao, puis prenez un tricycle pour vous rendre à General Luna. De là, louez un tricycle ou une motocyclette pour un trajet de 40 à 45 minutes jusqu'à Magpupungko sur des routes cahoteuses.",
        language: "french",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 157,
        question: "À quoi dois-je m'attendre en matière de nourriture ?",
        answer: "Près de Magpupungko : plats philippins simples dans les petits restaurants locaux ou pique-niques lors des excursions.",
        language: "french",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 158,
        question: "Quelles sont les conditions de sécurité ?",
        answer: "Vérifiez toujours les horaires des marées et portez des chaussures appropriées lorsque vous explorez les bassins de marée à Magpupungko. Envisagez de rejoindre des visites guidées pour une expérience améliorée et plus sûre. Soyez prudent face aux courants et ne nagez que dans les zones désignées.",
        language: "french",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 159,
        question: "Que faire si j'ai besoin de soins médicaux ?",
        answer: "En cas d'urgence, informez le personnel local, composez le 911 et repérez les installations médicales à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 160,
        question: "Y a-t-il un distributeur automatique de billets à Magpupungko ?",
        answer: "Il se peut qu'il n'y ait pas de distributeurs automatiques de billets sur place à Magpupungko. La ville la plus proche est Pilar, où vous pourriez trouver des distributeurs automatiques de billets.",
        language: "french",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 161,
        question: "איך להגיע לשם?",
        answer: "טוס לנמל התעופה של סיארגאו בשם Sayak, ואז קח טריקולור לכיוון ג'נרל לונה. משם, השכר טריקולור או אופנוע לנסיעה של 40-45 דקות ל-Magpupungko דרך כבישים רעולים.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 162,
        question: "מה לצפות מבחינת אוכל?",
        answer: "ליד Magpupungko: מנות פיליפיניות פשוטות במסעדות/ירמות מקומיות או ארוחות פיקניק בסיורים.",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 163,
        question: "מהם התנאים בנוגע לבטיחות?",
        answer: "תמיד בדוק את לוחות המתיים ולבש נעליים מתאימות בזמן שאתה חוקר את בריכות המתיים ב-Magpupungko. שקול להצטרף לסיורים מודרכים לחוויה משופרת ובטיחות נוספת. הזהר מזרמים ושחייה באזורים המוקצים לכך.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 164,
        question: "מה לעשות אם אני זקוק לטיפול רפואי?",
        answer: "במקרה של חירום, דווח לצוות המקומי, התקשר ל-911, והכיר במתקני רפואה בקרבת מקום.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 165,
        question: "האם יש כספומט ב-Magpupungko?",
        answer: "יכול להיות שאין כספומטים ישירות ב-Magpupungko. העיר הקרובה בי ותר היא Pilar, ושם ייתכן שישנם כספומטים.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 166,
        question: "Hoe kom ik daar?",
        answer: "Vlieg naar de luchthaven van Sayak op Siargao, neem vervolgens een driewieler naar General Luna. Van daaruit huur je een driewieler of motor voor een rit van 40-45 minuten naar Magpupungko over hobbelige wegen.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 167,
        question: "Wat kan ik verwachten qua eten?",
        answer: "In de buurt van Magpupungko: eenvoudige Filipijnse gerechten in lokale eetgelegenheden of picknicklunches tijdens rondleidingen.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 168,
        question: "Wat zijn de veiligheidsomstandigheden?",
        answer: "Controleer altijd het getijdenrooster en draag geschikt schoeisel bij het verkennen van de getijdenpoelen in Magpupungko. Overweeg om deel te nemen aan begeleide tours voor een verbeterde ervaring en veiligheid. Wees voorzichtig met stromingen en zwem alleen in aangewezen gebieden.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 169,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911 en ken nabijgelegen medische voorzieningen.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 170,
        question: "Is er een geldautomaat in Magpupungko?",
        answer: "Magpupungko heeft mogelijk geen geldautomaten ter plaatse. De dichtstbijzijnde stad is Pilar, waar je mogelijk geldautomaten vindt.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 171,
        question: "如何到达那里？",
        answer: "乘飞机到达希亚高的Sayak机场，然后搭乘三轮车前往General Luna。从那里，租一辆三轮车或摩托车，沿着颠簸的道路行驶40-45分钟到达Magpupungko。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 172,
        question: "食物方面可以期待什么？",
        answer: "在Magpupungko附近：在当地小吃店或摊位品尝简单的菲律宾菜，或在旅行中享用野餐午餐。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 173,
        question: "安全状况如何？",
        answer: "探索Magpupungko的潮汐池时，始终检查潮汐时间表并穿合适的鞋子。考虑参加导游的活动以提高体验和安全性。要小心洋流，在指定区域游泳。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 174,
        question: "如果需要医疗帮助该怎么办？",
        answer: "在紧急情况下，通知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 175,
        question: "Magpupungko有自动取款机吗？",
        answer: "Magpupungko可能没有现场的自动取款机。最近的城镇是皮拉尔（Pilar），你可能会在那里找到自动取款机。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 176,
        question: "Hur kommer jag dit?",
        answer: "Flyg till Sayak Airport på Siargao, ta sedan en trehjuling till General Luna. Därifrån hyr du antingen en trehjuling eller en motorcykel för en 40-45 minuters resa till Magpupungko på ojämna vägar.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 177,
        question: "Vad kan jag förvänta mig när det gäller mat?",
        answer: "Nära Magpupungko: enkla filippinska rätter på lokala serveringar eller picknickluncher under turer.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 178,
        question: "Vilka säkerhetsförhållanden gäller?",
        answer: "Kontrollera alltid tidvattnets scheman och bära lämpliga skor när du utforskar Magpupungkos tidvattenpooler. Överväg att delta i guidade turer för en förbättrad upplevelse och säkerhet. Var försiktig med strömmar och simma endast i avsedda områden.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 179,
        question: "Vad ska jag göra om jag behöver medicinsk hjälp?",
        answer: "I händelse av nödsituation, informera lokal personal, ring 911 och känna till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 180,
        question: "Finns det en bankomat i Magpupungko?",
        answer: "Det kan hända att det inte finns några bankomater på plats i Magpupungko. Den närmaste staden är Pilar, där du kanske hittar bankomater.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 181,
        question: "Как туда добраться?",
        answer: "Летите в аэропорт Sayak на Сиаргао, затем берете трицикл до Дженерал Луна. Оттуда арендуйте трицикл или мотоцикл на 40-45 минутную поездку до Магпупунгко по грунтовым дорогам.",
        language: "russian",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 182,
        question: "Что стоит ожидать от еды?",
        answer: "В районе Магпупунгко: простые филиппинские блюда в местных закусочных или пикник-ланчи во время экскурсий.",
        language: "russian",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 183,
        question: "Каковы условия безопасности?",
        answer: "Всегда проверяйте графики приливов и носите подходящую обувь при исследовании приливных бассейнов в Магпупунко. Рассмотрите возможность присоединения к групповым экскурсиям для более безопасного опыта. Будьте осторожны с течениями и купайтесь только в обозначенных зонах.",
        language: "russian",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 184,
        question: "Что делать, если нужна медицинская помощь?",
        answer: "В случае экстренной ситуации сообщите местному персоналу, вызовите 911 и узнайте о ближайших медицинских учреждениях.",
        language: "russian",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 185,
        question: "Есть ли банкомат в Магпупунко?",
        answer: "Возможно, в Магпупунко нет банкоматов. Ближайший город - Пилар, где вы, возможно, найдете банкоматы.",
        language: "russian",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 186,
        question: "어떻게 가야 하나요?",
        answer: "시아르가오의 사야크 공항으로 비행한 다음 일반 루나로 이동하기 위해 트라이시클을 이용하세요. 거기서는 Magpupungko까지 40-45분간의 불안정한 도로를 이용하여 트라이시클이나 오토바이를 대여하세요.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 187,
        question: "음식은 어떤 것을 기대해야 하나요?",
        answer: "Magpupungko 근처에서: 현지 식당이나 투어 중 소형 피크닉을 위한 간단한 필리핀 요리를 즐길 수 있습니다.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 188,
        question: "안전 상태는 어떻게 되나요?",
        answer: "언제나 파도 일정을 확인하고 Magpupungko의 조조 풀을 탐험할 때 적절한 신발을 신으세요. 향상된 경험과 안전을 위해 가이드 투어에 참여하는 것을 고려하세요. 해류에 주의하고 지정된 지역에서만 수영하세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 189,
        question: "응급 상황 시 어떻게 해야 하나요?",
        answer: "비상 시 현지 스태프에게 알리고 911에 전화하며 근처 의료 시설을 파악하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 190,
        question: "Magpupungko에 ATM이 있나요?",
        answer: "Magpupungko에는 현장에 ATM이 없을 수 있습니다. 가장 가까운 마을은 필라르(Pilar)이며, 거기에서 ATM을 찾을 수 있을 것입니다.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 191,
        question: "Come arrivare là?",
        answer: "Volate all'Aeroporto di Sayak a Siargao, quindi prendete un triciclo per General Luna. Da lì, noleggiate un triciclo o una motocicletta per un viaggio di 40-45 minuti fino a Magpupungko su strade sconnesse.",
        language: "italian",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 192,
        question: "Cosa posso aspettarmi per quanto riguarda il cibo?",
        answer: "Vicino a Magpupungko: piatti filippini semplici in locali o picnic durante le escursioni.",
        language: "italian",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 193,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Controllate sempre i programmi delle maree e indossate calzature adeguate quando esplorate le piscine di marea a Magpupungko. Considerate di unirvi a tour guidati per un'esperienza migliorata e sicura. Fate attenzione alle correnti e nuotate solo nelle aree designate.",
        language: "italian",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 194,
        question: "Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informate il personale locale, chiamate il 911 e conoscete le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 195,
        question: "C'è un bancomat a Magpupungko?",
        answer: "Magpupungko potrebbe non avere bancomat in loco. La città più vicina è Pilar, dove potreste trovare bancomat.",
        language: "italian",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 196,
        question: "どのようにそこに行けますか？",
        answer: "シャルガオのサヤック空港まで飛行し、そこからジェネラル・ルナまでトライシクルで移動します。そこからは、舗装の悪い道路を使ってMagpupungkoまで40〜45分の旅行にトライシクルまたはバイクを借ります。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 197,
        question: "食事に関しては、何を期待すればよいですか？",
        answer: "Magpupungkoの近くでは、地元の飲食店でシンプルなフィリピン料理を楽しむか、ツアー中にピクニックランチを楽しむことができます。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 198,
        question: "安全な状態はどうですか？",
        answer: "いつも潮のスケジュールを確認し、Magpupungkoの干潮プールを探索する際には適切な履物を履いてください。より良い経験と安全性のためにガイドツアーに参加することを検討してください。流れに注意し、指定されたエリアでのみ泳いでください。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 199,
        question: "医療の援助が必要な場合、どうすればよいですか？",
        answer: "緊急の場合は、現地のスタッフに知らせ、911に電話し、近くの医療施設を把握してください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 200,
        question: "MagpupungkoにはATMがありますか？",
        answer: "Magpupungkoには現地にATMがないかもしれません。最寄りの町はピラールで、そこでATMを見つけることができるかもしれません。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 201,
        question: "Como chegar lá?",
        answer: "Voe para o Aeroporto de Sayak, em Siargao, e depois pegue um triciclo para General Luna. A partir daí, alugue um triciclo ou motocicleta para um trajeto de 40 a 45 minutos até Magpupungko por estradas irregulares.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 202,
        question: "O que esperar em termos de comida?",
        answer: "Próximo ao Magpupungko: pratos simples filipinos em lanchonetes locais ou piqueniques durante passeios.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 203,
        question: "Quais são as condições de segurança?",
        answer: "Sempre verifique os horários das marés e use calçados apropriados ao explorar as piscinas de maré em Magpupungko. Considere participar de passeios guiados para uma experiência aprimorada e segura. Esteja atento às correntezas e nade apenas em áreas designadas.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 204,
        question: "O que fazer se precisar de atendimento médico?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 911 e saiba onde estão as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 205,
        question: "Há um caixa eletrônico em Magpupungko?",
        answer: "Magpupungko pode não ter caixas eletrônicos no local. A cidade mais próxima é Pilar, onde você pode encontrar caixas eletrônicos.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 206,
        question: "Hvordan kommer jeg derhen?",
        answer: "Flyv til Sayak Lufthavn på Siargao, og tag derefter en trehjulet cykel til General Luna. Derfra kan du leje en trehjulet cykel eller motorcykel for en 40-45 minutters tur til Magpupungko ad bumpede veje.",
        language: "danish",
        question_number: 1,
        touristspot_number: 3
    },
    {
        id: 207,
        question: "Hvad kan jeg forvente af mad?",
        answer: "I nærheden af Magpupungko: enkle filippinske retter på lokale spisesteder eller picnic frokoster på ture.",
        language: "danish",
        question_number: 2,
        touristspot_number: 3
    },
    {
        id: 208,
        question: "Hvordan er sikkerhedsforholdene?",
        answer: "Tjek altid tidevandstabeller og bær passende fodtøj, når du udforsker Magpupungkos tidevandspoller. Overvej at deltage i guidede ture for en forbedret oplevelse og sikkerhed. Vær forsigtig med strømninger og svøm kun i angivne områder.",
        language: "danish",
        question_number: 3,
        touristspot_number: 3
    },
    {
        id: 209,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I tilfælde af nødsituation, informer det lokale personale, ring 911, og kend de nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 3
    },
    {
        id: 210,
        question: "Er der en hæveautomat i Magpupungko?",
        answer: "Magpupungko har muligvis ikke hæveautomater på stedet. Den nærmeste by er Pilar, hvor du måske kan finde hæveautomater.",
        language: "danish",
        question_number: 5,
        touristspot_number: 3
    },
    {
        id: 211,
        question: "How to get there?",
        answer: "Travel from General Luna to Del Carmen in Siargao. Take a tricycle, motorcycle, or other local transportation for about 30-45 minutes. Head to the port in Del Carmen and board a boat to Sugba Lagoon.",
        language: "english",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 212,
        question: "What should I expect for food?",
        answer: "Tour meals: local Filipino cuisine, picnic lunches, beachside dining.",
        language: "english",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 213,
        question: "What are the safety conditions?",
        answer: "Be aware of water depth and follow safety guidelines. Check weather forecasts and avoid visiting during storms.",
        language: "english",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 214,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 215,
        question: "Is there an ATM in Sugba Lagoon?",
        answer: "Sugba Lagoon is a remote area, and ATMs might not be available nearby. It's advisable to withdraw cash in larger towns before traveling to Sugba Lagoon.",
        language: "english",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 216,
        question: "¿Cómo llegar allí?",
        answer: "Viaja desde General Luna hasta Del Carmen en Siargao. Toma un triciclo, motocicleta u otro medio de transporte local durante unos 30-45 minutos. Dirígete al puerto en Del Carmen y aborda un bote hacia Sugba Lagoon.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 217,
        question: "¿Qué debo esperar en cuanto a la comida?",
        answer: "Comidas de tour: cocina local filipina, almuerzos de picnic, comidas junto a la playa.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 218,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Ten en cuenta la profundidad del agua y sigue las pautas de seguridad. Consulta los pronósticos del tiempo y evita visitar durante tormentas.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 219,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 220,
        question: "¿Hay un cajero automático en Sugba Lagoon?",
        answer: "Sugba Lagoon es una zona remota y es posible que no haya cajeros automáticos cercanos. Se recomienda retirar efectivo en pueblos más grandes antes de viajar a Sugba Lagoon.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 221,
        question: "Wie komme ich dorthin?",
        answer: "Reise von General Luna nach Del Carmen auf Siargao. Nehme ein Dreirad, Motorrad oder ein anderes lokales Verkehrsmittel für etwa 30-45 Minuten. Gehe zum Hafen in Del Carmen und steige in ein Boot nach Sugba Lagoon.",
        language: "german",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 222,
        question: "Was kann ich in Bezug auf Essen erwarten?",
        answer: "Tour-Mahlzeiten: lokale philippinische Küche, Picknick-Mittagessen, Essen am Strand.",
        language: "german",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 223,
        question: "Wie sind die Sicherheitsbedingungen?",
        answer: "Beachte die Wassertiefe und folge den Sicherheitsrichtlinien. Überprüfe die Wettervorhersagen und meide Besuche während Stürmen.",
        language: "german",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 224,
        question: "Was sollte ich tun, wenn ich medizinische Hilfe benötige?",
        answer: "Im Notfall informiere das örtliche Personal, rufe die 911 an und kenne die nahegelegenen medizinischen Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 225,
        question: "Gibt es einen Geldautomaten in Sugba Lagoon?",
        answer: "Sugba Lagoon ist eine abgelegene Gegend, und Geldautomaten sind möglicherweise nicht in der Nähe verfügbar. Es ist ratsam, Bargeld in größeren Städten abzuheben, bevor du nach Sugba Lagoon reist.",
        language: "german",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 226,
        question: "Comment s'y rendre ?",
        answer: "Voyagez de General Luna à Del Carmen à Siargao. Prenez un tricycle, une motocyclette ou un autre moyen de transport local pendant environ 30 à 45 minutes. Rendez-vous au port de Del Carmen et embarquez dans un bateau en direction de Sugba Lagoon.",
        language: "french",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 227,
        question: "À quoi dois-je m'attendre en termes de nourriture ?",
        answer: "Repas de la visite : cuisine locale philippine, déjeuners en pique-nique, repas en bord de mer.",
        language: "french",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 228,
        question: "Quelles sont les conditions de sécurité ?",
        answer: "Faites attention à la profondeur de l'eau et suivez les consignes de sécurité. Consultez les prévisions météorologiques et évitez de visiter pendant les tempêtes.",
        language: "french",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 229,
        question: "Que dois-je faire si j'ai besoin de soins médicaux ?",
        answer: "En cas d'urgence, informez le personnel local, composez le 911 et connaissez les installations médicales à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 230,
        question: "Y a-t-il un distributeur automatique de billets à Sugba Lagoon ?",
        answer: "Sugba Lagoon est une zone isolée, et les distributeurs automatiques de billets pourraient ne pas être disponibles à proximité. Il est conseillé de retirer de l'argent dans les grandes villes avant de se rendre à Sugba Lagoon.",
        language: "french",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 231,
        question: "איך להגיע שם?",
        answer: "נסע מג'נרל לונה אל דל כרמן בסיארגאו. קח טרייסיקל, אופנוע או תחבורה מקומית אחרת לכ-30-45 דקות. הגע לנמל בדל כרמן ושב לסוף על סירה לסאגבה לאגון.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 232,
        question: "מה לצפות לגבי האוכל?",
        answer: "ארוחות סיור: מטבח פיליפיני מקומי, ארוחות פיקניק, אוכל ליד החוף",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 233,
        question: "מהן תנאי הבטיחות?",
        answer: "היה יודע לעומק המים ועקוב אחר ההנחיות לבטיחות. בדוק תחזיות מזג האוויר והימנע מביקור בעת סערות.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 234,
        question: "מה לעשות אם נדרשת לי טיפול רפואי?",
        answer: "במקרה של חירום, דווח לצוות המקומי, התקשר ל-911 ודע על המתקנים הרפואיים הקרובים.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 235,
        question: "האם יש כספומט בסאגבה לאגון?",
        answer: "סאגבה לאגון הוא אזור נטוש ויתכן שאין כספומטים בקרבת מקום. מומלץ למשוך מזומנים בערים גדולות לפני הנסיעה אל סאגבה לאגון.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 236,
        question: "Hoe kom ik daar?",
        answer: "Reis van General Luna naar Del Carmen in Siargao. Neem een driewieler, motorfiets of ander lokaal vervoermiddel gedurende ongeveer 30-45 minuten. Ga naar de haven in Del Carmen en stap aan boord van een boot naar Sugba Lagoon.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 237,
        question: "Wat kan ik verwachten qua eten?",
        answer: "Tourmaaltijden: lokale Filipijnse keuken, picknicklunches, eten aan het strand.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 238,
        question: "Wat zijn de veiligheidscondities?",
        answer: "Let op de waterdiepte en volg de veiligheidsrichtlijnen. Controleer de weersverwachting en vermijd een bezoek tijdens stormen.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 239,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911 en ken de nabijgelegen medische voorzieningen.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 240,
        question: "Is er een geldautomaat in Sugba Lagoon?",
        answer: "Sugba Lagoon is een afgelegen gebied en geldautomaten zijn mogelijk niet in de buurt beschikbaar. Het is raadzaam om geld op te nemen in grotere steden voordat je naar Sugba Lagoon reist.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 241,
        question: "如何前往？",
        answer: "从General Luna前往Siargao的Del Carmen。乘坐三轮车、摩托车或其他当地交通工具，大约30-45分钟。前往Del Carmen的港口，然后搭乘船前往Sugba Lagoon。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 242,
        question: "食物方面有什么期望？",
        answer: "旅行餐食：当地菲律宾美食，野餐午餐，海滩用餐。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 243,
        question: "安全条件如何？",
        answer: "注意水深并遵循安全指南。查看天气预报，避免在风暴期间访问。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 244,
        question: "如果需要医疗帮助应该怎么办？",
        answer: "紧急情况下，请告知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 245,
        question: "Sugba Lagoon有自动取款机吗？",
        answer: "Sugba Lagoon是一个偏远地区，附近可能没有自动取款机。建议在前往Sugba Lagoon之前在较大的城镇提取现金。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 246,
        question: "Hur kommer jag dit?",
        answer: "Res från General Luna till Del Carmen på Siargao. Ta en trehjuling, motorcykel eller annat lokalt transportmedel i cirka 30-45 minuter. Gå till hamnen i Del Carmen och gå ombord på en båt till Sugba Lagoon.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 247,
        question: "Vad kan jag förvänta mig av maten?",
        answer: "Turmåltider: lokalt filippinsk mat, picknickluncher, mat intill stranden.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 248,
        question: "Vilka är säkerhetsförhållandena?",
        answer: "Var medveten om vattendjupet och följ säkerhetsriktlinjerna. Kolla väderprognosen och undvik att besöka under stormar.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 249,
        question: "Vad bör jag göra om jag behöver sjukvård?",
        answer: "Vid nödsituation, informera lokal personal, ring 112 och känn till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 250,
        question: "Finns det en bankomat i Sugba Lagoon?",
        answer: "Sugba Lagoon är ett avlägset område och bankomater kanske inte finns i närheten. Det är klokt att ta ut kontanter i större städer innan du reser till Sugba Lagoon.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 251,
        question: "Как туда добраться?",
        answer: "Путешествуйте из Генерал Луны в Дель Кармен на острове Сиаргао. Возьмите трицикл, мотоцикл или другое местное транспортное средство примерно на 30-45 минут. Пойдите к порту в Дель Кармене и садитесь на лодку до Сугба Лагун.",
        language: "russian",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 252,
        question: "Что ожидать в плане еды?",
        answer: "Питание на туре: местная филиппинская кухня, пикник-ланчи, ужины на пляже.",
        language: "russian",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 253,
        question: "Каковы условия безопасности?",
        answer: "Будьте внимательны к глубине воды и следуйте правилам безопасности. Проверьте прогноз погоды и избегайте посещения во время штормов.",
        language: "russian",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 254,
        question: "Что делать, если нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, наберите 911 и узнайте местонахождение ближайших медицинских учреждений.",
        language: "russian",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 255,
        question: "Есть ли банкомат в Сугба Лагун?",
        answer: "Сугба Лагун - отдаленный район, и банкоматы могут быть недоступны поблизости. Рекомендуется снять наличные в крупных городах перед поездкой в Сугба Лагун.",
        language: "russian",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 256,
        question: "1. 어떻게 가야 하나요?",
        answer: "시아르가오의 General Luna에서 Del Carmen으로 이동합니다. 삼륜차, 오토바이 또는 다른 지역 교통수단을 이용하여 약 30-45분 동안 이동합니다. Del Carmen의 항구로 이동하여 Sugba Lagoon으로 향하는 보트를 탑승하세요.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 257,
        question: "2. 음식은 무엇을 기대해야 하나요?",
        answer: "투어 식사: 현지 필리핀 요리, 소풍 도시락, 해변에서 식사.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 258,
        question: "3. 안전 조건은 어떻게 되나요?",
        answer: "수심을 주의하고 안전 지침을 따르세요. 날씨 예보를 확인하고 폭풍 중에 방문을 피하세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 259,
        question: "4. 응급 상황 시 어떻게 의료 도움을 받아야 하나요?",
        answer: "긴급 상황에서 현지 스태프에게 알리고 911로 전화하며 주변 의료 시설을 알아두세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 260,
        question: "5. Sugba Lagoon에 ATM이 있나요?",
        answer: "Sugba Lagoon은 외진 지역이므로 주변에 ATM이 없을 수 있습니다. Sugba Lagoon으로 이동하기 전에 큰 도시에서 현금을 인출하는 것이 좋습니다.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 261,
        question: "Come ci si arriva?",
        answer: "Viaggia da General Luna a Del Carmen a Siargao. Prendi un triciclo, una motocicletta o un altro mezzo di trasporto locale per circa 30-45 minuti. Vai al porto a Del Carmen e sali su una barca per raggiungere Sugba Lagoon.",
        language: "italian",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 262,
        question: "Cosa posso aspettarmi per quanto riguarda il cibo?",
        answer: "Pasti del tour: cucina locale filippina, pranzi al sacco, pasti sulla spiaggia.",
        language: "italian",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 263,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Fai attenzione alla profondità dell'acqua e segui le linee guida di sicurezza. Controlla le previsioni meteorologiche e evita di visitare durante le tempeste.",
        language: "italian",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 264,
        question: "Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 911 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 265,
        question: "C'è un bancomat a Sugba Lagoon?",
        answer: "Sugba Lagoon è una zona remota e potrebbe non esserci un bancomat nelle vicinanze. È consigliabile prelevare contanti nelle città più grandi prima di viaggiare a Sugba Lagoon.",
        language: "italian",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 266,
        question: "どのように行けばいいですか？",
        answer: "ジェネラル・ルナからシャルガオのデル・カルメンへ向かいます。三輪車、オートバイ、またはその他の地元の交通手段で約30〜45分かけて移動します。デル・カルメンの港に行き、Sugba Lagoonへのボートに乗ります。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 267,
        question: "食事にはどのようなものが期待できますか？",
        answer: "ツアーの食事：地元のフィリピン料理、ピクニックランチ、ビーチサイドでの食事。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 268,
        question: " 安全条件はどうですか？",
        answer: "水深に注意し、安全ガイドラインに従ってください。天気予報を確認し、嵐の際は訪れないようにしてください。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 269,
        question: " 医療が必要な場合はどうすればよいですか？",
        answer: "緊急の場合は現地のスタッフに知らせ、911に電話し、近くの医療施設を把握してください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 270,
        question: " Sugba LagoonにはATMがありますか？",
        answer: "Sugba Lagoonは辺鄙な地域で、近くにATMがない可能性があります。Sugba Lagoonへの旅行前に大きな町で現金を引き出すことをお勧めします。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 271,
        question: "Como chegar lá?",
        answer: "Viaje de General Luna para Del Carmen em Siargao. Pegue um triciclo, motocicleta ou outro meio de transporte local por cerca de 30 a 45 minutos. Vá para o porto em Del Carmen e embarque em um barco para Sugba Lagoon.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 272,
        question: "O que esperar em relação à comida?",
        answer: "Refeições do passeio: culinária local filipina, piqueniques, refeições à beira-mar.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 273,
        question: " Quais são as condições de segurança?",
        answer: " As condições de segurança incluem participar de passeios de ilha seguros e utilizar coletes salva-vidas para atividades aquáticas. Além disso, é recomendado usar calçados adequados para terrenos irregulares e seguir todas as instruções fornecidas pelos operadores locais. É essencial estar ciente das condições meteorológicas e das correntes marítimas ao participar de atividades aquáticas. Em caso de emergência, é importante informar imediatamente o pessoal local, ligar para o número de emergência local (como o 911) e estar ciente das instalações médicas próximas.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 274,
        question: "O que fazer se precisar de atendimento médico?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 911 e conheça as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 275,
        question: " Há um caixa eletrônico em Sugba Lagoon?",
        answer: "Sugba Lagoon é uma área remota, e caixas eletrônicos podem não estar disponíveis nas proximidades. É aconselhável sacar dinheiro em cidades maiores antes de viajar para Sugba Lagoon.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 276,
        question: " Hvordan kommer jeg derhen?",
        answer: "Rejs fra General Luna til Del Carmen på Siargao. Tag en trehjulet cykel, motorcykel eller anden lokaltransport i cirka 30-45 minutter.Gå til havnen i Del Carmen og gå ombord på en båd til Sugba Lagoon.",
        language: "danish",
        question_number: 1,
        touristspot_number: 4
    },
    {
        id: 277,
        question: " Hvad kan jeg forvente med hensyn til mad?",
        answer: "Turmåltider: lokal filippinsk køkken, picnic frokoster, spisning ved stranden.",
        language: "danish",
        question_number: 2,
        touristspot_number: 4
    },
    {
        id: 278,
        question: " Hvad er sikkerhedsforholdene?",
        answer: "Vær opmærksom på vanddybden og følg sikkerhedsretningslinjerne. Tjek vejrprognoserne og undgå besøg under storme.",
        language: "danish",
        question_number: 3,
        touristspot_number: 4
    },
    {
        id: 279,
        question: " Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I tilfælde af nødsituation, informer det lokale personale, ring 112 og kendskab til nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 4
    },
    {
        id: 280,
        question: " Er der en hæveautomat i Sugba Lagoon?",
        answer: "Sugba Lagoon er et afsidesliggende område, og hæveautomater er muligvis ikke tilgængelige i nærheden. Det anbefales at hæve kontanter i større byer, før du rejser til Sugba Lagoon.",
        language: "danish",
        question_number: 5,
        touristspot_number: 4
    },
    {
        id: 281,
        question: "How to get there?",
        answer: "Fly to Siargao, then take a tricycle or other local transport to General Luna. Find a boat operator on the beach and book an island hopping tour to Guyam.",
        language: "english",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 282,
        question: " What should I expect for food?",
        answer: "Island-hopping tours offer Filipino cuisine: seafood, adobo, fruits, and rice. Menu varies by operator ",
        language: "english",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 283,
        question: " What are the safety conditions?",
        answer: "Join safe island-hopping tours and wear life jackets for water activities. Wear appropriate footwear for uneven terrain.",
        language: "english",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 284,
        question: " What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 285,
        question: " Is there an ATM in Guyam Island?",
        answer: "ATMs are unlikely to be present. Consider withdrawing cash in General Luna or other larger towns.",
        language: "english",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 286,
        question: " ¿Cómo llegar allí?",
        answer: "Vuela a Siargao, luego toma un triciclo u otro transporte local a General Luna. Encuentra un operador de botes en la playa y reserva un tour de isla hopping a Guyam.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 287,
        question: " ¿Qué debo esperar en cuanto a la comida?",
        answer: "Los tours de isla hopping ofrecen cocina filipina: mariscos, adobo, frutas y arroz. El menú varía según el operador.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 288,
        question: " ¿Cuáles son las condiciones de seguridad?",
        answer: "Únete a tours seguros de isla hopping y usa chalecos salvavidas para actividades acuáticas. Usa calzado apropiado para terrenos irregulares.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 289,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 290,
        question: "¿Hay un cajero automático en la Isla Guyam?",
        answer: "Es poco probable que haya cajeros automáticos. Considera retirar efectivo en General Luna u otras ciudades más grandes.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 291,
        question: " Wie komme ich dorthin?",
        answer: "Fliege nach Siargao und nimm dann einen Dreirad oder einen anderen lokalen Transport nach General Luna. Finde einen Bootsoperator am Strand und buche eine Inselhüpfen-Tour nach Guyam.",
        language: "german",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 292,
        question: " Was kann ich in Bezug auf Essen erwarten?",
        answer: "Inselhüpfen-Touren bieten philippinische Küche an: Meeresfrüchte, Adobo, Obst und Reis. Das Menü variiert je nach Anbieter.",
        language: "german",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 293,
        question: " Wie sind die Sicherheitsbedingungen?",
        answer: "Nimm an sicheren Inselhüpfen-Touren teil und trage Rettungswesten für Wasseraktivitäten. Trage geeignetes Schuhwerk für unebenes Gelände.",
        language: "german",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 294,
        question: " Was soll ich tun, wenn ich medizinische Hilfe benötige?",
        answer: "Im Notfall informiere das lokale Personal, rufe die 911 an und kenne die nahegelegenen medizinischen Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 295,
        question: " Gibt es einen Geldautomaten auf der Guyam-Insel?",
        answer: "Geldautomaten sind wahrscheinlich nicht vorhanden. Erwäge, Bargeld in General Luna oder anderen größeren Städten abzuheben.",
        language: "german",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 296,
        question: " Comment y arriver ?",
        answer: "Prenez un vol pour Siargao, puis prenez un tricycle ou un autre moyen de transport local pour vous rendre à General Luna. Trouvez un opérateur de bateau sur la plage et réservez une excursion en bateau vers Guyam.",
        language: "french",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 297,
        question: " À quoi dois-je m'attendre en termes de nourriture ?",
        answer: "Les excursions d'île en île proposent une cuisine philippine : fruits de mer, adobo, fruits et riz. Le menu varie en fonction de l'opérateur.",
        language: "french",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 298,
        question: " Quelles sont les conditions de sécurité ?",
        answer: "Participez à des excursions en bateau sécurisées et portez des gilets de sauvetage pour les activités aquatiques. Portez des chaussures appropriées pour les terrains irréguliers.",
        language: "french",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 299,
        question: " Que dois-je faire si j'ai besoin d'une attention médicale ?",
        answer: "En cas d'urgence, informez le personnel local, composez le 911 et repérez les installations médicales à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 300,
        question: " Y a-t-il un distributeur automatique de billets sur l'île de Guyam ?",
        answer: "Il est peu probable qu'il y ait des distributeurs automatiques de billets. Envisagez de retirer de l'argent à General Luna ou dans d'autres grandes villes.",
        language: "french",
       
    
     question_number: 5,
        touristspot_number: 5
    },
    {
        id: 301,
        question: " איך להגיע לשם?",
        answer: "טס לסיארגאו, ואז קח טריקיל או תחבורה מקומית אחרת לג'נרל לונה. מצא אופרטור סירה על החוף והזמן סיור סיור בים לגיאאם.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 302,
        question: " מה לצפות לגבי האוכל?",
        answer: "סיורי חופשה באי מציעים מטבח פיליפיני: דגים ופירות ים, אדובו, פירות ואורז. התפריט ישתנה על פי האופרטור.",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 303,
        question: " מהם תנאי הבטיחות?",
        answer: "הצטרף לסיורי סיור באי בטוחים ולבש כיסוי חילוץ לפעילויות מים. לבש נעליים מתאימות לשטחים לא שטוחים.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 304,
        question: " מה לעשות אם נדרשת לי תשומת לב רפואית?",
        answer: "במקרה של חירום, דווח לצוות מקומי, התקשר ל-911 ומצא מתקופסות רפואיות בקרבת מקום.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 305,
        question: " האם ישנם כספומטים באי גיאאם?",
        answer: "כנראה שאין כספומטים. שקול למשוך מזומן בג'נרל לונה או בערים גדולות אחרות.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 306,
        question: "Hoe kom ik daar?",
        answer: "Vlieg naar Siargao, neem dan een driewieler of ander lokaal vervoer naar General Luna. Zoek een bootexploitant op het strand en boek een eilandhop-tour naar Guyam.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 307,
        question: "Wat kan ik verwachten qua eten?",
        answer: "Eilandhop-tours bieden Filipijnse gerechten aan: zeevruchten, adobo, fruit en rijst. Het menu varieert per exploitant.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 308,
        question: "Wat zijn de veiligheidsvoorwaarden?",
        answer: "Neem deel aan veilige eilandhop-tours en draag reddingsvesten voor wateractiviteiten. Draag geschikt schoeisel voor ongelijk terrein.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 309,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911 en ken de nabijgelegen medische voorzieningen.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 310,
        question: "Is er een geldautomaat op Guyam Island?",
        answer: "Waarschijnlijk zijn er geen geldautomaten. Overweeg contant geld op te nemen in General Luna of andere grotere steden.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 311,
        question: "如何到达那里？",
        answer: "飞往帛琉，然后乘坐三轮车或其他当地交通工具前往General Luna。在海滩上找到一个船运营商并预订到Guyam的环岛游。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 312,
        question: "关于食物，我应该期待什么？",
        answer: "环岛游提供菲律宾美食：海鲜、阿多博、水果和米饭。菜单因运营商而异。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 313,
        question: "安全条件如何？",
        answer: "参加安全的环岛游并在水上活动中穿救生衣。穿合适的鞋子以适应不平坦的地形。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 314,
        question: "如果我需要医疗帮助，我该怎么办？",
        answer: "在紧急情况下，告知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 315,
        question: "Guyam Island上是否有自动取款机？",
        answer: "自动取款机可能不存在。考虑在General Luna或其他较大城镇取现金。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 316,
        question: "Hur tar jag mig dit?",
        answer: "Flyg till Siargao, ta sedan en trehjuling eller annat lokalt transportmedel till General Luna. Hitta en båtoperatör på stranden och boka en ö-hopptur till Guyam.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 317,
        question: "Vad kan jag förvänta mig när det gäller mat?",
        answer: "Ö-hoppturer erbjuder filippinsk mat: skaldjur, adobo, frukt och ris. Menyn varierar beroende på operatören.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 318,
        question: "Vilka säkerhetsförhållanden gäller?",
        answer: "Delta i säkra ö-hoppturer och bära flytvästar för vattenaktiviteter. Använd lämpligt skodon för ojämn terräng.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 319,
        question: "Vad bör jag göra om jag behöver sjukvård?",
        answer: "I händelse av nödsituation, informera lokal personal, ring 911 och känna till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 320,
        question: "Finns det en bankomat på Guyam Island?",
        answer: "Bankomater är osannolika att finnas. Överväg att ta ut kontanter i General Luna eller andra större städer.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 321,
        question: "Как туда добраться?",
        answer: "Летите в Сиаргао, затем возьмите трицикл или другой местный транспорт до Генерал Луна. Найдите оператора лодок на пляже и забронируйте тур по островам до Гаяма.",
        language: "russian",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 322,
        question: "Что я могу ожидать в плане еды?",
        answer: "Туры по островам предлагают филиппинскую кухню: морепродукты, адобо, фрукты и рис. Меню разнится в зависимости от оператора.",
        language: "russian",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 323,
        question: "Каковы условия безопасности?",
        answer: "Присоединяйтесь к безопасным турам по островам и носите спасательные жилеты для водных активностей. Обувайтесь подходящей обувью для неровной местности.",
        language: "russian",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 324,
        question: "Что делать, если мне нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, позвоните по номеру 911 и узнайте ближайшие медицинские учреждения.",
        language: "russian",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 325,
        question: "Есть ли банкомат на острове Гаям?",
        answer: "Вероятно, банкоматов не будет. Рассмотрите возможность снятия наличных в Генерал Луне или других крупных городах.",
        language: "russian",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 326,
        question: "어떻게 거기에 가나요?",
        answer: "시아르가오로 비행한 다음, 삼륜자거나 다른 현지 교통수단을 이용하여 제너럴 루나로 이동합니다. 해변에서 보트 운영자를 찾아 가이암으로의 아일랜드 항해 투어를 예약하세요.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 327,
        question: "음식은 어떻게 되나요?",
        answer: "아일랜드 항해 투어에서는 필리핀 요리를 즐길 수 있습니다. 해산물, 아도보, 과일 및 밥이 포함된 다양한 메뉴가 제공됩니다. 운영자에 따라 다를 수 있습니다.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 328,
        question: "안전 조건은 어떻게 되나요?",
        answer: "안전한 아일랜드 항해 투어에 참여하고 수상 활동에는 구명조끼를 착용하세요. 평평하지 않은 지형에 적합한 신발을 신어주세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 329,
        question: "응급 상황 시 어떻게 의료 지원을 받나요?",
        answer: "긴급 상황에서는 현지 스태프에게 알리고 911에 전화하여 근처 의료 시설을 확인하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 330,
        question: "가이암 섬에 ATM이 있나요?",
        answer: "ATM이 존재할 가능성은 낮습니다. 제너럴 루나나 다른 큰 도시에서 현금을 인출하는 것을 고려하세요.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 331,
        question: "Come arrivare là?",
        answer: "Vola a Siargao, poi prendi un triciclo o un altro mezzo di trasporto locale per arrivare a General Luna. Trova un operatore di barche sulla spiaggia e prenota un tour di island hopping per Guyam.",
        language: "italian",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 332,
        question: "Cosa posso aspettarmi per quanto riguarda il cibo?",
        answer: "I tour di island hopping offrono cucina filippina: frutti di mare, adobo, frutta e riso. Il menu varia a seconda dell'operatore.",
        language: "italian",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 333,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Partecipa a tour di island hopping sicuri e indossa giubbotti di salvataggio per le attività in acqua. Indossa calzature adeguate per terreni irregolari.",
        language: "italian",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 334,
        question: "Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 911 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 335,
        question: "C'è un bancomat a Guyam Island?",
        answer: "È improbabile che ci siano bancomat. Valuta di prelevare contanti a General Luna o in altre città più grandi.",
        language: "italian",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 336,
        question: "どうやってそこに行けますか？",
        answer: "シャルガオに飛行して、次に三輪車や他の地元の交通手段でジェネラル・ルナに移動します。ビーチでボートのオペレーターを見つけ、ギャムへのアイランドホッピングツアーを予約してください。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 337,
        question: "食事はどうなりますか？",
        answer: "アイランドホッピングツアーではフィリピン料理が提供されます。シーフード、アドボ、フルーツ、ご飯が含まれるメニューが異なる運営者によって提供されます。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 338,
        question: "安全条件はどうですか？",
        answer: "安全なアイランドホッピングツアーに参加し、水上アクティビティには救命胴衣を着用してください。起伏のある地形に適した靴を履いてください。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 339,
        question: "医療の必要がある場合、どうすればいいですか？",
        answer: "緊急の場合は地元のスタッフに知らせ、911に電話して近くの医療施設を確認してください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 340,
        question: "ガイアム島にはATMがありますか？",
        answer: "ATMが存在する可能性は低いです。ジェネラル・ルナや他の大きな都市で現金を引き出すことを検討してください。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 341,
        question: "Como chegar lá?",
        answer: "Voar para Siargao e, em seguida, pegar um triciclo ou outro meio de transporte local para General Luna. Encontrar um operador de barco na praia e reservar um passeio de ilha até Guyam.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 342,
        question: "O que esperar em termos de comida?",
        answer: "Os passeios de ilha oferecem culinária filipina: frutos do mar, adobo, frutas e arroz. O menu varia conforme o operador.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 343,
        question: "Quais são as condições de segurança?",
        answer: "Participar de passeios de ilha seguros e usar coletes salva-vidas para atividades aquáticas. Use calçados apropriados para terrenos irregulares.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 344,
        question: "O que fazer se precisar de atendimento médico?",
        answer: "Em caso de emergência, informar a equipe local, ligar para o 911 e conhecer as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 345,
        question: "Existe um caixa eletrônico na Ilha Guyam?",
        answer: "Caixas eletrônicos são improváveis de estar presentes. Considere sacar dinheiro em General Luna ou em outras cidades maiores.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 346,
        question: "Hvordan kommer jeg derhen?",
        answer: "Flyv til Siargao og tag derefter en trehjulet cykel ellerandet lokalt transportmiddel til General Luna. Find en bådoperatør på stranden og book en ø-hop-tur til Guyam",
        language: "danish",
        question_number: 1,
        touristspot_number: 5
    },
    {
        id: 347,
        question: "Hvad kan jeg forvente med hensyn til mad?",
        answer: "Ø-hop-ture tilbyder filippinsk mad: skaldyr, adobo, frugt og ris. Menuen varierer afhængigt af operatøren.",
        language: "danish",
        question_number: 2,
        touristspot_number: 5
    },
    {
        id: 348,
        question: "Hvad er sikkerhedsforholdene?",
        answer: "Deltag i sikre ø-hop-ture og bær redningsveste til vandaktiviteter. Brug passende fodtøj til ujævnt terræn.",
        language: "danish",
        question_number: 3,
        touristspot_number: 5
    },
    {
        id: 349,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I nødstilfælde informer det lokale personale, ring til 112 og kend de nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 5
    },
    {
        id: 350,
        question: "Er der en hæveautomat på Guyam Island?",
        answer: "Det er usandsynligt, at der er hæveautomater. Overvej at hæve kontanter i General Luna eller andre større byer.",
        language: "danish",
        question_number: 5,
        touristspot_number: 5
    },
    {
        id: 351,
        question: "How to get there?",
        answer: "Fly to Siargao Airport and take a tricycle or other local transportation to General Luna. Find a boat operator on the beach and book an island hopping tour to Daku Island.",
        language: "english",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 352,
        question: "What should I expect for food?",
        answer: "Daku Island locals might sell refreshing coconut water to complement your meal, often featuring fresh seafood like grilled fish and squid.",
        language: "english",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 353,
        question: "What are the safety conditions?",
        answer: "Stay safe: Join guided tours, wear life jackets on water, and wear proper shoes on rough terrain.",
        language: "english",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 354,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 355,
        question: "Is there an ATM in Daku Island?",
        answer: "ATMs are unlikely to be present. Consider withdrawing cash in General Luna or other larger towns.",
        language: "english",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 356,
        question: "¿Cómo llegar allí?",
        answer: "Vuela al Aeropuerto de Siargao y toma un triciclo u otro transporte local hacia General Luna. Encuentra a un operador de botes en la playa y reserva un recorrido por las islas hacia Daku Island.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 357,
        question: "¿Qué debo esperar en cuanto a la comida?",
        answer: "Los lugareños de Daku Island pueden vender agua de coco refrescante para complementar tu comida, que a menudo incluye mariscos frescos como pescado a la parrilla y calamares.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 358,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Mantente a salvo: Únete a recorridos guiados, usa chaleco salvavidas en el agua y lleva zapatos adecuados en terrenos accidentados.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 359,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 360,
        question: "¿Hay un cajero automático en Daku Island?",
        answer: "Es poco probable que haya cajeros automáticos. Considera retirar efectivo en General Luna u otras ciudades más grandes.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 361,
        question: "¿Cómo llegar allí?",
        answer: "Fliege zum Flughafen Siargao und nimm einen Tricycle oder ein anderes lokales Verkehrsmittel nach General Luna. Finde einen Bootsbediener am Strand und buche eine Inselhüpfentour zur Daku Island.",
        language: "german",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 362,
        question: "¿Qué debo esperar en cuanto a la comida?",
        answer: "Die Einheimischen von Daku Island verkaufen möglicherweise erfrischendes Kokosnusswasser als Begleitung zu deiner Mahlzeit, oft mit frischen Meeresfrüchten wie gegrilltem Fisch und Tintenfisch.",
        language: "german",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 363,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Bleibe sicher: Nimm an geführten Touren teil, trage Rettungswesten auf dem Wasser und trage geeignete Schuhe auf unebenem Gelände.",
        language: "german",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 364,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "Im Notfall informiere das örtliche Personal, rufe die 911 an und kenne die nahegelegenen medizinischen Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 365,
        question: "¿Hay un cajero automático en Daku Island?",
        answer: "Geldautomaten sind wahrscheinlich nicht vorhanden. Erwäge das Abheben von Bargeld in General Luna oder anderen größeren Städten.",
        language: "german",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 366,
        question: "¿Cómo llegar allí?",
        answer: "Prenez un vol pour l'aéroport de Siargao et prenez un tricycle ou un autre moyen de transport local jusqu'à General Luna. Trouvez un opérateur de bateau sur la plage et réservez une excursion en bateau vers l'île de Daku.",
        language: "french",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 367,
        question: "¿Qué debo esperar en cuanto a la comida?",
        answer: "Les habitants de l'île de Daku peuvent vendre de l'eau de coco rafraîchissante pour accompagner votre repas, souvent composé de fruits de mer frais tels que du poisson grillé et des calmars.",
        language: "french",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 368,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Restez en sécurité : participez à des visites guidées, portez un gilet de sauvetage dans l'eau et portez des chaussures appropriées sur un terrain accidenté.",
        language: "french",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 369,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En cas d'urgence, informez le personnel local, appelez le 911 et connaissez les installations médicales à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 370,
        question: "¿Hay un cajero automático en Daku Island?",
        answer: "Il est peu probable qu'il y ait des distributeurs automatiques de billets. Envisagez de retirer de l'argent liquide à General Luna ou dans d'autres grandes villes.",
        language: "french",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 371,
        question: "איך להגיע לשם?",
        answer: "עף לשדה התעופה של סיארגאו ונסע בטריקיל או תחבורה מקומית אחרת אל ג'נרל לונה. יש למצוא מפעיל סירה על החוף ולהזמין סיור אי השטפון אל אי דקו.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 372,
        question: "מה לצפות לגבי אוכל?",
        answer: "תושבי אי דקו עשויים למכור מים קוקוס מרענן להשלמת הארוחה שלך, כאשר נפלאות כמו דג מגורר וקלמארים טריים יכולים להופיע במנה.",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 373,
        question: "מהן תנאי הבטיחות?",
        answer: "לשמור על בטיחות: להצטרף לסיורים מודרכים, ללבוש חגורות הצלה במים וללבוש נעליים מתאימות על קרקע קשה.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 374,
        question: "מה לעשות אם נדרשת לי טיפול רפואי?",
        answer: "במקרה של חירום, להודיע לצוות המקומי, לקרוא ל-911 ולדעת על מתקנים רפואיים קרובים.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 375,
        question: "האם ישנה מכונת כסף באי דקו?",
        answer: "יתכן כי אין מכונות כסף. שקול למשוך מזומן בג'נרל לונה או בערים גדולות נוספות.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 376,
        question: "Hoe kom ik daar?",
        answer: "Vlieg naar de luchthaven van Siargao en neem een tricycle of ander lokaal vervoer naar General Luna. Zoek een bootexploitant op het strand en boek een eilandhoppende tour naar Daku Island.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 377,
        question: "Wat kan ik verwachten qua eten?",
        answer: "Bewoners van Daku Island verkopen mogelijk verfrissend kokoswater om je maaltijd aan te vullen, vaak met verse zeevruchten zoals gegrilde vis en inktvis.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 378,
        question: "Wat zijn de veiligheidsomstandigheden?",
        answer: "Blijf veilig: neem deel aan begeleide tours, draag reddingsvesten op het water en draag geschikte schoenen op ruw terrein.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 379,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911 en ken de nabijgelegen medische voorzieningen.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 380,
        question: "Is er een geldautomaat op Daku Island?",
        answer: "Geldautomaten zijn waarschijnlijk niet aanwezig. Overweeg geld op te nemen in General Luna of andere grotere steden.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 381,
        question: "如何到达那里？",
        answer: "乘飞机抵达Siargao机场，然后搭乘三轮车或其他本地交通工具前往General Luna。在海滩上找到一位船舶经营者并预订前往Daku Island的环岛游。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 382,
        question: "关于食物，我应该期望什么？",
        answer: "Daku Island的当地居民可能会售卖清爽的椰子水，作为你餐点的搭配，通常会有新鲜的海鲜，如烤鱼和鱿鱼。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 383,
        question: "安全条件如何？",
        answer: "保持安全：参加导游团，水上穿救生衣，崎岖地带穿适当的鞋子。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 384,
        question: "如果我需要医疗帮助，该怎么办？",
        answer: "在紧急情况下，告知当地工作人员，拨打911，了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 385,
        question: "Daku Island上是否有自动取款机？",
        answer: "自动取款机可能不太常见。考虑在General Luna或其他较大城镇提取现金。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 386,
        question: "Hur kommer jag dit?",
        answer: "Flyg till Siargao Airport och ta en tricycle eller annat lokalt transportmedel till General Luna. Hitta en båtoperatör på stranden och boka en ö-hopptur till Daku Island.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 387,
        question: "Vad kan jag förvänta mig när det gäller mat?",
        answer: "Invånarna på Daku Island kan sälja uppfriskande kokosvatten för att komplettera din måltid, ofta med färskt skaldjur som grillad fisk och bläckfisk.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 388,
        question: "Vilka är säkerhetsvillkoren?",
        answer: "Håll dig säker: Delta i guidade turer, använd flytväst på vattnet och bära lämpliga skor på ojämnt terräng.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 389,
        question: "Vad bör jag göra om jag behöver medicinsk hjälp?",
        answer: "I nödsituation, informera lokal personal, ring 911 och känna till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 390,
        question: "Finns det en bankomat på Daku Island?",
        answer: "Bankomater är osannolika. Överväg att ta ut kontanter i General Luna eller andra större städer.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 391,
        question: "Как туда попасть?",
        answer: "Летите в аэропорт Сиаргао и возьмите трицикл или другое местное транспортное средство до Генерал Луна. Найдите оператора лодки на пляже и заказывайте тур по островам на остров Даку.",
        language: "russian",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 392,
        question: "Что я должен ожидать относительно еды?",
        answer: "Местные жители острова Даку могут продавать освежающую кокосовую воду в дополнение к вашему приему пищи, часто с свежими морепродуктами, такими как жареная рыба и кальмар.",
        language: "russian",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 393,
        question: "Каковы условия безопасности?",
        answer: "Оставайтесь в безопасности: присоединяйтесь к групповым экскурсиям, надевайте спасательные жилеты в воде и обувайтесь правильной обувью на неровной местности.",
        language: "russian",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 394,
        question: "Что мне делать, если мне нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, вызовите 911 и узнайте о близлежащих медицинских учреждениях.",
        language: "russian",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 395,
        question: "Есть ли банкомат на острове Даку?",
        answer: "Банкоматов, вероятно, не будет. Рассмотрите возможность снятия наличных в Генерал Луне или других крупных городах.",
        language: "russian",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 396,
        question: "어떻게 가야 하나요?",
        answer: "시아르가오 공항으로 비행한 다음, 트라이시클이나 다른 현지 교통수단으로 제너럴 루나까지 이동합니다. 해변에서 보트 운영자를 찾아서 다쿠 섬으로의 섬 여행 투어를 예약하세요.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 397,
        question: "음식에 대해서 어떤 기대를 해야 하나요?",
        answer: "다쿠 섬 주민들은 신선한 해산물인 구운 생선과 오징어를 포함한 식사를 동반할 상큼한 코코넛 물을 팔 수 있습니다.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 398,
        question: "안전 상태는 어떤가요?",
        answer: "안전을 유지하세요: 가이드 투어에 참가하고, 물 위에서 구명조끼를 착용하며, 울퉁불퉁한 지형에서는 적절한 신발을 신으세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 399,
        question: "응급 상황 시 어떻게 의료 도움을 받을 수 있나요?",
        answer: "긴급한 경우 현지 직원에게 알리고 911에 전화하고 근처 의료 시설을 파악하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 400,
        question: "다쿠 섬에 ATM이 있나요?",
        answer: "ATM이 존재할 가능성이 낮습니다. 제너럴 루나나 다른 큰 도시에서 현금을 인출하는 것을 고려하세요.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 401,
        question: "Come arrivarci?",
        answer: "Vola all'aeroporto di Siargao e prendi un triciclo o altro mezzo di trasporto locale per raggiungere General Luna. Trova un operatore di barche sulla spiaggia e prenota un tour delle isole per arrivare a Daku Island.",
        language: "italian",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 402,
        question: "Cosa dovrei aspettarmi per quanto riguarda il cibo?",
        answer: "Gli abitanti di Daku Island potrebbero vendere acqua di cocco rinfrescante per accompagnare il tuo pasto, spesso con frutti di mare freschi come pesce alla griglia e calamari.",
        language: "italian",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 403,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Rimani al sicuro: partecipa a tour guidati, indossa giubbotti di salvataggio sull'acqua e scarpe adeguate su terreni accidentati.",
        language: "italian",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 404,
        question: "Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 911 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 405,
        question: "C'è un bancomat a Daku Island?",
        answer: "Gli sportelli automatici sono improbabili. Valuta di prelevare contanti a General Luna o in altre città più grandi.",
        language: "italian",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 406,
        question: "どうやって行けばいいですか？",
        answer: "シャルガオ空港へ飛行機で行き、トライシクルやその他の地元の交通手段でジェネラル・ルナに向かいます。ビーチで船の運航者を見つけ、ダク島へのアイランドホッピングツアーを予約してください。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 407,
        question: "食べ物に関しては何を期待すべきですか？",
        answer: "ダク島の住民は、食事に添えるさわやかなココナッツウォーターを販売することがあり、しばしば焼き魚やイカなどの新鮮なシーフードが含まれます。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 408,
        question: "安全条件はどうですか？",
        answer: "安全を確保してください：ガイド付きツアーに参加し、水上では救命胴衣を着用し、荒れた地形では適切な靴を履いてください。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 409,
        question: "医療の必要がある場合はどうすればいいですか？",
        answer: "緊急の場合は地元のスタッフに知らせ、911に電話し、近くの医療機関を把握してください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 410,
        question: "ダク島にはATMがありますか？",
        answer: "ATMが存在する可能性は低いです。ジェネラル・ルナや他の大きな町で現金を引き出すことを検討してください。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 411,
        question: "Como chegar lá?",
        answer: "Voe para o Aeroporto de Siargao e pegue um triciclo ou outro meio de transporte local para General Luna. Encontre um operador de barco na praia e reserve um passeio de barco para a Ilha Daku.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 412,
        question: "O que devo esperar em termos de comida?",
        answer: "Os moradores da Ilha Daku podem vender água de coco refrescante para complementar sua refeição, frequentemente com frutos do mar frescos como peixe grelhado e lulas.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 413,
        question: "Quais são as condições de segurança?",
        answer: "Mantenha-se seguro: participe de passeios guiados, use coletes salva-vidas na água e calçados adequados em terrenos acidentados.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 414,
        question: "O que devo fazer se precisar de assistência médica?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 911 e saiba onde estão as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 415,
        question: "Há um caixa eletrônico na Ilha Daku?",
        answer: "Caixas eletrônicos são improváveis. Considere sacar dinheiro em General Luna ou em outras cidades maiores.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 416,
        question: "Hvordan kommer jeg derhen?",
        answer: "Flyv til Siargao Lufthavn og tag en tricycle eller andet lokalt transportmiddel til General Luna. Find en bådoperatør på stranden og book en ø-hop-tur til Daku Island.",
        language: "danish",
        question_number: 1,
        touristspot_number: 6
    },
    {
        id: 417,
        question: "Hvad kan jeg forvente med hensyn til mad?",
        answer: "De lokale på Daku Island kan muligvis sælge forfriskende kokosvand til at supplere dit måltid, ofte med frisk skaldyr som grillet fisk og blæksprutter.",
        language: "danish",
        question_number: 2,
        touristspot_number: 6
    },
    {
        id: 418,
        question: "Hvordan er sikkerhedsforholdene?",
        answer: "Hold dig sikker: Deltag i guidede ture, bær redningsveste på vandet og bær passende sko på ujævnt terræn.",
        language: "danish",
        question_number: 3,
        touristspot_number: 6
    },
    {
        id: 419,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I nødstilfælde, informer det lokale personale, ring 112, og kendskab til nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 6
    },
    {
        id: 420,
        question: "Er der en hæveautomat på Daku Island?",
        answer: "Hæveautomater er usandsynlige. Overvej at hæve kontanter i General Luna eller andre større byer.",
        language: "danish",
        question_number: 5,
        touristspot_number: 6
    },
    {
        id: 421,
        question: "How to get there?",
        answer: "Get to Surigao Airport, then bus or hire vehicle to Santa Monica. In Santa Monica, hire tricycle or habal-habal to Taktak Falls",
        language: "english",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 422,
        question: "What should I expect for food?",
        answer: "Bring your own food and drinks to Taktak Falls, but there might be local vendors too.",
        language: "english",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 423,
        question: "What are the safety conditions?",
        answer: "For a safe and enjoyable experience at Taktak Falls, consider guided tours, check weather before your visit, and be cautious while swimming.",
        language: "english",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 424,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 425,
        question: "Is there an ATM in TakTak Falls?",
        answer: "ATMs in Santa Monica, Surigao del Norte, near Taktak Falls, may not be readily available.",
        language: "english",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 426,
        question: "¿Cómo llegar allí?",
        answer: "Dirígete al Aeropuerto de Surigao y luego toma un autobús o alquila un vehículo hacia Santa Mónica. En Santa Mónica, alquila un triciclo o habal-habal hacia las Cataratas de Taktak.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 427,
        question: "¿Qué puedo esperar en cuanto a comida?",
        answer: "Lleva tu propia comida y bebidas a las Cataratas de Taktak, pero también puede haber vendedores locales.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 428,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Para una experiencia segura y agradable en las Cataratas de Taktak, considera tours guiados, verifica el clima antes de tu visita y ten precaución al nadar.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 429,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 430,
        question: "¿Hay un cajero automático en Taktak Falls?",
        answer: "Los cajeros automáticos en Santa Mónica, Surigao del Norte, cerca de Taktak Falls, pueden no estar fácilmente disponibles.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 431,
        question: "Wie komme ich dorthin?",
        answer: "Fahren Sie zum Flughafen von Surigao und nehmen Sie dann einen Bus oder mieten Sie ein Fahrzeug nach Santa Monica. In Santa Monica mieten Sie dann ein Dreirad oder Habal-Habal zu den Taktak Falls.",
        language: "german",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 432,
        question: "Was kann ich in Bezug auf Essen erwarten?",
        answer: "Bringen Sie Ihr eigenes Essen und Getränke zu den Taktak Falls mit, aber es könnten auch lokale Verkäufer vorhanden sein.",
        language: "german",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 433,
        question: "Wie sind die Sicherheitsbedingungen?",
        answer: "Für eine sichere und angenehme Erfahrung bei den Taktak Falls sollten Sie geführte Touren in Betracht ziehen, das Wetter vor Ihrem Besuch überprüfen und beim Schwimmen vorsichtig sein.",
        language: "german",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 434,
        question: "Was soll ich tun, wenn ich medizinische Aufmerksamkeit benötige?",
        answer: "Im Notfall informieren Sie das örtliche Personal, rufen Sie die 911 an und kennen Sie die nahegelegenen medizinischen Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 435,
        question: "Gibt es einen Geldautomaten bei den Taktak Falls?",
        answer: "Geldautomaten in Santa Monica, Surigao del Norte, in der Nähe der Taktak Falls, sind möglicherweise nicht leicht verfügbar.",
        language: "german",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 436,
        question: "Comment s'y rendre ?",
        answer: "Rendez-vous à l'aéroport de Surigao, puis prenez un bus ou louez un véhicule jusqu'à Santa Monica. À Santa Monica, louez un tricycle ou un habal-habal jusqu'aux chutes de Taktak.",
        language: "french",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 437,
        question: "À quoi dois-je m'attendre en termes de nourriture ?",
        answer: "Apportez votre propre nourriture et boissons aux chutes de Taktak, mais il peut aussi y avoir des vendeurs locaux.",
        language: "french",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 438,
        question: "Quelles sont les conditions de sécurité ?",
        answer: "Pour une expérience sûre et agréable aux chutes de Taktak, envisagez des visites guidées, vérifiez la météo avant votre visite et soyez prudent en nageant.",
        language: "french",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 439,
        question: "Que dois-je faire si j'ai besoin d'une attention médicale ?",
        answer: "En cas d'urgence, informez le personnel local, appelez le 911 et connaissez les installations médicales à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 440,
        question: "Y a-t-il un distributeur automatique de billets aux chutes de Taktak ?",
        answer: "Les distributeurs automatiques de billets à Santa Monica, Surigao del Norte, près des chutes de Taktak, pourraient ne pas être facilement disponibles.",
        language: "french",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 441,
        question: "איך להגיע לשם?",
        answer: "הגע לשדה התעופה של סוריגאו, ואז שפוף אוטובוס או שכור רכב לסנטה מוניקה. בסנטה מוניקה, שכור טריקייקל או הבל-הבל למפלי טקטק.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 442,
        question: "מה לצפות לגבי אוכל?",
        answer: "הבא את האוכל והשתייה שלך למפלי טקטק, אך ייתכן גם שיהיו סוחרים מקומיים.",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 443,
        question: "מהן תנאי הבטיחות?",
        answer: "לחווייה בטוחה ונעימה במפלי טקטק, יש לשקול סיורים מודרכים, לבדוק את המזג אוויר לפני הביקור שלך, ולהקפיד כשאתה שוחה.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 444,
        question: "מה לעשות אם נדרשת תשומת לב רפואית?",
        answer: "במקרה של חירום, יש להודיע לצוות המקומי, להתקשר ל-911 ולדעת על מתקנים רפואיים קרובים.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 445,
        question: "האם יש כספומט במפלי טקטק?",
        answer: "כספומטים בסנטה מוניקה, סוריגאו דל נורט, ליד מפלי טקטק, עשויים לא להיות זמינים בקלות.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 446,
        question: "Hoe kom ik daar?",
        answer: "Ga naar de luchthaven van Surigao en neem vervolgens een bus of huur een voertuig naar Santa Monica. In Santa Monica, huur een driewieler of habal-habal naar de Taktak Falls.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 447,
        question: "Wat kan ik verwachten qua eten?",
        answer: "Breng je eigen eten en drinken mee naar de Taktak Falls, maar er kunnen ook lokale verkopers zijn.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 448,
        question: "Wat zijn de veiligheidsvoorwaarden?",
        answer: "Voor een veilige en plezierige ervaring bij de Taktak Falls, overweeg begeleide rondleidingen, controleer het weer voor je bezoek, en wees voorzichtig tijdens het zwemmen.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 449,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911 en ken de nabijgelegen medische faciliteiten.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 450,
        question: "Is er een geldautomaat bij de Taktak Falls?",
        answer: "Geldautomaten in Santa Monica, Surigao del Norte, in de buurt van de Taktak Falls, zijn mogelijk niet direct beschikbaar.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 451,
        question: "如何到达那里？",
        answer: "前往苏里高机场，然后乘坐公共汽车或租车前往圣莫尼卡。在圣莫尼卡，租用三轮车或哈巴哈巴尔前往塔克塔克瀑布。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 452,
        question: "食物方面应该期望什么？",
        answer: "携带自己的食物和饮料前往塔克塔克瀑布，但也可能有当地小贩。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 453,
        question: "安全条件如何？",
        answer: "为了在塔克塔克瀑布获得安全而愉快的体验，考虑参加导游游览，在访问前检查天气，并在游泳时保持谨慎。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 454,
        question: "如果需要医疗帮助该怎么办？",
        answer: "在紧急情况下，通知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 455,
        question: "塔克塔克瀑布附近有自动取款机吗？",
        answer: "在苏里高德尔诺特省圣莫尼卡附近的塔克塔克瀑布，可能不容易找到自动取款机。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 456,
        question: "Hur tar jag mig dit?",
        answer: "Åk till Surigao Airport och ta sedan en buss eller hyr en bil till Santa Monica. I Santa Monica kan du hyra en trehjuling eller habal-habal till Taktak Falls.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 457,
        question: "Vad kan jag förvänta mig när det gäller mat?",
        answer: "Ta med din egen mat och dryck till Taktak Falls, men det kan också finnas lokala försäljare.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 458,
        question: "Vilka säkerhetsvillkor gäller?",
        answer: "För en säker och trevlig upplevelse vid Taktak Falls, överväg guidade turer, kontrollera vädret innan ditt besök och var försiktig vid simning.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 459,
        question: "Vad ska jag göra om jag behöver medicinsk hjälp?",
        answer: "I händelse av nödsituation, informera det lokala personalet, ring 911 och känn till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 460,
        question: "Finns det en bankomat vid Taktak Falls?",
        answer: "Bankomater i Santa Monica, Surigao del Norte, nära Taktak Falls, kanske inte är lättillgängliga.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 461,
        question: "Как туда добраться?",
        answer: "Доберитесь до аэропорта Суригао, затем возьмите автобус или арендуйте транспорт до Санта-Моники. В Санта-Монике арендуйте трицикл или хабал-хабал до водопада Тактак.",
        language: "russian",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 462,
        question: "Что я могу ожидать в плане еды?",
        answer: "Привезите свою еду и напитки к водопаду Тактак, но также могут быть местные продавцы.",
        language: "russian",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 463,
        question: "Каковы условия безопасности?",
        answer: "Для безопасного и приятного отдыха у водопада Тактак рассмотрите вариант с экскурсией, проверьте погоду перед посещением и будьте осторожны при купании.",
        language: "russian",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 464,
        question: "Что делать, если мне нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, наберите 911 и узнайте о ближайших медицинских учреждениях.",
        language: "russian",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 465,
        question: "Есть ли банкомат у водопада Тактак?",
        answer: "Банкоматы в Санта-Монике, Суригао дел Норте, возле водопада Тактак, могут быть не слишком легко доступны.",
        language: "russian",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 466,
        question: "어떻게 가야 하나요?",
        answer: "수리가오 공항에 가서 거기서 버스를 타거나 차량을 렌트하여 산타 몬니카로 이동합니다. 산타 몬니카에서는 트라이사이클이나 하발-하발을 렌트하여 탁탁 폭포로 이동합니다.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 467,
        question: "음식은 어떤 것을 기대해야 하나요?",
        answer: "탁탁 폭포로 음식과 음료를 가져가세요. 하지만 현지 상인들도 있을 수 있습니다.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 468,
        question: "안전 조건은 어떻게 되나요?",
        answer: "탁탁 폭포에서 안전하고 즐거운 경험을 위해 가이드 투어를 고려하고 방문 전에 날씨를 확인하며 수영할 때 주의하세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 469,
        question: "의료 도움이 필요한 경우 어떻게 해야 하나요?",
        answer: "긴급 상황이 발생하면 현지스태프에게 알리고 911에 전화하며 가까운 의료 시설을 확인하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 470,
        question: "탁탁 폭포에 ATM이 있나요?",
        answer: "탁탁 폭포 근처의 수리가오 델 노르테의 산타 몬니카에는 ATM이 쉽게 이용 가능하지 않을 수 있습니다.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 471,
        question: "Come ci si arriva?",
        answer: "Arriva all'aeroporto di Surigao, quindi prendi un autobus o noleggia un veicolo per Santa Monica. A Santa Monica, noleggia un triciclo o habal-habal per le cascate di Taktak.",
        language: "italian",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 472,
        question: "Cosa dovrei aspettarmi per quanto riguarda il cibo?",
        answer: "Porta il tuo cibo e le bevande alle cascate di Taktak, ma potrebbero esserci anche venditori locali.",
        language: "italian",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 473,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Per un'esperienza sicura e piacevole alle cascate di Taktak, considera visite guidate, controlla il meteo prima della visita e sii cauto durante il nuoto.",
        language: "italian",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 474,
        question: "Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 911 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 475,
        question: "C'è un bancomat alle cascate di Taktak?",
        answer: "Gli sportelli automatici a Santa Monica, Surigao del Norte, vicino alle cascate di Taktak, potrebbero non essere facilmente disponibili.",
        language: "italian",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 476,
        question: "どうやってそこに行けばいいですか？",
        answer: "スリガオ空港に行き、そこからバスに乗るか、車を借りてサンタモニカに向かいます。サンタモニカではトライシクルまたはハバルハバルを借りてタクタクの滝に向かいます。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 477,
        question: "食べ物については何を期待すればいいですか？",
        answer: "タクタクの滝には自分の食べ物や飲み物を持参してくださいが、地元の売り手もいるかもしれません。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 478,
        question: "安全な状態はどうですか？",
        answer: "タクタクの滝で安全で楽しい経験をするためには、ガイドツアーを検討し、訪れる前に天気を確認し、泳ぐ際には注意が必要です。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 479,
        question: "医療の必要がある場合はどうすればいいですか？",
        answer: "緊急の場合は地元のスタッフに知らせ、911に電話し、近くの医療施設を確認してください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 480,
        question: "タクタクの滝にはATMがありますか？",
        answer: "タクタクの滝の近くにあるスリガオ・デル・ノルテ州のサンタモニカには、ATMが簡単に利用できないかもしれません。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 481,
        question: "Como chegar lá?",
        answer: "Chegue ao Aeroporto de Surigao e, em seguida, pegue um ônibus ou alugue um veículo para Santa Monica. Em Santa Monica, alugue um triciclo ou habal-habal para chegar às Cataratas de Taktak.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 482,
        question: "O que devo esperar em termos de comida?",
        answer: "Traga sua própria comida e bebidas para as Cataratas de Taktak, mas também pode haver vendedores locais.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 483,
        question: "Quais são as condições de segurança?",
        answer: "Para uma experiência segura e agradável nas Cataratas de Taktak, considere passeios guiados, verifique o clima antes da visita e seja cauteloso ao nadar.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 484,
        question: "O que devo fazer se precisar de atenção médica?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 911 e conheça as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 485,
        question: "Há um caixa eletrônico nas Cataratas de Taktak?",
        answer: "Os caixas eletrônicos em Santa Monica, Surigao del Norte, perto das Cataratas de Taktak, podem não estar prontamente disponíveis.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 486,
        question: "Hvordan kommer man derhen?",
        answer: "Kom til Surigao Lufthavn, og tag derefter bus eller lej et køretøj til Santa Monica. I Santa Monica kan du leje en trehjulet cykel eller habal-habal til Taktak Falls.",
        language: "danish",
        question_number: 1,
        touristspot_number: 7
    },
    {
        id: 487,
        question: "Hvad kan jeg forvente med hensyn til mad?",
        answer: "Tag din egen mad og drikke med til Taktak Falls, men der kan også være lokale sælgere.",
        language: "danish",
        question_number: 2,
        touristspot_number: 7
    },
    {
        id: 488,
        question: "Hvad er sikkerhedsforholdene?",
        answer: "For en sikker og behagelig oplevelse ved Taktak Falls, overvej guidede ture, tjek vejrforholdene inden dit besøg og vær forsigtig under svømning.",
        language: "danish",
        question_number: 3,
        touristspot_number: 7
    },
    {
        id: 489,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I tilfælde af nødsituation, informer det lokale personale, ring til 911 og kendskab til nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 7
    },
    {
        id: 490,
        question: "Er der en hæveautomat ved Taktak Falls?",
        answer: "Hæveautomater i Santa Monica, Surigao del Norte, nær Taktak Falls, er muligvis ikke let tilgængelige.",
        language: "danish",
        question_number: 5,
        touristspot_number: 7
    },
    {
        id: 491,
        question: "How to get there?",
        answer: "Ride out General Luna, right onto the first main road. Continue to Coconut Mountain View Deck, then shortly after, look for the red Maasin bridge.",
        language: "english",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 492,
        question: "What should I expect for food?",
        answer: "You might find food stalls near Maasin Bridge selling snacks and local fare. Availability varies.",
        language: "english",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 493,
        question: "What are the safety conditions?",
        answer: "Be safe by checking safety instructions, using gear, joining tours, and checking weather. Wear good shoes for uneven terrain.",
        language: "english",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 494,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 495,
        question: "Is there an ATM in Maasin Bridge River Swing?",
        answer: "The Maasin Bridge area may not have ATMs on-site. Check in nearby towns such as General Luna for banking services.",
        language: "english",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 496,
        question: "¿Cómo llegar allí?",
        answer: "Sal de General Luna, gira a la derecha en la primera carretera principal. Continúa hacia Coconut Mountain View Deck y, poco después, busca el puente rojo de Maasin.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 497,
        question: "¿Qué puedo esperar en cuanto a comida?",
        answer: "Podrías encontrar puestos de comida cerca del Puente Maasin que vendan bocadillos y platos locales. La disponibilidad varía.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 498,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Mantente seguro siguiendo las instrucciones de seguridad, usando equipo adecuado, uniéndote a tours y revisando el clima. Usa buenos zapatos para terrenos irregulares.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 499,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 500,
        question: "¿Hay un cajero automático en Maasin Bridge River Swing?",
        answer: "Es posible que en el área del Puente Maasin no haya cajeros automáticos. Verifica en pueblos cercanos como General Luna para servicios bancarios.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 501,
        question: "Wie komme ich dorthin?",
        answer: "Fahre aus General Luna heraus, biege rechts auf die erste Hauptstraße ab. Fahre weiter zum Coconut Mountain View Deck und suche kurz danach die rote Maasin-Brücke.",
        language: "german",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 502,
        question: " Was kann ich in Bezug auf Essen erwarten?",
        answer: "Möglicherweise findest du Essensstände in der Nähe der Maasin-Brücke, die Snacks und lokale Spezialitäten verkaufen. Die Verfügbarkeit variiert.",
        language: "german",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 503,
        question: " Wie sind die Sicherheitsbedingungen?",
        answer: "Bleibe sicher, indem du Sicherheitsanweisungen befolgst, Schutzausrüstung trägst, an Touren teilnimmst und das Wetter überprüfst. Trage geeignete Schuhe für unebenes Gelände.",
        language: "german",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 504,
        question: " Was sollte ich tun, wenn ich medizinische Aufmerksamkeit benötige?",
        answer: "Im Notfall informiere das örtliche Personal, rufe die 112 an und kenne die nahegelegenen medizinischen Einrichtungen.",
        language: "german",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 505,
        question: " Gibt es einen Geldautomaten am Maasin Bridge River Swing?",
        answer: "Die Gegend um die Maasin-Brücke hat möglicherweise keine Geldautomaten vor Ort. Überprüfe nahegelegene Städte wie General Luna für Bankdienstleistungen.",
        language: "german",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 506,
        question: "Comment s'y rendre ?",
        answer: "Sortez de General Luna, tournez à droite sur la première route principale. Continuez jusqu'au Coconut Mountain View Deck, puis peu après, recherchez le pont rouge de Maasin.",
        language: "french",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 507,
        question: " À quoi dois-je m'attendre en termes de nourriture ?",
        answer: "Vous pourriez trouver des étals alimentaires près du pont Maasin vendant des collations et des spécialités locales. La disponibilité varie.",
        language: "french",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 508,
        question: " Quelles sont les conditions de sécurité ?",
        answer: "Soyez prudent en suivant les consignes de sécurité, en utilisant un équipement approprié, en participant à des visites et en vérifiant la météo. Portez de bonnes chaussures pour un terrain inégal.",
        language: "french",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 509,
        question: " Que faire si j'ai besoin d'une attention médicale ?",
        answer: "En cas d'urgence, informez le personnel local, appelez le 112 et connaissez les installations médicales à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 510,
        question: " Y a-t-il un distributeur automatique de billets au Maasin Bridge River Swing ?",
        answer: "La région du pont Maasin peut ne pas avoir de distributeurs automatiques de billets sur place. Vérifiez dans les villes voisines comme General Luna pour les services bancaires.",
        language: "french",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 511,
        question: "אילו סוגי חיות ניתן למצוא בפארק הלאומי קקדו?",
        answer: "בפארק הלאומי קקדו ניתן למצוא מגוון רחב של חיות, כולל תנינים, קנגורואים, וולבים, דינגואים, ציפורים צבעוניות ורמקולים שונים.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 512,
        question: "מתי הוא הזמן הטוב ביותר לבקר בפארק הלאומי ילוסטון?",
        answer: "הזמן הטוב ביותר לבקר בפארק הלאומי ילוסטון הוא בדרך כלל בחודשי הקיץ, מיוני עד אוגוסט, כאשר הכבישים פתוחים ורוב האטרקציות נגישות. אך ייתכן שישנם המון אנשים בתקופה זו. החודשים מאי וספטמבר מציעים פתרון בינוני עם פחות אוכלוסייה אך תנאי מזג אוויר נוטרים.",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 513,
        question: "אילו אמצעי תחבורה זמינים כדי להגיע למגדל טוקיו?",
        answer: "ניתן להגיע למגדל טוקיו באמצעות מטרו, רכבת, אוטובוס או מונית. המטרו הוא לרוב הדרך הכי נוחה וכלכלית לנסיעה בעיר.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 514,
        question: "האם קיימות סיורים מודרכים במוזיאון הלובר?",
        answer: "כן, מוזיאון הלובר מציע סיורים מודרכים למבקרים המעוניינים. סיורים אלו יכולים לספק מידע מעמיק על אוספי המוזיאון ולספק חוויה מועשרת.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 515,
        question: "אילו פעילויות פופולריות ניתן לבצע בהוואי?",
        answer: "בהוואי, הפעילויות הפופולריות כוללות שחייה בשנורקל, גלישה, טיולים בנוף מדהים, ביקורים ברמקולים פעילים והתרפקות על חופי חול מדהימים.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 516,
        question: " Hoe kom ik daar?",
        answer: "Rijd uit General Luna, sla rechtsaf de eerste hoofdweg op. Ga verder naar Coconut Mountain View Deck en zoek kort daarna naar de rode Maasin-brug.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 517,
        question: " Wat kan ik verwachten qua eten?",
        answer: "Je zou voedselstalletjes in de buurt van de Maasin-brug kunnen vinden die snacks en lokale gerechten verkopen. Beschikbaarheid kan variëren.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 518,
        question: " Wat zijn de veiligheidsvoorwaarden?",
        answer: "Wees veilig door veiligheidsinstructies te volgen, uitrusting te dragen, deel te nemen aan rondleidingen en het weer te controleren. Draag goede schoenen voor ongelijk terrein.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 519,
        question: " Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 112 en weet waar de dichtstbijzijnde medische voorzieningen zijn.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 520,
        question: " Is er een geldautomaat bij Maasin Bridge River Swing?",
        answer: "Het gebied rond Maasin Bridge heeft mogelijk geen geldautomaten ter plaatse. Controleer nabijgelegen steden zoals General Luna voor bankdiensten.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 521,
        question: " 如何前往？",
        answer: "从General Luna出发，右转进入第一条主要道路。继续前往Coconut Mountain View Deck，然后不久后找到红色的Maasin桥。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 522,
        question: "食物方面应该期待什么？",
        answer: "你可能会在Maasin桥附近找到售卖小吃和当地美食的食品摊。供应情况可能有所不同。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 523,
        question: "安全条件如何？",
        answer: "通过遵循安全说明、使用装备、参加导览活动以及查看天气来确保安全。穿着适合不平整地形的好鞋子。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 524,
        question: " 如果需要医疗救助应该怎么办？",
        answer: "在紧急情况下，通知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 525,
        question: "Maasin桥河摆动处有自动取款机吗？",
        answer: "Maasin桥附近可能没有自动取款机。检查附近的城镇，如General Luna，了解银行服务。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 526,
        question: "Hur tar jag mig dit?",
        answer: "Åk ut från General Luna, sväng höger på första huvudvägen. Fortsätt till Coconut Mountain View Deck och leta sedan snart efter den röda Maasin-bron.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 527,
        question: "Vad kan jag förvänta mig när det gäller mat?",
        answer: "Du kanske hittar matstånd nära Maasin-bron som säljer snacks och lokala rätter. Tillgängligheten varierar.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 528,
        question: "Vilka säkerhetsförhållanden gäller?",
        answer: "Var säker genom att följa säkerhetsanvisningar, använda utrustning, delta i turer och kolla vädret. Bär bra skor för ojämn terräng.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 529,
        question: "Vad ska jag göra om jag behöver medicinsk hjälp?",
        answer: "Vid nödsituation, informera lokal personal, ring 112 och känner till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 530,
        question: "Finns det en bankomat vid Maasin Bridge River Swing?",
        answer: "Området runt Maasin-bron kanske inte har bankomater på plats. Kolla i närliggande städer som General Luna för banktjänster.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 531,
        question: "Как туда попасть?",
        answer: "Едьте из Генерал Луна, поверните направо на первую главную дорогу. Продолжайте до Coconut Mountain View Deck, затем вскоре после этого ищите красный мост Маасин.",
        language: "russian",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 532,
        question: "Что следует ожидать от еды?",
        answer: "Возможно, вы найдете прилавки с едой около моста Маасин, где продают закуски и местные блюда. Доступность может варьироваться.",
        language: "russian",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 533,
        question: "Каковы условия безопасности?",
        answer: "Будьте в безопасности, следуя инструкциям по безопасности, используя снаряжение, присоединяясь к экскурсиям и проверяя погоду. Носите хорошую обувь для неровного рельефа.",
        language: "russian",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 534,
        question: "Что делать, если нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, наберите 112 и узнайте о близлежащих медицинских учреждениях.",
        language: "russian",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 535,
        question: "Есть ли банкомат у Maasin Bridge River Swing?",
        answer: "Возможно, в районе моста Маасин нет банкоматов. Проверьте в близлежащих городах, таких как Генерал Луна, наличие банковских услуг.",
        language: "russian",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 536,
        question: "어떻게 가나요?",
        answer: "General Luna에서 나가 첫 번째 주요 도로를 오른쪽으로 가세요. Coconut Mountain View Deck까지 이어진 다음에는 곧바로 Maasin 다리의 빨간색을 찾아주세요.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 537,
        question: "음식은 어떤 것을 기대해야 하나요?",
        answer: "Maasin 다리 근처에서 간식과 현지 음식을 판매하는 음식점을 찾을 수 있을 것입니다. 이용 가능성은 다를 수 있습니다.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 538,
        question: "안전 조건은 어떻게 되나요?",
        answer: "안전 지침을 따르고 장비를 사용하며 투어에 참여하고 날씨를 확인하여 안전하게 지내세요. 울퉁불퉁한 지형에 적합한 신발을 신어주세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 539,
        question: "의료 수급이 필요한 경우 어떻게 해야 하나요?",
        answer: "비상 상황에서는 현지 직원에게 알리고 112로 전화하고 근처 의료 시설을 파악하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 540,
        question: "Maasin Bridge River Swing에 ATM이 있나요?",
        answer: "Maasin 다리 지역에는 ATM이 없을 수 있습니다. 은행 서비스는 General Luna와 같은 근처 도시에서 확인하세요.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 541,
        question: "Come arrivare là?",
        answer: "Guida fuori da General Luna, gira a destra sulla prima strada principale. Prosegui fino a Coconut Mountain View Deck, quindi poco dopo, cerca il ponte rosso di Maasin.",
        language: "italian",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 542,
        question: "Cosa posso aspettarmi per quanto riguarda il cibo?",
        answer: "Potresti trovare bancarelle alimentari vicino al Ponte Maasin che vendono snack e piatti locali. La disponibilità varia.",
        language: "italian",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 543,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Stai al sicuro seguendo le istruzioni di sicurezza, utilizzando l'attrezzatura, partecipando alle visite guidate e controllando il tempo. Indossa buone scarpe per terreni irregolari.",
        language: "italian",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 544,
        question: "Cosa devo fare se ho bisogno di attenzione medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 112 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 545,
        question: "C'è un bancomat a Maasin Bridge River Swing?",
        answer: "La zona del Ponte Maasin potrebbe non avere bancomat in loco. Controlla nelle città vicine come General Luna per i servizi bancari.",
        language: "italian",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 546,
        question: "どのように行けばいいですか？",
        answer: "General Lunaから出て、最初の主要道路を右に進んでください。Coconut Mountain View Deckまで進んだ後、すぐにMaasin Bridgeの赤い橋を探してください。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 547,
        question: "食事については何を期待すればいいですか？",
        answer: "Maasin Bridge近くでスナックや地元の料理を販売している屋台があるかもしれません。利用可能性は異なります。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 548,
        question: "安全な条件はどうですか？",
        answer: "安全な過ごし方は、安全な指示に従い、装備を使用し、ツアーに参加し、天気を確認することです。不均一な地形に対応できる良い靴を履いてください。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 549,
        question: "医療が必要な場合はどうすればいいですか？",
        answer: "緊急の場合は地元のスタッフに知らせ、911に電話し、近くの医療施設を知っておいてください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 550,
        question: "Maasin Bridge River SwingにATMはありますか？",
        answer: "Maasin Bridgeの周辺にはATMがない可能性があります。銀行サービスについてはGeneral Lunaなどの近くの町で確認してください。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 551,
        question: "Como chegar lá?",
        answer: "Siga para fora de General Luna, vire à direita na primeira estrada principal. Continue até o Coconut Mountain View Deck e, em seguida, pouco depois, procure a ponte vermelha de Maasin.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 552,
        question: "O que devo esperar em termos de comida?",
        answer: "Você pode encontrar barracas de comida perto da Ponte Maasin vendendo lanches e pratos locais. A disponibilidade varia.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 553,
        question: "Quais são as condições de segurança?",
        answer: "Mantenha-se seguro seguindo instruções de segurança, usando equipamento adequado, participando de passeios e verificando o clima. Use bons sapatos para terrenos irregulares.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 554,
        question: "O que devo fazer se precisar de atendimento médico?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 112 e saiba onde ficam as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 555,
        question: "Há um caixa eletrônico no Maasin Bridge River Swing?",
        answer: "A área ao redor da Ponte Maasin pode não ter caixas eletrônicos no local. Verifique em cidades próximas, como General Luna, para serviços bancários.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 556,
        question: "Hvordan kommer jeg derhen?",
        answer: "Kør ud af General Luna, drej til højre på den første hovedvej. Fortsæt til Coconut Mountain View Deck, og kort efter skal du lede efter den røde Maasin-bro.",
        language: "danish",
        question_number: 1,
        touristspot_number: 8
    },
    {
        id: 557,
        question: "Hvad kan jeg forvente af mad?",
        answer: "Du kan finde madboder nær Maasin Bridge, der sælger snacks og lokale retter. Tilgængeligheden varierer.",
        language: "danish",
        question_number: 2,
        touristspot_number: 8
    },
    {
        id: 558,
        question: "Hvordan er sikkerhedsforholdene?",
        answer: "Vær sikker ved at følge sikkerhedsinstruktioner, bruge udstyr, deltage i ture og tjekke vejret. Brug gode sko til ujævnt terræn.",
        language: "danish",
        question_number: 3,
        touristspot_number: 8
    },
    {
        id: 559,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I nødstilfælde skal du informere det lokale personale, ringe til 112 og kende til nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 8
    },
    {
        id: 560,
        question: "Er der en hæveautomat ved Maasin Bridge River Swing?",
        answer: "Området omkring Maasin Bridge har måske ikke hæveautomater på stedet. Tjek i nærliggende byer som General Luna for banktjenester.",
        language: "danish",
        question_number: 5,
        touristspot_number: 8
    },
    {
        id: 561,
        question: "How to get there?",
        answer: "To visit Naked Island, join an island-hopping tour from General Luna, the tourist hub of Siargao.",
        language: "english",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 562,
        question: "What should I expect for food?",
        answer: "Island-hopping tours often offer Filipino lunch: grilled seafood, adobo, fruits, rice. Naked Island lunch is picnic-style on the sand.",
        language: "english",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 563,
        question: " What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 564,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 565,
        question: " Is there an ATM in Naked Island?",
        answer: "ATMs are unlikely to be present. Consider withdrawing cash in General Luna or other larger towns.",
        language: "english",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 566,
        question: "¿Cómo llegar allí?",
        answer: "Para visitar Naked Island, únete a un tour de isla desde General Luna, el centro turístico de Siargao.",
        language: "spanish",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 567,
        question: " ¿Qué debo esperar en cuanto a la comida?",
        answer: "Los tours de isla a menudo ofrecen almuerzo filipino: mariscos a la parrilla, adobo, frutas, arroz. El almuerzo en Naked Island es estilo picnic en la arena.",
        language: "spanish",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 568,
        question: " ¿Cuáles son las condiciones de seguridad?",
        answer: "Visita Naked Island de manera segura: tours de buena reputación, chequeos del clima, chalecos salvavidas para el agua y calzado para la arena.",
        language: "spanish",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 569,
        question: " ¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        language: "spanish",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 570,
        question: "¿Hay un cajero automático en Naked Island?",
        answer: "Es poco probable que haya cajeros automáticos. Considera retirar efectivo en General Luna u otras ciudades más grandes.",
        language: "spanish",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 571,
        question: " Wie komme ich dorthin?",
        answer: "Um die Naked Island zu besuchen, nehmen Sie an einer Inselhopping-Tour von General Luna, dem touristischen Zentrum von Siargao, teil.",
        language: "german",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 572,
        question: " Was kann ich in Bezug auf Essen erwarten?",
        answer: "Inselhopping-Touren bieten oft philippinisches Mittagessen an: gegrillte Meeresfrüchte, Adobo, Früchte, Reis. Das Mittagessen auf Naked Island erfolgt im Picknick-Stil im Sand.",
        language: "german",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 573,
        question: "Wie sind die Sicherheitsbedingungen?",
        answer: "Besuchen Sie Naked Island sicher: seriöse Touren, Wetterchecks, Rettungswesten für Wasser und Schuhe für den Sand.",
        language: "german",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 574,
        question: " Was sollte ich tun, wenn ich medizinische Aufmerksamkeit benötige?",
        answer: "Im Notfall informieren Sie das örtliche Personal, rufen Sie die 911 an und erfahren Sie, wo sich die nächsten medizinischen Einrichtungen befinden.",
        language: "german",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 575,
        question: "Gibt es einen Geldautomaten auf Naked Island?",
        answer: "Geldautomaten sind wahrscheinlich nicht vorhanden. Erwägen Sie das Abheben von Bargeld in General Luna oder anderen größeren Städten.",
        language: "german",
        question_number: 5,
        touristspot_number: 9
    },
   
    {
        id: 576,
        question: "Comment y arriver ?",
        answer: "Pour visiter Naked Island, participez à une excursion d'île depuis General Luna, le centre touristique de Siargao.",
        language: "french",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 577,
        question: " À quoi dois-je m'attendre en matière de nourriture ?",
        answer: "Les excursions d'île proposent souvent un déjeuner philippin : fruits de mer grillés, adobo, fruits, riz. Le déjeuner sur Naked Island se prend en mode pique-nique sur le sable.",
        language: "french",
        question_number: 2,
        touristspot_number: 9
    },
    
    {
        id: 578,
        question: "Quelles sont les conditions de sécurité ?",
        answer: "Visitez Naked Island en toute sécurité : tours réputés, vérifications météorologiques, gilets de sauvetage pour l'eau et chaussures pour le sable.",
        language: "french",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 579,
        question: "Que dois-je faire si j'ai besoin de soins médicaux ?",
        answer: "En cas d'urgence, informez le personnel local, appelez le 911 et connaissez les établissements médicaux à proximité.",
        language: "french",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 580,
        question: " Y a-t-il un distributeur automatique de billets à Naked Island ?",
        answer: "Les distributeurs automatiques de billets ne sont probablement pas présents. Envisagez de retirer de l'argent à General Luna ou dans d'autres villes plus importantes.",
        language: "french",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 581,
        question: "איך להגיע לשם?",
        answer: "כדי לבקר באי Naked, הצטרף לסיור סיור חופים מ-General Luna, מרכז התיירים של סיארגאו.",
        language: "hebrew",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 582,
        question: " מה לצפות למה בנוגע לאוכל?",
        answer: "סיורי סיור חופים יכולים להציע ארוחת צהריים פיליפינית: ים תיכנו, אד ובו, פירות, אורז. ארוחת הצהריים באי Naked היא סגנון פיקניק על החול.",
        language: "hebrew",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 583,
        question: "מהם תנאי הבטחון?",
        answer: "בקר באי Naked בבטחה: סיורים מהימנים, בדיקות מזג אוויר, קפיצי חיים למים ונעליים לחול.",
        language: "hebrew",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 584,
        question: " מה לעשות אם אני זקוק לתשומת לב רפואית?",
        answer: "במקרה של חירום, יש ליידע את הצוות המקומי, להתקשר ל-911, ולדעת על מתקני רפואה קרובים.",
        language: "hebrew",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 585,
        question: "האם יש כספומט באי Naked?",
        answer: "כספומטים סביר שלא יהיו נוכחים. שקול למשוך מזומנים ב-General Luna או בערים גדולות נוספות.",
        language: "hebrew",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 586,
        question: "Hoe kom ik daar?",
        answer: "Om Naked Island te bezoeken, sluit je je aan bij een eilandhop-tour vanuit General Luna, het toeristische centrum van Siargao.",
        language: "dutch",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 587,
        question: "Wat kan ik verwachten qua eten?",
        answer: "Eilandhop-tours bieden vaak Filipijnse lunch aan: gegrilde zeevruchten, adobo, fruit, rijst. De lunch op Naked Island is in picknickstijl op het zand.",
        language: "dutch",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 588,
        question: " Wat zijn de veiligheidsvoorwaarden?",
        answer: "Bezoek Naked Island veilig: betrouwbare tours, weercontroles, reddingsvesten voor water, en schoeisel voor het zand.",
        language: "dutch",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 589,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911, en weet waar de dichtstbijzijnde medische faciliteiten zijn.",
        language: "dutch",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 590,
        question: "Is er een geldautomaat op Naked Island?",
        answer: "Geldautomaten zijn waarschijnlijk niet aanwezig. Overweeg geld op te nemen in General Luna of andere grotere steden.",
        language: "dutch",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 591,
        question: " 如何到达那里？",
        answer: "要参观Naked Island，可以加入从Siargao的旅游中心General Luna出发的环岛游。",
        language: "mandarin",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 592,
        question: "关于食物，我应该期待什么？",
        answer: "环岛游通常提供菲律宾午餐：烤海鲜、阿多博（一种菲律宾烹饪风格）、水果、米饭。Naked Island上的午餐是在沙滩上野餐式的。",
        language: "mandarin",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 593,
        question: "安全条件如何？",
        answer: "安全地访问Naked Island：选择有声望的旅游团，检查天气，携带水上救生衣和沙滩鞋。",
        language: "mandarin",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 594,
        question: "如果我需要医疗帮助该怎么办？",
        answer: "在紧急情况下，通知当地工作人员，拨打911，并了解附近的医疗设施。",
        language: "mandarin",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 595,
        question: "Naked Island上有自动取款机吗？",
        answer: "自动取款机可能不太可能存在。考虑在General Luna或其他较大的城镇取款。",
        language: "mandarin",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 596,
        question: "Hur kommer jag dit?",
        answer: "För att besöka Naked Island, anslut dig till en ö-hopptur från General Luna, turistnavet i Siargao.",
        language: "swedish",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 597,
        question: "Vad kan jag förvänta mig av maten?",
        answer: "Ö-hoppturer erbjuder ofta filippinsk lunch: grillad skaldjur, adobo, frukt och ris. Lunchen på Naked Island är piknikstil på sanden.",
        language: "swedish",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 598,
        question: " Vilka säkerhetsförhållanden gäller?",
        answer: "Besök Naked Island säkert: välj pålitliga turer, kontrollera vädret, använd flytvästar i vattnet och skor på sanden.",
        language: "swedish",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 599,
        question: "Vad ska jag göra om jag behöver medicinsk hjälp?",
        answer: "I händelse av nödsituation, informera lokal personal, ring 112, och känn till närliggande medicinska faciliteter.",
        language: "swedish",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 600,
        question: "Finns det en bankomat på Naked Island?",
        answer: "Bankomater är osannolika att finnas där. Överväg att ta ut kontanter i General Luna eller andra större städer.",
        language: "swedish",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 601,
        question: "Как туда добраться?",
        answer: "Чтобы посетить Naked Island, присоединитесь к туру по островам из Генерал Луна, туристического центра Сиаргао.",
        language: "russian",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 602,
        question: "Чего ожидать от еды?",
        answer: "Туры по островам часто предлагают филиппинский обед: гриль из морепродуктов, адобо, фрукты, рис. Обед на Naked Island устраивается на пляже в пикниковом стиле.",
        language: "russian",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 603,
        question: "Каковы условия безопасности?",
        answer: "Посещайте Naked Island безопасно: выбирайте надежные туры, проверяйте погоду, используйте спасательные жилеты в воде и обувь для песка.",
        language: "russian",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 604,
        question: " Что делать, если мне нужна медицинская помощь?",
        answer: "В случае чрезвычайной ситуации сообщите местному персоналу, наберите 112 и узнайте о ближайших медицинских учреждениях.",
        language: "russian",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 605,
        question: "Есть ли банкомат на Naked Island?",
        answer: "Банкоматы там, вероятно, отсутствуют. Рассмотрите возможность снятия наличных в Генерал Луне или других крупных городах.",
        language: "russian",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 606,
        question: "어떻게 가야 하나요?",
        answer: "Naked Island을 방문하려면 시아르가오의 관광 중심지인 General Luna에서 아일랜드 호핑 투어에 참여하세요.",
        language: "hangul",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 607,
        question: " 음식으로 뭐가 기대되나요?",
        answer: "아일랜드 호핑 투어는 대개 필리핀식 점심을 제공합니다: 바베큐 해산물, 아도보, 과일, 밥. Naked Island의 점심은 모래 위에서 소풍 스타일로 즐깁니다.",
        language: "hangul",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 608,
        question: " 안전 조건은 어떻게 되나요?",
        answer: "Naked Island을 안전하게 방문하려면 신뢰할 수 있는 투어를 선택하고 날씨를 확인하며 물에서는 구명조끼를, 모래에서는 신발을 사용하세요.",
        language: "hangul",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 609,
        question: " 응급 상황 시 어떻게 해야 하나요?",
        answer: "비상 시 현지 스태프에게 알리고 911에 전화하며 가까운 의료 시설을 파악하세요.",
        language: "hangul",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 610,
        question: " Naked Island에 ATM이 있나요?",
        answer: "ATM이 존재할 가능성은 낮습니다. General Luna나 다른 큰 도시에서 현금을 인출하는 것을 고려하세요.",
        language: "hangul",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 611,
        question: " Come arrivare?",
        answer: "Per visitare Naked Island, unisciti a un tour di isole da General Luna, il centro turistico di Siargao.",
        language: "italian",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 612,
        question: " Cosa posso aspettarmi per quanto riguarda il cibo?",
        answer: "I tour di isola in isola offrono spesso pranzi filippini: frutti di mare alla griglia, adobo, frutta, riso. Il pranzo a Naked Island è in stile picnic sulla sabbia.",
        language: "italian",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 613,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Visita Naked Island in sicurezza: scegli tour affidabili, controlla le condizioni meteorologiche, indossa giubbotti di salvataggio in acqua e calzature per la sabbia.",
        language: "italian",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 614,
        question: " Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 112 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 615,
        question: "C'è un bancomat a Naked Island?",
        answer: "Gli sportelli bancomat sono improbabili che siano presenti. Valuta di prelevare contanti a General Luna o in altre città più grandi.",
        language: "italian",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 616,
        question: "どのように行けばいいですか？",
        answer: "General Lunaから出て、最初の主要道路を右に進んでください。Coconut Mountain View Deckまで進んだ後、すぐにMaasin Bridgeの赤い橋を探してください。",
        language: "japanese",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 617,
        question: " 食事については何を期待すればいいですか？",
        answer: "Maasin Bridge近くでスナックや地元の料理を販売している屋台があるかもしれません。利用可能性は異なります。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 618,
        question: "  安全な条件はどうですか？",
        answer: "安全な過ごし方は、安全な指示に従い、装備を使用し、ツアーに参加し、天気を確認することです。不均一な地形に対応できる良い靴を履いてください。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 619,
        question: " 医療が必要な場合はどうすればいいですか？",
        answer: "緊急の場合は地元のスタッフに知らせ、911に電話し、近くの医療施設を知っておいてください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 620,
        question: " Maasin Bridge River SwingにATMはありますか？",
        answer: "Maasin Bridgeの周辺にはATMがない可能性があります。銀行サービスについてはGeneral Lunaなどの近くの町で確認してください。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 621,
        question: "Como chegar lá?",
        answer: "Siga para fora de General Luna, vire à direita na primeira estrada principal. Continue até o Coconut Mountain View Deck e, em seguida, pouco depois, procure a ponte vermelha de Maasin.",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 622,
        question: "O que devo esperar em termos de comida?",
        answer: "Você pode encontrar barracas de comida perto da Ponte Maasin vendendo lanches e pratos locais. A disponibilidade varia.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 623,
        question: "Quais são as condições de segurança?",
        answer: "Mantenha-se seguro seguindo instruções de segurança, usando equipamento adequado, participando de passeios e verificando o clima. Use bons sapatos para terrenos irregulares.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 624,
        question: "O que devo fazer se precisar de atendimento médico?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 112 e saiba onde ficam as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 625,
        question: "Há um caixa eletrônico em Naked Island?",
        answer: "É improvável que haja caixas eletrônicos. Considere sacar dinheiro em General Luna ou outras cidades maiores.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 626,
        question: "Hvordan kommer jeg derhen?",
        answer: "For at besøge Naked Island skal du deltage i en ø-hoppe tur fra General Luna, det turistiske centrum i Siargao.",
        language: "danish",
        question_number: 1,
        touristspot_number: 9
    },
    {
        id: 627,
        question: "Hvad kan jeg forvente af maden?",
        answer: "Ø-hoppe ture tilbyder ofte filippinsk frokost: grillede skaldyr, adobo, frugt, ris. Frokosten på Naked Island er picnic-stil på sandet.",
        language: "danish",
        question_number: 2,
        touristspot_number: 9
    },
    {
        id: 628,
        question: " Hvad er sikkerhedsforholdene?",
        answer: "Besøg Naked Island sikkert: vælg pålidelige ture, tjek vejret, brug redningsveste i vandet, og fodtøj til sandet.",
        language: "danish",
        question_number: 3,
        touristspot_number: 9
    },
    {
        id: 629,
        question: "Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I tilfælde af nødsituation, informer det lokale personale, ring 112, og kend nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 9
    },
    {
        id: 630,
        question: "Er der en hæveautomat på Naked Island?",
        answer: "Hæveautomater er usandsynlige at være til stede. Overvej at hæve kontanter i General Luna eller andre større byer.",
        language: "danish",
        question_number: 5,
        touristspot_number: 9
    },
    {
        id: 631,
        question: "How to get there?",
        answer: "The Coconut View Deck Siargao is a 25-minute ride from General Luna along the Siargao Circumferential Road. You're bound to pass it during your trip.",
        language: "english",
        question_number: 1,
        touristspot_number: 10
    },
    {
        id: 632,
        question: "What should I expect for food?",
        answer: "Tours often include meals with local Filipino cuisine. Coconut Tree Viewpoint might be a lunch stop.",
        language: "english",
        question_number: 2,
        touristspot_number: 10
    },
    {
        id: 633,
        question: "What are the safety conditions?",
        answer: "Check weather and be cautious on high points for safe visits.",
        language: "english",
        question_number: 3,
        touristspot_number: 10
    },
    {
        id: 634,
        question: "What should I do if I need medical attention?",
        answer: "In case of emergency, inform local staff, call 911, and know nearby medical facilities.",
        language: "english",
        question_number: 4,
        touristspot_number: 10
    },
    {
        id: 635,
        question: "Is there an ATM in  Coconut Tree Viewpoint?",
        answer: "Similar to other natural attractions, Coconut Tree Viewpoint may not have its own ATM. Check in larger towns like General Luna for ATM services.",
        language: "english",
        question_number: 5,
        touristspot_number: 10
    },
    {
        id: 636,
        question: "¿Cómo llegar allí?",
        answer: "El Mirador Coconut View Siargao está a 25 minutos en coche desde General Luna a lo largo de la Carretera Circunferencial de Siargao. ¡Seguramente lo pasarás durante tu viaje!",
        question_number: 1,
        language: "spanish",
        touristspot_number: 10
    },
    {
        id: 637,
        question: "¿Qué debo esperar en cuanto a comida?",
        answer: "Los tours suelen incluir comidas con cocina local filipina. Coconut Tree Viewpoint podría ser una parada para el almuerzo.",
        question_number: 2,
        language: "spanish",
        touristspot_number: 10
    },
    {
        id: 638,
        question: "¿Cuáles son las condiciones de seguridad?",
        answer: "Verifica el clima y ten precaución en lugares elevados para visitas seguras.",
        question_number: 3,
        language: "spanish",
        touristspot_number: 10
    },
    {
        id: 639,
        question: "¿Qué debo hacer si necesito atención médica?",
        answer: "En caso de emergencia, informa al personal local, llama al 911 y conoce las instalaciones médicas cercanas.",
        question_number: 4,
        language: "spanish",
        touristspot_number: 10
    },
    {
        id: 640,
        question: "¿Hay un cajero automático en Coconut Tree Viewpoint?",
        answer: "Coconut Tree Viewpoint puede no tener su propio cajero automático. Verifica en ciudades más grandes como General Luna para servicios de cajeros automáticos.",
        question_number: 5,
        language: "spanish",
        touristspot_number: 10
    },
    {
        id: 641,
        question: "Wie komme ich dort hin?",
        answer: "Das Coconut View Deck Siargao ist eine 25-minütige Fahrt von General Luna entlang der Siargao Circumferential Road entfernt. Du wirst während deiner Reise daran vorbeikommen!",
        question_number: 1,
        language: "german",
        touristspot_number: 10
    },
    {
        id: 642,
        question: "Was kann ich in Bezug auf Essen erwarten?",
        answer: "Touren beinhalten oft Mahlzeiten mit lokaler philippinischer Küche. Coconut Tree Viewpoint könnte ein Mittagsstopp sein.",
        question_number: 2,
        language: "german",
        touristspot_number: 10
    },
    {
        id: 643,
        question: "Wie sind die Sicherheitsbedingungen?",
        answer: "Überprüfe das Wetter und sei vorsichtig an erhöhten Stellen für sichere Besuche.",
        question_number: 3,
        language: "german",
        touristspot_number: 10
    },
    {
        id: 644,
        question: "Was soll ich tun, wenn ich medizinische Aufmerksamkeit brauche?",
        answer: "Im Notfall informiere das örtliche Personal, rufe die 911 an und kenne nahegelegene medizinische Einrichtungen.",
        question_number: 4,
        language: "german",
        touristspot_number: 10
    },
    {
        id: 645,
        question: "Gibt es einen Geldautomaten auf Coconut Tree Viewpoint?",
        answer: "Coconut Tree Viewpoint hat möglicherweise keinen eigenen Geldautomaten. Überprüfe in größeren Städten wie General Luna nach Geldautomatendiensten.",
        question_number: 5,
        language: "german",
        touristspot_number: 10
    },
    {
        id: 646,
        question: "Comment y arriver ?",
        answer: "Le belvédère Coconut View Siargao est à 25 minutes en voiture de General Luna le long de la route circonférentielle de Siargao. Vous passerez probablement par là pendant votre voyage !",
        question_number: 1,
        language: "french",
        touristspot_number: 10
    },
    {
        id: 647,
        question: "À quoi dois-je m'attendre en matière de nourriture ?",
        answer: "Les excursions incluent souvent des repas avec une cuisine philippine locale. Coconut Tree Viewpoint pourrait être un arrêt pour le déjeuner.",
        question_number: 2,
        language: "french",
        touristspot_number: 10
    },
    {
        id: 648,
        question: "Quelles sont les conditions de sécurité ?",
        answer: "Vérifiez la météo et soyez prudent sur les points élevés pour des visites en toute sécurité.",
        question_number: 3,
        language: "french",
        touristspot_number: 10
    },
    {
        id: 649,
        question: "Que dois-je faire si j'ai besoin d'attention médicale ?",
        answer: "En cas d'urgence, informez le personnel local, appelez le 911 et connaissez les établissements médicaux à proximité.",
        question_number: 4,
        language: "french",
        touristspot_number: 10
    },
    {
        id: 650,
        question: "Y a-t-il un distributeur automatique sur Coconut Tree Viewpoint?",
        answer: "Coconut Tree Viewpoint pourrait ne pas avoir son propre distributeur automatique. Vérifiez dans les grandes villes comme General Luna pour les services de distributeurs automatiques.",
        question_number: 5,
        language: "french",
        touristspot_number: 10
    },
    {
        id: 651,
        question: "איך להגיע לשם?",
        answer: "הצופה מבואת קוקוס סיארגאו הוא נסיעה של 25 דקות מג'נרל לונה לאורך כביש הנפילה של סיארגאו. תעברו לידו במהלך הטיול שלכם!",
        question_number: 1,
        language: "hebrew",
        touristspot_number: 10
    },
    {
        id: 652,
        question: "מה לצפות מהאוכל?",
        answer: "יש תוספות תפריטים עם המטבח המקומי הפיליפיני בדרך כלל. מצפון הקוקוס עשוי להיות עצירת צהריים.",
        question_number: 2,
        language: "hebrew",
        touristspot_number: 10
    },
    {
        id: 653,
        question: " אילו הם תנאי הבטיחות?",
        answer: "בדקו את המזג האוויר והיזהרו בנקודות גבוהות לטובת ביקורים בטוחים. ",
        question_number: 3,
        language: "hebrew",
        touristspot_number: 10
    },
    {
        id: 654,
        question: "מה לעשות אם אני זקוק לטיפול רפואי?",
        answer: "במקרה של חירום, יש להודיע לצוות המקומי, לקרוא ל-911 ולדעת על מתקני רפואה קרובים.",
        question_number: 4,
        language: "hebrew",
        touristspot_number: 10
    },
    {
        id: 655,
        question: "האם יש כספומט באי נייקד?",
        answer: "נקד התצפית מצפון קוקוס עשוי לא לכלול כספומט משלו. יש לבדוק בערים גדולות יותר כמו ג'נרל לונה לשירותי כספומט.",
        question_number: 5,
        language: "hebrew",
        touristspot_number: 10
    },
    {
        id: 656,
        question: "Hoe kom ik daar?",
        answer: "Het Coconut View Deck Siargao is een rit van 25 minuten van General Luna langs de Siargao Circumferential Road. Je zult er langs komen tijdens je reis!",
        question_number: 1,
        language: "dutch",
        touristspot_number: 10
    },
    {
        id: 657,
        question: "Wat kan ik verwachten qua eten?",
        answer: "Tours bevatten vaak maaltijden met lokale Filipijnse gerechten. Coconut Tree Viewpoint kan een lunchstop zijn.",
        question_number: 2,
        language: "dutch",
        touristspot_number: 10
    },
    {
        id: 658,
        question: "Wat zijn de veiligheidsomstandigheden?",
        answer: "Controleer het weer en wees voorzichtig op hoge punten voor veilige bezoeken.",
        question_number: 3,
        language: "dutch",
        touristspot_number: 10
    },
    {
        id: 659,
        question: "Wat moet ik doen als ik medische hulp nodig heb?",
        answer: "In geval van nood, informeer het lokale personeel, bel 911 en weet waar de dichtstbijzijnde medische voorzieningen zijn.",
        question_number: 4,
        language: "dutch",
        touristspot_number: 10
    },
    {
        id: 660,
        question: "Is er een geldautomaat op Coconut Tree Viewpoint?",
        answer: "Coconut Tree Viewpoint heeft mogelijk geen eigen geldautomaat. Controleer in grotere steden zoals General Luna voor geldautomaatservices.",
        question_number: 5,
        language: "dutch",
        touristspot_number: 10
    },
    {
        id: 661,
        question: "如何到达那里？",
        answer: "椰树景观甲米是从通往斯亚尔高的环路的通用卢纳（General Luna）方向的车程25分钟。在您的旅途中，您肯定会经过它！",
        question_number: 1,
        language: "mandarin",
        touristspot_number: 10
    },
    {
        id: 662,
        question: "食物方面有什么期望？",
        answer: "旅行通常包括当地菲律宾美食的餐点。椰树景观可能是午餐的一站。",
        question_number: 2,
        language: "mandarin",
        touristspot_number: 10
    },
    {
        id: 663,
        question: "安全状况如何？",
        answer: "检查天气，小心高处以确保安全游览。",
        question_number: 3,
        language: "mandarin",
        touristspot_number: 10
    },
    {
        id: 664,
        question: "如果我需要医疗救助该怎么办？",
        answer: "在紧急情况下，请告知当地工作人员，拨打911，并了解附近的医疗设施。",
        question_number: 4,
        language: "mandarin",
        touristspot_number: 10
    },
    {
        id: 665,
        question: "椰树观景点有自动取款机吗？",
        answer: "椰树景观可能没有自己的自动取款机。请在通用卢纳等较大的城镇检查自动取款机服务。",
        question_number: 5,
        language: "mandarin",
        touristspot_number: 10
    },
    {
        id: 666,
        question: "Hur tar jag mig dit?",
        answer: "Coconut View Deck Siargao är en 25-minuters bilresa från General Luna längs Siargao Circumferential Road. Du kommer att passera det under din resa!",
        question_number: 1,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 667,
        question: "Vad kan jag förvänta mig av maten?",
        answer: "Utflykter inkluderar ofta måltider med lokala filippinska rätter. Coconut Tree Viewpoint kan vara en lunchstopp. ",
        question_number: 2,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 668,
        question: "Vilka är säkerhetsförhållandena?",
        answer: "Kontrollera vädret och var försiktig på höga punkter för säkra besök.",
        question_number: 3,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 669,
        question: "Vad ska jag göra om jag behöver medicinsk hjälp?",
        answer: "Vid nödsituationer, informera lokal personal, ring 911 och känner till närliggande medicinska faciliteter.",
        question_number: 4,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 670,
        question: "Finns det en bankomat på Coconut Tree Viewpoint?",
        answer: "Coconut Tree Viewpoint kanske inte har sin egen bankomat. Kontrollera i större städer som General Luna för banktjänster.",
        question_number: 5,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 671,
        question:  "Как туда добраться?",
        answer: " Смотровая площадка Coconut View на острове Сиаргао находится в 25-минутной поездке от Генерал Луны вдоль Сиаргао Circumferential Road. Вы обязательно проедете мимо нее во время своего путешествия!",
        question_number: 1,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 672,
        question: "Что я могу ожидать от еды?",
        answer: "В турах часто включают приемы пищи с местной филиппинской кухней. Возможно, Смотровая площадка у Кокосового дерева станет местом для обеда.",
        question_number: 2,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 673,
        question:"Каковы условия безопасности?",
        answer:  "Проверьте погоду и будьте осторожны на высоких точках для безопасного посещения.",
        question_number: 3,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 674,
        question:  "4. Что делать, если мне нужна медицинская помощь?",
        answer:  "В случае чрезвычайной ситуации сообщите местному персоналу, позвоните по номеру 911 и узнайте о близлежащих медицинских учреждениях.",
        question_number: 4,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 675,
        question: "5. Есть ли банкомат на Coconut Tree Viewpoint?",
        answer:  "У Смотровой площадки у Кокосового дерева может не быть собственного банкомата. Проверьте в крупных городах, таких как Генерал Луна, наличие банкоматов.", 
        question_number: 5,
        language: "swedish",
        touristspot_number: 10
    },
    {
        id: 676,
        question: "어떻게 가죠?",
        answer: "시아르가오의 코코넛 뷰 데크는 시아르가오 순환도로를 따라 일반 루나에서 25분 정도 떨어진 곳에 있습니다. 여행 중에 그곳을 반드시 지나게 될 거에요!",
        question_number: 1,
        language: "hangul",
        touristspot_number: 10
    },
    {
        id: 677,
        question: "음식으로 뭘 기대해야 하죠?",
        answer: "투어에는 대개 현지 필리핀 요리와 함께 하는 식사가 포함됩니다. 코코넛 트리 뷰포인트는 점심 식사 장소가 될 수 있습니다.",
        question_number: 2,
        language: "hangul",
        touristspot_number: 10
    },
    {
        id: 678,
        question: "안전 상태는 어떤가요?",
        answer: "안전한 방문을 위해 날씨를 확인하고 높은 곳에서 조심하세요.",
        question_number: 3,
        language: "hangul",
        touristspot_number: 10
    },
    {
        id: 679,
        question: "응급 상황 시 어떻게 의료 도움을 받아야 하나요?",
        answer: "응급 상황에서는 현지 스태프에게 알리고 911에 전화하며 근처 의료 시설을 파악하세요.",
        question_number: 4,
        language: "hangul",
        touristspot_number: 10
    },
    {
        id: 680,
        question: "Coconut Tree Viewpoint에 ATM이 있나요?",
        answer: "코코넛 트리 뷰포인트에는 자체 ATM이 없을 수 있습니다. ATM 서비스를 위해 General Luna와 같은 큰 도시에서 확인하세요.",
        question_number: 5,
        language: "hangul",
        touristspot_number: 10
    },
    {
        id: 681,
        question: "Come arrivarci?",
        answer: "Il Coconut View Deck Siargao si trova a 25 minuti di auto da General Luna lungo la Strada Circolare di Siargao. Lo passerai durante il tuo viaggio!",
        language: "italian",
        question_number: 1,
        touristspot_number: 10
    },
    {
        id: 682,
        question: "Cosa posso aspettarmi per quanto riguarda il cibo?",
        answer: "Le escursioni spesso includono pasti con cucina filippina locale. Il Coconut Tree Viewpoint potrebbe essere una tappa per il pranzo.",
        language: "italian",
        question_number: 2,
        touristspot_number: 10
    },
    {
        id: 683,
        question: "Quali sono le condizioni di sicurezza?",
        answer: "Controlla le condizioni meteorologiche e sii cauto nei punti alti per visite sicure.",
        language: "italian",
        question_number: 3,
        touristspot_number: 10
    },
    {
        id: 684,
        question: "Cosa devo fare se ho bisogno di assistenza medica?",
        answer: "In caso di emergenza, informa il personale locale, chiama il 911 e conosci le strutture mediche nelle vicinanze.",
        language: "italian",
        question_number: 4,
        touristspot_number: 10
    },
    {
        id: 685,
        question: "C'è un bancomat a Coconut Tree Viewpoint?",
        answer: "Il Coconut Tree Viewpoint potrebbe non avere un proprio bancomat. Verifica in città più grandi come General Luna per i servizi degli sportelli automatici.",
        language: "italian",
        question_number: 5,
        touristspot_number: 10
    },
    {
        id: 686,
        question: "どのようにそこに行けますか？",
        answer: "シャルガオのココナッツビューデッキは、シャルガオ周回道路沿いのジェネラル・ルナから25分の乗車です。旅行中に通り過ぎるはずです！",
        language: "japanese",
        question_number: 1,
        touristspot_number: 10
    },
    {
        id: 687,
        question: " 食事には何を期待すればよいですか？",
        answer: "ツアーには通常、地元のフィリピン料理の食事が含まれています。ココナッツツリービューポイントはランチの場所となるかもしれません。",
        language: "japanese",
        question_number: 2,
        touristspot_number: 10
    },
    {
        id: 688,
        question: " 安全状態はどうですか？",
        answer: "安全な訪問のために、天気を確認し、高い場所では注意が必要です。",
        language: "japanese",
        question_number: 3,
        touristspot_number: 10
    },
    {
        id: 689,
        question: " 医療が必要な場合はどうすればよいですか？",
        answer: "緊急の場合は、地元のスタッフに知らせ、911に電話し、近くの医療機関を知っておいてください。",
        language: "japanese",
        question_number: 4,
        touristspot_number: 10
    },
    {
        id: 690,
        question: " ココナッツツリービューポイントにはATMがありますか？",
        answer: "ココナッツツリービューポイントには独自のATMがないかもしれません。ATMサービスはジェネラル・ルナのような大きな町で確認してください。",
        language: "japanese",
        question_number: 5,
        touristspot_number: 10
    },
    {
        id: 691,
        question: "Como chegar lá?",
        answer: "O Coconut View Deck Siargao fica a 25 minutos de General Luna, ao longo da Siargao Circumferential Road. Você certamente passará por ele durante sua viagem!",
        language: "portuguese",
        question_number: 1,
        touristspot_number: 10
    },
    {
        id: 692,
        question: "O que devo esperar para comer?",
        answer: "Os passeios frequentemente incluem refeições com culinária local filipina. O Coconut Tree Viewpoint pode ser uma parada para o almoço.",
        language: "portuguese",
        question_number: 2,
        touristspot_number: 10
    },
    {
        id: 693,
        question: " Quais são as condições de segurança?",
        answer: "Verifique o clima e tenha cautela em pontos elevados para visitas seguras.",
        language: "portuguese",
        question_number: 3,
        touristspot_number: 10
    },
    {
        id: 694,
        question: "O que devo fazer se precisar de atendimento médico?",
        answer: "Em caso de emergência, informe a equipe local, ligue para o 911 e saiba onde ficam as instalações médicas próximas.",
        language: "portuguese",
        question_number: 4,
        touristspot_number: 10
    },
    {
        id: 695,
        question: "Há um caixa eletrônico na Coconut Tree Viewpoint?",
        answer: "O Coconut Tree Viewpoint pode não ter seu próprio caixa eletrônico. Verifique em cidades maiores, como General Luna, para serviços de caixa eletrônico.",
        language: "portuguese",
        question_number: 5,
        touristspot_number: 10
    },
    {
        id: 696,
        question: "Hvordan kommer man derhen?",
        answer: "Coconut View Deck Siargao er en 25-minutters køretur fra General Luna langs Siargao Circumferential Road. Du kommer forbi det under din rejse!",
        language: "danish",
        question_number: 1,
        touristspot_number: 10
    },
    {
        id: 697,
        question: "Hvad kan jeg forvente af mad?",
        answer: "Ture inkluderer ofte måltider med lokal filippinsk køkken. Coconut Tree Viewpoint kan være et stop til frokost.",
        language: "danish",
        question_number: 2,
        touristspot_number: 10
    },
    {
        id: 698,
        question: " Hvad er sikkerhedsforholdene?",
        answer: "Tjek vejret og vær forsigtig på høje punkter for sikre besøg.",
        language: "danish",
        question_number: 3,
        touristspot_number: 10
    },
    {
        id: 699,
        question: " Hvad skal jeg gøre, hvis jeg har brug for lægehjælp?",
        answer: "I tilfælde af nødsituationer skal du informere det lokale personale, ringe til 911 og kende til nærliggende medicinske faciliteter.",
        language: "danish",
        question_number: 4,
        touristspot_number: 10
    },
    {
        id: 700,
        question: " Er der en hæveautomat på Coconut Tree Viewpoint?",
        answer: "Coconut Tree Viewpoint har måske ikke sin egen hæveautomat. Tjek større byer som General Luna for hæveautomattjenester.",
        language: "danish",
        question_number: 5,
        touristspot_number: 10
    }
    
    
];

module.exports =  specificList;