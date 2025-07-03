/* =============================================
   Project Portfolio Data Template
   Replace sample values with your real projects
============================================= */

export const cardsData = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    tags: "HTML5, CSS3, JavaScript",
    description: "Bu proje, kişisel yazılım projelerini profesyonel ve erişilebilir bir şekilde sergilemek amacıyla geliştirilen dinamik bir portföy sitesidir. Kullanıcı dostu arayüzüyle ziyaretçiler, projeleri kategori bazlı filtreleyebilir, detaylı modal önizlemelerle inceleyebilir ve kaynak kodlarına hızlıca erişebilir. Platform; gelişmiş CSS animasyonları, responsive grid yapısı, erişilebilirlik desteği ve mobil uyumluluk özellikleriyle öne çıkar. Ayrıca modern stil ve özelleştirilebilir JavaScript altyapısıyla sürdürülebilir bir deneyim sunar.",
    category: "frontend",
    images: [
      "./assets/images/project1-portfolio-website/image1.png",
      "./assets/images/project1-portfolio-website/image2.png",
      "./assets/images/project1-portfolio-website/image3.png",
      "./assets/images/project1-portfolio-website/image4.png",
      "./assets/images/project1-portfolio-website/image5.png",
      "./assets/images/project1-portfolio-website/image6.png",
      "./assets/images/project1-portfolio-website/image7.png",
      "./assets/images/project1-portfolio-website/image8.png",
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/OmerOztprk/portfolio-website", icon: "fab fa-github" },
    ],
  },
  {
    title: "Admin Panel Dashboard",
    slug: "admin-panel-dashboard",
    tags: "Angular, Node.js, Express.js, MongoDB",
    description: "Bu proje, işletmelere yapay zekâ destekli chatbot hizmeti sunmak amacıyla geliştirilen kapsamlı bir yönetim panelidir. Kullanıcı, rol, müşteri ve kategori gibi temel işlevlerin yönetimini sağlar ve AI destekli chatbot hizmetlerinin merkezi şekilde yönetilmesine olanak tanır. Platform, gerçek zamanlı performans takibi, detaylı raporlama, güvenli denetim kaydı ve Excel import/export desteğiyle etkili bir veri yönetimi sunar. Ayrıca çok kullanıcılı yapısı sayesinde, ekiplerin eş zamanlı çalışmasını destekler.",
    category: "fullstack, ai",
    images: [
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/OmerOztprk/admin-panel-dashboard", icon: "fab fa-github" },
    ],
  },
  {
    title: "Realtime Sts Project",
    slug: "realtime-sts-project",
    tags: "Node.js, Express.js, WebRTC, OpenAI API",
    description: "Bu proje, OpenAI'nin GPT-4o Realtime API’si kullanılarak geliştirilen, gerçek zamanlı sesli etkileşim sunan bir chatbot sistemidir. Kullanıcı, push-to-talk butonuyla sesli komut verebilir; model yanıtlarını anlık olarak sesli ve metin formatında alabilir. Sistem; fonksiyon çağrıları, değişken tanımı ve dinamik talimat güncellemeleri gibi gelişmiş özellikler sunar. Hava durumu ve döviz kuru gibi sorgular API üzerinden çekilir. Modern arayüz ve WebRTC altyapısıyla hızlı ve etkileşimli bir deneyim sağlar.",
    category: "fullstack, ai",
    images: [
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/OmerOztprk/realtime-sts-project", icon: "fab fa-github" }
    ],
  },
  {
    title: "Image Generator",
    slug: "image-generator",
    tags: "Node.js, Express.js, OpenAI API",
    description: "Bu proje, GPT-4o, GPT-4 Vision ve Whisper modelleri kullanılarak geliştirilen, gerçek zamanlı görsel oluşturma ve medya analizi sunan etkileşimli bir uygulamadır. Kullanıcılar detaylı prompt’larla AI görselleri oluşturabilir, görsel ve video dosyalarını analiz ettirerek içerik tabanlı açıklamalar elde edebilir. Sistem; sürükle-bırak desteği, aşamalı görsel oluşturma, transkripsiyon tabanlı video analizi ve görsel indirme gibi özelliklerle modern ve akıcı bir deneyim sunar.",
    category: "fullstack, ai",
    images: [
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/OmerOztprk/image-generator", icon: "fab fa-github" }
    ]
  },
  {
    title: "Animal Danger Detector",
    slug: "animal-danger-detector",
    tags: "Python, TensorFlow",
    description: "Bu proje, YAMNet ve Whisper modelleri kullanılarak geliştirilen, gerçek zamanlı ses analiziyle çevresel tehlikeleri algılayan bir güvenlik izleme sistemidir. 16kHz ses dosyalarını analiz ederek tehlikeli sesleri sınıflandırır, tehlike seviyelerine göre anlık alarm tetikler ve detaylı analiz raporları oluşturur. Sistem; eşik değerlerine dayalı alarm mantığı, kategorize edilmiş tehdit seviyeleri, sesli ve görsel uyarı sistemi ile entegre çalışır. JSON ve CSV formatında raporlama ile izlenebilirlik sağlar.",
    category: "backend, ai",
    images: [
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/OmerOztprk/animal-danger-detector", icon: "fab fa-github" }
    ]
  }
];