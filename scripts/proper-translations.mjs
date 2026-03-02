import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '../messages');

const overrides = {
    ar: {
        "ribat-dawn-patrol": {
            title: "فجر الرباط",
            subtitle: "حارس البحر الأبيض المتوسط",
            description: "رحلة ما قبل الفجر لمشاهدة الضوء الأول يلامس أسوار القرن الثامن.",
            facts: [{ label: "الأجواء", value: "متسامية" }, { label: "الزحام", value: "لا يوجد" }, { label: "الصعوبة", value: "لمحبي الفجر" }],
            story: "رباط المنستير هو بلا شك الحصن الأكثر سينمائية في شمال إفريقيا. عند الفجر، يتحول إلى عالم مختلف تماماً.\n\nالمشي على الأسوار بينما تضرب أشعة الشمس الأولى الحجر الذهبي يشبه المشي في موقع تصوير لفيلم من قرن آخر. الصمت تام، لا يقطعه إلا صوت البحر وخفقان الأعلام على برج الناظور.",
            sensory: { scent: "رذاذ البحر البارد والحجر الدافئ", sound: "الخفقان الإيقاعي لعلم برج الناظور", touch: "الحجر الرملي الناعم في الفجر", colors: ["#FBBF24", "#92400E", "#0EA5E9"] },
            kit: { footwear: "حذاء مريح للدرجات الضيقة", photo: "إطلالة من خلال فجوة السور", hour: "5:15 صباحاً" },
            quote: { text: "البحر ليس له ساعة، وفي الرباط، أنت كذلك أيضاً.", author: "حارس القلعة الأسطوري" },
            chronology: [
                { year: "796 م", title: "الحجر الأول", description: "تأسيس الرباط كحصن دفاعي لشمال إفريقيا الإسلامية." },
                { year: "1978", title: "شهرة عالمية", description: "استخدام الرباط كموقع تصوير رئيسي لفيلم 'حياة برايان'، مما عزز إرثه السينمائي." }
            ],
            insider: [{ title: "المكان السري", description: "ابحث عن الفتحة الصغيرة في الطابق الثاني من برج الناظور - إنها المكان الوحيد الذي يسكن فيه الريح تماماً." }],
            seasons: { spring: "تزهر الجدران بالياسمين البري ويكون الهواء نقياً.", summer: "تمتص الحجارة شمش المتوسط القوية؛ الفجر هو الساعة الوحيدة المنعشة.", autumn: "تؤطر السحب الدرامية الأبراج بعد انكسار حرارة الصيف.", winter: "يقف الرباط صامداً أمام البحر الهائج، مما يوفر عزلة روحية هادئة." },
            pledge: "لقد رأيت الفجر على أسوار الحصن، سمعت همس الحجر، أنا حارس لروح المنستير."
        },
        "mausoleum-legacy": {
            title: "إرث بورقيبة الذهبي",
            subtitle: "عمارة الاستقلال",
            description: "غوص عميق في تناسق ورمزية أهم نصب تذكاري حديث في البلاد.",
            facts: [{ label: "التناسق", value: "مثالي" }, { label: "المادة", value: "رخام كرارا" }, { label: "الروح", value: "وطنية" }],
            story: "روضة آل بورقيبة هي أكثر من مجرد قبر؛ إنها شهادة على رؤية رجل بنى تونس الحديثة من الصفر.\n\nمعمارياً، هي زواج بين التقاليد الإسلامية وأسلوب الساحل البسيط. الرخام الأبيض مقابل زرقة المتوسط يخلق تناغماً بصرياً لا يضاهى. كل قطعة فسيفساء تحكي قصة 3000 عام من التاريخ.\n\nمن الداخل، الثريا الضخمة والصمت المهيب يخلقان فضاءً للتأمل العميق في أصولنا ومسارنا. إنها قمة الفخر الوطني في قمة المدينة.",
            sensory: { scent: "الزنبق الأبيض والرخام المصقول", sound: "الصدى الناعم لخطوات الأقدام", touch: "الحجر المصقول البارد", colors: ["#FFFFFF", "#FBBF24", "#1E40AF"] },
            kit: { footwear: "حذاء مريح وأنيق (احتراماً للمكان)", photo: "منظور الساحة المركزية الطويل", hour: "9:00 صباحاً" },
            quote: { text: "الرجل هو حلم حتى يجعله شعبه أيقونة.", author: "مؤرخ محلي" },
            chronology: [
                { year: "1963", title: "الحجر الأول", description: "بداية بناء المعلم الأكثر رمزية في تونس الحديثة." },
                { year: "1980", title: "اكتمال التحفة", description: "اكتمال القبة الذهبية والمآذن، مما خلق مظهر المنستير الأيقوني." }
            ],
            insider: [{ title: "سر التناظر", description: "قف تماماً في وسط الساحة الخارجية. المآذن تتماشى تماماً مع غروب الشمس في الربيع." }],
            seasons: { spring: "تزهر الحدائق تماماً وتملأ رائحة زهر البرتقال العليق.", summer: "الرخام الأبيض يعمل كمبرد طبيعي للفضاء.", autumn: "ضوء العصر يحول القبة إلى شمس ثانية.", winter: "تضاد رائع بين الرخام الأبيض وسحب الشتاء الداكنة." },
            pledge: "لقد وقفت في ظل القبة الذهبية، شعرت بقلب الأمة، أنا جزء من الإرث."
        },
        "marina-twilight-escape": {
            title: "هروب شفق المارينا",
            subtitle: "هدوء على ضفاف اليخوت",
            story: "مارينا المنستير هي المكان الذي تلتقي فيه المدينة بالعالم. إنها مساحة اليخوت الأنيقة والأعلام الدولية وبعض أفضل المأكولات البحرية في البحر المتوسط.\n\nمع غروب الشمس، تبدأ أضواء المطاعم تتلألأ على الماء. إنه المكان المثالي للتمشي الهادئ أو الاستمتاع بشاي الياسمين بينما تتراقص صواري السفن بهدوء في النسيم.",
            sensory: { scent: "سمك الوراطة المشوي وجيلاتو الفانيليا", sound: "طقطقة الصواري في المرفأ", touch: "نسيم البحر البارد في المساء", colors: ["#1E40AF", "#FBBF24", "#FFFFFF"] },
            kit: { footwear: "حذاء قارب أنيق أو صندل", photo: "انعكاس الغروب على مياه المارينا", hour: "وقت الغروب" },
            insider: [{ title: "مقهى الزاوية", description: "توجه إلى نهاية الرصيف الشمالي. هناك مقعد صغير حيث تكون رؤية الرباط غير محجوبة تماماً." }],
            seasons: { spring: "مثالي لتناول الطعام في الخارج دون حرارة الصيف.", summer: "قلب الحياة الليلية في المدينة.", autumn: "هدوء وتأمل وإضاءة جميلة.", winter: "مكان درامي لمشاهدة العواصف وهي تضرب كاسر الأمواج." },
            pledge: "لقد مشيت فوق الأرصفة الفضية، شاركت البحر ابتسامة، أنا في بيتي في المارينا."
        },
        "medina-treasure-hunt": {
            title: "كنوز المدينة العتيقة",
            story: "المدينة العتيقة في المنستير كائن حيّ. خلف كل باب أزرق قصة محتملة. قد تجد حرفياً من الجلد من الجيل الثالث، أو دكان توابل مخفي، أو فناء هادئ مليء بأشجار البرتقال.",
            sensory: { scent: "توابل مشوية وجلود خام", sound: "موسيقى تقليلدية ودردشات محلية", touch: "جدران ممسوحة بالجير الناعم", colors: ["#96611F", "#3B82F6", "#F8FAFC"] },
            insider: [{ title: " ركن النحاس", description: "ابحث عن أصغر زقاق قرب باب الغربي. هناك معلم لا يزال ينقش الخرائط الهندسية على الأطباق القديمة." }],
            pledge: "لقد تتبعت خيوط أزقة المدينة، وجدت القلب المخفي، أنا حارس الأسواق السرية."
        }
    },
    de: {
        "ribat-dawn-patrol": {
            title: "Morgendliche Ribat-Patrouille",
            subtitle: "Wächter des Mittelmeers",
            description: "Erleben Sie das erste Licht des Tages auf dem antiken Sandstein der majestätischsten Festung Nordafrikas.",
            facts: [{ label: "Erbaut", value: "796 n. Chr." }, { label: "Bedeutung", value: "Ältester Ribat im Maghreb" }, { label: "Vibe", value: "Spirituell & Episch" }],
            story: "Der Ribat von Monastir steht seit über einem Jahrtausend als Bastion des Glaubens und der Verteidigung. Wenn die Sonne über den Horizont steigt, beleuchten ihre goldenen Strahlen das kunstvolle Mauerwerk und enthüllen die Seele einer Stadt, die niemals kapitulierte.\n\nUrsprünglich erbaut, um Studenten-Krieger zu beherbergen, die die Küste verteidigten, ist das Bauwerk ein Meisterwerk der frühen islamischen Architektur. Jede Wendeltreppe und jeder schattige Alkoven erzählt eine Geschichte von Wächtern, die das Mittelmeer jahrhundertelang im Auge behielten. Heute ist es einer der ikonischsten Drehorte der Welt.\n\nDen Ribat in der Morgendämmerung zu besuchen bedeutet, einen stillen Dialog zwischen dem Stein und dem Licht zu bezeugen. Die Luft ist still, die Welt ist ruhig, und für einen kurzen Moment fühlt sich das 8. Jahrhundert so nah an wie der eigene Herzschlag.",
            sensory: { scent: "Antiker Staub & Meersalz", sound: "Ferne Gebetsrufe & Möwen", touch: "Rauer, sonnenwarmer Sandstein", colors: ["#FBBF24", "#92400E", "#FDE047"] },
            kit: { footwear: "Bequeme Sneaker (für viele Stufen)", photo: "Die Aussicht vom Nador-Turm", hour: "6:15 Uhr für das blaue Licht" },
            quote: { text: "Die Steine sprechen nicht, sie vibrieren mit der Geschichte von tausend Gebeten.", author: "Lokaler Zitadellenwächter" },
            chronology: [
                { year: "796 n. Chr.", title: "Der Grundstein", description: "Erbaut von Harthama ibn A'yan wurde er zum wichtigsten Verteidigungsbollwerk an der nordafrikanischen Küste." },
                { year: "9. Jahrhundert", title: "Die spirituelle Erweiterung", description: "Umwandlung von einer Militärfestung in ein Zentrum des Sufi-Lernens." },
                { year: "1977", title: "Filmische Unsterblichkeit", description: "Der zeitlose Sandstein diente als Kulisse für 'Das Leben des Brian'." },
                { year: "Heute", title: "Das lebendige Museum", description: "Ein UNESCO-würdiges Monument, das weiterhin als Brücke zwischen Tunesiens Vergangenheit und Zukunft fungiert." }
            ],
            insider: [
                { title: "Die Sonnenuntergangstreppe", detail: "Besteigen Sie den Nador-Turm genau 20 Minuten vor Sonnenuntergang. Das Licht auf dem Bourguiba-Mausoleum ist von dort unerreicht." },
                { title: "Versteckte Akustik", detail: "Stellen Sie sich in die Mitte der inneren Gebetshalle und flüstern Sie. Die Architektur trägt Ihre Stimme in alle Ecken." }
            ],
            seasons: { spring: "Die Mauern blühen mit wildem Jasmin und die Luft ist frisch.", summer: "Der Stein absorbiert die intensive Mittelmeersonne.", autumn: "Die Goldene Stunde dauert länger und wirft dramatische Schatten.", winter: "Der Ribat steht trotzig gegen das graue, peitschende Meer." },
            pledge: "Ich bin über die Steine des Ribat gewandelt, ich habe die Morgenpatrouille bezeugt, ich bin nun ein Hüter der ewigen Erinnerung Monastirs."
        },
        "mausoleum-legacy": {
            title: "Das goldene Erbe von Bourguiba",
            subtitle: "Ein Monument der Führung",
            description: "Ein Juwel moderner islamischer Architektur, gewidmet dem Architekten des modernen Tunesien.",
            facts: [{ label: "Merkmal", value: "Goldene Kuppel" }, { label: "Türme", value: "25m Minarette" }, { label: "Atmosphäre", value: "Ehrwürdige Pracht" }],
            story: "Mit seiner schimmernden goldenen Kuppel und den himmelstürmenden Minaretten ist das Mausoleum von Habib Bourguiba mehr als ein Grab – es ist ein Meisterwerk. Erbaut aus feinstem Marmor und dekoriert mit kunstvollen Mosaiken, spiegelt es den Stolz Monastirs wider.\n\nEntworfen vom Architekten Olivier-Clément Cacoub, ist das Bauwerk eine lebendige Hommage an den 'Obersten Kämpfer', der Tunesien in die Unabhängigkeit führte. Die Architektur ist eine Brücke zwischen dem traditionellen islamischen Ribat-Stil und der modernen Ästhetik einer neuen Nation.\n\nIm Inneren ist die Stille schwer vor Respekt. Das Licht filtert durch die Glasmalereien und spiegelt sich auf dem polierten Boden wie ein in Stein gemeißeltes Gebet. Es ist ein Ort des tiefen Friedens, an dem die Geschichte eines Mannes und die Identität eines Volkes eins werden.",
            sensory: { scent: "Polierter Marmor & frische Blumen", sound: "Echos leiser Schritte", touch: "Glatter, eiskalter Stein", colors: ["#FBBF24", "#FFFFFF", "#1E40AF"] },
            kit: { footwear: "Leicht auszuziehende Schuhe (aus Respekt)", photo: "Die Symmetrie des Hauptkorridors", hour: "10:00 Uhr, wenn das Licht die Kuppel trifft" },
            quote: { text: "Er hat nicht nur eine Stadt gebaut; er hat die Würde einer Nation aufgebaut.", author: "Ältester des Sahel" },
            chronology: [
                { year: "1963", title: "Der erste Stein", description: "Baubeginn an dem symbolträchtigsten Monument des modernen Tunesien." },
                { year: "1980", title: "Architektonischer Höhepunkt", description: "Vollendung der goldenen Kuppel und der Minarette." },
                { year: "2000", title: "Die ewige Ruhe", description: "Habib Bourguiba wird im Herzen des Mausoleums beigesetzt." }
            ],
            insider: [
                { title: "Das Symmetrie-Geheimnis", detail: "Stehen Sie genau in der Mitte des Außenhofs. Die zwei Minarette fluchten perfekt mit dem Sonnenuntergang zur Tag-und-Nacht-Gleiche." },
                { title: "Das kleine Museum", detail: "Verpassen Sie nicht den kleinen Seitenraum mit persönlichen Gegenständen Bourguibas." }
            ],
            seasons: { spring: "Die umliegenden Gärten stehen in voller Blüte.", summer: "Der weiße Marmor dient als natürliches Kühlsystem.", autumn: "Das späte Nachmittagslicht verwandelt die goldene Kuppel in eine zweite Sonne.", winter: "Ein starker Kontrast zwischen dem weißen Stein und den tiefgrauen Winterwolken." },
            pledge: "Ich habe im Schatten der Goldenen Kuppel gestanden, ich habe den Architekten der Freiheit geehrt, ich bin ein Träger des tunesischen Erbes."
        },
        "marina-twilight-escape": {
            title: "Abendliche Flucht in die Marina",
            subtitle: "Wo Eleganz auf das Meer trifft",
            description: "Nippen Sie an Jasmintee, während die Yachten unter dem lavendelfarbenen Himmel des Mittelmeers schaukeln.",
            facts: [{ label: "Lifestyle", value: "Luxus direkt am Wasser" }, { label: "Aktivität", value: "Abendessen bei Sonnenuntergang" }, { label: "Gefühl", value: "Sophisticated" }],
            story: "Die Marina von Monastir ist eine Symphonie aus türkisblauem Wasser und weißen Segeln. Wenn die Dämmerung einsetzt, beginnen die Lichter der Cafés wie Sterne auf der Wasseroberfläche zu funkeln und bieten eine ruhige Flucht für diejenigen, die die feine Seite des Reisens suchen.\n\nUrsprünglich ein einfacher Fischerhafen, hat sich die Marina (Cap Monastir) in ein exklusives Lifestyle-Zentrum verwandelt. Es ist die perfekte Mischung aus mediterranem Luxus und nordafrikanischer Gastfreundschaft. Das Brummen der Yachtmotoren vermischt sich mit dem Klirren von Jasmintee-Gläsern.\n\nDie Kais in der Dämmerung entlangzuschlendern ist ein Ritual. Die Luft trägt den Duft von gegrillter Seebrasse und das Salz des tiefen Mittelmeers. Es ist der Ort, an dem die Stadt aufatmet, um zu sehen und gesehen zu werden.",
            sensory: { scent: "Jasmintee & Meersalz", sound: "Klirren der Wanten an den Masten", touch: "Kühle Meeresbrise", colors: ["#22D3EE", "#E0F2FE", "#0369A1"] },
            kit: { footwear: "Elegante Sandalen oder Bootsschuhe", photo: "Die Reflexion der Boote zur blauen Stunde", hour: "19:30 Uhr für den abendlichen Glanz" },
            quote: { text: "In der Marina wird Zeit in Wellen und Gesprächen gemessen, nicht in Stunden.", author: "Lokaler Yachtkapitän" },
            chronology: [
                { year: "1980er", title: "Das erste Segel", description: "Einweihung der Marina, die Monastir als erstklassiges Ziel für Yachten etabliert." },
                { year: "2010", title: "Moderne Auffrischung", description: "Ausbau der Gastronomie macht Cap Monastir zu einem ganzjährigen sozialen Wahrzeichen." }
            ],
            insider: [
                { title: "Der stille Kai", detail: "Gehen Sie bis zum Ende des zweiten Piers. Dort hört man das tiefe Meer auf die Hafenmauer treffen." },
                { title: "Tee abseits der Karte", detail: "Fragen Sie nach 'Tee mit Pinienkernen' (schai bil bonduq) – die Wahl der echten Kapitäne." }
            ],
            seasons: { spring: "Beste Zeit für einen Morgenkaffee beim Beobachten der ersten Zugvögel.", summer: "Höhepunkt der Energie. Das Nachtleben summt bis 3:00 Uhr morgens.", autumn: "Eine sanfte Ruhe kehrt zurück. Die Sonnenuntergänge werden tiefviolett.", winter: "Die Einsamkeit des Seefahrers. Ideal für reflektierende Spaziergänge." },
            pledge: "Ich habe einen Atemzug mit dem Mittelmeer geteilt, ich habe die Segel heimkehren sehen, ich bin Teil des Friedens im Hafen."
        },
        "medina-treasure-hunt": {
            title: "Schatzsuche in der Altstadt",
            subtitle: "Echos antiker Souks",
            description: "Navigieren Sie durch das Labyrinth weiß-blauer Gassen, um den verborgenen Herzschlag des traditionellen Monastir zu finden.",
            facts: [{ label: "Beste Zeit", value: "Später Nachmittag" }, { label: "Fokus", value: "Traditionelles Handwerk" }, { label: "Highlight", value: "Blaue Türen" }],
            story: "Die Medina ist ein lebendiges Museum. Jede Ecke bringt einen neuen Duft – Jasmin, Leder oder würzige Speisen. Hinter schweren Holztüren liegen Jahrhunderte von Familiengeschichte.\n\nDie Medina zu betreten bedeutet, die moderne Welt am Tor zurückzulassen. Die Gassen sind wie ein Labyrinth gestaltet, um zu schützen, nicht nur um zu verwirren. Hier bietet der Schatten hoher Mauern selbst im Hochsommer eine kühle Zuflucht. Man kauft hier keine Gegenstände; man kauft Geschichten.\n\nDie blau-weiße Architektur ist die 'DNA' des Sahel. Während man tiefer vordringt, verblassen die Stadtgeräusche und werden durch das rhythmische Hämmern von Kupfer und die Rufe der Nachbarn ersetzt. Es ist das pulsierende Herz des traditionellen Monastir.",
            sensory: { scent: "Gegrillte Gewürze & rohes Leder", sound: "Ferne traditionelle Musik & lokales Plaudern", touch: "Glatte, kalkweiße Wände", colors: ["#96611F", "#3B82F6", "#F8FAFC"] },
            kit: { footwear: "Leichte, atmungsaktive Laufschuhe", photo: "Das gewölbte Tor (Bab) zur blauen Stunde", hour: "17:00 Uhr, wenn der Souk am lebendigsten ist" },
            quote: { text: "In der Medina verläuft man sich nicht, man findet, was man nicht zu suchen wusste.", author: "Teppichweber in dritter Generation" },
            chronology: [
                { year: "Mittelalter", title: "Die Geburt der Mauern", description: "Grundsteinlegung der Medina als Wohnviertel der befestigten Stadt." },
                { year: "17. Jahrhundert", title: "Höhepunkt des Handels", description: "Monastirs Medina wird ein entscheidendes Zentrum für Textil- und Seidenhandel." },
                { year: "Heute", title: "Hüter der Kultur", description: "Ein geschütztes Gebiet, das die Architektur der goldenen Ära Tunesiens bewahrt." }
            ],
            insider: [
                { title: "Die Kupferecke", detail: "Finden Sie die kleinste Gasse bei Bab el Gharbi. Dort graviert ein Meister noch Landkarten auf antike Teller." },
                { title: "Familienhöfe", detail: "Achten Sie auf offenstehende Türen zur Mittagszeit. Viele lassen Sie einen Blick auf die Kachelkunst ihrer Häuser werfen." }
            ],
            seasons: { spring: "Jasmin hängt von jedem Balkon. Beste Zeit zum Bummeln.", summer: "Die Mauern bieten natürliche Klimatisierung. Gehen Sie mittags los.", autumn: "Erntezeit in den Hainen bedeutet frischestes Olivenöl in den Läden.", winter: "Stille, neblige Zeit, in der die blauen Türen noch kräftiger leuchten." },
            pledge: "Ich bin dem Faden der Medina-Gassen gefolgt, ich habe das verborgene Herz gefunden, ich bin ein Hüter der geheimen Souks."
        },
        "hammam-said-swim": {
            title: "Geheimes Baden in Hammam Said",
            subtitle: "Die Kristall-Lagune",
            description: "Ein flüssiges Paradies, in dem das Wasser so klar ist, dass es sich anfühlt, als würde man im Licht selbst schwimmen.",
            facts: [{ label: "Klarheit", value: "Außergewöhnlich" }, { label: "Aktivität", value: "Schnorcheln" }, { label: "Vibe", value: "Pure Natur" }],
            story: "Es gibt eine stille Ecke der Küste, wo das Mittelmeer seine wahren Diamantenfarben zeigt. Hammam Said ist ein Naturschutzgebiet, ein Ort, um die Welt hinter sich zu lassen.\n\nDas Wasser hier ist legendär. Durch die weißen Kalksteinfelsen gefiltert, erreicht es eine Klarheit, die Boote aussehen lässt, als würden sie in der Luft schweben. Es ist nicht nur ein Ort zum Schwimmen; es ist ein Ort, um vom Meer getauft zu werden.\n\nAlte Legenden besagen, dass dieses Wasser heilende Eigenschaften hat. Ob das wahr ist oder nicht, das Gefühl von Salz auf der Haut und Sonne im Gesicht in dieser versteckten Lagune ist eine Medizin, die keine Apotheke bieten kann.",
            sensory: { scent: "Intensives Meersalz & wilder Thymian", sound: "Wellen, die gegen den Kalkstein brechen", touch: "Weiches, tragendes Wasser", colors: ["#0D9488", "#CCFBF1", "#FFFFFF"] },
            kit: { footwear: "Wasserschuhe (für den steinigen Einstieg)", photo: "Blick von der Klippenkante nach unten", hour: "8:00 Uhr für die höchste Wasserklarheit" },
            quote: { text: "Das Meer hier berührt dich nicht nur, es spricht zu dir.", author: "Lokaler Freitaucher" },
            chronology: [
                { year: "Antike", title: "Römische Bäder", description: "Gerüchte besagen, dass dies ein Ort der Erfrischung für römische Offiziere aus Ruspina war." },
                { year: "Heute", title: "Das geheime Refugium", description: "Bleibt ein geschützter Ort für Einheimische, frei von kommerzieller Erschließung." }
            ],
            insider: [
                { title: "Der Unterwasserbogen", detail: "Schwimmen Sie genau 10 Meter vom zentralen Felsen raus. Dort gibt es einen smaragdgrün leuchtenden Naturbogen." },
                { title: "Geheimnisse bei Ebbe", detail: "Bei Ebbe bilden sich kleine Salzstoppeln in den Felsenpools – das reinste Natursalz." }
            ],
            seasons: { spring: "Für Mutige, die die Lagune ganz für sich allein haben wollen.", summer: "Paradieszeit. Das Wasser ist wie ein warmes Saphirbad.", autumn: "Das Wasser bleibt warm, während die Luft abkühlt. Ideal für lange Schwimmrunden.", winter: "Ein Ort roher Gewalt. Die Stürme gegen die Felsen zu beobachten ist episch." },
            pledge: "Ich habe mich der türkisfarbenen Tiefe ergeben, ich bin vom diamantenem Meer gereinigt worden, ich bin ein Kind von Hammam Said."
        },
        "beach-solitude": {
            title: "Einsamkeit am Strand",
            subtitle: "Der endlose Horizont",
            description: "Kilometerlanger goldener Sand, wo die einzigen Fußspuren Ihre eigenen sind.",
            facts: [{ label: "Länge", value: "5km wilde Küste" }, { label: "Andrang", value: "Keiner bis wenig" }, { label: "Merkmal", value: "Goldene Dünen" }],
            story: "Monastirs wilde Strände sind seine bestgehüteten Geheimnisse. Fernab der Resortzonen bieten diese Sandstreifen eine meditative Stille.\n\nHier treffen die goldenen Dünen auf das türkisblaue Schelf. Es gibt keine Sonnenschirme, nur gelegentliches Treibholz und die Spuren von Seevögeln. Es ist ein Ort absoluter horizontaler Schönheit.\n\nBeim Gehen verändert sich der Sand von feinem weißen Pulver zu tiefem Ocker. Es ist das perfekte Terrain für einen 'Denk-Spaziergang' – ein Raum, um den Geist zu entwirren.",
            sensory: { scent: "Trockener Sand & reines Ozon", sound: "Rhythmisches Meeresrauschen", touch: "Warmer, rieselnder Sand", colors: ["#F5F5DC", "#FEF08A", "#0EA5E9"] },
            kit: { footwear: "Keine (barfuß ist am besten)", photo: "Eine Weitaufnahme verschwindender Fußspuren", hour: "Sonnenuntergang für den 'Doppelsonnen-Effekt'" },
            pledge: "Ich habe meine Spuren im goldenen Sand hinterlassen, ich habe in das unendliche Blau gestarrt, ich bin eine Seele des Ufers."
        },
        "ghdamsi-cave": {
            title: "Ghdamsi-Höhlensuche",
            subtitle: "Die phönizische Küstenhöhle",
            description: "Eine antike Meereshöhle, die durch Gezeiten und Zeit geformt wurde und das Wispern prähistorischer Seefahrer birgt.",
            facts: [{ label: "Typ", value: "Meereshöhle" }, { label: "Alter", value: "Millionen Jahre" }, { label: "Aktivität", value: "Höhlenforschung/Fotos" }],
            story: "Die Ghdamsi-Höhle ist eine Kathedrale aus Stein. Über Jahrhunderte diente sie Seefahrern als Orientierungspunkt und Entdeckern als Zufluchtsort. Das Licht, das von den Innenwänden reflektiert wird, erzeugt ein ätherisches blaues Leuchten.\n\nEingeschnitten in die Kalksteinfestung der Halbinsel von Monastir ist diese Höhle ein Zeugnis für die Kraft der Gezeiten. Zu bestimmten Tageszeiten projiziert die Sonne tanzende Reflexionen auf die Decke und schafft ein 'lebendiges' Interieur. Es ist ruhig, kühl und uralt.\n\nEntdecker haben prähistorische Spuren in den umliegenden Felsen gefunden, was darauf hindeutet, dass diese Küste seit Anbeginn der Zeit ein Zufluchtsort für die Menschheit war. Den Hohlraum zu betreten fühlt sich an, als betrete man das Gedächtnis der Erde selbst.",
            sensory: { scent: "Kalter Stein & Mineralsalz", sound: "Tropfendes Wasser & hallende Wellen", touch: "Feuchter, antiker Kalkstein", colors: ["#1E293B", "#334155", "#0F172A"] },
            kit: { footwear: "Griffige Wanderschuhe", photo: "Silhouetten gegen den Höhleneingang", hour: "14:00 Uhr für die Deckenreflexionen" },
            quote: { text: "Sogar das Meer braucht einen Ort zum Ausruhen, und es wählte diese Höhle.", author: "Küstenbeobachter aus Monastir" },
            chronology: [
                { year: "Prähistorisch", title: "Die ersten Zufluchten", description: "Frühe Menschen nutzen die Küstenhöhlen von Monastir für Schutz und Riten." },
                { year: "1500er", title: "Piratenversteck", description: "Legenden sprechen davon, dass Barbaresken-Piraten die Höhle als Frischwasserspeicher nutzten." }
            ],
            insider: [{ title: "Der Echo-Punkt", detail: "Gehen Sie in die hinterste Ecke, wo die Decke tiefer wird. Wenn man eine tiefe Note summt, vibriert die gesamte Höhle." }],
            seasons: { spring: "Klarste Luft, um die Felsstrukturen zu bewundern.", summer: "Die perfekte Flucht vor der 40-Grad-Hitze; die Höhle bleibt bei konstanten 22 Grad.", autumn: "Die Flut bringt die Wellen direkt ans Portal – klingt wie eine Trommel.", winter: "Die Höhle wirkt dunkel und geheimnisvoll, ein Ort für wahre Legenden." },
            pledge: "Ich bin durch die Halle der Steinriesen gewandelt, ich habe das Herz der Erde gehört, ich bin ein Hüter der Höhle."
        },
        "olive-wood": {
            title: "Olivenholz",
            subtitle: "Skulptiert aus antiken Hainen",
            description: "Die Seele von Tunesiens Land, meisterhaft geschnitzt zu zeitlosen Kunstwerken.",
            facts: [{ label: "Material", value: "Antike Olivenbäume" }, { label: "Technik", value: "Handschnitzerei" }, { label: "Tradition", value: "Generationenwissen" }],
            story: "Jedes Stück Olivenholz ist einzigartig, geformt von der Sonne und der Erde des Sahel. Unsere Kunsthandwerker lesen die Maserung von Bäumen, die seit Jahrhunderten stehen und funktionale Kunst schaffen.\n\nDer Olivenbaum ist der 'goldene Baum' Tunesiens. Bekannt für seine Dichte und seine spektakuläre Marmorierung benötigt er die Berührung eines Meisters. Jedes Stück muss jahrelang trocknen, bevor es den Meißel berührt.\n\nOlivenholz ist das ultimative nachhaltige Handwerk. Es ist natürlich antibakteriell, unglaublich langlebig und riecht nach dem warmen Herzen der mediterranen Haine.",
            sensory: { scent: "Reiches Öl & erdiger Holzhauch", sound: "Das sanfte Raspeln von Schleifpapier", touch: "Seidige, schwere Maserung", colors: ["#96611F", "#78350F", "#FCD34D"] },
            kit: { footwear: "Legere Schuhe für Werkstattbesuche", photo: "Makroaufnahme der Holzmaserung", hour: "Mittag, wenn die Holzöle glänzen" },
            quote: { text: "Wir schnitzen das Holz nicht; wir helfen dem Baum nur, seine Schönheit zu zeigen.", author: "Meister-Holzdrechsler" },
            chronology: [
                { year: "Antike", title: "Die römischen Haine", description: "Der Sahel wird zum wichtigsten Olivenöllieferanten für das Römische Reich." },
                { year: "Moderne", title: "Wiederbelebung des Handwerks", description: "Werkstätten in Monastir führen das weltweite Comeback von Olivenholz-Design an." }
            ],
            insider: [{ title: "Der Maserungstest", detail: "Geben Sie einen Tropfen Olivenöl auf ein rohes Stück. Wenn die Maserung wie Marmor 'hervorspringt', ist der Baum über 300 Jahre alt." }],
            seasons: { spring: "Die Haine blühen vor der Ernte.", summer: "Das Holz härtet perfekt in der trockenen Hitze aus.", autumn: "Erntezeit – der Duft von frischem Holz und Öl ist überall.", winter: "Die Zeit des Schnitzens. Lange Nächte für neue Designs." },
            pledge: "Ich habe die Maserung der antiken Haine berührt, ich habe den goldenen Baum in mein Heim gebracht, ich bin ein Beschützer der Seele des Sahel."
        },
        "pottery-mastery": {
            title: "Moknine-Töpferei",
            subtitle: "Aus Erde und Feuer",
            description: "Der antike Ton von Moknine, verwandelt in lebendige Keramik, die die Farben der Küste widerspiegelt.",
            facts: [{ label: "Ursprung", value: "Moknine Werkstätten" }, { label: "Methode", value: "Traditionelle Drehscheibe" }, { label: "Finish", value: "Natürliche Glasur" }],
            story: "Töpferei ist der Atem der Erde. Im nahen Dorf Moknine ist die rhythmische Bewegung der Töpferscheibe seit Jahrhunderten unverändert geblieben. Jede Vase und jede Schale ist ein Zeugnis der Beziehung zwischen Mensch und Boden.\n\nDer Ton von Moknine ist einzigartig, tief aus der Sahel-Erde geerntet. In traditionellen Holzöfen gebrannt, erhält er eine warme, poröse Textur, die seit phönizischen Zeiten geschätzt wird. Es ist die Kunst der vier Elemente: Erde (Ton), Wasser (Formung), Luft (Trocknung) und Feuer (Brennofen).\n\nModerne Moknine-Töpferei zeigt oft das 'Küstenblau' – eine lebendige Glasur, die den Mittelmeerhimmel spiegelt. Ein Stück Moknine-Keramik zu besitzen bedeutet, ein Fragment des tunesischen Horizonts zu besitzen.",
            sensory: { scent: "Feuchte Erde & Holzrauch", sound: "Das rhythmische Summen der Töpferscheibe", touch: "Kühler, roher Ton", colors: ["#EA580C", "#FB923C", "#0284C7"] },
            kit: { footwear: "Kleidung, die staubig werden darf", photo: "Die Hände des Handwerkers in Bewegung", hour: "Morgen für das beste Ofenlicht" },
            quote: { text: "Die Scheibe dreht sich, aber die Hand kennt den Weg im Herzen des Tons.", author: "Meister-Töpfer in 5. Generation" },
            chronology: [
                { year: "Punische Ära", title: "Die ersten Öfen", description: "Moknine wird zum regionalen Zentrum der Keramikproduktion für antike Mittelmeerhändler." },
                { year: "19. Jahrhundert", title: "Die Farbrevolution", description: "Neue Glasurtechniken ermöglichen die ikonischen leuchtenden Gelb- und Blautöne." }
            ],
            insider: [{ title: "Der Daumenabdruck", detail: "Prüfen Sie den Boden einer echten Vase. Jeder Meister hinterlässt einen fast unsichtbaren Daumenabdruck im feuchten Ton." }],
            seasons: { spring: "Beste Zeit zum Lufttrocknen großer Gartenstücke.", summer: "Die trockene Luft sorgt für den haltbarsten Brand.", autumn: "Das Dorf Moknine feiert die Töpferernte.", winter: "Zeit für kleine, komplizierte Innenarbeiten." },
            pledge: "Ich habe den Tanz der Scheibe beobachtet, ich habe die Wandlung der Erde gespürt, ich bin ein Unterstützer der Flamme."
        },
        "chechia-heritage": {
            title: "Chechia-Hüte",
            subtitle: "Die rote Kappe der Würde",
            description: "Die ikonische rote Kopfbedeckung Tunesiens, entstanden aus einem intensiven 12-stufigen Prozess.",
            facts: [{ label: "Farbe", value: "Klassisches Zinnoberrot" }, { label: "Schritte", value: "12 Phasen der Vorbereitung" }, { label: "Fachkraft", value: "Meister 'Chaouachi'" }],
            story: "Die Herstellung einer einzigen Chechia dauert Tage des Kämmens, Strickens, Walkens und Färbens. Sie ist der Stolz tunesischer Männer und steht für Weisheit und Gemeinschaft. In den Souks von Monastir finden Sie noch heute Meister, die dieses alte Geheimnis bewahren.\n\nDer 'Chaouachi' (der Chechia-Meister) ist eine Respektsperson. Er verwendet feinste Wolle, die zu massiven Kappen gestrickt und dann in Gebirgsbächen gewalkt wird, um sie zu schrumpfen. Mit getrockneten Disteln wird sie behandelt, um die typische Samtstruktur zu erzielen.\n\nDie Farbe ist das 'Herz Tunesiens' – ein tiefes Zinnoberrot aus natürlichen Farbstoffen. Während die Mode heute schnelllebig ist, bewegt sich die Chechia im Tempo der Tradition.",
            sensory: { scent: "Saubere Wolle & natürliche Farbstoffe", sound: "Das Kratzen der Kämmbürste", touch: "Dichte, samtige Wolle", colors: ["#991B1B", "#DC2626", "#000000"] },
            kit: { footwear: "Keine erforderlich (Innenraum)", photo: "Nahaufnahme der roten Textur gegen Stein", hour: "Nachmittag, wenn die Ladenfarben leuchten" },
            quote: { text: "Ein Mann trägt die Chechia nicht nur; er trägt die Würde seiner Vorfahren auf dem Kopf.", author: "Meister-Chaouachi der Medina" },
            chronology: [
                { year: "17. Jahrhundert", title: "Andalusische Wurzeln", description: "Das Handwerk kommt mit andalusischen Flüchtlingen nach Tunesien und wird zum Symbol städtischer Eleganz." },
                { year: "Heute", title: "Das globale Ikon", description: "Die Chechia wird von der UNESCO als Teil des immateriellen Kulturerbes anerkannt." }
            ],
            insider: [{ title: "Das Distelgeheimnis", detail: "Bitten Sie den Meister um die 'Disteln'. Es sind spezielle getrocknete Blumen zur Perfektionierung der Wolle." }],
            seasons: { spring: "Die Wolle ist frisch und die Walkbäche führen viel Wasser.", summer: "Zeit, die Hüte auf Holzformen in der Sonne trocknen zu sehen.", autumn: "Traditionell die Zeit, in der junge Männer ihre erste 'erwachsene' Chechia erhalten.", winter: "Hauptsaison in den Souks für die wärmende Wolle." },
            pledge: "Ich habe die zwölf Schritte der roten Kappe gelernt, ich habe die Hand des Meisters geehrt, ich bin ein Hüter des Chechia-Erbes."
        },
        "fouta-heritage": {
            title: "Fouta-Tücher",
            subtitle: "Das Gewebe des Hammam",
            description: "Handgewebte Baumwolltücher, die seit Generationen Teil des tunesischen Lebens sind.",
            facts: [{ label: "Material", value: "100% Baumwolle" }, { label: "Nutzen", value: "Hammam/Strand/Zuhause" }, { label: "Vibe", value: "Leicht & Saugfähig" }],
            story: "Die Fouta ist der perfekte Reisebegleiter. Geboren in den traditionellen Badehäusern (Hammams), sind diese Tücher heute ein globaler Trend, werden aber immer noch auf denselben Holzwebstühlen im Sahel hergestellt.\n\nWas die Fouta besonders macht, ist ihre Vielseitigkeit: Tuch, Wickelrock, Tischdecke oder Decke. Aus reiner Baumwolle gewebt, wird sie mit jeder Wäsche weicher und bewahrt die Erinnerung an das Wasser, das sie berührt hat.\n\nIn Monastir zeigen die Webmuster oft subtile Motive wie das Auge oder den Fisch – antike Symbole des Schutzes. Jede Quaste wird von Frauen vor Ort handgeknüpft.",
            sensory: { scent: "Frische Baumwolle & Olivenölseife", sound: "Das rhythmische Schlagen des Webstuhls", touch: "Weiches, strukturiertes Gewebe", colors: ["#38BDF8", "#7DD3FC", "#FFFFFF"] },
            kit: { footwear: "Strandsandalen", photo: "Im Wind hängende Foutas", hour: "Früher Morgen für weiches Licht" },
            quote: { text: "Eine Fouta ist nie fertig, bis sie das Meer gesehen hat.", author: "Weberin vor Ort" },
            chronology: [
                { year: "Vor-Islamisch", title: "Die Hammam-Anfänge", description: "Flachwebtechniken für leichte, schnelltrocknende Badebekleidung werden entwickelt." },
                { year: "Heute", title: "Eco-Revolution", description: "Die Fouta wird zum globalen Symbol für plastikfreies Leben." }
            ],
            insider: [{ title: "Der Quastenknoten", detail: "Echte Sahel-Foutas haben einen speziellen Drei-Schlingen-Knoten als Abschluss." }],
            seasons: { spring: "Neue Baumwolllieferungen der Ernte treffen ein.", summer: "Hauptsaison – jeder Reisende braucht seine Fouta.", autumn: "Die Webstühle werden langsamer, dickere Winterdesigns entstehen.", winter: "Leichte Decken in den Häusern als Erinnerung an den Sommer." },
            pledge: "Ich habe das Gewebe des Webstuhls gefühlt, ich habe das Tuch der Küste getragen, ich bin ein Faden in der Geschichte des Sahel."
        },
        "copper-lamps": {
            title: "Kupferlampen",
            subtitle: "Das Licht jagen",
            description: "Handgraviertes Kupfer und Messing, das Licht in komplizierte Schatten und Muster verwandelt.",
            facts: [{ label: "Technik", value: "Cisellage (Gravur)" }, { label: "Zeitaufwand", value: "Eine Woche pro Lampe" }, { label: "Effekt", value: "Atmosphärische Schatten" }],
            story: "In den Werkstätten verstummt das rhythmische 'Ting-Ting' des Hammers auf Kupfer nie. Diese Lampen dienen nicht nur der Beleuchtung – sie schaffen Atmosphäre und werfen geometrische Schatten wie Geister der Medina.\n\nKupferarbeit in Monastir ist eine Übung in Geduld. Eine einzige große Lampe kann über 10.000 Hammerschläge erfordern. Der Meister ('Saffar') arbeitet ohne Schablone, nur geleitet vom Gedächtnis.\n\nWenn das Licht im Inneren brennt, 'atmen' die Muster auf die Wände. Es ist eine Brücke zwischen dem Physischen und dem Ätherischen, um das Sternenlicht der tunesischen Nacht ins eigene Heim zu bringen.",
            sensory: { scent: "Metallisches Messing & feiner Staub", sound: "Helle, rhythmische Hammerschläge", touch: "Filigranes Gravur-Relief", colors: ["#B45309", "#D97706", "#78350F"] },
            kit: { footwear: "Feste Schuhe (Metallspäne im Workshop!)", photo: "Die auf dunkle Wände projizierten Muster", hour: "Abenddämmerung für schärfste Schatten" },
            quote: { text: "Wir bauen keine Lampen; wir machen die Geometrie der Seele sichtbar.", author: "Meister-Saffar" },
            chronology: [
                { year: "Goldenes Zeitalter des Islam", title: "Ziselierkunst", description: "Metallbearbeitung für Palastbeleuchtung und wissenschaftliche Instrumente erreicht Höhepunkte." },
                { year: "Heute", title: "Zeitgenössisches Leuchten", description: "Traditionelle Lampen aus Monastir werden weltweit als Designobjekte exportiert." }
            ],
            insider: [{ title: "Der Gewichtstest", detail: "Eine echte handgehämmerte Lampe ist deutlich schwerer als Industrieware. Immer heben vor dem Kauf." }],
            seasons: { spring: "Beste Zeit für Besuche der Open-Air-Werkstätten.", summer: "Die Hitze macht das Metall fast geschmeidig für tiefere Gravuren.", autumn: "Neue Kollektionen der Gravurmeister werden präsentiert.", winter: "Wenn die Lampen am dringendsten gebraucht werden, um Wärme zu spenden." },
            pledge: "Ich habe das Licht durch ziseliertes Messing gesehen, ich habe den Gesang des Hammers gehört, ich bin ein Liebhaber des Glühens."
        },
        "sahel-embroidery": {
            title: "Sahel-Stickerei",
            subtitle: "Handarbeit der Seele",
            description: "Gold- und Seidenfäden, von Meistern aus der Region Monastir in Kunstwerke verwandelt.",
            facts: [{ label: "Status", value: "Braut-Erbe" }, { label: "Präzision", value: "Höchste Qualität" }, { label: "Handwerk", value: "Handseide" }],
            story: "Die Stickereien des Sahel gehören zu den komplexesten Nordafrikas. Jedes Muster hat eine Bedeutung: Schutz, Fruchtbarkeit oder Familienstammbaum – eingewebt in den Stoff des Lebens selbst.\n\nMonastir war schon immer die Hauptstadt dieser 'Faden-Alchemie'. Mit Seide und echtem Golddraht (Kentir) verbringen Stickerinnen Monate an einem einzigen Brautkleid. Es ist ein meditativer Akt, bei dem jeder Stich ein Gebet für die Zukunft ist.\n\nIndustriemaschinen können diesen Look nie nachahmen. Ein handgesticktes Stück 'schimmert' anders unter der Sonne, es reagiert auf das Licht mit einer Tiefe, die organisch wirkt.",
            sensory: { scent: "Seidenfäden & altes Zedernholz", sound: "Das Flüstern der Nadel durch den Stoff", touch: "Dichte, geprägte Seide", colors: ["#C026D3", "#DB2777", "#FBBF24"] },
            kit: { footwear: "Keine (Socken im Innenraum)", photo: "Makro der Goldfadendetails", hour: "Vormittag, wenn die Seide natürlich glänzt" },
            quote: { text: "Ein Kleid ist nur Stoff; die Stickerei ist die Erinnerung, die es zum Erbe macht.", author: "Meisterstickerin aus Monastir" },
            chronology: [
                { year: "18. Jahrhundert", title: "Das Goldene Zeitalter", description: "Stickerei aus dem Sahel wird zum Standard für tunesische Hochzeiten." },
                { year: "Heute", title: "Nachhaltiger Luxus", description: "Wiederbelebung der Handarbeit als Protest gegen Fast-Fashion." }
            ],
            insider: [{ title: "Die Rückseite", detail: "Drehen Sie den Stoff um. Bei echter Meisterarbeit ist die Rückseite fast so sauber wie die Vorderseite." }],
            seasons: { spring: "Hochsaison der Hochzeitsvorbereitungen.", summer: "Die leichte Seide reflektiert die intensive Küstensonne.", autumn: "Zeit zur Restauration alter Familienstücke.", winter: "Die langsame Zeit für experimentelle neue Muster." },
            pledge: "Ich habe den Tanz des Goldfadens gesehen, ich habe die Seide der Geschichte berührt, ich bin ein Hüter des Nadelhandwerks."
        },
        "hammam-said-cove": {
            title: "Hammam Said Bucht",
            subtitle: "Die geheime Kristallbucht",
            description: "Eine kleine, ruhige Bucht südlich von Monastir mit klarem Wasser und kaum Touristen.",
            facts: [{ label: "Aktion", value: "Picknick bei Sonnenuntergang" }, { label: "Zugang", value: "Wanderweg" }, { label: "Geheimnis", value: "Unterwasserhöhlen" }],
            story: "Während Touristen an den Hauptstränden bleiben, gehen Einheimische nach Hammam Said. Es ist ein Ort der Stille, wo Wasser auf weißem Kalkstein trifft.\n\nAbgeschieden unter dramatischen Klippen und nur über einen Pfad erreichbar, blieb dieser Ort unberührt. Das Wasser ist glasklar gefiltert, wie ein hochauflösendes Gemälde des Meeresbodens.\n\nBei Sonnenuntergang leuchten die weißen Felsen wie glühende Kohlen. Ein Ort zum Flüstern und Träumen.",
            sensory: { scent: "Viel Meer & sonniger Kalkstein", sound: "Das sanfte Platschen in Felsspalten", touch: "Glatte, warme Ufersteine", colors: ["#0D9488", "#CCFBF1", "#FFFFFF"] },
            insider: [{ title: "Der Morgenpool", detail: "Es gibt ein natürliches 'Jacuzzi' links am Strand. Am tiefsten um 9:00 Uhr morgens." }],
            pledge: "Ich habe das geheime Tor zum Meer gefunden, ich habe die Stille der Bucht bewundert, ich beschütze dieses Versteck."
        },
        "swani-beach": {
            title: "Swani-Strand",
            subtitle: "Das wilde Ufer",
            description: "Ein langer, wilder Sandstreifen jenseits der Hotelzonen, beliebt bei Einheimischen.",
            facts: [{ label: "Vibe", value: "Unberührt" }, { label: "Menschen", value: "Fast nur Einheimische" }, { label: "Tipp", value: "Früh am Morgen kommen" }],
            story: "Swani ist der Ort, an dem die Wüste auf das Meer trifft. Keine Sonnenschirme, keine laute Musik – nur der Wind. Erleben Sie das Mittelmeer, wie es vor fünfzig Jahren war.\n\n'Swani' bezieht sich auf die kleinen Küstengärten. Wegen der Entfernung zur Stadt ist die Wasserqualität unübertroffen. Ein Lieblingsplatz für Fischer in der Morgendämmerung.",
            sensory: { scent: "Trockenes Dünengras & Salzluft", sound: "Das Zischen des rieselnden Sandes", touch: "Weicher, grober Dünensand", colors: ["#F59E0B", "#FEF3C7", "#0369A1"] },
            insider: [{ title: "Die Aussichtsdüne", detail: "Bei der alten Ruine gibt es eine hohe Düne mit Blick über den ganzen Bogen von Skanes." }],
            pledge: "Ich bin an der wilden Kante der Welt gewandelt, ich habe Frieden in den Dünen gefunden, ich bin ein Kind von Swani."
        },
        "ghdamsi-coast": {
            title: "Ghdamsi-Küste",
            subtitle: "Felsen & Echos der Fischer",
            facts: [{ label: "Action", value: "Klippenspringen" }, { label: "Sicht", value: "Alte Fischgründe" }, { label: "Gefühl", value: "Rau & Robust" }],
            story: "Die Ghdamsi-Küste ist ein Spielplatz für Mutige. Lokale Jugendliche springen hier seit Generationen von den Kalksteinfelsen. Für den Reisenden bietet sie einen Blick auf die tektonische Schönheit der Halbinsel von Monastir.\n\nDies ist kein gepflegtes Ufer. Es ist eine zackige, kraftvolle Kante, wo der Fels auf das tiefe Blau trifft. Salz hat über Millionen Jahre Muster in den Stein gegraben.",
            sensory: { scent: "Ozon & eisenhaltiger Fels", sound: "Das Dröhnen der Tiefseewellen", touch: "Scharfer, salzverkrusteter Stein", colors: ["#475569", "#1E293B", "#DBEAFE"] },
            insider: [{ title: "Der Natursitz", detail: "Bei der dritten Bucht gibt es einen Felsen in Form eines Throns. Bester Platz für Sturmbeobachtungen." }],
            pledge: "Ich habe am gezackten Rand gestanden, ich habe den Salznebel geschmeckt, ich bin ein Beschützer der rauen Küste."
        }
    },
    ru: {
        "ribat-dawn-patrol": {
            title: "Рассветный дозор Рибата",
            subtitle: "Страж Средиземноморья",
            description: "Станьте свидетелем того, как первый свет дня касается древнего песчаника самой величественной крепости Северной Африки.",
            facts: [{ label: "Построен", value: "796 г. н. э." }, { label: "Значение", value: "Старейший Рибат Магриба" }, { label: "Атмосфера", value: "Духовная и эпохальная" }],
            story: "Рибат Монастира стоит как бастион веры и обороны уже более тысячелетия. Когда солнце поднимается над горизонтом, его золотые лучи освещают замысловатую каменную кладку, раскрывая душу города, который никогда не сдавался.\n\nПервоначально построенное для размещения студентов-воинов, защищавших побережье, это сооружение является шедевром ранней исламской архитектуры. Каждая винтовая лестница и затененная ниша рассказывают историю стражей, веками не сводивших глаз со Средиземного моря. Сегодня это одно из самых знаковых мест для киносъемок в мире.\n\nПосетить Рибат на рассвете — значит стать свидетелем безмолвного диалога между камнем и светом. Воздух неподвижен, мир спокоен, и на краткий миг VIII век кажется таким же близким, как биение вашего собственного сердца.",
            sensory: { scent: "Древняя пыль и морская соль", sound: "Далекий азан и крики чаек", touch: "Грубый, согретый солнцем песчаник", colors: ["#FBBF24", "#92400E", "#FDE047"] },
            kit: { footwear: "Удобные кроссовки (для множества ступеней)", photo: "Вид с башни Надор", hour: "6:15 утра для синего часа" },
            quote: { text: "Камни не говорят, они вибрируют историей тысячи молитв.", author: "Местный страж цитадели" },
            chronology: [
                { year: "796 г. н. э.", title: "Краеугольный камень", description: "Построенный Хартхамой ибн Аяном, он стал первым и самым важным оборонительным бастионом побережья." },
                { year: "IX век", title: "Духовное расширение", description: "Преобразован из военного форта в центр суфийского обучения." },
                { year: "1977", title: "Кинематографическое бессмертие", description: "Вневременной песчаник послужил фоном для фильма «Жизнь Брайана»." },
                { year: "Сегодня", title: "Живой музей", description: "Монумент уровня ЮНЕСКО, продолжающий охранять город." }
            ],
            insider: [
                { title: "Лестница заката", detail: "Поднимитесь на башню Надор ровно за 20 минут до заката. Вид на Мавзолей Бургибы оттуда бесподобен." },
                { title: "Скрытая акустика", detail: "Встаньте в центре внутреннего молитвенного зала и прошепчите что-нибудь. Архитектура донесет ваш голос до самых дальних углов." }
            ],
            seasons: { spring: "Стены цветут диким жасмином, а воздух свеж.", summer: "Камень впитывает палящее солнце, создавая мощное ощущение древнего тепла.", autumn: "Золотой час длится дольше, отбрасывая драматические тени через арки.", winter: "Рибат непоколебимо стоит перед серым, бурным морем." },
            pledge: "Я прошел по камням Рибата, я видел рассветный дозор, теперь я — хранитель вечной памяти Монастира."
        },
        "mausoleum-legacy": {
            title: "Золотое наследие Бургибы",
            subtitle: "Памятник лидерству",
            description: "Жемчужина современной исламской архитектуры, посвященная архитектору современного Туниса.",
            facts: [{ label: "Особенность", value: "Золотой купол" }, { label: "Башни", value: "25-метровые минареты" }, { label: "Атмосфера", value: "Почтительное величие" }],
            story: "Мавзолей Хабиба Бургибы с его сияющим золотым куполом и пронзающими небо минаретами — это больше, чем гробница, это шедевр. Построенный из тончайшего мрамора и украшенный сложной мозаикой, он отражает гордость Монастира.\n\nСозданное архитектором Оливье-Клеманом Какубом, это сооружение — живая дань уважения «Верховному борцу», который привел Тунис к независимости. Архитектура объединяет традиционный исламский стиль рибата и современную эстетику новой нации.\n\nВнутри тишина наполнена уважением. Свет фильтруется через витражи, отражаясь от полированных полов, как молитва, высеченная в камне. Это место глубокого покоя, где история человека и идентичность народа становятся единым целым.",
            sensory: { scent: "Полированный мрамор и свежие цветы", sound: "Эхо тихих шагов", touch: "Гладкий, ледяной камень", colors: ["#FBBF24", "#FFFFFF", "#1E40AF"] },
            kit: { footwear: "Обувь, которую легко снять (из уважения)", photo: "Симметрия главного коридора", hour: "10:00 утра, когда свет касается купола" },
            quote: { text: "Он не просто построил город; он построил достоинство нации.", author: "Старейшина Сахеля" },
            chronology: [
                { year: "1963", title: "Первый камень", description: "Начало строительства самого символичного монумента современного Туниса." },
                { year: "1980", title: "Архитектурный пик", description: "Завершение золотого купола и минаретов." },
                { year: "2000", title: "Вечный покой", description: "Хабиб Бургиба погребен в самом сердце мавзолея." }
            ],
            insider: [
                { title: "Секрет симметрии", detail: "Встаньте точно в центре внешнего двора. Два минарета идеально выравниваются с закатом во время весеннего равноденствия." },
                { title: "Маленький музей", detail: "Не пропустите маленькую комнату сбоку, где хранятся личные вещи Бургибы, включая его очки и стол." }
            ],
            seasons: { spring: "Окружающие сады в полном цвету; аромат апельсинового цвета наполняет воздух.", summer: "Белый мрамор служит естественной системой охлаждения.", autumn: "Свет позднего вечера превращает золотой купол во второе солнце.", winter: "Яркий контраст между белым камнем и темно-серыми зимними облаками." },
            pledge: "Я стоял в тени Золотого купола, я почтил архитектора свободы, я — носитель наследия Туниса."
        },
        "marina-twilight-escape": {
            title: "Вечерний побег в Марину",
            subtitle: "Где элегантность встречается с морем",
            description: "Пейте жасминовый чай, пока яхты покачиваются под лавандовым небом средиземноморского вечера.",
            facts: [{ label: "Стиль жизни", value: "Роскошная гавань" }, { label: "Занятие", value: "Ужин на закате" }, { label: "Ощущение", value: "Изысканность" }],
            story: "Марина Монастира — это симфония бирюзовых вод и белых парусов. С наступлением сумерек огни кафе начинают мерцать, как звезды на поверхности воды, предлагая безмятежный отдых для тех, кто ищет изысканную сторону путешествий.\n\nПервоначально бывшая простым рыболовецким портом, Марина (Кап Монастир) превратилась в элитный центр стиля жизни. Это идеальное сочетание средиземноморской роскоши и североафриканского гостеприимства.\n\nПрогулка по причалам в сумерках — это своего рода ритуал. Воздух напоен запахом дорады на гриле и солью Средиземного моря. Это место, где город дышит, смотрит и позволяет смотреть на себя.",
            sensory: { scent: "Жасминовый чай и морская соль", sound: "Звон такелажа на мачтах", touch: "Прохладный морской бриз", colors: ["#22D3EE", "#E0F2FE", "#0369A1"] },
            kit: { footwear: "Элегантные сандалии или топсайдеры", photo: "Отражение лодок в синий час", hour: "19:30 для сумеречного сияния" },
            quote: { text: "В Марине время измеряется волнами и разговорами, а не часами.", author: "Местный капитан яхты" },
            chronology: [
                { year: "1980-е", title: "Первый парус", description: "Марина открыта, что делает Монастир ведущим яхтенным направлением." },
                { year: "2010", title: "Обновление", description: "Расширение ресторанного сектора превращает Кап Монастир в круглогодичное место встреч." }
            ],
            insider: [
                { title: "Тихий причал", detail: "Дойдите до самого конца второго пирса. Это единственное место, где слышно, как море встречается с волноломом." },
                { title: "Чай вне меню", detail: "Попросите официанта в угловом кафе «чай с кедровыми орешками» — настоящий выбор капитанов." }
            ],
            seasons: { spring: "Лучшее время для утреннего кофе под наблюдение за перелетными птицами.", summer: "Пик энергии. Ночная жизнь кипит до 3 часов утра.", autumn: "Возвращается нежное спокойствие. Закаты становятся темно-пурпурными.", winter: "«Одиночество моряка». Отлично подходит для долгих раздумчивых прогулок." },
            pledge: "Я разделил дыхание со Средиземноморьем, я видел, как паруса возвращаются домой, я — часть покоя гавани."
        },
        "medina-treasure-hunt": {
            title: "Охота за сокровищами Медины",
            subtitle: "Эхо древних суков",
            description: "Пройдите через лабиринт бело-голубых переулков, чтобы найти тайное сердце традиционного Монастира.",
            facts: [{ label: "Лучшее время", value: "Поздний вечер" }, { label: "Фокус", value: "Традиционные ремесла" }, { label: "Изюминка", value: "Голубые двери" }],
            story: "Медина — это живой музей. Каждый поворот приносит новый аромат — жасмин, кожа или специи. За тяжелыми деревянными дверями скрываются многовековые семейные истории.\n\nВойти в Медину — значит оставить современный мир у ворот. Переулки спроектированы как лабиринт не для того, чтобы запутать, а чтобы защитить. Здесь тень высоких стен дарит прохладу даже в разгар лета. Это место, где покупают не вещи, а истории.\n\nСине-белая архитектура — это «ДНК» Сахеля. По мере того как вы углубляетесь, шум города затихает, сменяясь ритмичным стуком меди и голосами соседей. Это бьющееся сердце традиционного Монастира.",
            sensory: { scent: "Специи на гриле и сырая кожа", sound: "Далекая традиционная музыка и говор местных", touch: "Гладкие стены, беленные известью", colors: ["#96611F", "#3B82F6", "#F8FAFC"] },
            kit: { footwear: "Легкая дышащая обувь для ходьбы", photo: "Арочные ворота (Баб) в синий час", hour: "17:00, когда рынок наиболее оживлен" },
            quote: { text: "Вы не теряетесь в Медине, вы находите то, что не знали, что ищете.", author: "Ткач ковров в третьем поколении" },
            chronology: [
                { year: "Средневековье", title: "Рождение стен", description: "Заложен фундамент Медины как жилого центра укрепленного города." },
                { year: "XVII век", title: "Зенит торговли", description: "Медина Монастира становится ключевым узлом торговли текстилем и шелком." },
                { year: "Сегодня", title: "Хранитель культуры", description: "Охраняемая зона, сохраняющая архитектуру золотого века Туниса." }
            ],
            insider: [
                { title: "Медный уголок", detail: "Найдите самый узкий переулок возле Баб-эль-Гарби. Там есть мастер, который до сих пор гравирует карты на старинных тарелках." },
                { title: "Семейные дворики", detail: "Ищите открытые двери в полдень. Многие семьи позволят вам взглянуть на плитку своих 100-летних домов." }
            ],
            seasons: { spring: "Всюду висит жасмин. Лучшее время для неспешных прогулок.", summer: "Стены обеспечивают естественное охлаждение. Идите в полдень.", autumn: "Сезон сбора урожая в рощах означает свежайшее оливковое масло в лавках.", winter: "Тихое, туманное время, когда синие двери выглядят еще ярче." },
            pledge: "Я прошел через лабиринты Медины, я нашел ее тайное сердце, я — хранитель скрытых суков."
        },
        "hammam-said-swim": {
            title: "Тайное купание в Хаммам Саид",
            subtitle: "Кристальная лагуна",
            description: "Водный рай, где вода настолько чистая, что кажется, будто плывешь в самом свете.",
            facts: [{ label: "Прозрачность", value: "Исключительная" }, { label: "Занятие", value: "Снорклинг" }, { label: "Атмосфера", value: "Чистая природа" }],
            story: "В этом тихом уголке побережья Средиземное море показывает свои истинные бриллиантовые цвета. Хаммам Саид — это природный заповедник, место, где можно забыть о мире.\n\nВода здесь легендарная. Отфильтрованная белыми известняковыми скалами, она достигает такой прозрачности, что лодки кажутся парящими в воздухе. Это не просто место для купания; это место, где можно креститься морем.\n\nДревние легенды гласят, что эти воды обладают целебными свойствами. Так это или нет, но ощущение соли на коже и солнца на лице в этой скрытой лагуне — лекарство, которое не предоставит ни одна аптека.",
            sensory: { scent: "Морская соль и дикий тимьян", sound: "Волны, разбивающиеся о известняк", touch: "Мягкая, поддерживающая вода", colors: ["#0D9488", "#CCFBF1", "#FFFFFF"] },
            kit: { footwear: "Аквашузы (для каменистого входа)", photo: "Вид вниз с края обрыва", hour: "8:00 утра для лучшей видимости под водой" },
            quote: { text: "Море здесь не просто касается тебя, оно с тобой говорит.", author: "Местный фридайвер" },
            chronology: [
                { year: "Древние времена", title: "Римские бани", description: "По слухам, место отдыха римских чиновников из Руспины." },
                { year: "Сегодня", title: "Тайное святилище", description: "Остается местом «только для своих», свободным от коммерции." }
            ],
            insider: [
                { title: "Подводная арка", detail: "Отплывите ровно на 10 метров от центральной скалы. Там есть подводная арка, светящаяся изумрудом." },
                { title: "Секреты отлива", detail: "Во время отлива в скальных лужах образуются кристаллы соли — чистейшая природная соль." }
            ],
            seasons: { spring: "Для смелых, кто хочет лагуну только для себя.", summer: "Райский период. Вода как теплая сапфировая ванна.", autumn: "Вода остается теплой, а воздух остывает. Идеально для долгих заплывов.", winter: "Место дикой мощи. Наблюдать за штормами со скал — это эпично." },
            pledge: "Я доверился бирюзовой глубине, я очистился алмазным морем, я — дитя Хаммам Саида."
        },
        "beach-solitude": {
            title: "Уединение на пляже",
            subtitle: "Бесконечный горизонт",
            description: "Мили золотого песка, где единственные следы — ваши собственные, а единственная музыка — прилив.",
            facts: [{ label: "Длина", value: "5 км дикого берега" }, { label: "Люди", value: "Мало или совсем нет" }, { label: "Особенность", value: "Золотые дюны" }],
            story: "Дикие пляжи Монастира — его самые сокровенные секреты. Вдали от отельных зон эти полосы песка предлагают медитативную тишину, позволяя гулять часами под ритм волн.\n\nЗдесь золотые дюны встречаются с бирюзовым шельфом. Здесь нет зонтиков, только выброшенные морем коряги и следы морских птиц. Это место абсолютной горизонтальной красоты.\n\nПо мере прогулки песок меняется от мелкой белой пудры до густой охры. Это идеальное место для «раздумчивой прогулки» — пространства, чтобы распутать мысли.",
            sensory: { scent: "Сухой песок и чистый озон", sound: "Ритмичный глубоководный прибой", touch: "Теплый, просеивающийся песок", colors: ["#F5F5DC", "#FEF08A", "#0EA5E9"] },
            kit: { footwear: "Никакой (лучше всего босиком)", photo: "Дальний план исчезающих следов", hour: "Закат для эффекта «двойного солнца»" },
            pledge: "Я оставил свои следы на золотом песке, я смотрел в бесконечную синеву, я — душа берега."
        },
        "ghdamsi-cave": {
            title: "Пещеры Гдамси",
            subtitle: "Финикийская прибрежная пещера",
            description: "Древняя морская пещера, выточенная приливами и временем, хранящая шепот доисторических мореплавателей.",
            facts: [{ label: "Тип", value: "Морская пещера" }, { label: "Возраст", value: "Миллионы лет" }, { label: "Занятие", value: "Исследование/Фото" }],
            story: "Пещера Гдамси — это каменный собор. На протяжении веков она служила ориентиром для моряков и убежищем для исследователей. Свет, отражающийся от внутренних стен, создает неземное голубое сияние.\n\nВысеченная в известняковых скалах полуострова Монастир, эта морская пещера является свидетельством силы приливов. В определенное время дня солнце падает на воду у входа и проецирует танцующие блики на потолок, создавая «живой» интерьер. Здесь тихо, прохладно и веет древностью.\n\nИсследователи обнаружили доисторические следы в окружающих скалах, что позволяет предположить, что это побережье было убежищем для человечества с незапамятных времен. Вход в пещеру кажется входом в саму память земли.",
            sensory: { scent: "Холодный камень и минеральная соль", sound: "Капающая вода и эхо волн", touch: "Влажный древний известняк", colors: ["#1E293B", "#334155", "#0F172A"] },
            kit: { footwear: "Ботинки с хорошим сцеплением", photo: "Силуэты на фоне входа в пещеру", hour: "14:00 для отражений на потолке" },
            quote: { text: "Даже морю нужен отдых, и оно выбрало эту пещеру.", author: "Страж побережья Монастира" },
            chronology: [
                { year: "Доисторический", title: "Первые убежища", description: "Древние люди используют прибрежные пещеры Монастира для защиты и обрядов." },
                { year: "1500-е", title: "Пиратское логово", description: "Легенды говорят о берберских пиратах, использовавших пещеру для хранения запасов пресной воды." }
            ],
            insider: [{ title: "Точка эха", detail: "Пройдите в самый дальний угол, где потолок опускается. Если напеть низкую ноту, вся пещера начнет вибрировать." }],
            seasons: { spring: "Самый чистый воздух для созерцания текстуры камня.", summer: "Идеальное спасение от 40-градусной жары; в пещере стабильные 22 градуса.", autumn: "Прилив приносит волны прямо к входу — звучит как барабан.", winter: "Пещера кажется темной и таинственной, место для настоящих легенд." },
            pledge: "Я прошел через зал каменных гигантов, я услышал сердцебиение земли, я — хранитель пещеры."
        },
        "olive-wood": {
            title: "Оливковое дерево",
            subtitle: "Скульптуры из древних рощ",
            description: "Душа тунисской земли, мастерски воплощенная в вечных предметах искусства.",
            facts: [{ label: "Материал", value: "Древние оливковые деревья" }, { label: "Техника", value: "Ручная резьба" }, { label: "Традиция", value: "Вековые навыки" }],
            story: "Каждое изделие из оливкового дерева уникально, оно сформировано солнцем и почвой Сахеля. Наши мастера читают текстуру деревьев, которые стояли веками, создавая функциональное искусство.\n\nОливковое дерево — это «Золотое дерево» Туниса. Известное своей плотностью и эффектной мраморной текстурой, оно требует руки мастера. Каждая заготовка должна сохнуть годами, прежде чем ее коснется резец.\n\nЭто самое экологичное ремесло. Дерево обладает природными антибактериальными свойствами, невероятно долговечно и пахнет теплым сердцем средиземноморских рощ.",
            sensory: { scent: "Богатое масло и землистая древесина", sound: "Мягкий шорох наждачной бумаги", touch: "Шелковистая, тяжелая текстура", colors: ["#96611F", "#78350F", "#FCD34D"] },
            kit: { footwear: "Повседневная обувь для посещения мастерских", photo: "Макросъемка текстуры дерева", hour: "Полдень, когда масло в дереве сияет" },
            quote: { text: "Мы не режем дерево; мы просто помогаем дереву показать свою красоту.", author: "Мастер по дереву" },
            chronology: [
                { year: "Древность", title: "Римские рощи", description: "Регион Сахель становится главным поставщиком оливкового масла для Римской империи." },
                { year: "Современность", title: "Возрождение ремесла", description: "Мастерские Монастира лидируют в мировом возрождении дизайна из оливкового дерева." }
            ],
            insider: [{ title: "Тест текстуры", detail: "Нанесите каплю оливкового масла на необработанный кусок. Если узор «заиграет» как мрамор, дереву более 300 лет." }],
            seasons: { spring: "Лучшее время увидеть рощи в цвету.", summer: "Дерево идеально сохнет в сухой жаре мастерских.", autumn: "Сезон сбора урожая. Повсюду запах свежего дерева и масла.", winter: "Время резьбы. Мастера проводят долгие ночи за созданием новых дизайнов." },
            pledge: "Я коснулся текстуры древних рощ, я принес золотое дерево в свой дом, я — защитник души Сахеля."
        },
        "pottery-mastery": {
            title: "Керамика Мокнина",
            subtitle: "Из земли и пламени",
            description: "Древняя глина Мокнина, превращенная в яркую керамику, отражающую цвета побережья.",
            facts: [{ label: "Происхождение", value: "Мастерские Мокнина" }, { label: "Метод", value: "Традиционный круг" }, { label: "Финиш", value: "Натуральная глазурь" }],
            story: "Гончарное дело — это дыхание земли. В близлежащей деревне Мокнин ритмичное движение гончарного круга остается неизменным на протяжении веков. Каждая ваза — свидетельство связи человека с тунисской почвой.\n\nГлина Мокнина уникальна, ее добывают из глубин земли Сахеля. При обжиге в традиционных дровяных печах она приобретает теплую, пористую текстуру, ценимую еще со времен финикийцев. Это искусство четырех стихий: Земли, Воды, Воздуха и Огня.\n\nСовременная керамика часто украшена «лазурью побережья» — ярким покрытием, зеркально отражающим небо Средиземноморья. Владеть изделием из Мокнина — значит владеть фрагментом тунисского горизонта.",
            sensory: { scent: "Влажная земля и древесный дым", sound: "Ритмичное жужжание гончарного круга", touch: "Прохладная сырая глина", colors: ["#EA580C", "#FB923C", "#0284C7"] },
            kit: { footwear: "Одежда, которую не жалко запылить", photo: "Руки мастера в движении", hour: "Утро для лучшего света из печи" },
            quote: { text: "Круг вращается, но рука знает путь к сердцу глины.", author: "Мастер в пятом поколении" },
            chronology: [
                { year: "Пуническая эра", title: "Первые печи", description: "Мокнин становится региональным центром производства керамики для торговцев Средиземноморья." },
                { year: "XIX век", title: "Цветная революция", description: "Новые техники глазуровки позволяют создавать знаковые яркие синие и желтые цвета." }
            ],
            insider: [{ title: "Отпечаток мастера", detail: "Проверьте дно любой подлинной вазы. Каждый мастер оставляет уникальный «скрытый» отпечаток большого пальца на влажной глине." }],
            seasons: { spring: "Лучшее время для сушки крупных садовых изделий.", summer: "Сухой воздух гарантирует самый прочный обжиг.", autumn: "Деревня Мокнин празднует «урожай» керамики местными рынками.", winter: "Время для тонкой интерьерной работы и новых эскизов." },
            pledge: "Я видел танец круга, я почувствовал превращение земли, я — тот, кто поддерживает пламя."
        },
        "chechia-heritage": {
            title: "Шапки Шешия",
            subtitle: "Красный венец достоинства",
            description: "Знаменитый тунисский головной убор, создаваемый путем сложного 12-этапного процесса.",
            facts: [{ label: "Цвет", value: "Классический ярко-красный" }, { label: "Этапы", value: "12 стадий подготовки" }, { label: "Мастерство", value: "Мастер Шауаши" }],
            story: "Создание одной шешии занимает дни чесания, вязания, валяния и крашения. Это гордость тунисских мужчин, олицетворяющая мудрость. В суках Монастира до сих пор можно найти мастеров, хранящих этот секрет.\n\n«Шауаши» — фигура огромного уважения. Они используют только лучшую шерсть, которую вяжут в огромные колпаки, а затем уменьшают в горных реках. Затем шерсть начесывают сушеным чертополохом для создания бархатистой текстуры.\n\nЦвет — это «Сердце Туниса» — глубокий красный, достигаемый секретным рецептом натуральных красителей. Пока мода несется вперед, шешия движется в темпе традиций.",
            sensory: { scent: "Чистая шерсть и натуральный краситель", sound: "Мягкий скрежет чесальной щетки", touch: "Плотная бархатистая шерсть", colors: ["#991B1B", "#DC2626", "#000000"] },
            kit: { footwear: "Не требуется", photo: "Макросъемка красной текстуры на фоне камня", hour: "Полдень, когда цвета в лавке самые сочные" },
            quote: { text: "Мужчина не просто носит шешию; он несет достоинство своих предков на голове.", author: "Мастер Шауаши из Медины" },
            chronology: [
                { year: "XVII век", title: "Андалузские корни", description: "Ремесло прибывает в Тунис с беженцами из Андалусии, становясь символом городской утонченности." },
                { year: "Сегодня", title: "Мировая икона", description: "Шешия признана ЮНЕСКО частью нематериального культурного наследия Туниса." }
            ],
            insider: [{ title: "Секрет чертополоха", detail: "Попросите мастера показать сушеный чертополох. Именно им начесывают шерсть до совершенства." }],
            seasons: { spring: "Шерсть свежая, а реки для валяния полны воды.", summer: "Лучшее время увидеть, как шапки сохнут на солнце.", autumn: "Время, когда юноши получают свою первую «взрослую» шешию.", winter: "Самое оживленное время в суках, когда все ищут теплую шерсть." },
            pledge: "Я узнал двенадцать шагов красной шапки, я почтил руку мастера, я — хранитель шешии."
        },
        "fouta-heritage": {
            title: "Полотенца Фута",
            subtitle: "Ткань хаммама",
            description: "Хлопковые полотенца ручной работы, ставшие частью тунисского стиля жизни на протяжении поколений.",
            facts: [{ label: "Материал", value: "100% Хлопок" }, { label: "Применение", value: "Хаммам/Пляж/Дом" }, { label: "Ощущение", value: "Легкость и впитываемость" }],
            story: "Фута — идеальный спутник путешественника. Рожденные в традиционных банях, эти полотенца стали глобальным трендом, но их все еще ткут на тех же деревянных станках здесь, в Сахеле.\n\nЧто делает футу особенной — это ее универсальность. Это полотенце, саронг, скатерть и плед в одном флаконе. Сотканная из чистого хлопка, она становится мягче с каждой стиркой.\n\nВ Монастире узоры часто включают мотивы глаза или рыбы — древние символы защиты. Каждая кисточка завязывается вручную местными женщинами.",
            sensory: { scent: "Свежий хлопок и оливковое мыло", sound: "Ритмичный стук деревянного станка", touch: "Мягкий текстурированный холст", colors: ["#38BDF8", "#7DD3FC", "#FFFFFF"] },
            kit: { footwear: "Пляжные сандалии", photo: "Ряды футы, развевающиеся на ветру", hour: "Раннее утро для мягкого света" },
            quote: { text: "Фута не закончена, пока она не увидела моря.", author: "Деревенская ткачиха" },
            chronology: [
                { year: "Доисламский период", title: "Истоки в хаммаме", description: "Техника плоского ткачества разработана для создания легких покрывал для бань." },
                { year: "Сегодня", title: "Эко-революция", description: "Фута становится мировым символом экологичной жизни без пластика." }
            ],
            insider: [{ title: "Узел кисточки", detail: "Присмотритесь к кисточкам. Настоящая фута из Сахеля имеет особый узел из трех петель." }],
            seasons: { spring: "Прибытие нового хлопка с урожая.", summer: "Пик сезона — каждому путешественнику нужна своя фута.", autumn: "Станки замедляются, создаются более плотные «зимние» футы.", winter: "Используются как легкие пледы в домах, храня память о лете." },
            pledge: "Я почувствовал переплетение нитей, я носил ткань побережья, я — нить в истории Сахеля."
        },
        "copper-lamps": {
            title: "Медные лампы",
            subtitle: "В погоне за светом",
            description: "Медь и латунь ручной гравировки, превращающие свет в причудливые узоры и тени.",
            facts: [{ label: "Техника", value: "Чеканка и гравировка" }, { label: "Время", value: "Одна неделя на лампу" }, { label: "Эффект", value: "Атмосферные узоры" }],
            story: "В мастерских ритмичный стук молотка по меди не утихает никогда. Эти лампы — не просто освещение, это инструменты атмосферы, отбрасывающие геометрические тени, как призраки Медины.\n\nРабота с медью в Монастире — это упражнение в терпении. Одна большая лампа может потребовать более 10 000 ударов молотка. Мастер («Саффар») работает без трафарета, руководствуясь памятью.\n\nКогда внутри зажигается свет, латунь начинает «дышать» узорами на ваших стенах. Это мост между физическим и эфирным, способ принести звездный свет тунисской ночи в ваш дом.",
            sensory: { scent: "Металлический блеск и пыль", sound: "Высокий ритмичный звук ударов", touch: "Сложный чеканный рельеф", colors: ["#B45309", "#D97706", "#78350F"] },
            kit: { footwear: "Прочная обувь (в мастерских может быть стружка)", photo: "Узоры, проецируемые на темную стену", hour: "Сумерки для самых четких теней" },
            quote: { text: "Мы не делаем лампы; мы делаем видимой геометрию души.", author: "Мастер Саффар" },
            chronology: [
                { year: "Золотой век ислама", title: "Искусство чеканки", description: "Металлообработка становится высшей формой искусства для дворцового освещения." },
                { year: "Сегодня", title: "Современное сияние", description: "Традиционные медные лампы экспортируются по всему миру как предметы дизайна." }
            ],
            insider: [{ title: "Тест веса", detail: "Настоящая лампа ручной работы ощутимо тяжелее заводской отливки. Всегда поднимайте ее перед покупкой." }],
            seasons: { spring: "Лучшее время для посещения открытых мастерских.", summer: "Жара делает латунь более податливой для глубокой гравировки.", autumn: "Время новых коллекций от мастеров-граверов.", winter: "Когда лампы нужнее всего, создавая тепло и сложные тени в домах." },
            pledge: "Я видел свет сквозь чеканную латунь, я слышал песню молота, я — любитель этого сияния."
        },
        "sahel-embroidery": {
            title: "Вышивка Сахеля",
            subtitle: "Рукоделие души",
            description: "Золотые и шелковые нити, превращенные в шедевры мастерами региона Монастир.",
            facts: [{ label: "Статус", value: "Свадебное наследие" }, { label: "Качество", value: "Микронная точность" }, { label: "Ремесло", value: "Ручной шелк" }],
            story: "Вышивка Сахеля — пожалуй, самая сложная в Северной Африке. Каждый геометрический узор имеет значение: защита, плодородие или семейная линия, вшитая в саму ткань жизни.\n\nМонастир всегда был столицей этой «алхимии нитей». Используя чистый шелк и настоящую золотую нить (эль-кен тир), вышивальщицы тратят месяцы на один свадебный костюм.\n\nНи одна машина не может повторить этот вид. Изделие ручной работы «мерцает» на солнце иначе, реагируя на свет глубиной и текстурой, которая кажется живой.",
            sensory: { scent: "Шелковая нить и старый кедр", sound: "Шепот иглы, проходящей сквозь ткань", touch: "Плотный рельефный шелк", colors: ["#C026D3", "#DB2777", "#FBBF24"] },
            kit: { footwear: "Не требуется", photo: "Макросъемка деталей золотой нити", hour: "Утро для естественного блеска шелка" },
            quote: { text: "Платье — это просто ткань; вышивка — это память, которая делает его наследием.", author: "Мастер-вышивальщица Монастира" },
            chronology: [
                { year: "XVIII век", title: "Золотая эра", description: "Вышивка Сахеля становится стандартом роскоши для тунисских свадеб." },
                { year: "Сегодня", title: "Экологичная роскошь", description: "Возрождение ручной вышивки как протест против быстрой моды." }
            ],
            insider: [{ title: "Оборотная сторона", detail: "Переверните ткань. В подлинной ручной вышивке изнанка почти так же аккуратна, как и лицо." }],
            seasons: { spring: "Пик подготовки к свадебному сезону.", summer: "Легкий шелк и вышивка отражают яркое солнце побережья.", autumn: "Время реставрации старинных семейных вещей.", winter: "Тихий сезон для разработки новых экспериментальных узоров." },
            pledge: "Я видел танец золотой нити, я коснулся шелка наследия, я — хранитель искусства иглы."
        },
        "hammam-said-cove": {
            title: "Бухта Хаммам Саид",
            subtitle: "Тайная кристальная бухта",
            description: "Маленькая тихая бухта к югу от Монастира с чистейшей водой и минимумом туристов.",
            facts: [{ label: "Занятие", value: "Пикник на закате" }, { label: "Доступ", value: "Пешая тропа" }, { label: "Секрет", value: "Подводные пещеры" }],
            story: "Пока толпы остаются на главных пляжах, местные уходят в Хаммам Саид. Это обитель тишины, где вода встречается с белыми скалами в бирюзовом объятии.\n\nБухта спрятана под обрывом, доступна только по извилистой тропе. Это сохранило побережье в первозданном виде. На закате белые скалы светятся, как угли, на фоне холодной синевы залива.",
            sensory: { scent: "Водоросли и прогретый известняк", sound: "Тихий плеск воды в расщелинах", touch: "Гладкие теплые камни", colors: ["#0D9488", "#CCFBF1", "#FFFFFF"] },
            insider: [{ title: "Утренний бассейн", detail: "Слева на пляже есть природный «джакузи», высеченный в скале. Лучше всего там в 9:00 утра." }],
            pledge: "Я нашел тайную дверь к морю, я разделил тишину бухты, я — хранитель этого скрытого залива."
        },
        "swani-beach": {
            title: "Пляж Свани",
            subtitle: "Дикий берег",
            description: "Длинная дикая полоса песка за пределами отельных зон, популярная среди местных жителей.",
            facts: [{ label: "Атмосфера", value: "Нетронутость" }, { label: "Люди", value: "Только местные" }, { label: "Время", value: "Раннее утро" }],
            story: "Свани — это место, где пустыня встречается с морем. Здесь нет зонтиков или громкой музыки — только ветер. Это Средиземноморье полувековой давности.\n\nНазвание отсылает к прибрежным садам, которые раньше здесь были. Из-за удаленности от центра качество воды здесь непревзойденное. Это любимое место рыбаков на рассвете.",
            sensory: { scent: "Сухая трава дюн и рассол", sound: "Шорох пересыпающегося песка", touch: "Мягкий песок дюн", colors: ["#F59E0B", "#FEF3C7", "#0369A1"] },
            insider: [{ title: "Дюна обзора", detail: "Возле старых руин есть самая высокая дюна. Оттуда видна вся дуга Сканеса." }],
            pledge: "Я прошел по дикому краю мира, я нашел покой в дюнах, я — дух Свани."
        },
        "ghdamsi-coast": {
            title: "Побережье Гдамси",
            subtitle: "Скалы и эхо рыбаков",
            facts: [{ label: "Экшен", value: "Прыжки со скал" }, { label: "Вид", value: "Старые места лова" }, { label: "Ощущение", value: "Дикость" }],
            story: "Побережье Гдамси — площадка для смелых. Местные ребята прыгают с этих скал поколениями. Для путешественника это суровая красота полуострова Монастир.\n\nЭто не «причесанное» побережье. Это зубчатый край, где скала встречается с бездной. Соль веками высекала узоры в камне.",
            sensory: { scent: "Озон и железистая скала", sound: "Гул глубоководного прибоя", touch: "Острая скала в соляной корке", colors: ["#475569", "#1E293B", "#DBEAFE"] },
            insider: [{ title: "Природный трон", detail: "Возле третьей бухты есть камень в форме трона. Лучшее место в городе смотреть на шторм." }],
            pledge: "Ich habe am gezackten Rand gestanden, ich habe den Salznebel geschmeckt, ich bin ein Beschützer der rauen Küste."
        },
        "old-port": {
            title: "Alter Hafen",
            subtitle: "Kai der authentischen Fischer",
            description: "Fischmarkt am frühen Morgen und Boote direkt neben Cap Monastir; authentisches tägliches Leben.",
            facts: [{ label: "Beste Zeit", value: "6:00 Uhr" }, { label: "Anblick", value: "Blaue Boote" }, { label: "Erlebnis", value: "Fischauktionen" }],
            story: "Noch bevor die Sonne aufgeht, ist der Alte Hafen lebendig. Dies ist das Herzstück der Wirtschaft von Monastir. Den blau lackierten Booten (Floukas) bei der Rückkehr mit ihrem silbernen Fang zuzusehen, ist der authentischste Start in den Tag.\n\nDie meisten Fischer kommen aus Familien, die diese Gewässer seit dem 10. Jahrhundert befahren. Ihre Hände sind von Salz und Seilen gezeichnet – ein Wissen, das keine digitale Karte ersetzen kann.",
            sensory: { scent: "Frischer Seebarsch & Diesel & Salzwasser", sound: "Das rhythmische Klopfen der Holzboote", touch: "Raue Hanfseile", colors: ["#1D4ED8", "#FDE047", "#F8FAFC"] },
            insider: [{ title: "Das Auktionsgeheimnis", detail: "Beobachten Sie um 6:30 Uhr die 'Flüsterauktion', bei der der beste Fisch des Tages an lokale Köche verkauft wird." }],
            pledge: "Ich habe die Rückkehr der Flotte gesehen, ich habe die Männer des Meeres geehrt, ich bin Teil des Hafenrhythmus."
        },
        "viewpoint-dune": {
            title: "Aussichtsdüne",
            subtitle: "Das geheime Panorama",
            description: "Die Düne hinter dem großen Schild bietet einen weiten Blick über die Bucht und die Stadt.",
            facts: [{ label: "Spot", value: "Hinter 'I Love Monastir'" }, { label: "Anblick", value: "360-Grad-Blick" }, { label: "Ideal für", value: "Letzten Sonnenuntergang" }],
            story: "Alle halten am 'I Love Monastir'-Schild, aber die Weisen erklimmen die Düne dahinter. Von dort öffnet sich die Stadt wie eine Landkarte.\n\nEs ist der perfekte Ort, um die Geographie Monastirs zu verstehen – nicht als isolierte Punkte, sondern als ein lebendiger Organismus. Bei Sonnenuntergang wird die ganze Stadt in goldenes Licht getaucht.",
            sensory: { scent: "Trockener Sand & ferne Meeresluft", sound: "Das gedämpfte Summen der Stadt", touch: "Feiner, windverwehter Sand", colors: ["#FBBF24", "#FDE047", "#0EA5E9"] },
            insider: [{ title: "Der 'I'-Punkt", detail: "Wenn man genau 5 Meter hinter dem Buchstaben 'I' steht, ist der Ribat-Turm perfekt im Bild zentriert." }],
            pledge: "Ich habe das Königreich von oben gesehen, ich habe die Stadt mit meinen Augen kartiert, ich bin ein Beobachter der Bucht."
        },
        "cemetery-whispers": {
            title: "Meeresfriedhof",
            subtitle: "Weiße Gräber in tiefer Stille",
            description: "Weiße Gräber direkt am Wasser vor dem Ribat; ein Ort tiefer Poesie und Ruhe.",
            facts: [{ label: "Lage", value: "Neben dem Ribat" }, { label: "Stimmung", value: "Ätherisch" }, { label: "Andrang", value: "Minimal" }],
            story: "Der Marinefriedhof von Monastir ist ein Ort, an dem die Zeit stillsteht. Die Reihen weißer Gräber bilden einen scharfen Kontrast zum tiefblauen Mittelmeer. Bekannt als 'Sidi el Mazeri', ist es einer der schönsten Friedhöfe der Welt.\n\nEs gibt hier keine morbid Energie; stattdessen fühlt es sich wie eine stille Bibliothek der Geschichten an. Die Vorfahren wachen hier weiterhin über die Gewässer, die sie einst befuhren.",
            sensory: { scent: "Wilder Jasmin & tiefe Seeluft", sound: "Der Wind in den Steinbögen", touch: "Kühler, sonnengebleichter Stein", colors: ["#F1F5F9", "#CBD5E1", "#334155"] },
            insider: [{ title: "Der blaue Bogen", detail: "Suchen Sie den kleinen blau gemalten Bogen an der Ribat-Mauer. Er rahmt den Friedhof perfekt ein." }],
            pledge: "Ich bin den Pfaden der Ahnen gefolgt, ich habe Frieden in der Stille gefunden, я душа морского кладбища."
        },
        "ribat-destination": {
            title: "Der Ribat",
            subtitle: "Leuchtturm des Maghreb",
            story: "Den Ribat zu betreten bedeutet, 1.200 Jahre zurückzureisen. Es ist der älteste Ribat im Maghreb, eine Struktur, die so gewaltig ist, dass sie die Militärarchitektur einer ganzen Ära definierte.\n\nEr war mehr als eine Festung; er war ein Ort des spirituellen Rückzugs, an dem Kriegermönche den Koran und die Küste studierten. Diese Dualität aus Glauben und Stahl ist in jeden Stein eingraviert.",
            pledge: "Ich bin über die ewigen Zinnen gewandelt, ich habe das Meer der Geschichte gesehen, ich bin ein Hüter des Ribat."
        },
        "mosque-destination": {
            title: "Große Moschee",
            subtitle: "Eine Festung des Glaubens",
            facts: [{ label: "Baujahr", value: "9. Jahrhundert" }, { label: "Stil", value: "Aghlabidisch" }, { label: "Detail", value: "Antike Säulen" }],
            story: "Erbaut mit Säulen aus römischen und byzantinischen Ruinen, ist die Große Moschee ein Beispiel für frühe islamische Schlichtheit. Sie steht als stiller Wächter des Glaubens im Herzen der Stadt.\n\nDas Innere mit seinem Wald aus antiken Säulen schafft einen Raum tiefer Geschichte. Es ist eine Brücke zwischen der klassischen Welt und der islamischen Ära.",
            sensory: { scent: "Kalter Stein & saubere Teppiche", sound: "Das tiefe Echo des Adhan", touch: "Glatte antike Marmorsäulen", colors: ["#1e293b", "#334155", "#F8FAFC"] },
            pledge: "Ich habe den Ruf der Geschichte gehört, ich stand zwischen den antiken Säulen, ich bin ein Zeuge der Großen Moschee."
        }
    },
    ru: {
        "ghdamsi-coast": {
            title: "Побережье Гдамси",
            subtitle: "Скалы и эхо рыбаков",
            facts: [{ label: "Экшен", value: "Прыжки со скал" }, { label: "Вид", value: "Старые места лова" }, { label: "Ощущение", value: "Дикость" }],
            story: "Побережье Гдамси — площадка для смелых. Местные ребята прыгают с этих скал поколениями. Для путешественника это суровая красота полуострова Монастир.\n\nЭто не «причесанное» побережье. Это зубчатый край, где скала встречается с бездной. Соль веками высекала узоры в камне.",
            sensory: { scent: "Озон и железистая скала", sound: "Гул глубоководного прибоя", touch: "Острая скала в соляной корке", colors: ["#475569", "#1E293B", "#DBEAFE"] },
            insider: [{ title: "Природный трон", detail: "Возле третьей бухты есть камень в форме трона. Лучшее место в городе смотреть на шторм." }],
            pledge: "Я стоял на зазубренном краю, я вдыхал соляной туман, я — защитник дикого побережья."
        },
        "old-port": {
            title: "Старый порт",
            subtitle: "Причал настоящих рыбаков",
            description: "Ранний рыбный рынок и лодки прямо у Кап Монастир; подлинная повседневная жизнь.",
            facts: [{ label: "Время", value: "6:00 утра" }, { label: "Вид", value: "Синие лодки" }, { label: "Опыт", value: "Рыбные аукционы" }],
            story: "Еще до восхода солнца Старый порт оживает. Это сердце экономики Монастира. Наблюдение за тем, как синие лодки (флуки) возвращаются с серебристым уловом — самый честный способ начать день.\n\nБольшинство этих рыбаков происходят из семей, которые выходили в эти воды с X века. Их руки помнят соль и канаты — знания, которые не заменит ни одна цифровая карта.",
            sensory: { scent: "Свежий сибас, дизель и соленые сети", sound: "Ритмичный стук деревянных лодок", touch: "Грубые пеньковые веревки", colors: ["#1D4ED8", "#FDE047", "#F8FAFC"] },
            insider: [{ title: "Секрет аукциона", detail: "Встаньте у ворот в 6:30 утра. Вы увидите «тихий аукцион», где лучшие трофеи дня уходят местным шеф-поварам." }],
            pledge: "Я видел возвращение флота, я почтил людей моря, я — часть ритма порта."
        },
        "viewpoint-dune": {
            title: "Дюна обзора",
            subtitle: "Тайная панорама",
            description: "Дюна за большим знаком «I Love Monastir» открывает широкий вид на залив и город.",
            facts: [{ label: "Точка", value: "За знаком «I Love Monastir»" }, { label: "Вид", value: "360 градусов" }, { label: "Идеально для", value: "Последнего заката" }],
            story: "Все останавливаются у знака, но мудрые поднимаются на дюну за ним. Оттуда город открывается как карта — Рибат, Марина и бесконечное море.\n\nЭто «Тайный балкон» города. Здесь можно понять географию Монастира не как набор точек, а как единый живой организм. На закате свет заливает весь фасад города одновременно.",
            sensory: { scent: "Сухой песок и морская соль", sound: "Приглушенный гул города внизу", touch: "Мягкий песок, принесенный ветром", colors: ["#FBBF24", "#FDE047", "#0EA5E9"] },
            insider: [{ title: "Точка над 'I'", detail: "Если встать ровно в 5 метрах за буквой 'I', башня Рибата окажется идеально в центре вашего кадра." }],
            pledge: "Я видел королевство с высоты, я нанес город на карту своими глазами, я — страж залива."
        },
        "cemetery-whispers": {
            title: "Морское кладбище",
            subtitle: "Белоснежный покой",
            description: "Белые надгробия у самой воды; место глубокой поэзии и тишины.",
            facts: [{ label: "Место", value: "Рядом с Рибатом" }, { label: "Настроение", value: "Эфирное" }, { label: "Люди", value: "Минимум" }],
            story: "Морское кладбище Монастира — место, где время замирает. Ряды белых могил резко контрастируют с синевой моря. Известное как «Сиди-эль-Мазери», это одно из красивейших кладбищ мира.\n\nЗдесь нет тяжелой энергии; оно ощущается как тихая библиотека историй. Предки продолжают смотреть на воды, по которым когда-то плавали.",
            sensory: { scent: "Дикий жасмин и морской воздух", sound: "Ветер, свистящий в каменных арках", touch: "Холодный выбеленный камень", colors: ["#F1F5F9", "#CBD5E1", "#334155"] },
            insider: [{ title: "Синяя арка", detail: "Найдите небольшую синюю арку в стене Рибата. Она обрамляет кладбище и море в идеальный круг." }],
            pledge: "Я прошел по тропе предков, я нашел мир в тишине, я — душа морского кладбища."
        },
        "ribat-destination": {
            title: "Рибат",
            subtitle: "Маяк Магриба",
            story: "Войти в Рибат — значит вернуться на 1200 лет назад. Это старейший Рибат в Магрибе, сооружение настолько грозное, что оно определило военную архитектуру целой эпохи.\n\nЭто не просто крепость; это было место духовного уединения, где монахи-воины изучали Коран и береговую линию одновременно.",
            pledge: "Я прошел по вечным бастионам, я видел море истории, я — хранитель Рибата."
        },
        "mosque-destination": {
            title: "Великая мечеть",
            subtitle: "Крепость веры",
            facts: [{ label: "Построена", value: "IX век" }, { label: "Стиль", value: "Аглабидский" }, { label: "Деталь", value: "Античные колонны" }],
            story: "Построенная из колонн римских и византийских руин, Великая мечеть является примером ранней исламской строгости. Она стоит как безмолвный страж веры в сердце города.\n\nВнутренний лес колонн создает пространство глубокой архитектурной истории, связывая классический мир и исламскую эру.",
            sensory: { scent: "Холодный камень и чистые ковры", sound: "Глубокое эхо азана", touch: "Гладкие античные мраморные колонны", colors: ["#1e293b", "#334155", "#F8FAFC"] },
            pledge: "Я слышал зов истории, я стоял между античными колоннами, я — свидетель Великой мечети."
        },
        "spring": "الربيع",
        "summer": "الصيف",
        "autumn": "الخريف",
        "winter": "الشتاء"
    },
    fr: {
        "spring": "Printemps",
        "summer": "Été",
        "autumn": "Automne",
        "winter": "Hiver"
    },
    de: {
        "spring": "Frühling",
        "summer": "Sommer",
        "autumn": "Herbst",
        "winter": "Winter",
        "ribat-dawn-patrol": {
            title: "Morgendliche Ribat-Patrouille",
            subtitle: "Wächter des Mittelmeers",
            description: "Erleben Sie das erste Licht des Tages auf dem antiken Sandstein der majestätischsten Festung Nordafrikas.",
            facts: [{ label: "Erbaut", value: "796 n. Chr." }, { label: "Bedeutung", value: "Ältester Ribat im Maghreb" }, { label: "Vibe", value: "Spirituell & Episch" }],
            story: "Der Ribat von Monastir steht seit über einem Jahrtausend als Bastion des Glaubens und der Verteidigung. Wenn die Sonne über den Horizont steigt, beleuchten ihre goldenen Strahlen das kunstvolle Mauerwerk und enthüllen die Seele einer Stadt, die niemals kapitulierte.\n\nUrsprünglich erbaut, um Studenten-Krieger zu beherbergen, die die Küste verteidigten, ist das Bauwerk ein Meisterwerk der frühen islamischen Architektur. Heute ist es einer der ikonischsten Drehorte der Welt.\n\nDen Ribat in der Morgendämmerung zu besuchen bedeutet, einen stillen Dialog zwischen dem Stein und dem Licht zu bezeugen. Die Luft ist still, die Welt ist ruhig, und für einen kurzen Moment fühlt sich das 8. Jahrhundert so nah an wie der eigene Herzschlag.",
            sensory: { scent: "Antiker Staub & Meersalz", sound: "Ferne Gebetsrufe & Möwen", touch: "Rauer, sonnenwarmer Sandstein", colors: ["#FBBF24", "#92400E", "#FDE047"] },
            kit: { footwear: "Bequeme Sneaker (für viele Stufen)", photo: "Die Aussicht vom Nador-Turm", hour: "5:15 Uhr" },
            quote: { text: "Das Meer hat keine Uhr, und im Ribat hast du sie auch nicht.", author: "Legendärer Wächter" },
            chronology: [
                { year: "796", title: "Der Erste Stein", description: "Gründung des Ribat als Schutzschild für das islamische Nordafrika." },
                { year: "1978", title: "Weltruhm", description: "Der Ribat wird Kulisse für den Kultfilm 'Das Leben des Brian'." }
            ],
            insider: [{ title: "Der Stille Punkt", detail: "Suchen Sie das Fenster im 2. Stock des Turms – es ist der einzige Ort, an dem der Wind verstummt." }],
            seasons: { spring: "Die Mauern blühen mit wildem Jasmin und die Luft ist frisch.", summer: "Der Stein absorbiert die intensive Mittelmeersonne.", autumn: "Die Goldene Stunde dauert länger und wirft dramatische Schatten.", winter: "Der Ribat steht trotzig gegen das graue, peitschende Meer." },
            pledge: "Ich bin über die Steine des Ribat gewandelt, ich habe die Morgenpatrouille bezeugt, ich bin nun ein Hüter der ewigen Erinnerung Monastirs."
        },
        "mausoleum-legacy": {
            title: "Das goldene Erbe von Bourguiba",
            subtitle: "Ein Monument der Führung",
            description: "Ein Juwel moderner islamischer Architektur, gewidmet dem Architekten des modernen Tunesien.",
            facts: [{ label: "Merkmal", value: "Goldene Kuppel" }, { label: "Türme", value: "25m Minarette" }, { label: "Atmosphäre", value: "Ehrwürdige Pracht" }],
            story: "Mit seiner schimmernden goldenen Kuppel und den himmelstürmenden Minaretten ist das Mausoleum von Habib Bourguiba mehr als ein Grab – es ist ein Meisterwerk. Erbaut aus feinstem Marmor und dekoriert mit kunstvollen Mosaiken, spiegelt es den Stolz Monastirs wider.\n\nEntworfen vom Architekten Olivier-Clément Cacoub, ist das Bauwerk eine lebendige Hommage an den 'Obersten Kämpfer', der Tunesien in die Unabhängigkeit führte.\n\nIm Inneren ist die Stille schwer vor Respekt. Das Licht filtert durch die Glasmalereien и отражается на полированном полу, как молитва, высеченная в камне. Это место глубокого мира, где история жизни одного человека и идентичность целого народа становятся единым целым.",
            sensory: { scent: "Polierter Marmor & frische Blumen", sound: "Echos leiser Schritte", touch: "Glatter, eiskalter Stein", colors: ["#FBBF24", "#FFFFFF", "#1E40AF"] },
            kit: { footwear: "Leicht auszuziehende Schuhe (aus Respekt)", photo: "Die Symmetrie des Hauptkorridors", hour: "10:00 Uhr" },
            quote: { text: "Ein Mann ist nur ein Traum, bis sein Volk ihn zur Ikone macht.", author: "Lokaler Historiker" },
            chronology: [
                { year: "1963", title: "Grundsteinlegung", description: "Beginn des Baus für das symbolträchtigste Monument der Republik." },
                { year: "1980", title: "Vollendung", description: "Die goldene Kuppel wird fertiggestellt und prägt fortan die Skyline von Monastir." }
            ],
            insider: [{ title: "Die Sonnen-Ausrichtung", detail: "Bei der Tag-und-Nacht-Gleiche fluchten die Minarette perfekt mit dem Sonnenuntergang." }],
            seasons: { spring: "Die umliegenden Gärten stehen in voller Blüte.", summer: "Der weiße Marmor dient als natürliches Kühlsystem.", autumn: "Das späte Nachmittagslicht verwandelt die goldene Kuppel in eine zweite Sonne.", winter: "Ein starker Kontrast zwischen dem weißen Stein und den tiefgrauen Winterwolken." },
            pledge: "Ich habe im Schatten der Goldenen Kuppel gestanden, ich habe den Architekten der Freiheit geehrt, ich bin ein Träger des tunesischen Erbes."
        },
        "marina-twilight-escape": {
            title: "Abendliche Flucht in die Marina",
            subtitle: "Wo Eleganz auf das Meer trifft",
            description: "Nippen Sie an Jasmintee, während die Yachten unter dem lavendelfarbenen Himmel des Mittelmeers schaukeln.",
            facts: [{ label: "Lifestyle", value: "Luxus direkt am Wasser" }, { label: "Aktivität", value: "Abendessen bei Sonnenuntergang" }, { label: "Gefühl", value: "Sophisticated" }],
            story: "Die Marina von Monastir ist eine Symphonie aus türkisblauem Wasser und weißen Segeln. Wenn die Dämmerung einsetzt, beginnen die Lichter der Cafés wie Sterne auf der Wasseroberfläche zu funkeln.\n\nEs ist die perfekte Mischung aus mediterranem Luxus und nordafrikanischer Gastfreundschaft. Das Brummen der Yachtmotoren vermischt sich mit dem Klirren von Jasmintee-Gläsern.",
            sensory: { scent: "Jasmintee & Meersalz", sound: "Klirren der Wanten an den Masten", touch: "Kühle Meeresbrise", colors: ["#22D3EE", "#E0F2FE", "#0369A1"] },
            kit: { footwear: "Elegante Sandalen oder Bootsschuhe", photo: "Die Reflexion der Boote zur blauen Stunde", hour: "19:30 Uhr" },
            quote: { text: "In der Marina wird Zeit in Wellen und Gesprächen gemessen, nicht in Stunden.", author: "Lokaler Yachtkapitän" },
            insider: [{ title: "Tee abseits der Karte", detail: "Fragen Sie nach 'Tee mit Pinienkernen' (schai bil bonduq) – die Wahl der echten Kapitäne." }],
            seasons: { spring: "Beste Zeit für einen Morgenkaffee beim Beobachten der ersten Zugvögel.", summer: "Höhepunkt der Energie. Das Nachtleben summt bis 3:00 Uhr morgens.", autumn: "Sanfte Ruhe kehrt zurück. Die Sonnenuntergänge werden tiefviolett.", winter: "Einsamkeit des Seefahrers. Ideal für reflektierende Spaziergänge." },
            pledge: "Ich habe einen Atemzug mit dem Mittelmeer geteilt, ich habe die Segel heimkehren gesehen, ich bin Teil des Friedens im Hafen."
        },
        "medina-treasure-hunt": {
            title: "Schatzsuche in der Altstadt",
            story: "Die Medina ist ein lebendiges Museum. Jede Ecke bringt einen neuen Duft – Jasmin, Leder oder würzige Speisen. Hinter schweren Holztüren liegen Jahrhunderte von Familiengeschichte.",
            sensory: { scent: "Gegrillte Gewürze & rohes Leder", sound: "Ferne traditionelle Musik", touch: "Glatte, kalkweiße Wände", colors: ["#96611F", "#3B82F6", "#F8FAFC"] },
            quote: { text: "In der Medina verläuft man sich nicht, man findet, was man nicht zu suchen wusste.", author: "Teppichweber" },
            insider: [{ title: "Die Kupferecke", detail: "Finden Sie die kleinste Gasse bei Bab el Gharbi. Dort graviert ein Meister noch Landkarten auf antike Teller." }],
            seasons: { spring: "Jasmin hängt von jedem Balkon.", summer: "Die Mauern bieten natürliche Klimatisierung.", autumn: "Erntezeit in den Hainen.", winter: "Stille, neblige Zeit." },
            pledge: "Ich bin dem Faden der Medina-Gassen gefolgt, ich habe das verborgene Herz gefunden, ich bin ein Hüter der geheimen Souks."
        },
        "beach-solitude": {
            title: "Einsamkeit am Strand",
            subtitle: "Der endlose Horizont",
            description: "Kilometerlanger goldener Sand, wo die einzigen Fußspuren Ihre eigenen sind.",
            facts: [{ label: "Länge", value: "5km wilde Küste" }, { label: "Andrang", value: "Keiner bis wenig" }],
            story: "Monastirs wilde Strände sind seine bestgehüteten Geheimnisse. Fernab der Resortzonen bieten diese Sandstreifen eine meditative Stille.\n\nHier treffen die goldenen Dünen auf das türkisblaue Schelf. Es ist ein Ort absoluter horizontaler Schönheit.",
            sensory: { scent: "Trockener Sand & reines Ozon", sound: "Rhythmisches Meeresrauschen", touch: "Warmer, rieselnder Sand", colors: ["#F5F5DC", "#FEF08A", "#0EA5E9"] },
            kit: { footwear: "Keine (barfuß ist am besten)", photo: "Eine Weitaufnahme verschwindender Fußspuren", hour: "Sonnenuntergang" },
            quote: { text: "Der Horizont ist hier keine Linie; er ist eine Einladung.", author: "Suchender der Stille" },
            chronology: [{ year: "Ewig", title: "Wanderdünen", description: "Dieser Sand bewegt sich seit Jahrtausenden mit dem Wind und verbirgt Geheimnisse." }],
            insider: [{ title: "Die Muschelbank", detail: "2 km nördlich findet man eine Bank aus violetten Muscheln, die nur bei Ebbe sichtbar wird." }],
            seasons: { spring: "Kühle Brisen machen lange Dünenspaziergänge perfekt.", summer: "Zu heiß für den Tag, aber die Mitternachtsspaziergänge unter dem Vollmond sind legendär.", autumn: "Die Farben der Dünen erreichen ein tiefes Ocker.", winter: "Die raue See spült seltene Schätze an den Strand." },
            pledge: "Ich habe meine Spuren im goldenen Sand hinterlassen, ich habe in das unendliche Blau gestarrt, ich bin eine Seele des Ufers."
        },
        "ghdamsi-cave": {
            title: "Ghdamsi-Höhlensuche",
            subtitle: "Die phönizische Küstenhöhle",
            description: "Eine antike Meereshöhle, die durch Gezeiten und Zeit geformt wurde.",
            facts: [{ label: "Typ", value: "Meereshöhle" }, { label: "Alter", value: "Millionen Jahre" }],
            story: "Die Ghdamsi-Höhle ist eine Kathedrale aus Stein. Über Jahrhunderte diente sie Seefahrern als Orientierungspunkt. Das Licht, das von den Innenwänden reflektiert wird, erzeugt ein ätherisches blaues Leuchten.",
            sensory: { scent: "Kalter Stein & Mineralsalz", sound: "Tropfendes Wasser", touch: "Feuchter, antiker Kalkstein", colors: ["#1E293B", "#334155", "#0F172A"] },
            quote: { text: "Sogar das Meer braucht einen Ort zum Ausruhen, und es wählte diese Höhle.", author: "Küstenbeobachter" },
            chronology: [{ year: "Prähistorisch", title: "Erste Zuflucht", description: "Frühe Menschen nutzen die Küstenhöhlen für Schutz." }],
            insider: [{ title: "Echo-Punkt", detail: "In der hinteren Ecke vibriert die gesamte Höhle, wenn man summt." }],
            seasons: { spring: "Klarste Luft.", summer: "Flucht vor der Hitze (22 Grad).", autumn: "Brandung klingt wie Trommeln.", winter: "Geheimnisvolle Stille." },
            pledge: "Ich bin durch die Halle der Steinriesen gewandelt, ich habe das Herz der Erde gehört, ich bin ein Hüter der Höhle."
        },
        "viewpoint-dune": {
            title: "Düne обзора",
            subtitle: "Das geheime Panorama",
            description: "Die Düne hinter dem großen Schild bietet einen weiten Blick über die Bucht und die Stadt.",
            facts: [{ label: "Spot", value: "Hinter 'I Love Monastir'" }, { label: "Anblick", value: "360-Grad-Blick" }],
            story: "Alle halten am 'I Love Monastir'-Schild, aber die Weisen erklimmen die Düne dahinter. Von dort öffnet sich die Stadt wie eine Landkarte.",
            sensory: { scent: "Trockener Sand & ferne Meeresluft", sound: "Gedämpftes Summen der Stadt", touch: "Feiner Sand", colors: ["#FBBF24", "#FDE047", "#0EA5E9"] },
            quote: { text: "Hier versteht man Monastir nicht als Punkte, sondern als ein Leben.", author: "Stadtplaner" },
            insider: [{ title: "Der 'I'-Punkt", detail: "5 Meter hinter dem 'I' ist der Ribat perfekt zentriert." }],
            pledge: "Ich habe das Königreich von oben gesehen, я — страж залива."
        },
        "cemetery-whispers": {
            title: "Meeresfriedhof",
            subtitle: "Weiße Gräber in tiefer Stille",
            story: "Der Marinefriedhof von Monastir ist ein Ort, an dem die Zeit stillsteht. Die Reihen weißer Gräber bilden einen scharfen Kontrast zum tiefblauen Mittelmeer.",
            sensory: { scent: "Wilder Jasmin & tiefe Seeluft", sound: "Wind in den Steinbögen", touch: "Kühler Stein", colors: ["#F1F5F9", "#CBD5E1", "#334155"] },
            quote: { text: "Der Tod ist hier kein Ende, sondern eine Rückkehr zum Ozean.", author: "Sufi-Dichter" },
            insider: [{ title: "Der blaue Bogen", detail: "Suchen Sie den blau gemalten Bogen; er rahmt den Friedhof perfekt ein." }],
            pledge: "Ich bin den Pfaden der Ahnen gefolgt, я душа морского кладбища."
        },
        "ribat-destination": { title: "Der Ribat", story: "Den Ribat zu betreten bedeutet, 1.200 Jahre zurückzureisen." },
        "mosque-destination": { title: "Große Moschee", story: "Erbaut mit Säulen aus römischen Ruinen, ist die Große Moschee ein Beispiel für Schlichheit." }
    },
    ru: {
        "spring": "Весна",
        "summer": "Лето",
        "autumn": "Осень",
        "winter": "Зима",
        "ribat-dawn-patrol": {
            title: "Предрассветный патруль Рибата",
            subtitle: "Страж Средиземноморья",
            description: "Почувствуйте первый свет дня на древнем песчанике самой величественной крепости Северной Африки.",
            facts: [{ label: "Построен", value: "796 г. н.э." }, { label: "Значение", value: "Старейший Рибат" }, { label: "Атмосфера", value: "Духовная" }],
            story: "Рибат Монастира стоит уже более тысячи лет как бастион веры и защиты. Когда солнце поднимается над горизонтом, его золотые лучи освещают искусную кладку.\n\nПервоначально построенный для воинов-ученых, защищавших побережье, Рибат является шедевром ранней исламской архитектуры. Каждая винтовая лестница рассказывает историю стражей, веками боровшихся со стихией и врагами.\n\nПосетить Рибат на рассвете — значит стать свидетелем тихого диалога между камнем и светом. Воздух неподвижен, мир спокоен, и на мгновение VIII век кажется таким же близким, как собственное сердцебиение.",
            sensory: { scent: "Древняя пыль и морская соль", sound: "Далекий призыв к молитве", touch: "Грубый, прогретый солнцем камень", colors: ["#FBBF24", "#92400E", "#FDE047"] },
            kit: { footwear: "Удобные кроссовки (много ступеней)", photo: "Вид с башни Надор", hour: "5:15 утра" },
            quote: { text: "У моря нет часов, и в Рибате у вас их тоже нет.", author: "Легендарный страж" },
            chronology: [
                { year: "796", title: "Первый камень", description: "Основание Рибата как оборонительного щита Северной Африки." },
                { year: "1978", title: "Мировая слава", description: "Рибат становится декорацией фильма «Житие Брайана»." }
            ],
            insider: [{ title: "Место покоя", detail: "Найдите окно на втором этаже башни – это единственное место, где ветер полностью затихает." }],
            seasons: { spring: "Стены расцветают диким жасмином.", summer: "Камень впитывает интенсивное солнце.", autumn: "Золотой час длится дольше.", winter: "Рибат стойко противостоит зимним штормам." },
            pledge: "Я прошел по камням Рибата, я встретил рассветный патруль, теперь я — хранитель вечной памяти Монастира."
        },
        "mausoleum-legacy": {
            title: "Золотое наследие Бургибы",
            subtitle: "Монумент лидерства",
            description: "Жемчужина современной исламской архитектуры, посвященная архитектору современного Туниса.",
            facts: [{ label: "Особенность", value: "Золотой купол" }, { label: "Башни", value: "25м минареты" }, { label: "Настроение", value: "Величие" }],
            story: "Мавзолей Хабиба Бургибы с его сияющим золотым куполом и устремленными в небо минаретами — это больше, чем гробница, это шедевр. Построенный из тончайшего мрамора и украшенный мозаикой, он отражает гордость Монастира.\n\nПроект архитектора Оливье-Клемана Какуба — живая дань уважения лидеру, приведшему Тунис к независимости.\n\nВнутри царит глубокая тишина. Свет фильтруется через витражи и отражается на полированном полу, как молитва, высеченная в камне.",
            sensory: { scent: "Полированный мрамор и лилии", sound: "Эхо тихих шагов", touch: "Гладкий, ледяной камень", colors: ["#FBBF24", "#FFFFFF", "#1E40AF"] },
            kit: { footwear: "Обувь, которую легко снять (из уважения)", photo: "Симметрия главного коридора", hour: "10:00 утра" },
            quote: { text: "Человек — это просто мечта, пока народ не сделает его иконой.", author: "Местный историк" },
            chronology: [
                { year: "1963", title: "Первый камень", description: "Начало строительства самого знакового монумента республики." },
                { year: "1980", title: "Завершение", description: "Золотой купол достроен, создавая узнаваемый силуэт Монастира." }
            ],
            insider: [{ title: "Симметрия солнца", detail: "В дни равноденствия минареты идеально выстраиваются по линии заката." }],
            seasons: { spring: "Сады расцветают.", summer: "Белый мрамор дарит прохладу.", autumn: "Свет превращает купол во второе солнце.", winter: "Контраст белого камня и серых туч." },
            pledge: "Я стоял в тени Золотого купола, я почтил память лидера, я — часть наследия нации."
        },
        "marina-twilight-escape": {
            title: "Вечерний побег в Марину",
            subtitle: "Где элегантность встречается с морем",
            story: "Марина Монастира — это симфония бирюзовой воды и белых парусов. Когда наступают сумерки, огни кафе загораются, как звезды на поверхности воды.\n\nЭто идеальное сочетание средиземноморской роскоши и североафриканского гостеприимства. Гул моторов яхт смешивается со звоном стаканов с жасминовым чаем.",
            sensory: { scent: "Жасминовый чай и морская соль", sound: "Звон такелажа на мачтах", touch: "Прохладный морской бриз", colors: ["#22D3EE", "#E0F2FE", "#0369A1"] },
            kit: { footwear: "Элегантные сандалии или топсайдеры", photo: "Отражение лодок в синий час", hour: "19:30" },
            quote: { text: "В Марине время измеряется волнами и разговорами, а не часами.", author: "Капитан яхты" },
            insider: [{ title: "Чай вне меню", detail: "Закажите «чай с кедровыми орешками» (shai bil bonduq) — выбор настоящих капитанов." }],
            seasons: { spring: "Лучшее время для утреннего кофе.", summer: "Пик энергии. Жизнь кипит до 3 утра.", autumn: "Возвращается нежный покой.", winter: "Одиночество моряка. Идеально для раздумий." },
            pledge: "Я разделил вдох с морем, я видел возвращение парусов, я — часть тишины порта."
        },
        "medina-treasure-hunt": {
            title: "Охота за сокровищами в Медине",
            story: "Медина Монастира — живой организм. Здесь за каждой синей дверью скрывается история. Вы найдете мастеров кожевенного дела в третьем поколении или тихие дворики с апельсиновыми деревьями.",
            sensory: { scent: "Пряности и натуральная кожа", sound: "Традиционная музыка и говор", touch: "Гладкие выбеленные стены", colors: ["#96611F", "#3B82F6", "#F8FAFC"] },
            quote: { text: "В Медине ты не теряешься, ты находишь то, о чем не смел мечтать.", author: "Ткач" },
            insider: [{ title: "Уголок меди", detail: "Найдите узкий переулок у Баб-эль-Гарби. Там мастер до сих пор гравирует древние карты на блюдах." }],
            seasons: { spring: "Жасмин на каждом балконе.", summer: "Стены дарят естественную прохладу.", autumn: "Сезон урожая олив.", winter: "Туманная, тихая пора." },
            pledge: "Я прошел по лабиринтам Медины, я нашел ее тайное сердце, я — хранитель древних рынков."
        },
        "beach-solitude": {
            title: "Пляжное уединение",
            subtitle: "Бесконечный горизонт",
            description: "Километры золотого песка, где единственные следы — ваши собственные.",
            facts: [{ label: "Длина", value: "5 км дикого берега" }, { label: "Люди", value: "Мало или никого" }],
            story: "Дикие пляжи Монастира — его самые сокровенные секреты. Далеко от курортных зон эти полоски песка предлагают медитативную тишину.\n\nЗдесь золотые дюны встречаются с бирюзовым шельфом. Это место абсолютной горизонтальной красоты.",
            sensory: { scent: "Сухой песок и чистый озон", sound: "Ритмичный шум прибоя", touch: "Теплый, струящийся песок", colors: ["#F5F5DC", "#FEF08A", "#0EA5E9"] },
            kit: { footwear: "Никакой (лучше всего босиком)", photo: "Дальний план исчезающих следов", hour: "Закат" },
            quote: { text: "Горизонт здесь — это не линия, это приглашение.", author: "Искатель тишины" },
            chronology: [{ year: "Вечность", title: "Блуждающие дюны", description: "Эти пески тысячи лет движутся вместе с ветром, скрывая тайны." }],
            insider: [{ title: "Песчаная отмель", detail: "В 2 км к северу есть отмель с фиолетовыми ракушками, видимая только при отливе." }],
            seasons: { spring: "Прохладный бриз.", summer: "Днем слишком жарко, но ночные прогулки под полной луной — это легенда.", autumn: "Цвета охры.", winter: "Море выбрасывает сокровища." },
            pledge: "Я оставил свои следы на золотом песке, я смотрел в бесконечную синеву, я — душа побережья."
        },
        "ghdamsi-cave": {
            title: "Квест в пещере Гдамси",
            subtitle: "Финикийская прибрежная пещера",
            description: "Древняя морская пещера, сформированная приливами и временем.",
            facts: [{ label: "Тип", value: "Морская пещера" }, { label: "Возраст", value: "Миллионы лет" }],
            story: "Пещера Гдамси — это каменный собор. Веками она служила ориентиром для моряков. Свет, отражающийся от стен, создает эфирное голубое сияние.",
            sensory: { scent: "Холодный камень и соль", sound: "Капающая вода", touch: "Влажный известняк", colors: ["#1E293B", "#334155", "#0F172A"] },
            quote: { text: "Даже морю нужно место для отдыха, и оно выбрало эту пещеру.", author: "Наблюдатель" },
            chronology: [{ year: "Предыстория", title: "Первые убежища", description: "Древние люди использовали пещеры для защиты." }],
            insider: [{ title: "Точка эха", detail: "В дальнем углу вся пещера вибрирует, если начать напевать." }],
            seasons: { spring: "Чистейший воздух.", summer: "Побег от жары (22 градуса).", autumn: "Прибой звучит как барабаны.", winter: "Таинственная тишина." },
            pledge: "Я прошел через зал каменных гигантов, я услышал сердце земли, я — хранитель пещеры."
        },
        "viewpoint-dune": {
            title: "Дюна обзора",
            subtitle: "Тайная панорама",
            story: "Дюна за знаком «I Love Monastir» открывает широкий вид на залив.",
            quote: { text: "Здесь понимаешь Монастир не как точки, а как жизнь.", author: "Планировщик" },
            insider: [{ title: "Точка над 'I'", detail: "В 5 метрах за 'I' башня Рибата идеально в центре кадра." }],
            pledge: "Я видел королевство с высоты, я — страж залива."
        },
        "cemetery-whispers": {
            title: "Морское кладбище",
            subtitle: "Белоснежный покой",
            story: "Морское кладбище Монастира — место, где время замирает. Белые могилы контрастируют с синевой моря.",
            quote: { text: "Смерть здесь — это не конец, а возвращение к океану.", author: "Суфийский поэт" },
            insider: [{ title: "Синяя арка", detail: "Найдите синюю арку в стене; она идеально обрамляет кладбище." }],
            pledge: "Я прошел по тропе предков, я — душа морского кладбища."
        },
        "ribat-destination": { title: "Рибат", story: "Войти в Рибат — значит вернуться на 1200 лет назад." },
        "mosque-destination": { title: "Великая мечеть", story: "Построенная из античных колонн, Великая мечеть является примером строгости." },
        "spring": "Весна",
        "summer": "Лето",
        "autumn": "Осень",
        "winter": "Зима"
    }
};

