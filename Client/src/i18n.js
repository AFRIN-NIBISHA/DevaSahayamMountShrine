import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home", "about": "About", "mass_booking": "Mass Booking", "donations": "Donations", "gallery": "Gallery", "livestream": "Live Stream", "testimonies": "Testimonies", "prayer_request": "Prayer Request", "contact": "Contact", "shrine_title": "Our Lady Of Sorrows Shrine"
      },
      "home": {
        "eyebrow": "About Saint Devasahayam", "title": "WELCOME TO\nST. DEVASAHAYAM\nMARTYRDOM PLACE", "subtitle": "A blessed sanctuary dedicated to Saint Devasahayam, the first Indian layman to be canonized by the Catholic Church. Discover peace, history, and divine grace.", "explore": "Explore More", "spiritual_services": "Spiritual Services", "services_sub": "Engage in devotion and seek blessings", "mass_title": "Book a Mass", "mass_desc": "Offer a holy mass for your personal intentions and the well-being of your loved ones.", "book_now": "Book Now", "donate_title": "Make a Donation", "donate_desc": "Support the shrine's maintenance and contribute to its various charitable works.", "donate": "Donate", "prayer_title": "Prayer Request", "prayer_desc": "Submit your prayer requests to be specially remembered in our daily prayers.", "submit_request": "Submit Request", "management_title": "Shrine Management", "management_sub": "Guided by faith and dedication", "accom_title": "Rooms & Accommodation", "accom_sub": "Comfortable stay options for all our visiting pilgrims", "accom_enquiries": "Accommodation Enquiries", "accom_desc": "Please contact us directly for room availability and reservations."
      },
      "about": {
        "hero_title": "Saint Devasahayam",
        "hero_subtitle": "India's First Lay Saint | Martyr of Faith | 1712 - 1752",
        "faith_courage_title": "A Life of Faith & Courage",
        "faith_courage_p1": "Born as Neelakanta into an affluent Hindu family in 1712, Devasahayam became the first Indian layman to be canonized as a saint by Pope Francis on May 15, 2022.",
        "faith_courage_p2": "His journey from a palace official to a Christian martyr stands as a testament to unwavering faith and dignity in the face of persecution.",
        "early_life_title": "Early Life & Conversion",
        "early_life_p1": "Neelakandan was born on April 23, 1712, in Nattalam, Travancore.",
        "early_life_p2": "His father, Vasudevan Namboodiri, was a priest at the Adikesava Perumal Temple in Thiruvattar.",
        "early_life_p3": "Growing up in an influential family with connections to the royal palace of Maharaja Marthanda Varma, Neelakandan entered palace service and rose to become an official under Ramayyan Dalawa.",
        "turning_point_title": "The Turning Point",
        "turning_point_p1": "In 1741, after the Battle of Colachel, Dutch commander Captain Eustachius De Lannoy was captured.",
        "turning_point_p2": "Through friendship with De Lannoy, Neelakandan became interested in Christianity.",
        "turning_point_p3": "In 1745, he was baptized as \"Lazarus\" and took the Malayalam name \"Devasahayam,\" meaning \"Help of God.\"",
        "timeline_title": "Timeline of His Life",
        "timeline_1_date": "April 23, 1712", "timeline_1_text": "Born as Neelakanta in Nattalam, Travancore",
        "timeline_2_date": "1741", "timeline_2_text": "Battle of Colachel – friendship with De Lannoy",
        "timeline_3_date": "1745", "timeline_3_text": "Converted to Christianity, baptized as Devasahayam",
        "timeline_4_date": "1749 – 1752", "timeline_4_text": "Imprisoned and tortured for three years",
        "timeline_5_date": "January 14, 1752", "timeline_5_text": "Martyred at Aralvaimozhy",
        "timeline_6_date": "December 2, 2012", "timeline_6_text": "Beatified by Pope Benedict XVI",
        "timeline_7_date": "May 15, 2022", "timeline_7_text": "Canonized by Pope Francis",
        "timeline_8_date": "January 14, 2026", "timeline_8_text": "Declared \"The Patron Saint of the Laity of India\" by Archbishop Leopoldo Girelli",
        "persecution_title": "Persecution & Martyrdom",
        "persecution_p1": "Devasahayam's conversion sparked outrage among the Brahmin priests and feudal lords. Leaving Hinduism was considered a grave offense, resulting in his imprisonment for three years.",
        "persecution_p2": "During his captivity, he was subjected to brutal torture. His body was painted with red and black spots, and he was forced to sit backward on a water buffalo.",
        "persecution_p3": "Daily, he received eighty stripes, had pepper rubbed into his wounds, and was given only stagnant water to drink, yet his faith remained unshaken.",
        "persecution_quote": "\"His witness to Christ is an example of that attentiveness to the coming of Christ.\"",
        "shrine_about_title": "About Our Shrine",
        "vision_title": "Our Vision", "vision_text": "To inspire faith, hope, and love through the life of Saint Devasahayam.",
        "mission_title": "Our Mission", "mission_text": "To provide spiritual growth, worship, and service to the community.",
        "sacred_places_title": "Sacred Places & Final Resting Place",
        "cathedral_title": "St. Francis Xavier's Cathedral",
        "cathedral_desc": "Saint Devasahayam 's tomb in St. Francis Xavier's Cathedral at Kottar, Nagercoil, has become a major pilgrimage site.",
        "journey_title": "Journey to Sainthood",
        "journey_desc": "The path to canonization spanned over 270 years, culminating in his canonization by Pope Francis in 2022.",
        "legacy_title": "Legacy & Veneration",
        "legacy_desc": "He is venerated as the patron saint of India and persecuted Christians worldwide."
      },
      "management": {
        "m1_name": "Most Rev. Nazarene Soosai", "m1_title": "Bishop of Kottar", "m1_desc": "The Most Rev. Nazarene Soosai is the local ordinary of Kottar Diocese, serving as the Chief Pastor, Administrator, and Spiritual Leader of this Shrine.",
        "m2_name": "Rev. Fr. Leon Henson", "m2_title": "Rector and Parish Priest", "m2_desc": "Rev. Fr. Leon Henson chairs the governing board and oversees pastoral functions, developing the vision and mission of the congregation.",
        "m3_name": "Rev. Lord Winner CMF", "m3_title": "Parish Priest", "m3_desc": "Fr. Lord Winner CMF is a Claretian Priest working to develop the Saint Devasahayam Martyrdom place into an International Shrine.",
        "m4_name": "Rev. Fr. Gnana Roy", "m4_title": "Parish Priest", "m4_desc": "Rev. Fr. Gnana Roy supports shrine development through spiritual ministry and dedicated service.",
        "m5_name": "Rev. Fr. Arun Pravin", "m5_title": "Asst. Parish Priest", "m5_desc": "Rev. Fr. Arun Pravin supports the parish community through pastoral ministry and service.",
        "m6_name": "Mr. S. Michael Raj", "m6_title": "Vice President", "m6_desc": "Mr. S. Michael Raj ensures effective administration and community engagement within the Parish Council.",
        "m7_name": "Mr. S. Kilbert", "m7_title": "Secretary", "m7_desc": "Mr. S. Kilbert oversees communications and ensures smooth coordination of parish activities.",
        "m8_name": "Mrs. J. Theeba Albert", "m8_title": "Treasurer", "m8_desc": "Mrs. J. Theeba Albert is responsible for managing finances and ensuring fiscal transparency.",
        "m9_name": "Mrs. S. Sahaya Rani", "m9_title": "Asst. Secretary", "m9_desc": "Mrs. S. Sahaya Rani ensures smooth daily shrine activities and supports the executive team."
      },
      "accommodation": {
        "r1_title": "Pilgrim Rooms", "r1_desc": "Simple and clean accommodation for pilgrims.",
        "r2_title": "Family Rooms", "r2_desc": "Comfortable and secure rooms for families.",
        "r3_title": "Group Stay", "r3_desc": "Accommodation for pilgrimage groups.",
        "r4_title": "Affordable Rooms", "r4_desc": "Affordable accommodation for all devotees.",
        "enquiry_title": "Accommodation Enquiries",
        "enquiry_sub": "Please contact for room availability",
        "phone": "+91 89037 60869"
      }
    }
  },
  ta: {
    translation: {
      "nav": {
        "home": "முகப்பு", "about": "வரலாறு", "mass_booking": "திருப்பலி முன்பதிவு", "donations": "நன்கொடைகள்", "gallery": "புகைப்படங்கள்", "livestream": "நேரலை", "testimonies": "சாட்சிகள்", "prayer_request": "செப விண்ணப்பம்", "contact": "தொடர்புக்கு", "shrine_title": "வியாகுல அன்னை திருத்தலம்"
      },
      "home": {
        "eyebrow": "புனித தேவசகாயம் பற்றி", "title": "புனித தேவசகாயம் இரத்த சாட்சியத்தின் புனித இடத்திற்கு நல்வரவு", "subtitle": "கத்தோலிக்க திருச்சபையால் புனிதராக அறிவிக்கப்பட்ட முதல் இந்திய பொதுநிலையினர் புனித தேவசகாயத்திற்காக அர்ப்பணிக்கப்பட்ட ஒரு புனிதமான திருத்தலம்.", "explore": "மேலும் அறிய", "spiritual_services": "ஆன்மீக சேவைகள்", "services_sub": "பக்தியில் ஈடுபட்டு ஆசீர்வாதங்களை பெறுங்கள்", "mass_title": "திருப்பலி முன்பதிவு", "mass_desc": "உங்கள் தனிப்பட்ட நோக்கங்களுக்காகவும் உங்கள் அன்புக்குரியவர்களின் நல்வாழ்விற்காகவும் ஒரு திருப்பலியை ஒப்புக்கொடுக்கவும்.", "book_now": "முன்பதிவு செய்", "donate_title": "நன்கொடை அளிக்கவும்", "donate_desc": "திருத்தலத்தின் பராமரிப்பை ஆதரிக்கவும் மற்றும் அதன் பல்வேறு அறக்கட்டளை பணிகளுக்கு பங்களிக்கவும்.", "donate": "நன்கொடை", "prayer_title": "செப விண்ணப்பம்", "prayer_desc": "எங்கள் அன்றாட செபங்களில் விசேஷமாக நினைவுகூர உங்கள் செப விண்ணப்பங்களை சமர்ப்பிக்கவும்.", "submit_request": "சமர்ப்பிக்கவும்", "management_title": "திருத்தல நிர்வாகம்", "management_sub": "விசுவாசம் மற்றும் அர்ப்பணிப்பால் வழிநடத்தப்படுகிறது", "accom_title": "அறைகள் & தங்குமிடம்", "accom_sub": "வருகை தரும் அனைத்து யாத்ரீகர்களுக்கும் வசதியான தங்குமிட விருப்பங்கள்", "accom_enquiries": "தங்குமிட விசாரணைகள்", "accom_desc": "அறைகளின் இருப்பு மற்றும் முன்பதிவுகளுக்கு எங்களை நேரடியாக தொடர்பு கொள்ளவும்."
      },
      "about": {
        "hero_title": "புனித தேவசகாயம்",
        "hero_subtitle": "இந்தியாவின் முதல் பொதுநிலை புனிதர் | விசுவாசத்தின் இரத்த சாட்சி | 1712 - 1752",
        "faith_courage_title": "விசுவாசம் மற்றும் தைரியத்தின் வாழ்க்கை",
        "faith_courage_p1": "1712-ல் ஒரு செல்வந்த இந்து குடும்பத்தில் நீலகண்டனாகப் பிறந்த தேவசகாயம், மே 15, 2022 அன்று திருத்தந்தை பிரான்சிஸ் அவர்களால் புனிதராக அறிவிக்கப்பட்ட முதல் இந்திய பொதுநிலையினர் ஆவார்.",
        "faith_courage_p2": "அரண்மனை அதிகாரியாக இருந்து ஒரு கிறிஸ்தவ இரத்த சாட்சியாக மாறிய இவரது பயணம், துன்புறுத்தல்களுக்கு மத்தியிலும் அசையாத விசுவாசம் மற்றும் கண்ணியத்திற்கு ஒரு சான்றாக நிற்கிறது.",
        "early_life_title": "ஆரம்ப வாழ்க்கை மற்றும் மனமாற்றம்",
        "early_life_p1": "நீலகண்டன் ஏப்ரல் 23, 1712 அன்று திருவிதாங்கூர் சமஸ்தானத்தின் நாட்டாலத்தில் பிறந்தார்.",
        "early_life_p2": "இவரது தந்தை வாசுதேவன் நம்பூதிரி, திருவட்டாறு ஆதிகேசவ பெருமாள் கோவிலில் அர்ச்சகராக இருந்தார்.",
        "early_life_p3": "மன்னர் மார்த்தாண்ட வர்மாவின் அரண்மனையோடு தொடர்புள்ள செல்வாக்கு மிக்க குடும்பத்தில் வளர்ந்த நீலகண்டன், அரண்மனை சேவையில் சேர்ந்து ரமைய்யன் தளவாயின் கீழ் அதிகாரியாக உயர்ந்தார்.",
        "turning_point_title": "திருப்புமுனை",
        "turning_point_p1": "1741-ல், குளச்சல் போருக்குப் பிறகு, டச்சு படைத்தளபதி கேப்டன் இயுஸ்டாக்கியஸ் டி லேனாய் சிறைபிடிக்கப்பட்டார்.",
        "turning_point_p2": "டி லேனாயுடன் ஏற்பட்ட நட்பின் மூலம், நீலகண்டன் கிறிஸ்தவ மதத்தில் ஆர்வம் கொண்டார்.",
        "turning_point_p3": "1745-ல், அவர் \"லாசரஸ்\" என்று ஞானஸ்நானம் பெற்றார் மற்றும் \"தேவசகாயம்\" என்ற தமிழ் பெயரை ஏற்றுக்கொண்டார்.",
        "timeline_title": "வாழ்க்கை காலவரிசை",
        "timeline_1_date": "ஏப்ரல் 23, 1712", "timeline_1_text": "நாட்டாலத்தில் நீலகண்டனாகப் பிறந்தார்",
        "timeline_2_date": "1741", "timeline_2_text": "குளச்சல் போர் – டி லேனாயுடன் நட்பு",
        "timeline_3_date": "1745", "timeline_3_text": "கிறிஸ்தவத்திற்கு மாறினார், தேவசகாயம் என்று ஞானஸ்நானம் பெற்றார்",
        "timeline_4_date": "1749 – 1752", "timeline_4_text": "மூன்று ஆண்டுகள் சிறைவாசம் மற்றும் சித்திரவதை",
        "timeline_5_date": "ஜனவரி 14, 1752", "timeline_5_text": "ஆரல்வாய்மொழியில் இரத்த சாட்சியாக மரித்தார்",
        "timeline_6_date": "டிசம்பர் 2, 2012", "timeline_6_text": "திருத்தந்தை 16-ஆம் பெனடிக்ட் அவர்களால் அருளாளர் பட்டம் அளிக்கப்பட்டது",
        "timeline_7_date": "மே 15, 2022", "timeline_7_text": "திருத்தந்தை பிரான்சிஸ் அவர்களால் புனிதர் பட்டம் அளிக்கப்பட்டது",
        "timeline_8_date": "ஜனவரி 14, 2026", "timeline_8_text": "இந்திய பொதுநிலையினரின் பாதுகாவலராக அறிவிக்கப்பட்டார்",
        "persecution_title": "துன்புறுத்தல் மற்றும் இரத்த சாட்சியம்",
        "persecution_p1": "தேவசகாயத்தின் மனமாற்றம் பிராமண அர்ச்சகர்கள் மற்றும் நிலப்பிரபுக்களிடையே ஆத்திரத்தை ஏற்படுத்தியது. இதனால் அவர் மூன்று ஆண்டுகள் சிறையில் அடைக்கப்பட்டார்.",
        "persecution_p2": "சிறைவாசத்தின் போது அவர் கொடூரமான சித்திரவதைகளுக்கு ஆளாக்கப்பட்டார். அவரது உடலில் சிவப்பு மற்றும் கருப்பு புள்ளிகள் பூசப்பட்டு, எருமை மாட்டின் மீது தலைகீழாக அமர வைக்கப்பட்டார்.",
        "persecution_p3": "தினமும் 80 கசையடிகள் கொடுக்கப்பட்டன, காயங்களில் மிளகு பொடி தடவப்பட்டது, ஆனாலும் அவரது விசுவாசம் அசையவில்லை.",
        "persecution_quote": "\"கிறிஸ்துவுக்கு அவர் அளித்த சாட்சியம், கிறிஸ்துவின் வருகைக்கான விழிப்புணர்வுக்கு ஒரு சிறந்த எடுத்துக்காட்டு.\"",
        "shrine_about_title": "எங்கள் திருத்தலம் பற்றி",
        "vision_title": "எங்கள் நோக்கம்", "vision_text": "புனித தேவசகாயத்தின் வாழ்க்கை மூலம் விசுவாசம், நம்பிக்கை மற்றும் அன்பைத் தூண்டுவது.",
        "mission_title": "எங்கள் பணி", "mission_text": "சமூகத்திற்கு ஆன்மீக வளர்ச்சி, வழிபாடு மற்றும் சேவையை வழங்குவது.",
        "sacred_places_title": "புனித இடங்கள் மற்றும் இறுதி ஓய்வு இடம்",
        "cathedral_title": "புனித பிரான்சிஸ் சவேரியார் பேராலயம்",
        "cathedral_desc": "நாகர்கோவில் கோட்டாரில் உள்ள புனித பிரான்சிஸ் சவேரியார் பேராலயத்தில் உள்ள புனித தேவசகாயத்தின் கல்லறை ஒரு முக்கியமான யாத்திரை ஸ்தலமாக மாறியுள்ளது.",
        "journey_title": "புனிதர் பட்டத்தை நோக்கிய பயணம்",
        "journey_desc": "புனிதர் பட்டத்திற்கான பாதை 270 ஆண்டுகளுக்கும் மேலாக நீடித்தது, 2022 இல் திருத்தந்தை பிரான்சிஸ் அவர்களால் புனிதர் பட்டம் வழங்கப்பட்டது.",
        "legacy_title": "பாரம்பரியம் மற்றும் வணக்கம்",
        "legacy_desc": "அவர் இந்தியாவின் பாதுகாவலர் புனிதராகவும் உலகம் முழுவதும் துன்புறுத்தப்படும் கிறிஸ்தவர்களின் பாதுகாவலராகவும் வணங்கப்படுகிறார்."
      },
      "management": {
        "m1_name": "மேதகு ஆயர் நசரேன் சூசை", "m1_title": "கோட்டாறு மறைமாவட்ட ஆயர்", "m1_desc": "மேதகு ஆயர் நசரேன் சூசை அவர்கள் கோட்டாறு மறைமாவட்டத்தின் ஆயராகவும், இந்த திருத்தலத்தின் தலைமை மேய்ப்பராகவும், ஆன்மீகத் தலைவராகவும் பணியாற்றுகிறார்.",
        "m2_name": "அருட்பணி. லியோன் ஹென்சன்", "m2_title": "திருத்தல அதிபர் மற்றும் பங்குத்தந்தை", "m2_desc": "அருட்பணி. லியோன் ஹென்சன் அவர்கள் திருத்தல நிர்வாகக் குழுவின் தலைவராகவும், ஆன்மீகப் பணிகளின் ஒருங்கிணைப்பாளராகவும் பணியாற்றுகிறார்.",
        "m3_name": "அருட்பணி. லார்டு வின்னர் CMF", "m3_title": "பங்குத்தந்தை", "m3_desc": "அருட்பணி. லார்டு வின்னர் அவர்கள் புனித தேவசகாயம் இரத்த சாட்சி இடத்தை சர்வதேச திருத்தலமாக மேம்படுத்தும் பணியில் ஈடுபட்டுள்ளார்.",
        "m4_name": "அருட்பணி. ஞான ராய்", "m4_title": "பங்குத்தந்தை", "m4_desc": "அருட்பணி. ஞான ராய் அவர்கள் ஆன்மீகப் பணி மற்றும் சேவையின் மூலம் திருத்தல வளர்ச்சிக்கு ஆதரவளிக்கிறார்.",
        "m5_name": "அருட்பணி. அருண் பிரவீன்", "m5_title": "உதவி பங்குத்தந்தை", "m5_desc": "அருட்பணி. அருண் பிரவீன் அவர்கள் பங்கு மக்களுக்கு ஆன்மீக மற்றும் அருட்பணி சேவைகளை வழங்குகிறார்.",
        "m6_name": "திரு. எஸ். மைக்கேல் ராஜ்", "m6_title": "துணைத் தலைவர்", "m6_desc": "திரு. எஸ். மைக்கேல் ராஜ் அவர்கள் பங்குப் பேரவையின் துணைத் தலைவராக நிர்வாகம் மற்றும் சமூக ஈடுபாட்டை உறுதி செய்கிறார்.",
        "m7_name": "திரு. எஸ். கில்பர்ட்", "m7_title": "செயலாளர்", "m7_desc": "திரு. எஸ். கில்பர்ட் அவர்கள் தகவல்தொடர்புகளை மேற்பார்வையிடுகிறார் மற்றும் பங்குச் செயல்பாடுகளின் ஒருங்கிணைப்பை உறுதி செய்கிறார்.",
        "m8_name": "திருமதி. ஜே. தீபா ஆல்பர்ட்", "m8_title": "பொருளாளர்", "m8_desc": "திருமதி. ஜே. தீபா ஆல்பர்ட் அவர்கள் பங்கின் நிதி நிர்வாகம் மற்றும் வெளிப்படைத்தன்மைக்கு பொறுப்பானவர்.",
        "m9_name": "திருமதி. எஸ். சகாய ராணி", "m9_title": "உதவிச் செயலாளர்", "m9_desc": "திருமதி. எஸ். சகாய ராணி அவர்கள் திருத்தலத்தின் தினசரி செயல்பாடுகளை சீராக நடைபெற உதவுகிறார்."
      },
      "accommodation": {
        "r1_title": "யாத்ரீகர் அறைகள்", "r1_desc": "யாத்ரீகர்களுக்கான எளிய மற்றும் சுத்தமான தங்குமிடம்.",
        "r2_title": "குடும்ப அறைகள்", "r2_desc": "குடும்பங்களுக்கு வசதியான மற்றும் பாதுகாப்பான அறைகள்.",
        "r3_title": "குழு தங்குமிடம்", "r3_desc": "யாத்திரை குழுக்களுக்கான தங்குமிடம்.",
        "r4_title": "சிக்கனமான அறைகள்", "r4_desc": "அனைத்து பக்தர்களுக்கும் மலிவான தங்குமிடம்.",
        "enquiry_title": "தங்குமிட விசாரணைகள்",
        "enquiry_sub": "அறைகள் கிடைப்பது குறித்து அறிய தொடர்பு கொள்ளவும்.",
        "phone": "+91 89037 60869"
      }
    }
  },
  ml: {
    translation: {
       "nav": {
        "home": "ഹോം", "about": "കുറിച്ച്", "mass_booking": "കുർബാന ബുക്കിംഗ്", "donations": "സംഭാവനകൾ", "gallery": "ഗാലറി", "livestream": "തത്സമയ സംപ്രേക്ഷണം", "testimonies": "സാക്ഷ്യങ്ങൾ", "prayer_request": "പ്രാർത്ഥനാ അപേക്ഷ", "contact": "ബന്ധപ്പെടുക", "shrine_title": "അവർ ലേഡി ഓഫ് സോറോസ് ഷ്രൈൻ"
      },
      "home": {
        "eyebrow": "വിശുദ്ധ ദേവസഹായത്തെക്കുറിച്ച്", "title": "വിശുദ്ധ ദേവസഹായം രക്തസാക്ഷിത്വ സ്ഥലത്തേക്ക് സ്വാഗതം", "subtitle": "കത്തോലിക്കാ സഭ വിശുദ്ധനായി പ്രഖ്യാപിച്ച ആദ്യത്തെ ഇന്ത്യൻ അൽമായനായ വിശുദ്ധ ദേവസഹായത്തിനായി സമർപ്പിച്ചിരിക്കുന്ന ഒരു പുണ്യ സങ്കേതം.", "explore": "കൂടുതൽ പര്യവേക്ഷണം ചെയ്യുക", "spiritual_services": "ആത്മീയ സേവനങ്ങൾ", "services_sub": "ഭക്തിയിൽ ഏർപ്പെടുകയും അനുഗ്രഹങ്ങൾ തേടുകയും ചെയ്യുക", "mass_title": "കുർബാന ബുക്ക് ചെയ്യുക", "mass_desc": "നിങ്ങളുടെ വ്യക്തിപരമായ ഉദ്ദേശ്യങ്ങൾക്കും പ്രിയപ്പെട്ടവരുടെ ക്ഷേമത്തിനും വേണ്ടി ഒരു വിശുദ്ധ കുർബാന അർപ്പിക്കുക.", "book_now": "ഇപ്പോൾ ബുക്ക് ചെയ്യുക", "donate_title": "ഒരു സംഭാവന നൽകുക", "donate_desc": "തീർത്ഥാടന കേന്ദ്രത്തിന്റെ പരിപാലനത്തെ പിന്തുണയ്ക്കുകയും അതിന്റെ വിവിധ ജീവകാരുണ്യ പ്രവർത്തനങ്ങൾക്ക് സംഭാവന നൽകുകയും ചെയ്യുക.", "donate": "സംഭാവന നൽകുക", "prayer_title": "പ്രാർത്ഥനാ അപേക്ഷ", "prayer_desc": "ഞങ്ങളുടെ ദൈനംദിന പ്രാർത്ഥനകളിൽ പ്രത്യേകം ഓർമ്മിക്കപ്പെടുന്നതിനായി നിങ്ങളുടെ പ്രാർത്ഥനാ അപേക്ഷകൾ സമർപ്പിക്കുക.", "submit_request": "അപേക്ഷ സമർപ്പിക്കുക", "management_title": "ശ്രൈൻ മാനേജ്മെന്റ്", "management_sub": "വിശ്വാസവും അർപ്പണബോധവും നയിക്കുന്നു", "accom_title": "മുറികളും താമസവും", "accom_sub": "സന്ദർശിക്കുന്ന എല്ലാ തീർത്ഥാടകർക്കും സുഖപ്രദമായ താമസ സൗകര്യങ്ങൾ", "accom_enquiries": "താമസ അന്വേഷണങ്ങൾ", "accom_desc": "റൂം ലഭ്യതയ്ക്കും റിസർവേഷനുകൾക്കുമായി ദയവായി ഞങ്ങളെ നേരിട്ട് ബന്ധപ്പെടുക."
      },
      "about": {
        "hero_title": "വിശുദ്ധ ദേവസഹായം",
        "hero_subtitle": "ഇന്ത്യയിലെ ആദ്യത്തെ അൽമായ വിശുദ്ധൻ | വിശ്വാസത്തിന്റെ രക്തസാക്ഷി | 1712 - 1752",
        "faith_courage_title": "വിശ്വാസത്തിന്റെയും ധൈര്യത്തിന്റെയും ജീവിതം",
        "faith_courage_p1": "1712-ൽ ജനിച്ച ദേവസഹായം, 2022 മെയ് 15-ന് വിശുദ്ധനായി പ്രഖ്യാപിക്കപ്പെട്ടു.",
        "faith_courage_p2": "അദ്ദേഹത്തിന്റെ ജീവിതം വിശ്വാസത്തിന്റെ സാക്ഷ്യമാണ്.",
        "early_life_title": "ആദ്യകാല ജീവിതം",
        "early_life_p1": "1712 ഏപ്രിൽ 23-ന് ജനിച്ചു.",
        "early_life_p2": "അദ്ദേഹത്തിന്റെ പിതാവ് ഒരു ക്ഷേത്ര പൂജാരിയായിരുന്നു.",
        "early_life_p3": "കൊട്ടാരം സേവനത്തിൽ പ്രവേശിച്ചു.",
        "turning_point_title": "തിരസ്കാരം",
        "turning_point_p1": "1741-ൽ ക്രിസ്തുമതത്തിൽ താൽപ്പര്യമെടുത്തു.",
        "turning_point_p2": "1745-ൽ ജ്ഞാനസ്നാനം സ്വീകരിച്ചു.",
        "turning_point_p3": "ഇത് അധികാരികളുടെ രോഷത്തിന് കാരണമായി.",
        "timeline_title": "ജീവിത രേഖ",
        "timeline_1_date": "1712", "timeline_1_text": "ജനനം",
        "timeline_2_date": "1741", "timeline_2_text": "സൗഹൃദം",
        "timeline_3_date": "1745", "timeline_3_text": "ജ്ഞാനസ്നാനം",
        "timeline_4_date": "1749", "timeline_4_text": "തടവ്",
        "timeline_5_date": "1752", "timeline_5_text": "രക്തസാക്ഷിത്വം",
        "timeline_6_date": "2012", "timeline_6_text": "അരുളാളർ",
        "timeline_7_date": "2022", "timeline_7_text": "വിശുദ്ധ പദവി",
        "timeline_8_date": "2026", "timeline_8_text": "മധ്യസ്ഥൻ",
        "persecution_title": "പീഡനം",
        "persecution_p1": "മതപരിവർത്തനം മൂലം പീഡനങ്ങൾ ഏറ്റുവാങ്ങി.",
        "persecution_p2": "അദ്ദേഹത്തെ അപമാനിച്ചു.",
        "persecution_p3": "സിനിമ പോലെ പീഡിപ്പിച്ചു.",
        "persecution_quote": "\"വിശ്വാസത്തിന് അദ്ദേഹം മാതൃകയാണ്.\"",
        "shrine_about_title": "തീർത്ഥാടന കേന്ദ്രം",
        "vision_title": "ദർശനം", "vision_text": "സ്നേഹം പ്രചോദിപ്പിക്കുക.",
        "mission_title": "ദൗത്യം", "mission_text": "സമൂഹത്തിന് സേവനം നൽകുക.",
        "sacred_places_title": "പുണ്യസ്ഥലങ്ങൾ",
        "cathedral_title": "സെന്റ് ഫ്രാൻസിസ് സേവ്യർ കത്തീഡ്രൽ",
        "cathedral_desc": "കോട്ടാറിലെ കത്തീഡ്രലിലുള്ള അദ്ദേഹത്തിന്റെ കല്ലറ ഒരു പ്രധാന കേന്ദ്രമാണ്.",
        "journey_title": "വിശുദ്ധ പദവി",
        "journey_desc": "2022-ൽ അദ്ദേഹം വിശുദ്ധനായി ഉയർത്തപ്പെട്ടു.",
        "legacy_title": "പൈതൃകം",
        "legacy_desc": "അദ്ദേഹം വണങ്ങപ്പെടുന്നു."
      },
      "management": {
        "m1_name": "മോസ്റ്റ് റവ. നസറീൻ സൂസൈ", "m1_title": "കോട്ടാർ രൂപതാ ബിഷപ്പ്", "m1_desc": "മോസ്റ്റ് റവ. നസറീൻ സൂസൈ കോട്ടാർ രൂപതയുടെ ബിഷപ്പും ഈ തീർത്ഥാടന കേന്ദ്രത്തിന്റെ ആത്മീയ നേതാവുമാണ്.",
        "m2_name": "റവ. ഫാ. ലിയോൺ ഹെൻസൺ", "m2_title": "റെക്ടറും ഇടവക വികാരിയും", "m2_desc": "റവ. ഫാ. ലിയോൺ ഹെൻസൺ തീർത്ഥാടന കേന്ദ്രത്തിന്റെ ഭരണസമിതി അധ്യക്ഷനും ഇടവക വികാരിയുമാണ്.",
        "m3_name": "റവ. ലോർഡ് വിന്നർ CMF", "m3_title": "ഇടവക വികാരി", "m3_desc": "വിശുദ്ധ ദേവസഹായം രക്തസാക്ഷിത്വ സ്ഥലത്തെ അന്താരാഷ്ട്ര തീർത്ഥാടന കേന്ദ്രമായി വികസിപ്പിക്കാൻ അദ്ദേഹം പ്രവർത്തിക്കുന്നു.",
        "m4_name": "റവ. ഫാ. ജ്ഞാന റോയ്", "m4_title": "ഇടവക വികാരി", "m4_desc": "റവ. ഫാ. ജ്ഞാന റോയ് ആത്മീയ ശുശ്രൂഷയിലൂടെയും സേവനത്തിലൂടെയും വികസനത്തെ പിന്തുണയ്ക്കുന്നു.",
        "m5_name": "റവ. ഫാ. അരുൺ പ്രവീൺ", "m5_title": "അസിസ്റ്റന്റ് ഇടവക വികാരി", "m5_desc": "റവ. ഫാ. അരുൺ പ്രവീൺ ഇടവക സമൂഹത്തിന് അജപാലന ശുശ്രൂഷയും സേവനവും നൽകുന്നു.",
        "m6_name": "മിസ്റ്റർ എസ്. മൈക്കൽ രാജ്", "m6_title": "വൈസ് പ്രസിഡന്റ്", "m6_desc": "മിസ്റ്റർ എസ്. മൈക്കൽ രാജ് പാരിഷ് കൗൺസിലിന്റെ ഭരണപരമായ കാര്യങ്ങൾ ഉറപ്പാക്കുന്നു.",
        "m7_name": "മിസ്റ്റർ എസ്. കിൽബെർട്ട്", "m7_title": "സെക്രട്ടറി", "m7_desc": "മിസ്റ്റർ എസ്. കിൽബെർട്ട് ആശയവിനിമയങ്ങൾക്കും പ്രവർത്തനങ്ങൾക്കും മേൽനോട്ടം വഹിക്കുന്നു.",
        "m8_name": "മിസ്സിസ് ജെ. ദീപാ ആൽബർട്ട്", "m8_title": "ട്രഷറർ", "m8_desc": "മിസ്സിസ് ജെ. ദീപാ ആൽബർട്ട് സാമ്പത്തിക കാര്യങ്ങളുടെ ചുമതല വഹിക്കുന്നു.",
        "m9_name": "മിസ്സിസ് എസ്. സഹായ റാണി", "m9_title": "അസിസ്റ്റന്റ് സെക്രട്ടറി", "m9_desc": "മിസ്സിസ് എസ്. സഹായ റാണി ദൈനംദിന പ്രവർത്തനങ്ങൾ സുഗമമാക്കാൻ സഹായിക്കുന്നു."
      },
      "accommodation": {
        "r1_title": "തീർത്ഥാടകർക്കുള്ള മുറികൾ", "r1_desc": "തീർത്ഥാടകർക്കായി ലളിതവും വൃത്തിയുള്ളതുമായ താമസസൗകര്യം.",
        "r2_title": "കുടുംബ മുറികൾ", "r2_desc": "കുടുംബങ്ങൾക്ക് സുഖകരവും സുരക്ഷിതവുമായ മുറികൾ.",
        "r3_title": "ഗ്രൂപ്പ് സ്റ്റേ", "r3_desc": "തീർത്ഥാടന സംഘങ്ങൾക്കുള്ള താമസസൗകര്യം.",
        "r4_title": "താങ്ങാനാവുന്ന മുറികൾ", "r4_desc": "എല്ലാ ഭക്തർക്കും താങ്ങാനാവുന്ന താമസസൗകര്യം.",
        "enquiry_title": "താമസ അന്വേഷണങ്ങൾ",
        "enquiry_sub": "മുറികളുടെ ലഭ്യതയ്ക്കായി ബന്ധപ്പെടുക.",
        "phone": "+91 89037 60869"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources, lng: "en", interpolation: { escapeValue: false }
});

export default i18n;
