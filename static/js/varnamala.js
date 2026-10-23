/**
 * VaaniAI - Sanskrit Varṇamālā & Advanced Study Hub Controller
 * Built for High-Impact Judge & Exhibition Pitches
 */

(function() {
  // Comprehensive Canonical Sanskrit Varṇamālā Catalog
  const VARNAMALA_DATA = [
    // --- SVARA (Vowels - 13 + 2) ---
    { symbol: "अ", roman: "a", type: "vowel", varga: "svara", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Throat)", matra: "१ मात्रा (ह्रस्व)", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: true, mahaprana: false, tip: "Open throat in a relaxed, neutral posture. Unobstructed vocal airflow." },
    { symbol: "आ", roman: "ā", type: "vowel", varga: "svara", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Throat)", matra: "२ मात्रा (दीर्घ)", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: true, mahaprana: false, tip: "Hold throat vowel for two full mātrās with mouth comfortably open." },
    { symbol: "इ", roman: "i", type: "vowel", varga: "svara", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palate)", matra: "१ मात्रा (ह्रस्व)", sutra: "इचुयशानां तालु", ghosha: true, mahaprana: false, tip: "Middle of tongue arches gently toward the hard palate." },
    { symbol: "ई", roman: "ī", type: "vowel", varga: "svara", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palate)", matra: "२ मात्रा (दीर्घ)", sutra: "इचुयशानां तालु", ghosha: true, mahaprana: false, tip: "High front palatal sound sustained for two full beats." },
    { symbol: "उ", roman: "u", type: "vowel", varga: "svara", sthana: "oshthya", sthana_name: "ओष्ठ्य (Oṣṭhya - Lips)", matra: "१ मात्रा (ह्रस्व)", sutra: "उपूपध्मानीयानामोष्ठौ", ghosha: true, mahaprana: false, tip: "Lips rounded forward into a neat circle without dental contact." },
    { symbol: "ऊ", roman: "ū", type: "vowel", varga: "svara", sthana: "oshthya", sthana_name: "ओष्ठ्य (Oṣṭhya - Lips)", matra: "२ मात्रा (दीर्घ)", sutra: "उपूपध्मानीयानामोष्ठौ", ghosha: true, mahaprana: false, tip: "Long rounded lip vowel sustained with clear resonance." },
    { symbol: "ऋ", roman: "ṛ", type: "vowel", varga: "svara", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex Roof)", matra: "१ मात्रा (ह्रस्व)", sutra: "ऋटुरषाणां मूर्धा", ghosha: true, mahaprana: false, tip: "Curl tongue tip lightly toward the palate roof. Uttered as pure vowel, not 'ri'." },
    { symbol: "ॠ", roman: "ṝ", type: "vowel", varga: "svara", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex Roof)", matra: "२ मात्रा (दीर्घ)", sutra: "ऋटुरषाणां मूर्धा", ghosha: true, mahaprana: false, tip: "Long vocalic retroflex held for two counts with arched tongue tip." },
    { symbol: "ऌ", roman: "ḷ", type: "vowel", varga: "svara", sthana: "dantya", sthana_name: "दन्त्य (Dantya - Teeth)", matra: "१ मात्रा (ह्रस्व)", sutra: "ऌतुलसानां दन्ताः", ghosha: true, mahaprana: false, tip: "Tongue tip placed near upper teeth; pure vocalic 'l' (not 'li')." },
    { symbol: "ए", roman: "e", type: "vowel", varga: "svara", sthana: "kanthatālavya", sthana_name: "कण्ठतालव्य (Kaṇṭhatālavya - Throat & Palate)", matra: "२ मात्रा (सन्ध्यक्षर)", sutra: "एदैतोः कण्ठतालु", ghosha: true, mahaprana: false, tip: "Diphthong from throat open 'a' transitioning smoothly to palatal 'i'." },
    { symbol: "ऐ", roman: "ai", type: "vowel", varga: "svara", sthana: "kanthatālavya", sthana_name: "कण्ठतालव्य (Kaṇṭhatālavya - Throat & Palate)", matra: "२ मात्रा (सन्ध्यक्षर)", sutra: "एदैतोः कण्ठतालु", ghosha: true, mahaprana: false, tip: "Wide open throat glide upward towards high palate." },
    { symbol: "ओ", roman: "o", type: "vowel", varga: "svara", sthana: "kanthoṣṭhya", sthana_name: "कण्ठोष्ठ्य (Kaṇṭhoṣṭhya - Throat & Lips)", matra: "२ मात्रा (सन्ध्यक्षर)", sutra: "ओदौतोः कण्ठोष्ठम्", ghosha: true, mahaprana: false, tip: "Open throat combined with medium rounded lips (pure long 'o')." },
    { symbol: "औ", roman: "au", type: "vowel", varga: "svara", sthana: "kanthoṣṭhya", sthana_name: "कण्ठोष्ठ्य (Kaṇṭhoṣṭhya - Throat & Lips)", matra: "२ मात्रा (सन्ध्यक्षर)", sutra: "ओदौतोः कण्ठोष्ठम्", ghosha: true, mahaprana: false, tip: "Open throat 'a' gliding forward to fully rounded lips 'u'." },
    { symbol: "अं", roman: "aṃ", type: "vowel", varga: "ayogavaha", sthana: "nasika", sthana_name: "नासिक्य (Nāsikya - Anusvāra)", matra: "१ मात्रा", sutra: "नासिकानुस्वारस्य", ghosha: true, mahaprana: false, tip: "Pure nasal resonance through the nasal cavity following a vowel." },
    { symbol: "अः", roman: "aḥ", type: "vowel", varga: "ayogavaha", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Visarga)", matra: "१/२ मात्रा", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: false, mahaprana: true, tip: "Gentle glottal puff of air echoing the timbre of the preceding vowel." },

    // --- SPARSHA VYAÑJANA (The 25 Class Consonants) ---
    // 1. Ka-varga (कण्ठ्य - Throat / Velar)
    { symbol: "क", roman: "ka", type: "consonant", varga: "ka-varga", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Velar)", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: false, mahaprana: false, tip: "Back of tongue lightly contacts soft palate; unaspirated, crisp stop." },
    { symbol: "ख", roman: "kha", type: "consonant", varga: "ka-varga", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Velar)", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: false, mahaprana: true, tip: "Same place as 'क' but release an energetic warm breath burst." },
    { symbol: "ग", roman: "ga", type: "consonant", varga: "ka-varga", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Velar)", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: true, mahaprana: false, tip: "Voiced throat stop; vocal cords vibrate with gentle breath." },
    { symbol: "घ", roman: "gha", type: "consonant", varga: "ka-varga", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Velar)", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: true, mahaprana: true, tip: "Voiced aspirated sound; strong vibration combined with heavy throat breath." },
    { symbol: "ङ", roman: "ṅa", type: "consonant", varga: "ka-varga", sthana: "kanthya", sthana_name: "कण्ठ्य-नासिक्य (Kaṇṭhya-Nāsikya)", sutra: "ञमङणनमानां नासिका च", ghosha: true, mahaprana: false, tip: "Nasal stop of Ka-varga. Soft palate lowers while tongue back seals throat." },

    // 2. Ca-varga (तालव्य - Hard Palate)
    { symbol: "च", roman: "ca", type: "consonant", varga: "ca-varga", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palatal)", sutra: "इचुयशानां तालु", ghosha: false, mahaprana: false, tip: "Blade of tongue presses flat against hard palate; pure unvoiced palatal." },
    { symbol: "छ", roman: "cha", type: "consonant", varga: "ca-varga", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palatal)", sutra: "इचुयशानां तालु", ghosha: false, mahaprana: true, tip: "Same contact as 'च' followed by an explosive aspirated breath." },
    { symbol: "ज", roman: "ja", type: "consonant", varga: "ca-varga", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palatal)", sutra: "इचुयशानां तालु", ghosha: true, mahaprana: false, tip: "Voiced palatal stop; tongue blade on palate with vocal cord buzz." },
    { symbol: "झ", roman: "jha", type: "consonant", varga: "ca-varga", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palatal)", sutra: "इचुयशानां तालु", ghosha: true, mahaprana: true, tip: "Voiced aspirated palatal stop; rich vocal resonance plus breath rush." },
    { symbol: "ञ", roman: "ña", type: "consonant", varga: "ca-varga", sthana: "talavya", sthana_name: "तालव्य-नासिक्य (Tālavya-Nāsikya)", sutra: "ञमङणनमानां नासिका च", ghosha: true, mahaprana: false, tip: "Palatal nasal sound; tongue blade seals palate while air exits nose." },

    // 3. Ṭa-varga (मूर्धन्य - Retroflex Palate Roof)
    { symbol: "ट", roman: "ṭa", type: "consonant", varga: "ta-retroflex-varga", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex)", sutra: "ऋटुरषाणां मूर्धा", ghosha: false, mahaprana: false, tip: "CRITICAL: Tongue tip curled backward touching high palate roof. Sharp release!" },
    { symbol: "ठ", roman: "ṭha", type: "consonant", varga: "ta-retroflex-varga", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex)", sutra: "ऋटुरषाणां मूर्धा", ghosha: false, mahaprana: true, tip: "Curled tongue at roof with powerful breath release." },
    { symbol: "ड", roman: "ḍa", type: "consonant", varga: "ta-retroflex-varga", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex)", sutra: "ऋटुरषाणां मूर्धा", ghosha: true, mahaprana: false, tip: "Voiced retroflex stop. Tongue curled back with vocal cord hum." },
    { symbol: "ढ", roman: "ḍha", type: "consonant", varga: "ta-retroflex-varga", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex)", sutra: "ऋटुरषाणां मूर्धा", ghosha: true, mahaprana: true, tip: "Voiced aspirated retroflex stop; deep reverberation." },
    { symbol: "ण", roman: "ṇa", type: "consonant", varga: "ta-retroflex-varga", sthana: "murdhanya", sthana_name: "मूर्धन्य-नासिक्य (Mūrdhanya-Nāsikya)", sutra: "ञमङणनमानां नासिका च", ghosha: true, mahaprana: false, tip: "Nasal sound with tongue tip curled back against palate dome." },

    // 4. Ta-varga (दन्त्य - Upper Front Teeth)
    { symbol: "त", roman: "ta", type: "consonant", varga: "ta-dental-varga", sthana: "dantya", sthana_name: "दन्त्य (Dantya - Dental)", sutra: "ऌतुलसानां दन्ताः", ghosha: false, mahaprana: false, tip: "CRITICAL: Tongue tip touches back of upper front teeth. NOT retroflex!" },
    { symbol: "थ", roman: "tha", type: "consonant", varga: "ta-dental-varga", sthana: "dantya", sthana_name: "दन्त्य (Dantya - Dental)", sutra: "ऌतुलसानां दन्ताः", ghosha: false, mahaprana: true, tip: "Tongue tip behind upper teeth with strong breath puff." },
    { symbol: "द", roman: "da", type: "consonant", varga: "ta-dental-varga", sthana: "dantya", sthana_name: "दन्त्य (Dantya - Dental)", sutra: "ऌतुलसानां दन्ताः", ghosha: true, mahaprana: false, tip: "Voiced dental stop; tongue on upper teeth with clear vocal vibration." },
    { symbol: "ध", roman: "dha", type: "consonant", varga: "ta-dental-varga", sthana: "dantya", sthana_name: "दन्त्य (Dantya - Dental)", sutra: "ऌतुलसानां दन्ताः", ghosha: true, mahaprana: true, tip: "Voiced aspirated dental stop; vocal buzz followed by warm breath." },
    { symbol: "न", roman: "na", type: "consonant", varga: "ta-dental-varga", sthana: "dantya", sthana_name: "दन्त्य-नासिक्य (Dantya-Nāsikya)", sutra: "ञमङणनमानां नासिका च", ghosha: true, mahaprana: false, tip: "Dental nasal stop; tongue tip contacts upper teeth while air escapes nose." },

    // 5. Pa-varga (ओष्ठ्य - Lips / Bilabial)
    { symbol: "प", roman: "pa", type: "consonant", varga: "pa-varga", sthana: "oshthya", sthana_name: "ओष्ठ्य (Oṣṭhya - Labial)", sutra: "उपूपध्मानीयानामोष्ठौ", ghosha: false, mahaprana: false, tip: "Both lips seal together and open briskly with no aspiration." },
    { symbol: "फ", roman: "pha", type: "consonant", varga: "pa-varga", sthana: "oshthya", sthana_name: "ओष्ठ्य (Oṣṭhya - Labial)", sutra: "उपूपध्मानीयानामोष्ठौ", ghosha: false, mahaprana: true, tip: "Bilabial stop with sudden air puff. (Note: Classical 'pha', not English labiodental 'f')." },
    { symbol: "ब", roman: "ba", type: "consonant", varga: "pa-varga", sthana: "oshthya", sthana_name: "ओष्ठ्य (Oṣṭhya - Labial)", sutra: "उपूपध्मानीयानामोष्ठौ", ghosha: true, mahaprana: false, tip: "Voiced bilabial stop; lips close while vocal cords hum." },
    { symbol: "भ", roman: "bha", type: "consonant", varga: "pa-varga", sthana: "oshthya", sthana_name: "ओष्ठ्य (Oṣṭhya - Labial)", sutra: "उपूपध्मानीयानामोष्ठौ", ghosha: true, mahaprana: true, tip: "Voiced aspirated labial stop; vocal cord vibration followed by deep breath." },
    { symbol: "म", roman: "ma", type: "consonant", varga: "pa-varga", sthana: "oshthya", sthana_name: "ओष्ठ्य-नासिक्य (Oṣṭhya-Nāsikya)", sutra: "ञमङणनमानां नासिका च", ghosha: true, mahaprana: false, tip: "Both lips seal while voiced sound flows entirely through nose." },

    // --- ANTAḤSTHA (Semivowels - 4) ---
    { symbol: "य", roman: "ya", type: "consonant", varga: "antahastha", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palatal Glide)", sutra: "इचुयशानां तालु", ghosha: true, mahaprana: false, tip: "Palatal semivowel; tongue blade approaches hard palate gently." },
    { symbol: "र", roman: "ra", type: "consonant", varga: "antahastha", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex Tap)", sutra: "ऋटुरषाणां मूर्धा", ghosha: true, mahaprana: false, tip: "Tongue tip taps once lightly against palate dome." },
    { symbol: "ल", roman: "la", type: "consonant", varga: "antahastha", sthana: "dantya", sthana_name: "दन्त्य (Dantya - Dental Lateral)", sutra: "ऌतुलसानां दन्ताः", ghosha: true, mahaprana: false, tip: "Tongue tip touches upper teeth while air flows around sides." },
    { symbol: "व", roman: "va", type: "consonant", varga: "antahastha", sthana: "dantoṣṭhya", sthana_name: "दन्तोष्ठ्य (Dantoṣṭhya - Teeth & Lips)", sutra: "वकारस्य दन्तोष्ठम्", ghosha: true, mahaprana: false, tip: "Upper front teeth touch inner edge of lower lip lightly." },

    // --- ŪṢMAN (Sibilants & Aspirate - 4) ---
    { symbol: "श", roman: "śa", type: "consonant", varga: "ushma", sthana: "talavya", sthana_name: "तालव्य (Tālavya - Palatal Sibilant)", sutra: "इचुयशानां तालु", ghosha: false, mahaprana: true, tip: "Tongue blade near hard palate produces a soft, whispered hiss (as in 'Śiva')." },
    { symbol: "ष", roman: "ṣa", type: "consonant", varga: "ushma", sthana: "murdhanya", sthana_name: "मूर्धन्य (Mūrdhanya - Retroflex Sibilant)", sutra: "ऋटुरषाणां मूर्धा", ghosha: false, mahaprana: true, tip: "CRITICAL: Tongue tip curled backward to roof producing deep hollow friction (as in 'Viṣṇu')." },
    { symbol: "स", roman: "sa", type: "consonant", varga: "ushma", sthana: "dantya", sthana_name: "दन्त्य (Dantya - Dental Sibilant)", sutra: "ऌतुलसानां दन्ताः", ghosha: false, mahaprana: true, tip: "Crisp hiss with tongue tip close to upper front teeth (as in 'Satya')." },
    { symbol: "ह", roman: "ha", type: "consonant", varga: "ushma", sthana: "kanthya", sthana_name: "कण्ठ्य (Kaṇṭhya - Glottal / Throat)", sutra: "अकुहविसर्जनीयानां कण्ठः", ghosha: true, mahaprana: true, tip: "Deep unhindered voiced exhalation emerging straight from the throat." },

    // --- SAṂYUKTĀKṢARA (Common Conjuncts - 4) ---
    { symbol: "क्ष", roman: "kṣa", type: "consonant", varga: "samyukta", sthana: "kanthatālavya", sthana_name: "संयुक्ताक्षर (क + ष)", sutra: "क् + ष् = क्ष", ghosha: false, mahaprana: true, tip: "Velar stop 'क' transitioning immediately into retroflex sibilant 'ष'." },
    { symbol: "त्र", roman: "tra", type: "consonant", varga: "samyukta", sthana: "dantamūrdhanya", sthana_name: "संयुक्ताक्षर (त् + र)", sutra: "त् + र् = त्र", ghosha: false, mahaprana: false, tip: "Dental stop 'त' releasing into retroflex tap 'र'." },
    { symbol: "ज्ञ", roman: "jña", type: "consonant", varga: "samyukta", sthana: "talavya", sthana_name: "तालव्य संयुक्ताक्षर (ज् + ञ)", sutra: "ज् + ञ् = ज्ञ", ghosha: true, mahaprana: false, tip: "Classical palatal cluster 'j' + 'ña' (often simplified to 'gya' in modern Hindi)." },
    { symbol: "श्र", roman: "śra", type: "consonant", varga: "samyukta", sthana: "talavya-murdhanya", sthana_name: "संयुक्ताक्षर (श् + र)", sutra: "श् + र् = श्र", ghosha: false, mahaprana: true, tip: "Soft palatal 'श' gliding into rolling 'र' (as in 'Śrī')." }
  ];

  // 14 Shiva Sutras (माहेश्वर सूत्राणि)
  const SHIVA_SUTRAS = [
    { num: 1, sutra: "अ इ उ ण्", desc: "Basic vowels (Hrasva Swaras). Generates the famous 'अण्' pratyāhāra." },
    { num: 2, sutra: "ऋ ऌ क्", desc: "Vocalic liquids. Ends at 'क्' marker." },
    { num: 3, sutra: "ए ओ ङ्", desc: "Guṇa vowels (कण्ठतालु व कण्ठोष्ठ)." },
    { num: 4, sutra: "ऐ औ च्", desc: "Vṛddhi diphthongs. 'अच्' marks ALL vowels in Sanskrit!" },
    { num: 5, sutra: "ह य व र ट्", desc: "Glottal aspirate + semivowels." },
    { num: 6, sutra: "लँ ण्", desc: "Dental lateral semivowel with nasalization marker." },
    { num: 7, sutra: "ञ म ङ ण न म्", desc: "Pancha-nāsikā (All 5 class nasal consonants)." },
    { num: 8, sutra: "झ भ ञ्", desc: "Voiced aspirated stops (4th letter of Palatal & Labial classes)." },
    { num: 9, sutra: "घ ढ ध ष्", desc: "Remaining voiced aspirates (4th letter of Velar, Retroflex, Dental)." },
    { num: 10, sutra: "ज ब ग ड द श्", desc: "All voiced unaspirated stops (3rd column of 5 classes). 'जश्' sandhi!" },
    { num: 11, sutra: "ख फ छ ठ थ च ट त व्", desc: "Unvoiced aspirates (2nd col) + unvoiced stops (1st col)." },
    { num: 12, sutra: "क प य्", desc: "Final unvoiced stops. Forms 'चय्' & 'खर्' pratyāhāras." },
    { num: 13, sutra: "श ष स र्", desc: "The three distinct sibilants (Palatal, Retroflex, Dental)." },
    { num: 14, sutra: "ह ल्", desc: "Final glottal. 'हल्' marks ALL consonants in Sanskrit!" }
  ];

  // State
  let activeTab = "all";
  let activeSthana = "all";
  let searchQuery = "";
  let selectedChar = null;

  // DOM Elements
  const container = document.getElementById("varna-dynamic-grid");
  const modalOverlay = document.getElementById("phonetic-modal-overlay");
  const modalCharHero = document.getElementById("modal-char-hero");
  const modalCharTitle = document.getElementById("modal-char-title");
  const modalCharRoman = document.getElementById("modal-char-roman");
  const modalSthanaBadge = document.getElementById("modal-sthana-badge");
  const modalVargaBadge = document.getElementById("modal-varga-badge");
  const modalSutraText = document.getElementById("modal-sutra-text");
  const modalTipText = document.getElementById("modal-tip-text");
  const modalPrayatnaText = document.getElementById("modal-prayatna-text");
  const modalPracticeBtn = document.getElementById("modal-practice-btn");
  const modalAudioBtn = document.getElementById("modal-audio-btn");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  // Audio Pronunciation Engine
  function playSound(symbol, btnEl) {
    if (btnEl) {
      btnEl.classList.add("playing");
      setTimeout(() => btnEl.classList.remove("playing"), 900);
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(symbol);
      utterance.lang = "hi-IN";
      utterance.rate = 0.78;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      playVedicTone();
    }
  }

  // Pure Web Audio tone fallback
  function playVedicTone() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(261.63, audioCtx.currentTime); // C4 tonic
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch (e) {
      console.warn("AudioContext tone error:", e);
    }
  }

  // Open Detailed Modal
  function openModal(item) {
    selectedChar = item;
    if (!modalOverlay) return;

    if (modalCharHero) modalCharHero.textContent = item.symbol;
    if (modalCharTitle) modalCharTitle.textContent = `${item.symbol} (${item.roman})`;
    if (modalCharRoman) modalCharRoman.textContent = `IAST: /${item.roman}/ • ${item.sthana_name}`;
    if (modalSthanaBadge) modalSthanaBadge.textContent = item.sthana.toUpperCase();
    if (modalVargaBadge) modalVargaBadge.textContent = item.varga.toUpperCase();
    if (modalSutraText) modalSutraText.textContent = item.sutra || "पाणिनि सूत्रम्";
    if (modalTipText) modalTipText.textContent = item.tip || "Anatomical articulatory guidance.";
    
    if (modalPrayatnaText) {
      const ghoshaStr = item.ghosha ? "घोष (Voiced)" : "अघोष (Unvoiced)";
      const pranaStr = item.mahaprana ? "महाप्राण (Aspirated)" : "अल्पप्राण (Unaspirated)";
      modalPrayatnaText.textContent = `${pranaStr} • ${ghoshaStr}`;
    }

    if (modalPracticeBtn) {
      modalPracticeBtn.href = `/practice?symbol=${encodeURIComponent(item.symbol)}`;
    }

    modalOverlay.classList.add("active");
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove("active");
  }

  // Render Grid
  function renderVarṇamālā() {
    if (!container) return;

    // Filter items
    let filtered = VARNAMALA_DATA.filter(item => {
      // Category filter
      if (activeTab === "svara" && item.type !== "vowel") return false;
      if (activeTab === "sparsha" && !item.varga.includes("varga") && item.type !== "consonant") return false;
      if (activeTab === "antahastha" && item.varga !== "antahastha" && item.varga !== "ushma" && item.varga !== "samyukta") return false;

      // Sthana filter
      if (activeSthana !== "all" && !item.sthana.includes(activeSthana)) return false;

      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesSym = item.symbol.includes(q);
        const matchesRom = item.roman.toLowerCase().includes(q);
        const matchesSth = item.sthana_name.toLowerCase().includes(q);
        if (!matchesSym && !matchesRom && !matchesSth) return false;
      }

      return true;
    });

    // Special Shiva Sutras view
    if (activeTab === "shiva") {
      renderShivaSutras();
      return;
    }

    // Special 5x5 Sparsha Matrix View
    if (activeTab === "sparsha" && activeSthana === "all" && !searchQuery) {
      renderSparshaMatrix();
      return;
    }

    // Standard Grid View
    let html = `<div class="varna-tiles-grid">`;
    filtered.forEach(item => {
      html += `
        <div class="varna-tile" data-sthana="${item.sthana}" data-symbol="${item.symbol}">
          <button class="varna-audio-btn" title="Pronounce ${item.symbol}" aria-label="Listen">
            <svg class="ui-icon" style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
          <div class="varna-char deva-text">${item.symbol}</div>
          <div class="varna-roman">${item.roman}</div>
          <div class="varna-sthana-tag">${item.sthana.slice(0, 8)}</div>
        </div>
      `;
    });
    html += `</div>`;

    if (filtered.length === 0) {
      html = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h4>No matching letters found</h4>
          <p style="font-size: 0.9rem;">Try clearing your search or selecting 'All' in filters.</p>
        </div>
      `;
    }

    container.innerHTML = html;
    attachTileEvents();
  }

  // 5x5 Matrix Layout
  function renderSparshaMatrix() {
    const vargas = [
      { name: "कवर्ग (Velar)", sthana: "कण्ठ (Throat)", items: ["क", "ख", "ग", "घ", "ङ"] },
      { name: "चवर्ग (Palatal)", sthana: "तालु (Palate)", items: ["च", "छ", "ज", "झ", "ञ"] },
      { name: "टवर्ग (Retroflex)", sthana: "मूर्धा (Roof)", items: ["ट", "ठ", "ड", "ढ", "ण"] },
      { name: "तवर्ग (Dental)", sthana: "दन्त (Teeth)", items: ["त", "थ", "द", "ध", "न"] },
      { name: "पवर्ग (Labial)", sthana: "ओष्ठ (Lips)", items: ["प", "फ", "ब", "भ", "म"] }
    ];

    let html = `
      <div style="margin-bottom: 1rem; text-align: right;">
        <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">
          💡 Tip: Click any character card to inspect Panini Sutras & anatomical placement!
        </span>
      </div>
      <div class="varga-table-container">
        <table class="varga-matrix">
          <thead>
            <tr>
              <th style="width: 170px;">वर्ग व स्थान (Class & Sthāna)</th>
              <th>१. अल्पप्राण अघोष</th>
              <th>२. महाप्राण अघोष</th>
              <th>३. अल्पप्राण घोष</th>
              <th>४. महाप्राण घोष</th>
              <th>५. अनुनासिक</th>
            </tr>
          </thead>
          <tbody>
    `;

    vargas.forEach(v => {
      html += `<tr>`;
      html += `<td class="varga-row-header"><strong>${v.name}</strong><br><small style="color:var(--text-muted); font-size:0.75rem;">${v.sthana}</small></td>`;
      v.items.forEach(sym => {
        const item = VARNAMALA_DATA.find(x => x.symbol === sym);
        if (item) {
          html += `
            <td>
              <div class="varna-tile" data-sthana="${item.sthana}" data-symbol="${item.symbol}" style="box-shadow:none; padding:0.6rem 0.4rem;">
                <button class="varna-audio-btn" style="top:4px;right:4px;">
                  <svg class="ui-icon" style="width:10px;height:10px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
                </button>
                <div class="varna-char deva-text" style="font-size:1.9rem;">${item.symbol}</div>
                <div class="varna-roman">${item.roman}</div>
              </div>
            </td>
          `;
        } else {
          html += `<td>${sym}</td>`;
        }
      });
      html += `</tr>`;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;
    attachTileEvents();
  }

  // Shiva Sutras layout
  function renderShivaSutras() {
    let html = `
      <div style="margin-bottom: 1.5rem; background: var(--accent-gold-light); padding: 1rem 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-gold);">
        <strong style="color: var(--accent-gold-dark); display: block; margin-bottom: 0.25rem;">
          माहेश्वर सूत्राणि (The 14 Divine Shiva Sūtras)
        </strong>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">
          Legend recounts that when Lord Nataraja danced, his damaru sounded 14 times:
          <em>"नृत्तावसाने नटराजराजो ननाद ढक्कां नवपञ्चवारम्"</em>. 
          Pāṇini formulated these 14 sound groups into Pratyāhāras (algorithmic shorthand) that encode all of Sanskrit grammar!
        </p>
      </div>
      <div class="shiva-sutras-grid">
    `;

    SHIVA_SUTRAS.forEach(s => {
      html += `
        <div class="shiva-sutra-card">
          <div class="sutra-index">${s.num}</div>
          <div style="flex:1;">
            <div class="sutra-deva deva-text">${s.sutra}</div>
            <div class="sutra-desc">${s.desc}</div>
          </div>
          <button class="varna-audio-btn" title="Pronounce sutra" onclick="window.speechSynthesis && window.speechSynthesis.speak(new SpeechSynthesisUtterance('${s.sutra.replace(/\s+/g, '')}'))">
            <svg class="ui-icon" style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
          </button>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  // Event bindings for tiles
  function attachTileEvents() {
    container.querySelectorAll(".varna-tile").forEach(tile => {
      const sym = tile.dataset.symbol;
      const item = VARNAMALA_DATA.find(x => x.symbol === sym);

      // Tile click -> open inspector
      tile.addEventListener("click", (e) => {
        if (e.target.closest(".varna-audio-btn")) return;
        if (item) openModal(item);
      });

      // Audio click -> speak
      const audioBtn = tile.querySelector(".varna-audio-btn");
      if (audioBtn) {
        audioBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          playSound(sym, audioBtn);
        });
      }
    });
  }

  // Bind controls
  function initControls() {
    // Category tabs
    document.querySelectorAll(".varna-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".varna-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeTab = btn.dataset.tab;
        renderVarṇamālā();
      });
    });

    // Sthana chips
    document.querySelectorAll(".sthana-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".sthana-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        activeSthana = chip.dataset.sthana;
        renderVarṇamālā();
      });
    });

    // Search input
    const searchInput = document.getElementById("varnamala-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderVarṇamālā();
      });
    }

    // Modal controls
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });

    if (modalAudioBtn) {
      modalAudioBtn.addEventListener("click", () => {
        if (selectedChar) playSound(selectedChar.symbol, modalAudioBtn);
      });
    }

    // Hero sound tester buttons
    document.querySelectorAll(".hero-test-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.dataset.sound || "त ट";
        btn.classList.add("playing");
        playSound(text, btn);
        setTimeout(() => btn.classList.remove("playing"), 1200);
      });
    });

    // Study notes tab switching
    document.querySelectorAll(".note-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".note-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".note-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const paneId = btn.dataset.pane;
        const targetPane = document.getElementById(paneId);
        if (targetPane) targetPane.classList.add("active");
      });
    });

    // Mini-Quiz wiring
    initQuiz();
  }

  // Interactive Mini-Quiz
  function initQuiz() {
    const quizOptions = document.querySelectorAll(".quiz-option-btn");
    const feedbackBox = document.getElementById("quiz-feedback");

    quizOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        const isCorrect = opt.dataset.correct === "true";
        const explanation = opt.dataset.explanation || "";

        quizOptions.forEach(o => {
          o.classList.remove("correct", "wrong");
          o.disabled = true;
        });

        if (isCorrect) {
          opt.classList.add("correct");
          if (feedbackBox) {
            feedbackBox.style.display = "block";
            feedbackBox.innerHTML = `
              <div style="color: var(--status-clean); font-weight: 700; margin-bottom: 0.25rem;">
                🎉 साधु! (Correct!)
              </div>
              <div style="font-size: 0.9rem; color: var(--text-secondary);">${explanation}</div>
            `;
          }
        } else {
          opt.classList.add("wrong");
          // highlight correct
          quizOptions.forEach(o => {
            if (o.dataset.correct === "true") o.classList.add("correct");
          });
          if (feedbackBox) {
            feedbackBox.style.display = "block";
            feedbackBox.innerHTML = `
              <div style="color: var(--status-error); font-weight: 700; margin-bottom: 0.25rem;">
                ❌ पुनर्प्रयत्नः क्रियताम् (Not quite!)
              </div>
              <div style="font-size: 0.9rem; color: var(--text-secondary);">${explanation}</div>
            `;
          }
        }
      });
    });
  }

  // Initialize upon DOM readiness
  document.addEventListener("DOMContentLoaded", () => {
    initControls();
    renderVarṇamālā();

    // Check URL params for anchor or symbol or pitch
    const params = new URLSearchParams(window.location.search);
    const sym = params.get("symbol");
    if (sym) {
      const match = VARNAMALA_DATA.find(x => x.symbol === sym);
      if (match) setTimeout(() => openModal(match), 300);
    }
  });

  // Global export
  window.Varnamala = {
    data: VARNAMALA_DATA,
    playSound: playSound,
    openModal: openModal
  };
})();
