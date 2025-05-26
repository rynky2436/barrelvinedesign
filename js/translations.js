// Translation system for Barrel & Vine Designs
class TranslationSystem {
  constructor() {
    this.currentLanguage = "en"
    this.supportedLanguages = ["en", "es", "fr", "de", "it", "pt"]
    this.translations = {}
    this.isLoading = false

    // Initialize the system
    this.init()
  }

  async init() {
    // Load translations
    await this.loadTranslations()

    // Detect user's preferred language
    this.detectLanguage()

    // Set up UI
    this.setupLanguageSelector()

    // Apply initial translation
    this.translatePage()
  }

  detectLanguage() {
    // Get browser language
    const browserLang = navigator.language || navigator.userLanguage
    const langCode = browserLang.split("-")[0].toLowerCase()

    // Check if we support this language
    if (this.supportedLanguages.includes(langCode)) {
      this.currentLanguage = langCode
    }

    // Check for saved preference
    const savedLang = localStorage.getItem("preferred-language")
    if (savedLang && this.supportedLanguages.includes(savedLang)) {
      this.currentLanguage = savedLang
    }
  }

  async loadTranslations() {
    // Define all translations inline for better performance
    this.translations = {
      en: {
        // Navigation
        "nav.home": "Home",
        "nav.winery": "Winery",
        "nav.microbrewery": "Microbrewery",
        "nav.about": "About Us",
        "nav.contact": "Commission Work",
        "nav.commission": "Commission Now",
        "nav.language": "Language",

        // Hero Section
        "hero.title": "Barrel & Vine Designs",
        "hero.subtitle": "Custom Laser Engraving | Washington, D.C. Metro",
        "hero.heading": "Premium Winery Branding &",
        "hero.heading.accent": "Microbrewery Merchandise",
        "hero.description":
          "Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services that tell your unique story.",
        "hero.cta.winery": "View Winery Solutions",
        "hero.cta.commission": "Commission Your Project",

        // Services Section
        "services.title": "Custom Laser Engraving Services",
        "services.description": "Elevating brands through precision craftsmanship and artisanal attention to detail",
        "services.winery.title": "Winery Solutions",
        "services.winery.subtitle": "Premium Branding & Custom Pieces",
        "services.winery.description":
          "Elevate your vintner's legacy with bespoke laser engraving that captures the essence of your terroir. From elegant wine boxes to custom barrel heads, we craft pieces that reflect your winery's distinguished heritage.",
        "services.winery.features.1": "Custom wine box engraving",
        "services.winery.features.2": "Barrel head personalization",
        "services.winery.features.3": "Tasting room signage & décor",
        "services.winery.features.4": "Award displays & plaques",
        "services.winery.cta": "Explore Winery Solutions",
        "services.brewery.title": "Microbrewery Solutions",
        "services.brewery.subtitle": "Custom Merchandise & Branding",
        "services.brewery.description":
          "Stand out in the competitive craft beer landscape with distinctive laser-engraved merchandise that tells your brewery's story. From tap handles to growlers, we help you create memorable brand experiences.",
        "services.brewery.features.1": "Custom tap handles & beer flights",
        "services.brewery.features.2": "Branded growlers & glassware",
        "services.brewery.features.3": "Taproom décor & signage",
        "services.brewery.features.4": "Promotional merchandise",
        "services.brewery.cta": "Explore Brewery Solutions",

        // Why Choose Us Section
        "why.title": "The Craftworks Difference",
        "why.description": "Combining traditional craftsmanship with cutting-edge laser technology",
        "why.quality.title": "Artisanal Quality",
        "why.quality.description":
          "Every piece is meticulously crafted with attention to detail that honors your brand's commitment to excellence.",
        "why.local.title": "Local Expertise",
        "why.local.description":
          "Deep understanding of the DMV's wine and craft beer culture, serving Maryland, Virginia, and D.C.",
        "why.partnership.title": "Partnership Approach",
        "why.partnership.description":
          "We work closely with you to understand your vision and bring it to life with precision and care.",

        // CTA Section
        "cta.title": "Ready to Commission Your Vision?",
        "cta.description":
          "Let's discuss how our laser engraving expertise can bring your winery or brewery's vision to life in the DMV market.",
        "cta.commission": "Commission Your Project",
        "cta.consultation": "Schedule Consultation",

        // Footer
        "footer.description":
          "Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services that honor your brand's commitment to excellence.",
        "footer.services": "Services",
        "footer.contact": "Contact",
        "footer.copyright": "© 2024 Barrel & Vine Designs. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",

        // Language names
        "lang.en": "English",
        "lang.es": "Español",
        "lang.fr": "Français",
        "lang.de": "Deutsch",
        "lang.it": "Italiano",
        "lang.pt": "Português",
      },

      es: {
        // Navigation
        "nav.home": "Inicio",
        "nav.winery": "Bodega",
        "nav.microbrewery": "Microcervecería",
        "nav.about": "Nosotros",
        "nav.contact": "Encargar Trabajo",
        "nav.commission": "Encargar Ahora",
        "nav.language": "Idioma",

        // Hero Section
        "hero.title": "Barrel & Vine Designs",
        "hero.subtitle": "Grabado Láser Personalizado | Área Metropolitana de Washington, D.C.",
        "hero.heading": "Marca Premium para Bodegas y",
        "hero.heading.accent": "Mercancía para Microcervecerías",
        "hero.description":
          "Sirviendo a bodegas y cervecerías artesanales en Maryland, Virginia y Washington, D.C. con servicios de grabado láser personalizados que cuentan su historia única.",
        "hero.cta.winery": "Ver Soluciones para Bodegas",
        "hero.cta.commission": "Encarga Tu Proyecto",

        // Services Section
        "services.title": "Servicios de Grabado Láser Personalizado",
        "services.description": "Elevando marcas a través de artesanía de precisión y atención artesanal al detalle",
        "services.winery.title": "Soluciones para Bodegas",
        "services.winery.subtitle": "Marca Premium y Piezas Personalizadas",
        "services.winery.description":
          "Eleva el legado de tu viñedo con grabado láser personalizado que captura la esencia de tu terroir. Desde elegantes cajas de vino hasta cabezas de barril personalizadas, creamos piezas que reflejan la herencia distinguida de tu bodega.",
        "services.winery.features.1": "Grabado personalizado de cajas de vino",
        "services.winery.features.2": "Personalización de cabezas de barril",
        "services.winery.features.3": "Señalización y decoración de sala de cata",
        "services.winery.features.4": "Exhibición de premios y placas",
        "services.winery.cta": "Explorar Soluciones para Bodegas",
        "services.brewery.title": "Soluciones para Microcervecerías",
        "services.brewery.subtitle": "Mercancía Personalizada y Marca",
        "services.brewery.description":
          "Destácate en el competitivo panorama de la cerveza artesanal con mercancía distintiva grabada con láser que cuenta la historia de tu cervecería. Desde grifos hasta growlers, te ayudamos a crear experiencias de marca memorables.",
        "services.brewery.features.1": "Grifos personalizados y vuelos de cerveza",
        "services.brewery.features.2": "Growlers y cristalería con marca",
        "services.brewery.features.3": "Decoración y señalización de taproom",
        "services.brewery.features.4": "Mercancía promocional",
        "services.brewery.cta": "Explorar Soluciones para Cervecerías",

        // Why Choose Us Section
        "why.title": "La Diferencia Craftworks",
        "why.description": "Combinando artesanía tradicional con tecnología láser de vanguardia",
        "why.quality.title": "Calidad Artesanal",
        "why.quality.description":
          "Cada pieza está meticulosamente elaborada con atención al detalle que honra el compromiso de tu marca con la excelencia.",
        "why.local.title": "Experiencia Local",
        "why.local.description":
          "Profundo entendimiento de la cultura del vino y cerveza artesanal del DMV, sirviendo Maryland, Virginia y D.C.",
        "why.partnership.title": "Enfoque de Asociación",
        "why.partnership.description":
          "Trabajamos estrechamente contigo para entender tu visión y darle vida con precisión y cuidado.",

        // CTA Section
        "cta.title": "¿Listo para Encargar Tu Visión?",
        "cta.description":
          "Hablemos sobre cómo nuestra experiencia en grabado láser puede dar vida a la visión de tu bodega o cervecería en el mercado DMV.",
        "cta.commission": "Encarga Tu Proyecto",
        "cta.consultation": "Programar Consulta",

        // Footer
        "footer.description":
          "Sirviendo a bodegas y cervecerías artesanales en Maryland, Virginia y Washington, D.C. con servicios de grabado láser personalizados que honran el compromiso de tu marca con la excelencia.",
        "footer.services": "Servicios",
        "footer.contact": "Contacto",
        "footer.copyright": "© 2024 Barrel & Vine Designs. Todos los derechos reservados.",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio",

        // Language names
        "lang.en": "English",
        "lang.es": "Español",
        "lang.fr": "Français",
        "lang.de": "Deutsch",
        "lang.it": "Italiano",
        "lang.pt": "Português",
      },

      fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.winery": "Vignoble",
        "nav.microbrewery": "Microbrasserie",
        "nav.about": "À Propos",
        "nav.contact": "Commander Travail",
        "nav.commission": "Commander Maintenant",
        "nav.language": "Langue",

        // Hero Section
        "hero.title": "Barrel & Vine Designs",
        "hero.subtitle": "Gravure Laser Personnalisée | Région Métropolitaine de Washington, D.C.",
        "hero.heading": "Image de Marque Premium pour Vignobles et",
        "hero.heading.accent": "Marchandise pour Microbrasseries",
        "hero.description":
          "Au service des vignobles et brasseries artisanales du Maryland, de la Virginie et de Washington, D.C. avec des services de gravure laser sur mesure qui racontent votre histoire unique.",
        "hero.cta.winery": "Voir Solutions Vignobles",
        "hero.cta.commission": "Commandez Votre Projet",

        // Services Section
        "services.title": "Services de Gravure Laser Personnalisée",
        "services.description":
          "Élever les marques grâce à un savoir-faire de précision et une attention artisanale aux détails",
        "services.winery.title": "Solutions Vignobles",
        "services.winery.subtitle": "Image de Marque Premium et Pièces Personnalisées",
        "services.winery.description":
          "Élevez l'héritage de votre vigneron avec une gravure laser sur mesure qui capture l'essence de votre terroir. Des élégantes boîtes à vin aux têtes de tonneau personnalisées, nous créons des pièces qui reflètent l'héritage distingué de votre vignoble.",
        "services.winery.features.1": "Gravure personnalisée de boîtes à vin",
        "services.winery.features.2": "Personnalisation de têtes de tonneau",
        "services.winery.features.3": "Signalisation et décoration de salle de dégustation",
        "services.winery.features.4": "Affichage de prix et plaques",
        "services.winery.cta": "Explorer Solutions Vignobles",
        "services.brewery.title": "Solutions Microbrasseries",
        "services.brewery.subtitle": "Marchandise Personnalisée et Image de Marque",
        "services.brewery.description":
          "Démarquez-vous dans le paysage concurrentiel de la bière artisanale avec une marchandise distinctive gravée au laser qui raconte l'histoire de votre brasserie. Des robinets aux growlers, nous vous aidons à créer des expériences de marque mémorables.",
        "services.brewery.features.1": "Robinets personnalisés et vols de bière",
        "services.brewery.features.2": "Growlers et verrerie de marque",
        "services.brewery.features.3": "Décoration et signalisation de taproom",
        "services.brewery.features.4": "Marchandise promotionnelle",
        "services.brewery.cta": "Explorer Solutions Brasseries",

        // Why Choose Us Section
        "why.title": "La Différence Craftworks",
        "why.description": "Combinant l'artisanat traditionnel avec la technologie laser de pointe",
        "why.quality.title": "Qualité Artisanale",
        "why.quality.description":
          "Chaque pièce est méticuleusement conçue avec une attention aux détails qui honore l'engagement de votre marque envers l'excellence.",
        "why.local.title": "Expertise Locale",
        "why.local.description":
          "Compréhension approfondie de la culture du vin et de la bière artisanale du DMV, servant le Maryland, la Virginie et D.C.",
        "why.partnership.title": "Approche Partenariat",
        "why.partnership.description":
          "Nous travaillons étroitement avec vous pour comprendre votre vision et la concrétiser avec précision et soin.",

        // CTA Section
        "cta.title": "Prêt à Commander Votre Vision?",
        "cta.description":
          "Discutons de la façon dont notre expertise en gravure laser peut donner vie à la vision de votre vignoble ou brasserie sur le marché DMV.",
        "cta.commission": "Commandez Votre Projet",
        "cta.consultation": "Planifier Consultation",

        // Footer
        "footer.description":
          "Au service des vignobles et brasseries artisanales du Maryland, de la Virginie et de Washington, D.C. avec des services de gravure laser sur mesure qui honorent l'engagement de votre marque envers l'excellence.",
        "footer.services": "Services",
        "footer.contact": "Contact",
        "footer.copyright": "© 2024 Barrel & Vine Designs. Tous droits réservés.",
        "footer.privacy": "Politique de Confidentialité",
        "footer.terms": "Conditions de Service",

        // Language names
        "lang.en": "English",
        "lang.es": "Español",
        "lang.fr": "Français",
        "lang.de": "Deutsch",
        "lang.it": "Italiano",
        "lang.pt": "Português",
      },

      de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.winery": "Weingut",
        "nav.microbrewery": "Mikrobrauerei",
        "nav.about": "Über Uns",
        "nav.contact": "Arbeit Beauftragen",
        "nav.commission": "Jetzt Beauftragen",
        "nav.language": "Sprache",

        // Hero Section
        "hero.title": "Barrel & Vine Designs",
        "hero.subtitle": "Maßgeschneiderte Lasergravur | Washington, D.C. Metro",
        "hero.heading": "Premium Weingut-Branding &",
        "hero.heading.accent": "Mikrobrauerei-Merchandise",
        "hero.description":
          "Wir bedienen Weingüter und Craft-Brauereien in Maryland, Virginia und Washington, D.C. mit maßgeschneiderten Lasergravur-Services, die Ihre einzigartige Geschichte erzählen.",
        "hero.cta.winery": "Weingut-Lösungen Ansehen",
        "hero.cta.commission": "Ihr Projekt Beauftragen",

        // Services Section
        "services.title": "Maßgeschneiderte Lasergravur-Services",
        "services.description": "Marken durch Präzisionshandwerk und handwerkliche Detailgenauigkeit erhöhen",
        "services.winery.title": "Weingut-Lösungen",
        "services.winery.subtitle": "Premium-Branding & Maßgeschneiderte Stücke",
        "services.winery.description":
          "Erhöhen Sie das Erbe Ihres Winzers mit maßgeschneiderter Lasergravur, die die Essenz Ihres Terroirs einfängt. Von eleganten Weinkisten bis zu benutzerdefinierten Fassboden, wir fertigen Stücke, die das distinguierte Erbe Ihres Weinguts widerspiegeln.",
        "services.winery.features.1": "Maßgeschneiderte Weinkisten-Gravur",
        "services.winery.features.2": "Fassboden-Personalisierung",
        "services.winery.features.3": "Verkostungsraum-Beschilderung & Dekor",
        "services.winery.features.4": "Auszeichnungs-Displays & Plaketten",
        "services.winery.cta": "Weingut-Lösungen Erkunden",
        "services.brewery.title": "Mikrobrauerei-Lösungen",
        "services.brewery.subtitle": "Maßgeschneiderte Merchandise & Branding",
        "services.brewery.description":
          "Heben Sie sich in der wettbewerbsintensiven Craft-Beer-Landschaft mit unverwechselbarer lasergravierter Merchandise ab, die die Geschichte Ihrer Brauerei erzählt. Von Zapfhähnen bis Growlern helfen wir Ihnen, unvergessliche Markenerlebnisse zu schaffen.",
        "services.brewery.features.1": "Maßgeschneiderte Zapfhähne & Bier-Flights",
        "services.brewery.features.2": "Markierte Growler & Glaswaren",
        "services.brewery.features.3": "Taproom-Dekor & Beschilderung",
        "services.brewery.features.4": "Werbemerchandise",
        "services.brewery.cta": "Brauerei-Lösungen Erkunden",

        // Why Choose Us Section
        "why.title": "Der Craftworks-Unterschied",
        "why.description": "Traditionelles Handwerk mit modernster Lasertechnologie kombinieren",
        "why.quality.title": "Handwerkliche Qualität",
        "why.quality.description":
          "Jedes Stück wird sorgfältig mit Liebe zum Detail gefertigt, die das Engagement Ihrer Marke für Exzellenz ehrt.",
        "why.local.title": "Lokale Expertise",
        "why.local.description":
          "Tiefes Verständnis der Wein- und Craft-Beer-Kultur des DMV, bedient Maryland, Virginia und D.C.",
        "why.partnership.title": "Partnerschaftsansatz",
        "why.partnership.description":
          "Wir arbeiten eng mit Ihnen zusammen, um Ihre Vision zu verstehen und sie mit Präzision und Sorgfalt zum Leben zu erwecken.",

        // CTA Section
        "cta.title": "Bereit, Ihre Vision zu Beauftragen?",
        "cta.description":
          "Lassen Sie uns besprechen, wie unsere Lasergravur-Expertise die Vision Ihres Weinguts oder Ihrer Brauerei im DMV-Markt zum Leben erwecken kann.",
        "cta.commission": "Ihr Projekt Beauftragen",
        "cta.consultation": "Beratung Planen",

        // Footer
        "footer.description":
          "Wir bedienen Weingüter und Craft-Brauereien in Maryland, Virginia und Washington, D.C. mit maßgeschneiderten Lasergravur-Services, die das Engagement Ihrer Marke für Exzellenz ehren.",
        "footer.services": "Services",
        "footer.contact": "Kontakt",
        "footer.copyright": "© 2024 Barrel & Vine Designs. Alle Rechte vorbehalten.",
        "footer.privacy": "Datenschutzrichtlinie",
        "footer.terms": "Nutzungsbedingungen",

        // Language names
        "lang.en": "English",
        "lang.es": "Español",
        "lang.fr": "Français",
        "lang.de": "Deutsch",
        "lang.it": "Italiano",
        "lang.pt": "Português",
      },