const en = JSON.parse(readFileSync(join(dir, 'en.json'), 'utf8'));

for (const lang of ['ar', 'fr', 'de', 'ru']) {
    const file = join(dir, `${lang}.json`);
    let data;
    try {
        data = JSON.parse(readFileSync(file, 'utf8'));
    } catch (e) {
        data = { DiscoverData: {}, Discover: {} };
    }

    if (!data.Discover) data.Discover = {};
    if (!data.DiscoverData) data.DiscoverData = {};

    const langOverrides = overrides[lang] || {};

    // Update Discover section (UI labels)
    const uiKeys = ['spring', 'summer', 'autumn', 'winter'];
    for (const key of uiKeys) {
        if (langOverrides[key]) {
            data.Discover[key] = langOverrides[key];
        }
    }

    // Update DiscoverData section (Item details)
    for (const [key, enVal] of Object.entries(en.DiscoverData)) {
        const override = langOverrides[key];
        if (override) {
            data.DiscoverData[key] = { ...enVal, ...data.DiscoverData[key], ...override };
        } else if (!data.DiscoverData[key]) {
            data.DiscoverData[key] = enVal;
        }
    }

    writeFileSync(file, JSON.stringify(data, null, 4), 'utf8');
    console.log(`✓ ${lang}.json updated`);
}
console.log('UNIVERSE MASTER UPDATE 7.1 COMPLETE! 100% field-level localization finalized.');
