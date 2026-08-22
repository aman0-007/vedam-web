// js/data.js

const vedasData = [
    {
        id: "01",
        title: "Ganapati Prarthana",
        description: "Initial prayers dedicated to Lord Ganesha.",
        txtUrl: "assets/txts/ganapati-prarthana.txt",
        hiUrl: "assets/meanings/ganapati-prarthana-hi.txt",
        enUrl: "assets/meanings/ganapati-prarthana-en.txt",
        hoverColor: "var(--bauhaus-coral)",
        cardShape: "bg-shape-17", // Target/Bullseye for the starting prayer
        tags: ["Ganesha", "Prarthana", "Rudram"],
        bgSvg: "assets/svgs/ganesh-bg.svg",
        iconSvg: "assets/svgs/ganesh-icon.svg"
    },
    {
        id: "02",
        title: "Sri Rudram Namakam",
        description: "Salutations to Rudra, the roaring storm.",
        txtUrl: "assets/txts/sri-rudram-namakam.txt",
        hoverColor: "var(--bauhaus-slate)", // Ash / Bhasma
        cardShape: "bg-shape-21", // Speed lines for the roaring storm
        bgSvg: "assets/svgs/adiyogi-bg.svg",
        tags: ["Shiva", "Suktam", "Rudram", "Monday"]
    },
    {
        id: "03",
        title: "Sri Rudram Chamakam",
        description: "Fulfillment of desires through Rudra.",
        txtUrl: "assets/txts/sri-rudram-chamakam.txt",
        hoverColor: "var(--bauhaus-rust)", // Earthy / Rudraksha
        cardShape: "bg-shape-18", // Stepped Ziggurat (building desires)
        bgSvg: "assets/svgs/adiyogi-bg.svg",
        tags: ["Shiva", "Suktam", "Rudram", "Monday"]
    },
    {
        id: "04",
        title: "Shivopasana Mantra",
        description: "Mantras for the worship of Shiva.",
        txtUrl: "assets/txts/shivopasana-mantra.txt",
        hiUrl: "assets/meanings/shivopasana-mantra-hi.txt",
        enUrl: "assets/meanings/shivopasana-mantra-en.txt",
        hoverColor: "var(--bauhaus-indigo)", // Deep meditation
        cardShape: "bg-shape-28", // Heavy U-Curve
        bgSvg: "assets/svgs/trishool-bg.svg",
        tags: ["Shiva", "Mantra", "Rudram", "Monday"]
    },
    {
        id: "05",
        title: "Mantra Pushpam",
        description: "The flower of Vedic chants.",
        txtUrl: "assets/txts/mantra-pushpam.txt",
        hoverColor: "var(--bauhaus-pink)", // Lotus/Flowers
        cardShape: "bg-shape-25", // Alternating quadrant petals
        tags: ["Generic", "Mantra", "Rudram"]
    },
    {
        id: "06",
        title: "Bhagya Suktam",
        description: "Hymn for luck, wealth, and prosperity.",
        txtUrl: "assets/txts/bhagya-suktam.txt",
        hoverColor: "var(--bauhaus-mustard)", // Golden wealth
        cardShape: "bg-shape-20", // Rising semi-circle (growth)
        tags: ["Surya", "Suktam", "Sunday"]
    },
    {
        id: "07",
        title: "Ganapati Atharvashirsham",
        description: "Upanishad dedicated to Ganesha.",
        txtUrl: "assets/txts/ganapati-atharvashirsham.txt",
        hoverColor: "var(--bauhaus-red)", // Sindoor
        cardShape: "bg-shape-23", // Hexagon (intellect/structure)
        tags: ["Ganesha", "Upanishad", "Atharvashirsham", "Tuesday"],
        bgSvg: "assets/svgs/ganesh-bg.svg",
        iconSvg: "assets/svgs/ganesh-icon.svg"
    },
    {
        id: "08",
        title: "Durga Suktam",
        description: "Hymn to the protective Mother Goddess.",
        txtUrl: "assets/txts/durga-suktam.txt",
        hiUrl: "assets/meanings/durga-suktam-hi.txt",
        enUrl: "assets/meanings/durga-suktam-en.txt",
        hoverColor: "var(--bauhaus-crimson)", // Fierce Red
        cardShape: "bg-shape-15", // Sharp inward chevron
        tags: ["Devi", "Suktam", "Friday"]
    },
    {
        id: "09",
        title: "Durva Suktam",
        description: "Chant highlighting the sacred Durva grass.",
        txtUrl: "assets/txts/durva-suktam.txt",
        hiUrl: "assets/meanings/durva-suktam-hi.txt",
        enUrl: "assets/meanings/durva-suktam-en.txt",
        hoverColor: "var(--bauhaus-olive)", // Grass green
        cardShape: "bg-shape-13", // Grounded corner circle
        tags: ["Ganesha", "Suktam", "Wednesday"]
    },
    {
        id: "10",
        title: "Navagraha Suktam",
        description: "Hymn to the nine planetary deities.",
        txtUrl: "assets/txts/navagrahasuktam.txt",
        hoverColor: "var(--bauhaus-violet)", // Cosmos/Space
        cardShape: "bg-shape-9", // Floating hollow orbit ring
        tags: ["Navagraha", "Suktam", "Saturday"]
    },
    {
        id: "11",
        title: "Shri Rama Stotram",
        description: "Prayers dedicated to Lord Rama.",
        txtUrl: "assets/txts/shri-rama-stotram.txt",
        hiUrl: "assets/meanings/shri-rama-stotram-hi.txt",
        enUrl: "assets/meanings/shri-rama-stotram-en.txt",
        hoverColor: "var(--bauhaus-blue)",
        cardShape: "bg-shape-27", // Typographic bars (Order/Dharma)
        tags: ["Rama", "Stotram", "Thursday"],
        bgSvg: "assets/svgs/vishnu-bg.svg",
        iconSvg: "assets/svgs/vishnu-tilak-icon.svg"
    },
    {
        id: "12",
        title: "Shri Sharada Stotram",
        description: "Hymn to the Goddess of Knowledge.",
        txtUrl: "assets/txts/shri-sharada-stotram.txt",
        hiUrl: "assets/meanings/shri-sharada-stotram-hi.txt",
        enUrl: "assets/meanings/shri-sharada-stotram-en.txt",
        hoverColor: "var(--bauhaus-mint)",
        cardShape: "bg-shape-4", // Archway (Temple of knowledge)
        tags: ["Devi", "Stotram", "Wednesday"]
    },
    {
        id: "13",
        title: "Aditya Hridayam",
        description: "Powerful hymn dedicated to the Sun God, Aditya.",
        txtUrl: "assets/txts/aditya-hridayam.txt",
        hoverColor: "var(--bauhaus-orange)",
        cardShape: "bg-shape-1", // Split-tension circle (Sun)
        tags: ["Surya", "Stotram", "Sunday"]
    },
    {
        id: "14",
        title: "Bhaja Govindam",
        description: "Adi Shankaracharya's famous composition on devotion.",
        txtUrl: "assets/txts/bhajagovindam.txt",
        hiUrl: "assets/meanings/bhajagovindam-hi.txt",
        enUrl: "assets/meanings/bhajagovindam-en.txt",
        hoverColor: "var(--bauhaus-cyan)",
        cardShape: "bg-shape-12", // Horizon line
        bgSvg: "assets/svgs/krishna-bg.svg",
        tags: ["Vishnu", "Stotram", "Thursday"]
    },
    {
        id: "15",
        title: "Bhu Suktam",
        description: "Vedic hymn revering Mother Earth (Bhumi).",
        txtUrl: "assets/txts/bhu-suktam.txt",
        hoverColor: "var(--bauhaus-green)",
        cardShape: "bg-shape-19", // Checkerboard (Fields/Earth)
        tags: ["Devi", "Suktam", "Friday"]
    },
    {
        id: "16",
        title: "Bilvashtakam",
        description: "Eight verses glorifying the offering of Bilva leaves.",
        txtUrl: "assets/txts/bilvashtakam.txt",
        hoverColor: "var(--bauhaus-lime)",
        cardShape: "bg-shape-3", // Kinetic sliced triangle (Trifoliate leaf)
        bgSvg: "assets/svgs/shiva-bg.svg",
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "17",
        title: "Kalabhairavashtakam",
        description: "Dynamic hymn dedicated to Lord Kalabhairava of Kashi.",
        txtUrl: "assets/txts/kalabhairavashtakam.txt",
        hoverColor: "var(--bauhaus-magenta)",
        cardShape: "bg-shape-11", // Warning stripes (Time/Fierce)
        bgSvg: "assets/svgs/rudra-bg.svg",
        tags: ["Shiva", "Stotram", "Tuesday"]
    },
    {
        id: "18",
        title: "Lingashtakam",
        description: "Eight verses in praise of the sacred Shiva Lingam.",
        txtUrl: "assets/txts/lingashtakam.txt",
        hiUrl: "assets/meanings/lingashtakam-hi.txt",
        enUrl: "assets/meanings/lingashtakam-en.txt",
        hoverColor: "var(--bauhaus-purple)",
        cardShape: "bg-shape-8", // Heavy stark pillar
        bgSvg: "assets/svgs/shiva-bg.svg",
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "19",
        title: "Mahishasura Mardini Stotram",
        description: "Hymn praising Goddess Durga, slayer of Mahishasura.",
        txtUrl: "assets/txts/mahishasura-mardini-stotram.txt",
        hoverColor: "var(--bauhaus-coral)",
        cardShape: "bg-shape-10", // Heavy right-angled triangle
        bgSvg: "assets/svgs/devi-bg.svg",
        tags: ["Devi", "Stotram", "Friday"]
    },
    {
        id: "20",
        title: "Medha Suktam",
        description: "Vedic prayer for intellect, memory, and divine wisdom.",
        txtUrl: "assets/txts/medha-suktam.txt",
        hoverColor: "var(--bauhaus-yellow)",
        cardShape: "bg-shape-22", // Hollow window (opening mind)
        tags: ["Devi", "Suktam", "Wednesday"]
    },
    {
        id: "21",
        title: "Narayana Suktam",
        description: "Hymn dedicated to Lord Narayana, the supreme cosmic being.",
        txtUrl: "assets/txts/narayana-suktam.txt",
        hoverColor: "var(--bauhaus-blue)",
        cardShape: "bg-shape-7", // Crossing beams (Cosmic web)
        bgSvg: "assets/svgs/krishna-bg.svg",
        tags: ["Vishnu", "Suktam", "Thursday"]
    },
    {
        id: "22",
        title: "Nila Suktam",
        description: "Hymn honoring Goddess Nila, consort of Lord Vishnu.",
        txtUrl: "assets/txts/nila-suktam.txt",
        hoverColor: "var(--bauhaus-teal)",
        cardShape: "bg-shape-14", // Inverted half-circle
        bgSvg: "assets/svgs/devi-bg.svg",
        tags: ["Devi", "Suktam", "Friday"] 
    },
    {
        id: "23",
        title: "Purusha Suktam",
        description: "Profound Vedic hymn describing the cosmic being.",
        txtUrl: "assets/txts/purusha-suktam.txt",
        hoverColor: "var(--bauhaus-slate)",
        cardShape: "bg-shape-26", // Floating ziggurat
        bgSvg: "assets/svgs/krishna-bg.svg",
        tags: ["Vishnu", "Suktam", "Thursday"] 
    },
    {
        id: "24",
        title: "Shiva Margabandhu Stotram",
        description: "Prayer to Lord Shiva for protection during journeys.",
        txtUrl: "assets/txts/shiva-margabandhu-stotram.txt",
        hiUrl: "assets/meanings/shiva-margabandhu-stotram-hi.txt",
        enUrl: "assets/meanings/shiva-margabandhu-stotram-en.txt",
        hoverColor: "var(--bauhaus-mint)",
        cardShape: "bg-shape-24", // Structural L-Beam (Protection)
        bgSvg: "assets/svgs/trishool-bg.svg",
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "25",
        title: "Shiva Panchakshara Stotram",
        description: "Verses glorifying the five-syllable mantra 'Om Namah Shivaya'.",
        txtUrl: "assets/txts/shiva-panchakshara-stotram.txt",
        hiUrl: "assets/meanings/shiva-panchakshara-stotram-hi.txt",
        enUrl: "assets/meanings/shiva-panchakshara-stotram-en.txt",
        hoverColor: "var(--bauhaus-mustard)",
        cardShape: "bg-shape-5", // Isometric Diamond
        bgSvg: "assets/svgs/trishool-bg.svg",
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "26",
        title: "Shiva Tandava Stotram",
        description: "Ravana's powerful composition praising Shiva's cosmic dance.",
        txtUrl: "assets/txts/shiva-tandava-stotram.txt",
        hoverColor: "var(--bauhaus-rust)", // Dynamic / Fire
        cardShape: "bg-shape-2", // Heavy bracket (Stomping foot)
        bgSvg: "assets/svgs/rudra-bg.svg",
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "27",
        title: "Sri Rudram Laghunyasam",
        description: "Preparatory purifying mantras chanted before Sri Rudram.",
        txtUrl: "assets/txts/sri-rudram-laghunyasam.txt",
        hoverColor: "var(--bauhaus-violet)",
        cardShape: "bg-shape-6", // Radar/Expanding corner (Purification)
        bgSvg: "assets/svgs/adiyogi-bg.svg",
        tags: ["Shiva", "Rudram", "Monday"]
    },
    {
        id: "28",
        title: "Sri Shiv Rudrashtakam",
        description: "Goswami Tulsidas's beautiful eight-verse hymn to Lord Shiva.",
        txtUrl: "assets/txts/sri-shiv-rudrashtakam.txt",
        hiUrl: "assets/meanings/sri-shiv-rudrashtakam-hi.txt",
        enUrl: "assets/meanings/sri-shiv-rudrashtakam-en.txt",
        hoverColor: "var(--bauhaus-cyan)",
        cardShape: "bg-shape-16", // Stark mathematical plus/cross
        bgSvg: "assets/svgs/trishool-bg.svg",
        tags: ["Shiva", "Stotram", "Monday"]
    },
    {
        id: "29",
        title: "Sri Suktam",
        description: "Vedic hymn invoking Goddess Lakshmi for wealth and prosperity.",
        txtUrl: "assets/txts/sri-suktam.txt",
        hoverColor: "var(--bauhaus-magenta)",
        cardShape: "bg-shape-17", // Target / Lotus center
        bgSvg: "assets/svgs/devi-bg.svg",
        tags: ["Devi", "Suktam", "Friday"]
    },
    {
        id: "30",
        title: "Kshama Prarthana",
        description: "Concluding prayers seeking forgiveness for any errors during chanting.",
        txtUrl: "assets/txts/kshama-prarthana.txt",
        hiUrl: "assets/meanings/kshama-prarthana-hi.txt",
        enUrl: "assets/meanings/kshama-prarthana-en.txt",
        hoverColor: "var(--bauhaus-teal)",
        cardShape: "bg-shape-12", // Horizon line (Peace / Resolution)
        tags: ["Generic", "Prarthana", "Rudram"]
    },
    // --- BRAND NEW ADDITIONS (31-34) ---
    {
        id: "31",
        title: "Devi Aparadha Kshamapana Stotram",
        description: "A prayer seeking forgiveness from the Divine Mother for transgressions.",
        txtUrl: "assets/txts/devi-aparadha-kshamapana-stotram.txt",
        hiUrl: "assets/meanings/devi-aparadha-kshamapana-stotram-hi.txt",
        enUrl: "assets/meanings/devi-aparadha-kshamapana-stotram-en.txt",
        hoverColor: "var(--bauhaus-pink)", // Compassion / Mother
        cardShape: "bg-shape-22", // Hollow window (Opening the heart)
        bgSvg: "assets/svgs/devi-bg.svg",
        tags: ["Devi", "Stotram", "Prarthana", "Friday"]
    },
    {
        id: "32",
        title: "Isha Upanishad",
        description: "One of the principal Upanishads focusing on the nature of the Supreme.",
        txtUrl: "assets/txts/isha-upanishad.txt",
        hiUrl: "assets/meanings/isha-upanishad-hi.txt",
        enUrl: "assets/meanings/isha-upanishad-en.txt",
        hoverColor: "var(--bauhaus-slate)", // Deep Structure / Knowledge
        cardShape: "bg-shape-7", // Crossing beams (Cosmic Web)
        tags: ["Generic", "Upanishad", "Isha"] // Fits generally into ALL 
    },
    {
        id: "33",
        title: "Mandukya Upanishad",
        description: "Profound text expounding the syllable OM and the states of consciousness.",
        txtUrl: "assets/txts/mandukya-upanishad.txt",
        hiUrl: "assets/meanings/mandukya-upanishad-hi.txt",
        enUrl: "assets/meanings/mandukya-upanishad-en.txt",
        hoverColor: "var(--bauhaus-indigo)", // Consciousness / Deep Mind
        cardShape: "bg-shape-17", // Target / Concentric circles for OM
        tags: ["Generic", "Upanishad", "Mandukya"] // Fits generally into ALL
    },
    {
        id: "34",
        title: "Nama Ramayana",
        description: "The entire story of Lord Rama condensed into a series of divine names.",
        txtUrl: "assets/txts/nama-ramayana.txt",
        hiUrl: "assets/meanings/nama-ramayana-hi.txt",
        enUrl: "assets/meanings/nama-ramayana-en.txt",
        hoverColor: "var(--bauhaus-orange)",
        cardShape: "bg-shape-27", // Typographic Bars (Sequences / Story progression)
        bgSvg: "assets/svgs/vishnu-bg.svg",
        iconSvg: "assets/svgs/vishnu-tilak-icon.svg",
        tags: ["Rama", "Stotram", "Thursday"]
    },

        {
                    id: "35",
                    title: "Vishnu Suktam",
                    description: "A powerful Vedic hymn revering Lord Vishnu, describing His three cosmic strides and eternal omnipresence.",
                    txtUrl: "assets/txts/vishnu-suktam.txt",
                    hoverColor: "var(--bauhaus-blue)", // Blue perfectly represents Vishnu (the cosmic ocean/sky)
                    cardShape: "bg-shape-20", // Massive Rising Semi-Circle (Represents a rising cosmic presence)
                    bgSvg: "assets/svgs/vishnu-bg.svg",
                    iconSvg: "assets/svgs/vishnu-tilak-icon.svg",
                    tags: ["Vishnu", "Suktam", "Thursday"]
                }
];