      it: {
        // Navigation
        "nav.home": "Home",
        "nav.winery": "Cantina",
        "nav.microbrewery": "Microbirrificio",
        "nav.about": "Chi Siamo",
        "nav.contact": "Commissiona Lavoro",
        "nav.commission": "Commissiona Ora",
        "nav.language": "Lingua",

        // Hero Section
        "hero.title": "Barrel & Vine Designs",
        "hero.subtitle": "Incisione Laser Personalizzata | Area Metropolitana di Washington, D.C.",
        "hero.heading": "Branding Premium per Cantine e",
        "hero.heading.accent": "Merchandise per Microbirrifici",
        "hero.description":
          "Serviamo cantine e birrifici artigianali nel Maryland, Virginia e Washington, D.C. con servizi di incisione laser su misura che raccontano la vostra storia unica.",
        "hero.cta.winery": "Vedi Soluzioni Cantina",
        "hero.cta.commission": "Commissiona il Tuo Progetto",

        // Services Section
        "services.title": "Servizi di Incisione Laser Personalizzata",
        "services.description":
          "Elevare i marchi attraverso artigianato di precisione e attenzione artigianale ai dettagli",
        "services.winery.title": "Soluzioni Cantina",
        "services.winery.subtitle": "Branding Premium e Pezzi Personalizzati",
        "services.winery.description":
          "Elevate l'eredità del vostro viticoltore con incisione laser su misura che cattura l'essenza del vostro terroir. Dalle eleganti scatole di vino alle teste di botte personalizzate, creiamo pezzi che riflettono l'eredità distinta della vostra cantina.",
        "services.winery.features.1": "Incisione personalizzata scatole vino",
        "services.winery.features.2": "Personalizzazione teste di botte",
        "services.winery.features.3": "Segnaletica e decorazione sala degustazione",
        "services.winery.features.4": "Display premi e targhe",
        "services.winery.cta": "Esplora Soluzioni Cantina",
        "services.brewery.title": "Soluzioni Microbirrificio",
        "services.brewery.subtitle": "Merchandise Personalizzato e Branding",
        "services.brewery.description":
          "Distinguetevi nel panorama competitivo della birra artigianale con merchandise distintivo inciso al laser che racconta la storia del vostro birrificio. Dai rubinetti ai growler, vi aiutiamo a creare esperienze di marca memorabili.",
        "services.brewery.features.1": "Rubinetti personalizzati e voli di birra",
        "services.brewery.features.2": "Growler e bicchieri di marca",
        "services.brewery.features.3": "Decorazione e segnaletica taproom",
        "services.brewery.features.4": "Merchandise promozionale",
        "services.brewery.cta": "Esplora Soluzioni Birrificio",

        // Why Choose Us Section
        "why.title": "La Differenza Craftworks",
        "why.description": "Combinando artigianato tradizionale con tecnologia laser all'avanguardia",
        "why.quality.title": "Qualità Artigianale",
        "why.quality.description":
          "Ogni pezzo è meticolosamente realizzato con attenzione ai dettagli che onora l'impegno del vostro marchio per l'eccellenza.",
        "why.local.title": "Competenza Locale",
        "why.local.description":
          "Profonda comprensione della cultura del vino e della birra artigianale del DMV, servendo Maryland, Virginia e D.C.",
        "why.partnership.title": "Approccio Partnership",
        "why.partnership.description":
          "Lavoriamo a stretto contatto con voi per comprendere la vostra visione e darle vita con precisione e cura.",

        // CTA Section
        "cta.title": "Pronti a Commissionare la Vostra Visione?",
        "cta.description":
          "Discutiamo di come la nostra competenza nell'incisione laser può dare vita alla visione della vostra cantina o birrificio nel mercato DMV.",
        "cta.commission": "Commissiona il Tuo Progetto",
        "cta.consultation": "Programma Consultazione",

        // Footer
        "footer.description":
          "Serviamo cantine e birrifici artigianali nel Maryland, Virginia e Washington, D.C. con servizi di incisione laser su misura che onorano l'impegno del vostro marchio per l'eccellenza.",
        "footer.services": "Servizi",
        "footer.contact": "Contatto",
        "footer.copyright": "© 2024 Barrel & Vine Designs. Tutti i diritti riservati.",
        "footer.privacy": "Politica Privacy",
        "footer.terms": "Termini di Servizio",

        // Language names
        "lang.en": "English",
        "lang.es": "Español",
        "lang.fr": "Français",
        "lang.de": "Deutsch",
        "lang.it": "Italiano",
        "lang.pt": "Português",
      },

