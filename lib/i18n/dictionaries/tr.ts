import type { Dictionary } from "./en";

const tr: Dictionary = {
  meta: {
    title: "Mert Incesu — Backend Yazılım Mühendisi",
    description:
      "Mert Incesu, Münih merkezli bir backend yazılım mühendisidir; Kotlin, Java, Spring Boot ve PostgreSQL ile güvenilir dağıtık sistemler geliştirir.",
    ogDescription:
      "Münih'te backend mühendisi. Kotlin, Spring Boot, dağıtık sistemler.",
    ogLocale: "tr_TR",
  },
  nav: {
    role: "Yazılım Mühendisi",
    links: {
      about: "Hakkımda",
      stack: "Teknolojiler",
      experience: "Deneyim",
      contact: "İletişim",
    },
    available: "Yeni fırsatlara açığım",
    languageLabel: "Dil",
  },
  hero: {
    location: "Münih, Almanya",
    tz: "CET",
    title: {
      line1: "API katmanında",
      line2Pre: "",
      line2Accent: "güvenilir",
      line2Post: " sistemler kuran",
      line3: "yazılım mühendisi.",
    },
    intro: {
      pre: "Ben ",
      name: "Mert Incesu",
      post: " — Java, Kotlin ve Spring Boot ile üç yılı aşkın süredir mikroservisler geliştiren bir yazılım mühendisiyim. Servisleri istikrarlı ve kapsamlı dokümantasyona sahip API'ler etrafında tasarlar, gözlemlenebilirliği en baştan planlayarak zaman içinde bakımını ve geliştirilmesini kolaylaştıran yazılımlar geliştiririm.",
    },
    ctaContact: "İletişime geç",
    ctaCv: "CV'yi indir",
    stats: [
      { label: "Odak", value: "Dağıtık backend sistemleri", mono: false },
      { label: "Ana stack", value: "Kotlin · Spring Boot", mono: true },
      { label: "Deneyim", value: "3+ yıl, canlı ortam", mono: false },
      { label: "Açık olduğum alanlar", value: "Backend · Full-Stack · Platform", mono: false },
    ],
  },
  about: {
    eyebrow: "01 / Hakkımda",
    portraitAlt: "Mert Incesu",
    heading:
      "Karmaşık sistemlerin güvenilir çalışabilmesi için temel yapı taşlarını sağlam bir şekilde tasarlar ve geliştiririm.",
    p1: "Son üç yıldır ödeme sistemleri, kimlik ve erişim yönetimi ile iç platform ekiplerinde çalışıyorum. Bu süreçte, günde milyonlarca isteği işleyen servislerin tasarımından geliştirilmesine ve operasyonuna kadar uçtan uca sorumluluk aldım. Ağırlıklı olarak Kotlin ve Spring Boot ile çalışıyor; veri katmanında PostgreSQL, olay odaklı mimarilerde ise Kafka kullanıyorum.",
    p2: {
      pre: "Güvenilirlik ve sürdürülebilirliğin ön planda olduğu sistemlerde çalışmayı seviyorum. Servisler arasındaki sınırların net tanımlanmasına, entegrasyonların sağlam temeller üzerine kurulmasına ve sistemlerin uzun vadede yönetilebilir kalmasına odaklanıyorum. Açık dokümantasyonu, ",
      accent: "anlaşılır mimarileri",
      post: " ve sistemlerin uzun vadede güvenilir ve yönetilebilir kalmasını sağlayan teknik tasarım kararlarını önemsiyorum.",
    },
    facts: [
      { label: "Konum", value: "Münih, DE" },
      { label: "Diller", value: "İngilizce · Almanca · Türkçe" },
      { label: "Rol", value: "Backend / Full-Stack Mühendisi" },
    ],
    statusLabel: "Durum",
    statusValue: "Yeni rollere açık",
  },
  stack: {
    eyebrow: "02 / Teknolojiler",
    heading: "Çalıştığım teknolojiler",
    sub: "Bilerek kısa tutulmuş bir liste. Logo biriktirmek yerine az sayıda teknolojide derinleşmeyi tercih ederim.",
    categories: [
      {
        title: "Diller",
        badge: "core",
        items: [
          { name: "Java", note: "8 → 21" },
          { name: "Kotlin", note: "JVM backend" },
          { name: "SQL", note: "PostgreSQL odaklı" },
          { name: "TypeScript", note: "React ekosistemi" },
          { name: "Bash", note: "otomasyon ve betikler" },
        ],
      },
      {
        title: "Framework'ler",
        badge: "backend",
        items: [
          { name: "Spring Boot", note: "2.x / 3.x" },
          { name: "Spring WebFlux", note: "reaktif sistemler" },
          { name: "Ktor", note: "hafif servisler" },
          { name: "JUnit · Testcontainers", note: "entegrasyon testleri" },
          { name: "Flyway · jOOQ", note: "veritabanı araçları" },
        ],
      },
      {
        title: "Veri ve mesajlaşma",
        badge: "infra",
        items: [
          { name: "PostgreSQL", note: "12 → 16" },
          { name: "Redis", note: "önbellekleme ve kilitleme" },
          { name: "Apache Kafka", note: "olay güdümlü sistemler" },
          { name: "OpenSearch", note: "arama ve gözlemlenebilirlik" },
          { name: "S3 · DynamoDB", note: "AWS servisleri" },
        ],
      },
      {
        title: "Platform ve operasyon",
        badge: "cloud",
        items: [
          { name: "AWS", note: "ECS · Lambda · RDS" },
          { name: "Docker", note: "konteynerli dağıtımlar" },
          { name: "Kubernetes", note: "Helm · Kustomize" },
          { name: "Terraform", note: "kod olarak altyapı" },
          { name: "GitHub Actions", note: "CI/CD pipeline'ları" },
          { name: "Grafana · OpenTelemetry", note: "izleme ve tracing" },
        ],
      },
    ],
    alsoLabel: "Ayrıca",
    methods: [
      "REST",
      "gRPC",
      "OpenAPI",
      "Olay güdümlü",
      "DDD-lite",
      "Hexagonal",
      "CI/CD",
      "SLO / SLI",
      "PR incelemeleri",
      "RFC yazımı",
    ],
  },
  experience: {
    eyebrow: "03 / Deneyim",
    heading: "Nerelerde çalıştım.",
    items: {
      sfc: {
        period: "Mar 2024 — Eki 2025",
        location: "Münih",
        role: "Yazılım Mühendisi",
        companyNote: "enerji teknolojisi, IoT",
        description:
          "Veri mühendisliği ekibinin bir parçası olarak EFOY Cloud platformuna katkıda bulundum. Spring Boot ile Kotlin mikroservisleri ve RESTful servisler tasarlayıp geliştirdim; konteynerleştirilmiş iş yüklerini Docker ile Azure üzerinde devreye aldım.",
      },
      autodeals: {
        period: "Ağu 2023 — Mar 2024",
        location: "Münih",
        role: "Yazılım Mühendisi",
        companyNote: "otomotiv pazaryeri",
        description:
          "Platformu kuruluş aşamasından canlıya geçişine kadar destekledim; yazılım süreçlerini yönettim ve geliştirme yaşam döngüsünün tamamında sürekli iyileştirmeye katkı sağladım.",
      },
      viennalife: {
        period: "Eyl 2022 — Ağu 2023",
        location: "İstanbul",
        role: "Yazılım Mühendisi",
        companyNote: "Vienna Insurance Group",
        description:
          "Satış, poliçe yönetimi ve operasyonel iş akışlarını kapsayan kurumsal sigorta platformları için Java mikroservisleri geliştirdim ve bakımını üstlendim. Jenkins CI/CD ve Kubernetes ile dağıtım güvenilirliğini artırdım; Spring Boot ve React ile arka ofis araçları geliştirdim.",
      },
      pia: {
        period: "Oca 2022 — Eyl 2022",
        location: "İstanbul",
        role: "Yazılım Mühendisi",
        companyNote: "People in Action",
        description:
          "Vodafone Türkiye hata çözümleme ekibinde Java/Spring backend servislerinde hata ayıklama yaptım. Vodafone Arnavutluk projesinde SQL tabanlı veri taşıma kuralları oluşturdum ve verilerin doğru, tutarlı aktarımını sağlamak için AWS servislerini kullandım.",
      },
      pyz: {
        period: "Ağu 2021 — Oca 2022",
        location: "İstanbul",
        role: "Yazılım Geliştirici",
        companyNote: "tasarım stüdyosu",
        description:
          "Şirket web sitesini tasarlayıp yönettim, frontend geliştirmeye destek verdim ve elektrikli scooter sistemi için donanım ve yazılım süreçlerine yardımcı oldum.",
      },
    },
  },
  contact: {
    eyebrow: "04 / İletişim",
    headingLine1: "İletişime geçin.",
    headingLine2: "Her mesaja yanıt veririm.",
    body: "Münih, Berlin veya Avrupa içinde uzaktan çalışma imkânı sunan backend ve platform mühendisliği rolleriyle ilgileniyorum. Ayrıca açık kaynak iş birliklerine, kişisel projelere ve uzun vadeli müşteri ya da proje bazlı mühendislik işlerine açığım.",
    linkLabels: {
      email: "E-posta",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Özgeçmiş",
    },
    form: {
      heading: "Mesaj gönderin",
      nameLabel: "Ad",
      namePlaceholder: "Adınız",
      emailLabel: "E-posta",
      emailPlaceholder: "ad@sirket.com",
      subjectLabel: "Konu",
      subjects: [
        "İşe alım / rol fırsatı",
        "Sözleşmeli veya proje bazlı çalışma",
        "Uzun vadeli müşteri veya danışmanlık",
        "Açık kaynak iş birliği",
        "Kişisel proje",
        "Diğer",
      ],
      messageLabel: "Mesaj",
      messagePlaceholder:
        "Görüşmek istediğiniz projeyi, rolü veya fikri kısaca anlatın.",
      privacyNote: "Aktarımda şifreli · Takip yok",
      submit: "Mesajı gönder",
      sending: "Gönderiliyor…",
      sent: "Gönderildi ✓",
      success: "// mesaj sıraya alındı — 48 saat içinde yanıtlarım.",
      error: "// bir sorun oluştu — lütfen tekrar deneyin.",
    },
  },
  footer: {
    copyright: "© 2026 Mert Incesu — Tüm hakları saklıdır.",
    backToTop: "Başa dön ↑",
  },
};

export default tr;
