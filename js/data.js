// js/data.js

const TXT_PATH = "assets/txts";
const MEANING_PATH = "assets/meanings";
const SVG_PATH = "assets/svgs";

const vedasData = [
    {
        id: "01",
        title: "Ganapati Prarthana",
        description: "Initial prayers dedicated to Lord Ganesha.",
        txtUrl: `${TXT_PATH}/ganapati-prarthana.txt`,
        hiUrl: `${MEANING_PATH}/ganapati-prarthana-hi.txt`,
        enUrl: `${MEANING_PATH}/ganapati-prarthana-en.txt`,
        hoverColor: "var(--bauhaus-coral)",
        cardShape: "bg-shape-17", // Target/Bullseye for the starting prayer
        tags: ["Ganesha", "Prarthana", "Rudram"],
        bgSvg: `${SVG_PATH}/ganesh-bg.svg`,
        iconSvg: `${SVG_PATH}/ganesh-icon.svg`
    },
    {
        id: "02",
        title: "Sri Rudram Namakam",
        description: "Salutations to Rudra, the roaring storm.",
        txtUrl: `${TXT_PATH}/sri-rudram-namakam.txt`,
        hoverColor: "var(--bauhaus-slate)", // Ash / Bhasma
        cardShape: "bg-shape-21", // Speed lines for the roaring storm
        bgSvg: `${SVG_PATH}/adiyogi-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Suktam", "Rudram", "Monday"]
    },
    {
        id: "03",
        title: "Sri Rudram Chamakam",
        description: "Fulfillment of desires through Rudra.",
        txtUrl: `${TXT_PATH}/sri-rudram-chamakam.txt`,
        hoverColor: "var(--bauhaus-rust)", // Earthy / Rudraksha
        cardShape: "bg-shape-18", // Stepped Ziggurat (building desires)
        bgSvg: `${SVG_PATH}/rudra-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Suktam", "Rudram", "Monday"]
    },
    {
        id: "04",
        title: "Shivopasana Mantra",
        description: "Mantras for the worship of Shiva.",
        txtUrl: `${TXT_PATH}/shivopasana-mantra.txt`,
        hiUrl: `${MEANING_PATH}/shivopasana-mantra-hi.txt`,
        enUrl: `${MEANING_PATH}/shivopasana-mantra-en.txt`,
        hoverColor: "var(--bauhaus-indigo)", // Deep meditation
        cardShape: "bg-shape-28", // Heavy U-Curve
        bgSvg: `${SVG_PATH}/trishool-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Mantra", "Rudram", "Monday"]
    },
    {
        id: "05",
        title: "Mantra Pushpam",
        description: "The flower of Vedic chants.",
        txtUrl: `${TXT_PATH}/mantra-pushpam.txt`,
        hiUrl: `${MEANING_PATH}/mantra-pushpam-hi.txt`,
        enUrl: `${MEANING_PATH}/mantra-pushpam-en.txt`,
        hoverColor: "var(--bauhaus-pink)", // Lotus/Flowers
        cardShape: "bg-shape-25", // Alternating quadrant petals
        tags: ["Generic", "Mantra", "Rudram"]
    },
    {
        id: "06",
        title: "Bhagya Suktam",
        description: "Hymn for luck, wealth, and prosperity.",
        txtUrl: `${TXT_PATH}/bhagya-suktam.txt`,
        hoverColor: "var(--bauhaus-mustard)", // Golden wealth
        cardShape: "bg-shape-20", // Rising semi-circle (growth)
        tags: ["Surya", "Suktam", "Sunday"]
    },
    {
        id: "07",
        title: "Ganapati Atharvashirsham",
        description: "Upanishad dedicated to Ganesha.",
        txtUrl: `${TXT_PATH}/ganapati-atharvashirsham.txt`,
        hiUrl: `${MEANING_PATH}/ganapati-atharvashirsham-hi.txt`,
        enUrl: `${MEANING_PATH}/ganapati-atharvashirsham-en.txt`,
        hoverColor: "var(--bauhaus-red)", // Sindoor
        cardShape: "bg-shape-23", // Hexagon (intellect/structure)
        tags: ["Ganesha", "Upanishad", "Atharvashirsham", "Tuesday"],
        bgSvg: `${SVG_PATH}/ganesh-bg.svg`,
        iconSvg: `${SVG_PATH}/ganesh-icon.svg`
    },
    {
        id: "08",
        title: "Durga Suktam",
        description: "Hymn to the protective Mother Goddess.",
        txtUrl: `${TXT_PATH}/durga-suktam.txt`,
        hiUrl: `${MEANING_PATH}/durga-suktam-hi.txt`,
        enUrl: `${MEANING_PATH}/durga-suktam-en.txt`,
        hoverColor: "var(--bauhaus-crimson)", // Fierce Red
        cardShape: "bg-shape-15", // Sharp inward chevron
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Suktam", "Friday"]
    },
    {
        id: "09",
        title: "Durva Suktam",
        description: "Chant highlighting the sacred Durva grass.",
        txtUrl: `${TXT_PATH}/durva-suktam.txt`,
        hiUrl: `${MEANING_PATH}/durva-suktam-hi.txt`,
        enUrl: `${MEANING_PATH}/durva-suktam-en.txt`,
        hoverColor: "var(--bauhaus-olive)", // Grass green
        cardShape: "bg-shape-13", // Grounded corner circle
        bgSvg: `${SVG_PATH}/ganesh-bg.svg`,
        iconSvg: `${SVG_PATH}/ganesh-icon.svg`,
        tags: ["Ganesha", "Suktam", "Wednesday"]
    },
    {
        id: "10",
        title: "Navagraha Suktam",
        description: "Hymn to the nine planetary deities.",
        txtUrl: `${TXT_PATH}/navagrahasuktam.txt`,
        hoverColor: "var(--bauhaus-violet)", // Cosmos/Space
        cardShape: "bg-shape-9", // Floating hollow orbit ring
        tags: ["Navagraha", "Suktam", "Saturday"]
    },
    {
        id: "11",
        title: "Shri Rama Stotram",
        description: "Prayers dedicated to Lord Rama.",
        txtUrl: `${TXT_PATH}/shri-rama-stotram.txt`,
        hiUrl: `${MEANING_PATH}/shri-rama-stotram-hi.txt`,
        enUrl: `${MEANING_PATH}/shri-rama-stotram-en.txt`,
        hoverColor: "var(--bauhaus-blue)",
        cardShape: "bg-shape-27", // Typographic bars (Order/Dharma)
        tags: ["Rama", "Stotram", "Thursday"],
        bgSvg: `${SVG_PATH}/vishnu-bg.svg`,
        iconSvg: `${SVG_PATH}/vishnu-tilak-icon.svg`
    },
    {
        id: "12",
        title: "Shri Sharada Stotram",
        description: "Hymn to the Goddess of Knowledge.",
        txtUrl: `${TXT_PATH}/shri-sharada-stotram.txt`,
        hiUrl: `${MEANING_PATH}/shri-sharada-stotram-hi.txt`,
        enUrl: `${MEANING_PATH}/shri-sharada-stotram-en.txt`,
        hoverColor: "var(--bauhaus-mint)",
        cardShape: "bg-shape-4", // Archway (Temple of knowledge)
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Stotram", "Wednesday"]
    },
    {
        id: "13",
        title: "Aditya Hridayam",
        description: "Powerful hymn dedicated to the Sun God, Aditya.",
        txtUrl: `${TXT_PATH}/aditya-hridayam.txt`,
        hoverColor: "var(--bauhaus-orange)",
        cardShape: "bg-shape-1", // Split-tension circle (Sun)
        tags: ["Surya", "Stotram", "Sunday"]
    },
    {
        id: "14",
        title: "Bhaja Govindam",
        description: "Adi Shankaracharya's famous composition on devotion.",
        txtUrl: `${TXT_PATH}/bhajagovindam.txt`,
        hiUrl: `${MEANING_PATH}/bhajagovindam-hi.txt`,
        enUrl: `${MEANING_PATH}/bhajagovindam-en.txt`,
        hoverColor: "var(--bauhaus-cyan)",
        cardShape: "bg-shape-12", // Horizon line
        bgSvg: `${SVG_PATH}/krishna-bg.svg`,
        iconSvg: `${SVG_PATH}/narayan-tilak-icon.svg`,
        tags: ["Vishnu", "Stotram", "Thursday"]
    },
    {
        id: "15",
        title: "Bhu Suktam",
        description: "Vedic hymn revering Mother Earth (Bhumi).",
        txtUrl: `${TXT_PATH}/bhu-suktam.txt`,
        hoverColor: "var(--bauhaus-green)",
        cardShape: "bg-shape-19", // Checkerboard (Fields/Earth)
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Suktam", "Friday"]
    },
    {
        id: "16",
        title: "Bilvashtakam",
        description: "Eight verses glorifying the offering of Bilva leaves.",
        txtUrl: `${TXT_PATH}/bilvashtakam.txt`,
        hoverColor: "var(--bauhaus-lime)",
        cardShape: "bg-shape-3", // Kinetic sliced triangle (Trifoliate leaf)
        bgSvg: `${SVG_PATH}/shiva-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "17",
        title: "Kalabhairavashtakam",
        description: "Dynamic hymn dedicated to Lord Kalabhairava of Kashi.",
        txtUrl: `${TXT_PATH}/kalabhairavashtakam.txt`,
        hoverColor: "var(--bauhaus-magenta)",
        cardShape: "bg-shape-11", // Warning stripes (Time/Fierce)
        bgSvg: `${SVG_PATH}/bhairav-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Stotram", "Tuesday"]
    },
    {
        id: "18",
        title: "Lingashtakam",
        description: "Eight verses in praise of the sacred Shiva Lingam.",
        txtUrl: `${TXT_PATH}/lingashtakam.txt`,
        hiUrl: `${MEANING_PATH}/lingashtakam-hi.txt`,
        enUrl: `${MEANING_PATH}/lingashtakam-en.txt`,
        hoverColor: "var(--bauhaus-purple)",
        cardShape: "bg-shape-8", // Heavy stark pillar
        bgSvg: `${SVG_PATH}/shiv-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "19",
        title: "Mahishasura Mardini Stotram",
        description: "Hymn praising Goddess Durga, slayer of Mahishasura.",
        txtUrl: `${TXT_PATH}/mahishasura-mardini-stotram.txt`,
        hoverColor: "var(--bauhaus-coral)",
        cardShape: "bg-shape-10", // Heavy right-angled triangle
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Stotram", "Friday"]
    },
    {
        id: "20",
        title: "Medha Suktam",
        description: "Vedic prayer for intellect, memory, and divine wisdom.",
        txtUrl: `${TXT_PATH}/medha-suktam.txt`,
        hiUrl: `${MEANING_PATH}/medha-suktam-hi.txt`,
        enUrl: `${MEANING_PATH}/medha-suktam-en.txt`,
        hoverColor: "var(--bauhaus-yellow)",
        cardShape: "bg-shape-22", // Hollow window (opening mind)
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Suktam", "Wednesday"]
    },
    {
        id: "21",
        title: "Narayana Suktam",
        description: "Hymn dedicated to Lord Narayana, the supreme cosmic being.",
        txtUrl: `${TXT_PATH}/narayana-suktam.txt`,
        hiUrl: `${MEANING_PATH}/narayana-suktam-hi.txt`,
        enUrl: `${MEANING_PATH}/narayana-suktam-en.txt`,
        hoverColor: "var(--bauhaus-blue)",
        cardShape: "bg-shape-7", // Crossing beams (Cosmic web)
        bgSvg: `${SVG_PATH}/narayan-bg.svg`,
        iconSvg: `${SVG_PATH}/narayan-tilak-icon.svg`,
        tags: ["Vishnu", "Suktam", "Thursday"]
    },
    {
        id: "22",
        title: "Nila Suktam",
        description: "Hymn honoring Goddess Nila, consort of Lord Vishnu.",
        txtUrl: `${TXT_PATH}/nila-suktam.txt`,
        hoverColor: "var(--bauhaus-teal)",
        cardShape: "bg-shape-14", // Inverted half-circle
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Suktam", "Friday"]
    },
    {
        id: "23",
        title: "Purusha Suktam",
        description: "Profound Vedic hymn describing the cosmic being.",
        txtUrl: `${TXT_PATH}/purusha-suktam.txt`,
        hoverColor: "var(--bauhaus-slate)",
        cardShape: "bg-shape-26", // Floating ziggurat
        bgSvg: `${SVG_PATH}/narayan-2-bg.svg`,
        iconSvg: `${SVG_PATH}/vishnu-tilak-icon.svg`,
        tags: ["Vishnu", "Suktam", "Thursday"]
    },
    {
        id: "24",
        title: "Shiva Margabandhu Stotram",
        description: "Prayer to Lord Shiva for protection during journeys.",
        txtUrl: `${TXT_PATH}/shiva-margabandhu-stotram.txt`,
        hiUrl: `${MEANING_PATH}/shiva-margabandhu-stotram-hi.txt`,
        enUrl: `${MEANING_PATH}/shiva-margabandhu-stotram-en.txt`,
        hoverColor: "var(--bauhaus-mint)",
        cardShape: "bg-shape-24", // Structural L-Beam (Protection)
        bgSvg: `${SVG_PATH}/shiva-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "25",
        title: "Shiva Panchakshara Stotram",
        description: "Verses glorifying the five-syllable mantra 'Om Namah Shivaya'.",
        txtUrl: `${TXT_PATH}/shiva-panchakshara-stotram.txt`,
        hiUrl: `${MEANING_PATH}/shiva-panchakshara-stotram-hi.txt`,
        enUrl: `${MEANING_PATH}/shiva-panchakshara-stotram-en.txt`,
        hoverColor: "var(--bauhaus-mustard)",
        cardShape: "bg-shape-5", // Isometric Diamond
        bgSvg: `${SVG_PATH}/trishool-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "26",
        title: "Shiva Tandava Stotram",
        description: "Ravana's powerful composition praising Shiva's cosmic dance.",
        txtUrl: `${TXT_PATH}/shiva-tandava-stotram.txt`,
        hoverColor: "var(--bauhaus-rust)", // Dynamic / Fire
        cardShape: "bg-shape-2", // Heavy bracket (Stomping foot)
        bgSvg: `${SVG_PATH}/rudra-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "27",
        title: "Sri Rudram Laghunyasam",
        description: "Preparatory purifying mantras chanted before Sri Rudram.",
        txtUrl: `${TXT_PATH}/sri-rudram-laghunyasam.txt`,
        hoverColor: "var(--bauhaus-violet)",
        cardShape: "bg-shape-6", // Radar/Expanding corner (Purification)
        bgSvg: `${SVG_PATH}/adiyogi-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Rudram", "Monday"]
    },
    {
        id: "28",
        title: "Sri Shiv Rudrashtakam",
        description: "Goswami Tulsidas's beautiful eight-verse hymn to Lord Shiva.",
        txtUrl: `${TXT_PATH}/sri-shiv-rudrashtakam.txt`,
        hiUrl: `${MEANING_PATH}/sri-shiv-rudrashtakam-hi.txt`,
        enUrl: `${MEANING_PATH}/sri-shiv-rudrashtakam-en.txt`,
        hoverColor: "var(--bauhaus-cyan)",
        cardShape: "bg-shape-16", // Stark mathematical plus/cross
        bgSvg: `${SVG_PATH}/trishool-bg.svg`,
        iconSvg: `${SVG_PATH}/shiv-tilak-icon.svg`,
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "29",
        title: "Sri Suktam",
        description: "Vedic hymn invoking Goddess Lakshmi for wealth and prosperity.",
        txtUrl: `${TXT_PATH}/sri-suktam.txt`,
        hiUrl: `${MEANING_PATH}/sri-suktam-hi.txt`,
        enUrl: `${MEANING_PATH}/sri-suktam-en.txt`,
        hoverColor: "var(--bauhaus-magenta)",
        cardShape: "bg-shape-17", // Target / Lotus center
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Suktam", "Friday"]
    },
    {
        id: "30",
        title: "Kshama Prarthana",
        description: "Concluding prayers seeking forgiveness for any errors during chanting.",
        txtUrl: `${TXT_PATH}/kshama-prarthana.txt`,
        hiUrl: `${MEANING_PATH}/kshama-prarthana-hi.txt`,
        enUrl: `${MEANING_PATH}/kshama-prarthana-en.txt`,
        hoverColor: "var(--bauhaus-teal)",
        cardShape: "bg-shape-12", // Horizon line (Peace / Resolution)
        tags: ["Generic", "Prarthana", "Rudram"]
    },
    // --- BRAND NEW ADDITIONS (31-34) ---
    {
        id: "31",
        title: "Devi Aparadha Kshamapana Stotram",
        description: "A prayer seeking forgiveness from the Divine Mother for transgressions.",
        txtUrl: `${TXT_PATH}/devi-aparadha-kshamapana-stotram.txt`,
        hiUrl: `${MEANING_PATH}/devi-aparadha-kshamapana-stotram-hi.txt`,
        enUrl: `${MEANING_PATH}/devi-aparadha-kshamapana-stotram-en.txt`,
        hoverColor: "var(--bauhaus-pink)", // Compassion / Mother
        cardShape: "bg-shape-22", // Hollow window (Opening the heart)
        bgSvg: `${SVG_PATH}/devi-bg.svg`,
        tags: ["Devi", "Stotram", "Prarthana", "Friday"]
    },
    {
        id: "32",
        title: "Isha Upanishad",
        description: "One of the principal Upanishads focusing on the nature of the Supreme.",
        txtUrl: `${TXT_PATH}/isha-upanishad.txt`,
        hiUrl: `${MEANING_PATH}/isha-upanishad-hi.txt`,
        enUrl: `${MEANING_PATH}/isha-upanishad-en.txt`,
        hoverColor: "var(--bauhaus-slate)", // Deep Structure / Knowledge
        cardShape: "bg-shape-7", // Crossing beams (Cosmic Web)
        tags: ["Generic", "Upanishad", "Isha"] // Fits generally into ALL 
    },
    {
        id: "33",
        title: "Mandukya Upanishad",
        description: "Profound text expounding the syllable OM and the states of consciousness.",
        txtUrl: `${TXT_PATH}/mandukya-upanishad.txt`,
        hiUrl: `${MEANING_PATH}/mandukya-upanishad-hi.txt`,
        enUrl: `${MEANING_PATH}/mandukya-upanishad-en.txt`,
        hoverColor: "var(--bauhaus-indigo)", // Consciousness / Deep Mind
        cardShape: "bg-shape-17", // Target / Concentric circles for OM
        tags: ["Generic", "Upanishad", "Mandukya"] // Fits generally into ALL
    },
    {
        id: "34",
        title: "Nama Ramayana",
        description: "The entire story of Lord Rama condensed into a series of divine names.",
        txtUrl: `${TXT_PATH}/nama-ramayana.txt`,
        hiUrl: `${MEANING_PATH}/nama-ramayana-hi.txt`,
        enUrl: `${MEANING_PATH}/nama-ramayana-en.txt`,
        hoverColor: "var(--bauhaus-orange)",
        cardShape: "bg-shape-27", // Typographic Bars (Sequences / Story progression)
        bgSvg: `${SVG_PATH}/vishnu-bg.svg`,
        iconSvg: `${SVG_PATH}/vishnu-tilak-icon.svg`,
        tags: ["Rama", "Stotram", "Thursday"]
    },
    {
        id: "35",
        title: "Vishnu Suktam",
        description: "A sacred hymn honoring Lord Vishnu's eternal omnipresence.",
        txtUrl: `${TXT_PATH}/vishnu-suktam.txt`,
        hiUrl: `${MEANING_PATH}/vishnu-suktam-hi.txt`,
        enUrl: `${MEANING_PATH}/vishnu-suktam-en.txt`,
        hoverColor: "var(--bauhaus-blue)", // Blue perfectly represents Vishnu (the cosmic ocean/sky)
        cardShape: "bg-shape-20", // Massive Rising Semi-Circle (Represents a rising cosmic presence)
        bgSvg: `${SVG_PATH}/vishnu-bg.svg`,
        iconSvg: `${SVG_PATH}/vishnu-tilak-icon.svg`,
        tags: ["Vishnu", "Suktam", "Thursday"]
    },
    {
        id: "36",
        title: "Hanuman Chalisa",
        description: "Forty powerful verses praising Lord Hanuman's devotion, immense strength, and glory.",
        txtUrl: `${TXT_PATH}/hanuman-chalisa.txt`,
        hiUrl: `${MEANING_PATH}/hanuman-chalisa-hi.txt`,
        enUrl: `${MEANING_PATH}/hanuman-chalisa-en.txt`,
        hoverColor: "var(--bauhaus-orange)", // Saffron/Orange representing Bajrangbali
        cardShape: "bg-shape-10",
        bgSvg: `${SVG_PATH}/ram-darbar-bg.svg`,
        iconSvg: `${SVG_PATH}/hanuman-gada-icon.svg`,
        tags: ["Hanuman", "Chalisa", "Tuesday"]
    },
    {
        id: "37",
        title: "Shri Gananayaka Ashtakam",
        description: "A powerful eight-verse hymn dedicated to Lord Ganesha for removing obstacles and attaining success.",
        txtUrl: `${TXT_PATH}/sri-gananayakashtakam.txt`,
        hiUrl: `${MEANING_PATH}/sri-gananayakashtakam-hi.txt`,
        enUrl: `${MEANING_PATH}/sri-gananayakashtakam-en.txt`,
        hoverColor: "var(--bauhaus-yellow)", // Represents wisdom, auspicious beginnings, and the golden glow (Taptakanchana)
        cardShape: "bg-shape-4", // Archway (Symbolizing an auspicious entry/beginning)
        bgSvg: `${SVG_PATH}/ganesh-bg.svg`,
        iconSvg: `${SVG_PATH}/ganesh-icon.svg`,
        tags: ["Ganesha", "Ashtakam", "Wednesday"]
    },
    {
        id: "38",
        title: "Ganesha Suktam",
        description: "A powerful Vedic hymn dedicated to Lord Ganesha, the remover of obstacles.",
        txtUrl: `${TXT_PATH}/ganesha-suktam.txt`,
        hiUrl: `${MEANING_PATH}/ganesha-suktam-hi.txt`,
        enUrl: `${MEANING_PATH}/ganesha-suktam-en.txt`,
        hoverColor: "var(--bauhaus-coral)", // Red/Coral matches Ganesha
        cardShape: "bg-shape-13", // Grounded circular corner shape
        bgSvg: `${SVG_PATH}/ganesh-bg.svg`,
        iconSvg: `${SVG_PATH}/ganesh-icon.svg`,
        tags: ["Ganesha", "Suktam", "Wednesday"]
    }
];