      pt: {
        // Navigation
        "nav.home": "Início",
        "nav.winery": "Vinícola",
        "nav.microbrewery": "Microcervejaria",
        "nav.about": "Sobre Nós",
        "nav.contact": "Encomendar Trabalho",
        "nav.commission": "Encomendar Agora",
        "nav.language": "Idioma",

        // Hero Section
        "hero.title": "Barrel & Vine Designs",
        "hero.subtitle": "Gravação a Laser Personalizada | Área Metropolitana de Washington, D.C.",
        "hero.heading": "Branding Premium para Vinícolas e",
        "hero.heading.accent": "Merchandise para Microcervejarias",
        "hero.description":
          "Servindo vinícolas e cervejarias artesanais em Maryland, Virginia e Washington, D.C. com serviços de gravação a laser sob medida que contam sua história única.",
        "hero.cta.winery": "Ver Soluções Vinícola",
        "hero.cta.commission": "Encomende Seu Projeto",

        // Services Section
        "services.title": "Serviços de Gravação a Laser Personalizada",
        "services.description": "Elevando marcas através de artesanato de precisão e atenção artesanal aos detalhes",
        "services.winery.title": "Soluções Vinícola",
        "services.winery.subtitle": "Branding Premium e Peças Personalizadas",
        "services.winery.description":
          "Eleve o legado do seu viticultor com gravação a laser sob medida que captura a essência do seu terroir. De elegantes caixas de vinho a cabeças de barril personalizadas, criamos peças que refletem a herança distinta da sua vinícola.",
        "services.winery.features.1": "Gravação personalizada caixas de vinho",
        "services.winery.features.2": "Personalização cabeças de barril",
        "services.winery.features.3": "Sinalização e decoração sala de degustação",
        "services.winery.features.4": "Displays de prêmios e placas",
        "services.winery.cta": "Explorar Soluções Vinícola",
        "services.brewery.title": "Soluções Microcervejaria",
        "services.brewery.subtitle": "Merchandise Personalizado e Branding",
        "services.brewery.description":
          "Destaque-se no panorama competitivo da cerveja artesanal com merchandise distintivo gravado a laser que conta a história da sua cervejaria. De torneiras a growlers, ajudamos você a criar experiências de marca memoráveis.",
        "services.brewery.features.1": "Torneiras personalizadas e voos de cerveja",
        "services.brewery.features.2": "Growlers e copos de marca",
        "services.brewery.features.3": "Decoração e sinalização taproom",
        "services.brewery.features.4": "Merchandise promocional",
        "services.brewery.cta": "Explorar Soluções Cervejaria",

        // Why Choose Us Section
        "why.title": "A Diferença Craftworks",
        "why.description": "Combinando artesanato tradicional com tecnologia laser de ponta",
        "why.quality.title": "Qualidade Artesanal",
        "why.quality.description":
          "Cada peça é meticulosamente elaborada com atenção aos detalhes que honra o compromisso da sua marca com a excelência.",
        "why.local.title": "Expertise Local",
        "why.local.description":
          "Profundo entendimento da cultura do vinho e cerveja artesanal do DMV, servindo Maryland, Virginia e D.C.",
        "why.partnership.title": "Abordagem Parceria",
        "why.partnership.description":
          "Trabalhamos estreitamente com você para entender sua visão e dar vida a ela com precisão e cuidado.",

        // CTA Section
        "cta.title": "Pronto para Encomendar Sua Visão?",
        "cta.description":
          "Vamos discutir como nossa expertise em gravação a laser pode dar vida à visão da sua vinícola ou cervejaria no mercado DMV.",
        "cta.commission": "Encomende Seu Projeto",
        "cta.consultation": "Agendar Consulta",

        // Footer
        "footer.description":
          "Servindo vinícolas e cervejarias artesanais em Maryland, Virginia e Washington, D.C. com serviços de gravação a laser sob medida que honram o compromisso da sua marca com a excelência.",
        "footer.services": "Serviços",
        "footer.contact": "Contato",
        "footer.copyright": "© 2024 Barrel & Vine Designs. Todos os direitos reservados.",
        "footer.privacy": "Política de Privacidade",
        "footer.terms": "Termos de Serviço",

        // Language names
        "lang.en": "English",
        "lang.es": "Español",
        "lang.fr": "Français",
        "lang.de": "Deutsch",
        "lang.it": "Italiano",
        "lang.pt": "Português",
      },
    }
  }

  setupLanguageSelector() {
    // Create language selector for desktop
    const navActions = document.querySelector(".nav-actions")
    if (navActions) {
      const languageSelector = this.createLanguageSelector()
      navActions.appendChild(languageSelector)
    }

    // Create language selector for mobile
    const mobileNav = document.querySelector(".mobile-nav")
    if (mobileNav) {
      const mobileLanguageSelector = this.createMobileLanguageSelector()
      mobileNav.appendChild(mobileLanguageSelector)
    }
  }

  createLanguageSelector() {
    const selector = document.createElement("div")
    selector.className = "language-selector"

    const button = document.createElement("button")
    button.className = "language-btn"
    button.innerHTML = `
      <span class="flag-icon flag-${this.currentLanguage}"></span>
      <span>${this.getTranslation("lang." + this.currentLanguage)}</span>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    `

    const dropdown = document.createElement("div")
    dropdown.className = "language-dropdown"

    this.supportedLanguages.forEach((lang) => {
      const option = document.createElement("a")
      option.href = "#"
      option.className = `language-option ${lang === this.currentLanguage ? "active" : ""}`
      option.innerHTML = `
        <span class="flag-icon flag-${lang}"></span>
        <span>${this.getTranslation("lang." + lang)}</span>
      `

      option.addEventListener("click", (e) => {
        e.preventDefault()
        this.changeLanguage(lang)
        dropdown.classList.remove("active")
      })

      dropdown.appendChild(option)
    })

    button.addEventListener("click", (e) => {
      e.preventDefault()
      dropdown.classList.toggle("active")
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!selector.contains(e.target)) {
        dropdown.classList.remove("active")
      }
    })

    selector.appendChild(button)
    selector.appendChild(dropdown)

    return selector
  }

  createMobileLanguageSelector() {
    const container = document.createElement("div")
    container.className = "mobile-language-selector"

    const title = document.createElement("div")
    title.style.cssText =
      "color: var(--amber-300); font-weight: 600; margin-bottom: var(--spacing-2); font-size: 0.875rem;"
    title.textContent = this.getTranslation("nav.language")

    const grid = document.createElement("div")
    grid.style.cssText = "display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-2);"

    this.supportedLanguages.forEach((lang) => {
      const option = document.createElement("button")
      option.className = `language-option ${lang === this.currentLanguage ? "active" : ""}`
      option.style.cssText =
        "border: none; background: none; padding: var(--spacing-2); border-radius: var(--radius-md); cursor: pointer;"
      option.innerHTML = `
        <span class="flag-icon flag-${lang}"></span>
        <span style="font-size: 0.75rem; margin-left: var(--spacing-1);">${lang.toUpperCase()}</span>
      `

      option.addEventListener("click", () => {
        this.changeLanguage(lang)
      })

      grid.appendChild(option)
    })

    container.appendChild(title)
    container.appendChild(grid)

    return container
  }

  changeLanguage(newLang) {
    if (this.isLoading || newLang === this.currentLanguage) return

    this.currentLanguage = newLang
    localStorage.setItem("preferred-language", newLang)

    // Update language selectors
    this.updateLanguageSelectors()

    // Translate the page
    this.translatePage()
  }

  updateLanguageSelectors() {
    // Update desktop selector
    const desktopBtn = document.querySelector(".language-btn")
    if (desktopBtn) {
      desktopBtn.innerHTML = `
        <span class="flag-icon flag-${this.currentLanguage}"></span>
        <span>${this.getTranslation("lang." + this.currentLanguage)}</span>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      `
    }

    // Update active states
    document.querySelectorAll(".language-option").forEach((option) => {
      option.classList.remove("active")
      if (option.innerHTML.includes(`flag-${this.currentLanguage}`)) {
        option.classList.add("active")
      }
    })
  }

  translatePage() {
    if (this.isLoading) return

    this.isLoading = true
    document.body.classList.add("translating")

    // Get all elements with translation keys
    const elements = document.querySelectorAll("[data-translate]")

    elements.forEach((element) => {
      const key = element.getAttribute("data-translate")
      const translation = this.getTranslation(key)

      if (translation) {
        if (element.tagName === "INPUT" && element.type === "submit") {
          element.value = translation
        } else if (element.hasAttribute("placeholder")) {
          element.placeholder = translation
        } else {
          element.textContent = translation
        }
      }
    })

    // Update page title and meta description
    this.updatePageMeta()

    setTimeout(() => {
      this.isLoading = false
      document.body.classList.remove("translating")
    }, 300)
  }

  updatePageMeta() {
    const titleElement = document.querySelector("title")
    const descriptionElement = document.querySelector('meta[name="description"]')

    if (titleElement) {
      const baseTitle = "Barrel & Vine Designs - Custom Laser Engraving | Washington, D.C. Metro"
      const translations = {
        es: "Barrel & Vine Designs - Grabado Láser Personalizado | Área Metropolitana de Washington, D.C.",
        fr: "Barrel & Vine Designs - Gravure Laser Personnalisée | Région Métropolitaine de Washington, D.C.",
        de: "Barrel & Vine Designs - Maßgeschneiderte Lasergravur | Washington, D.C. Metro",
        it: "Barrel & Vine Designs - Incisione Laser Personalizzata | Area Metropolitana di Washington, D.C.",
        pt: "Barrel & Vine Designs - Gravação a Laser Personalizada | Área Metropolitana de Washington, D.C.",
      }

      titleElement.textContent = translations[this.currentLanguage] || baseTitle
    }

    if (descriptionElement) {
      const baseDescription =
        "Premium winery branding and microbrewery merchandise. Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services."
      const translations = {
        es: "Marca premium para bodegas y mercancía para microcervecerías. Sirviendo a bodegas y cervecerías artesanales en Maryland, Virginia y Washington, D.C. con servicios de grabado láser personalizados.",
        fr: "Image de marque premium pour vignobles et marchandise pour microbrasseries. Au service des vignobles et brasseries artisanales du Maryland, de la Virginie et de Washington, D.C. avec des services de gravure laser sur mesure.",
        de: "Premium Weingut-Branding und Mikrobrauerei-Merchandise. Wir bedienen Weingüter und Craft-Brauereien in Maryland, Virginia und Washington, D.C. mit maßgeschneiderten Lasergravur-Services.",
        it: "Branding premium per cantine e merchandise per microbirrifici. Serviamo cantine e birrifici artigianali nel Maryland, Virginia e Washington, D.C. con servizi di incisione laser su misura.",
        pt: "Branding premium para vinícolas e merchandise para microcervejarias. Servindo vinícolas e cervejarias artesanais em Maryland, Virginia e Washington, D.C. com serviços de gravação a laser sob medida.",
      }

      descriptionElement.content = translations[this.currentLanguage] || baseDescription
    }
  }

  getTranslation(key) {
    const langTranslations = this.translations[this.currentLanguage]
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key]
    }

    // Fallback to English
    const englishTranslations = this.translations["en"]
    if (englishTranslations && englishTranslations[key]) {
      return englishTranslations[key]
    }

    return key // Return the key if no translation found
  }
}

// Initialize translation system when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.translationSystem = new TranslationSystem()
})
