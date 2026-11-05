const countryCodes = {
  en: "GB",
  tr: "TR",
  ru: "RU",
  de: "DE"
};

const translations = {
  en: {
    navAbout: "The hotel", navExperience: "Experience", navRooms: "Rooms", navLocation: "Location", book: "Book now ↗",
    heroLabel: "YOUR MEDITERRANEAN ESCAPE", heroTitle: "A slower pace.<br><em>A brighter blue.</em>", heroText: "Discover the easy rhythm of the Mediterranean, right on the coast of Kemer.", discover: "Discover Golden Lotus", heroFoot: "BEACHFRONT STAY · KEMER, ANTALYA",
    aboutLabel: "WELCOME TO THE COAST", aboutTitle: "Your place to<br><em>unwind.</em>", aboutText: "Set on the seafront in the heart of Kemer, Golden Lotus is a relaxed base for days shaped by the sea, warm hospitality and the natural beauty of the Turkish Riviera. Take a swim, slow down and enjoy a holiday at your own pace.", aboutLink: "Explore the experience",
    experienceLabel: "THE BEST OF A COASTAL HOLIDAY", experienceTitle: "Simple pleasures.<br><em>Beautiful moments.</em>", experienceText: "From the first morning swim to a quiet afternoon in the spa, make space for the moments that matter.", featureBeach: "By the sea", featureBeachText: "Sunshine, sea air and time to do nothing at all.", featurePool: "Poolside days", featurePoolText: "A refreshing pause under the sun.", featureSpa: "Time to recharge", featureSpaText: "Slow down and make room for wellbeing.",
    stayLabel: "ROOMS & COMFORT", stayTitle: "Settle in.<br><em>Feel at ease.</em>", stayText: "A welcoming place to return to after a day by the water. Explore the rooms, choose your dates and find the stay that suits you.", checkRooms: "View rooms & availability", stayNote: "ALL-INCLUSIVE HOLIDAY",
    wellnessLabel: "A MOMENT FOR YOURSELF", wellnessTitle: "Slow down.<br><em>Feel renewed.</em>", wellnessText: "Enjoy a moment of calm in the spa with a traditional Turkish hammam, sauna and relaxing treatments.", wellnessLink: "Discover spa & wellness",
    locationLabel: "THE TURQUOISE COAST", locationTitle: "Kemer, close<br>to <em>the sea.</em>", directions: "Get directions",
    ctaLabel: "YOUR MEDITERRANEAN MOMENT", ctaTitle: "Let the coast<br><em>set the pace.</em>", ctaButton: "Book your stay", backTop: "BACK TO TOP ↑",
    modalSub: "RESERVATION", modalTitle: "Book your stay", checkInLabel: "Check-in", checkOutLabel: "Check-out", guestsLabel: "Guests", roomTypeLabel: "Room type", nameLabel: "Full name", emailLabel: "Email", phoneLabel: "Phone / WhatsApp", submitBooking: "Confirm Request",
    guest1: "1 Adult", guest2: "2 Adults", guest3: "3 Adults", guestFamily: "Family (2 Adults + 1 Child)", roomStandard: "Standard Sea View", roomLand: "Standard Land View", roomSuite: "Corner Suite", bookingSuccess: "Thank you for your reservation request! We will contact you shortly."
  },
  tr: {
    navAbout: "Otel", navExperience: "Deneyim", navRooms: "Odalar", navLocation: "Konum", book: "Rezervasyon ↗",
    heroLabel: "AKDENİZ'DE TATİLİNİZ", heroTitle: "Daha sakin bir tempo.<br><em>Daha mavisi mümkün.</em>", heroText: "Kemer sahilinde Akdeniz'in huzurlu ritmini keşfedin.", discover: "Golden Lotus'u keşfedin", heroFoot: "DENİZE SIFIR · KEMER, ANTALYA",
    aboutLabel: "SAHİLE HOŞ GELDİNİZ", aboutTitle: "Dinlenmek için<br><em>size özel bir yer.</em>", aboutText: "Kemer'in kalbinde denize sıfır konumlanan Golden Lotus; deniz, sıcak misafirperverlik ve Türk Rivierası'nın doğal güzelliğiyle şekillenen huzurlu bir tatil sunar. Yüzün, yavaşlayın ve tatilin keyfini kendi ritminizde çıkarın.", aboutLink: "Deneyimi keşfedin",
    experienceLabel: "SAHİL TATİLİNİN EN GÜZEL HALİ", experienceTitle: "Basit keyifler.<br><em>Güzel anlar.</em>", experienceText: "Sabahın ilk yüzüşünden spa'da sakin bir öğleden sonraya kadar, size iyi gelen anlara zaman ayırın.", featureBeach: "Deniz kenarında", featureBeachText: "Güneş, deniz havası ve hiçbir şey yapmama özgürlüğü.", featurePool: "Havuz keyfi", featurePoolText: "Güneşin altında serinletici bir mola.", featureSpa: "Yenilenme zamanı", featureSpaText: "Yavaşlayın ve kendinize zaman ayırın.",
    stayLabel: "ODALAR & KONFOR", stayTitle: "Yerleşin.<br><em>Rahatlayın.</em>", stayText: "Su kenarında geçen bir günün ardından dönmek isteyeceğiniz sıcak bir ortam. Odaları inceleyin, tarihlerinizi seçin ve size uygun konaklamayı bulun.", checkRooms: "Odaları ve müsaitliği görün", stayNote: "HER ŞEY DAHİL TATİL",
    wellnessLabel: "KENDİNİZE ZAMAN AYIRIN", wellnessTitle: "Yavaşlayın.<br><em>Yenilenin.</em>", wellnessText: "Geleneksel Türk hamamı, sauna ve rahatlatıcı bakımlarla spa'da huzurlu bir anın keyfini çıkarın.", wellnessLink: "Spa & wellness'ı keşfedin",
    locationLabel: "TURKUAZ SAHİL", locationTitle: "Kemer'de,<br><em>denizin yanı başında.</em>", directions: "Yol tarifi alın",
    ctaLabel: "AKDENİZ'DE SİZE ÖZEL BİR AN", ctaTitle: "Sahil ritminizi<br><em>belirlesin.</em>", ctaButton: "Konaklamanızı ayırtın", backTop: "BAŞA DÖN ↑",
    modalSub: "REZERVASYON", modalTitle: "Tarihlerinizi Seçin", checkInLabel: "Giriş Tarihi", checkOutLabel: "Çıkış Tarihi", guestsLabel: "Misafir Sayısı", roomTypeLabel: "Oda Tipi", nameLabel: "Ad Soyad", emailLabel: "E-posta", phoneLabel: "Telefon / WhatsApp", submitBooking: "Rezervasyon Talebi Gönder",
    guest1: "1 Yetişkin", guest2: "2 Yetişkin", guest3: "3 Yetişkin", guestFamily: "Aile (2 Yetişkin + 1 Çocuk)", roomStandard: "Standart Deniz Manzaralı", roomLand: "Standart Kara Manzaralı", roomSuite: "Köşe Süit", bookingSuccess: "Rezervasyon talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz."
  },
  ru: {
    navAbout: "Об отеле", navExperience: "Отдых", navRooms: "Номера", navLocation: "Расположение", book: "Бронировать ↗",
    heroLabel: "ВАШ ОТДЫХ НА СРЕДИЗЕМНОМ МОРЕ", heroTitle: "Меньше спешки.<br><em>Больше моря.</em>", heroText: "Откройте для себя неспешный ритм Средиземноморья на побережье Кемера.", discover: "Открыть Golden Lotus", heroFoot: "У МОРЯ · КЕМЕР, АНТАЛЬЯ",
    aboutLabel: "ДОБРО ПОЖАЛОВАТЬ НА ПОБЕРЕЖЬЕ", aboutTitle: "Место, где можно<br><em>отдохнуть.</em>", aboutText: "Golden Lotus расположен у моря в самом сердце Кемера. Здесь вас ждут морской воздух, турецкое гостеприимство и природная красота Турецкой Ривьеры. Купайтесь, замедлитесь и наслаждайтесь отдыхом в собственном ритме.", aboutLink: "Подробнее об отдыхе",
    experienceLabel: "ЛУЧШЕЕ В ПРИБРЕЖНОМ ОТДЫХЕ", experienceTitle: "Простые радости.<br><em>Красивые моменты.</em>", experienceText: "От первого утреннего купания до спокойного часа в спа — находите время для того, что действительно важно.", featureBeach: "У самого моря", featureBeachText: "Солнце, морской воздух и время никуда не спешить.", featurePool: "Дни у бассейна", featurePoolText: "Освежающая пауза под солнцем.", featureSpa: "Время восстановиться", featureSpaText: "Замедлитесь и уделите время себе.",
    stayLabel: "НОМЕРА И КОМФОРТ", stayTitle: "Расположитесь.<br><em>Почувствуйте уют.</em>", stayText: "Приятное место, куда хочется возвращаться после дня у воды. Посмотрите номера, выберите даты и найдите подходящий вариант отдыха.", checkRooms: "Номера и наличие мест", stayNote: "ОТДЫХ ПО СИСТЕМЕ ВСЁ ВКЛЮЧЕНО",
    wellnessLabel: "ВРЕМЯ ДЛЯ СЕБЯ", wellnessTitle: "Замедлитесь.<br><em>Обновитесь.</em>", wellnessText: "Проведите время в спа: традиционный турецкий хаммам, сауна и расслабляющие процедуры.", wellnessLink: "Открыть спа и велнес",
    locationLabel: "БИРЮЗОВОЕ ПОБЕРЕЖЬЕ", locationTitle: "Кемер,<br><em>рядом с морем.</em>", directions: "Построить маршрут",
    ctaLabel: "ВАШ МОМЕНТ НА СРЕДИЗЕМНОМ МОРЕ", ctaTitle: "Пусть побережье<br><em>задаёт ритм.</em>", ctaButton: "Забронировать отдых", backTop: "НАВЕРХ ↑",
    modalSub: "БРОНИРОВАНИЕ", modalTitle: "Забронировать номер", checkInLabel: "Заезд", checkOutLabel: "Выезд", guestsLabel: "Гости", roomTypeLabel: "Тип номера", nameLabel: "Имя и фамилия", emailLabel: "Email", phoneLabel: "Телефон / WhatsApp", submitBooking: "Отправить запрос",
    guest1: "1 Взрослый", guest2: "2 Взрослых", guest3: "3 Взрослых", guestFamily: "Семья (2 Взрослых + 1 Ребенок)", roomStandard: "Стандарт с видом на море", roomLand: "Стандарт с видом на территорию", roomSuite: "Угловой Люкс", bookingSuccess: "Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время."
  },
  de: {
    navAbout: "Das Hotel", navExperience: "Erlebnis", navRooms: "Zimmer", navLocation: "Lage", book: "Jetzt buchen ↗",
    heroLabel: "IHRE AUSZEIT AM MITTELMEER", heroTitle: "Ein ruhigeres Tempo.<br><em>Mehr Meer.</em>", heroText: "Entdecken Sie den entspannten Rhythmus des Mittelmeers an der Küste von Kemer.", discover: "Golden Lotus entdecken", heroFoot: "DIREKT AM MEER · KEMER, ANTALYA",
    aboutLabel: "WILLKOMMEN AN DER KÜSTE", aboutTitle: "Ihr Ort zum<br><em>Entspannen.</em>", aboutText: "Direkt am Meer im Herzen von Kemer ist das Golden Lotus ein entspannter Rückzugsort zwischen Meer, herzlicher Gastfreundschaft und der natürlichen Schönheit der türkischen Riviera. Schwimmen Sie, kommen Sie zur Ruhe und genießen Sie Ihren Urlaub in Ihrem eigenen Tempo.", aboutLink: "Erlebnis entdecken",
    experienceLabel: "DAS SCHÖNSTE AM URLAUB AM MEER", experienceTitle: "Kleine Freuden.<br><em>Schöne Momente.</em>", experienceText: "Vom ersten morgendlichen Bad bis zum ruhigen Nachmittag im Spa – nehmen Sie sich Zeit für die wichtigen Momente.", featureBeach: "Am Meer", featureBeachText: "Sonne, Meeresluft und Zeit zum Nichtstun.", featurePool: "Tage am Pool", featurePoolText: "Eine erfrischende Pause in der Sonne.", featureSpa: "Zeit zum Auftanken", featureSpaText: "Kommen Sie zur Ruhe und gönnen Sie sich Zeit.",
    stayLabel: "ZIMMER & KOMFORT", stayTitle: "Ankommen.<br><em>Wohlfühlen.</em>", stayText: "Ein einladender Ort, an den Sie nach einem Tag am Wasser gerne zurückkehren. Entdecken Sie die Zimmer, wählen Sie Ihre Reisedaten und finden Sie den passenden Aufenthalt.", checkRooms: "Zimmer & Verfügbarkeit", stayNote: "ALL-INCLUSIVE-URLAUB",
    wellnessLabel: "EIN MOMENT NUR FÜR SIE", wellnessTitle: "Kommen Sie zur Ruhe.<br><em>Tanken Sie auf.</em>", wellnessText: "Genießen Sie Ruhe im Spa mit traditionellem türkischem Hamam, Sauna und wohltuenden Anwendungen.", wellnessLink: "Spa & Wellness entdecken",
    locationLabel: "DIE TÜRKISCHEN RIVIERA", locationTitle: "Kemer,<br><em>ganz nah am Meer.</em>", directions: "Route planen",
    ctaLabel: "IHR MOMENT AM MITTELMEER", ctaTitle: "Lassen Sie die Küste<br><em>den Takt angeben.</em>", ctaButton: "Aufenthalt buchen", backTop: "NACH OBEN ↑",
    modalSub: "RESERVIERUNG", modalTitle: "Aufenthalt buchen", checkInLabel: "Anreise", checkOutLabel: "Abreise", guestsLabel: "Gäste", roomTypeLabel: "Zimmertyp", nameLabel: "Vollständiger Name", emailLabel: "E-Mail", phoneLabel: "Telefon / WhatsApp", submitBooking: "Anfrage senden",
    guest1: "1 Erwachsener", guest2: "2 Erwachsene", guest3: "3 Erwachsene", guestFamily: "Familie (2 Erwachsene + 1 Kind)", roomStandard: "Standard Meerblick", roomLand: "Standard Landblick", roomSuite: "Corner Suite", bookingSuccess: "Vielen Dank für Ihre Anfrage! Wir werden uns Kürze bei Ihnen melden."
  }
};

let currentLang = "en";

function applyLanguage(code) {
  const words = translations[code] || translations.en;
  currentLang = code;
  document.documentElement.lang = code;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = words[el.dataset.i18n];
    if (value) el.innerHTML = value;
  });

  // Update Custom Select UI
  document.getElementById("currentFlag").textContent = countryCodes[code] || "GB";
  document.getElementById("currentCode").textContent = code.toUpperCase();
  document.querySelectorAll("#langDropdown li").forEach(li => {
    li.classList.toggle("active", li.dataset.lang === code);
  });

  try { localStorage.setItem("goldenLotusLang", code); } catch (e) {}
}

// Custom Language Selector Events
const langSelect = document.getElementById("langSelect");
const langSelectBtn = document.getElementById("langSelectBtn");

langSelectBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = langSelect.classList.toggle("open");
  langSelectBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#langDropdown li").forEach(li => {
  li.addEventListener("click", () => {
    const code = li.dataset.lang;
    applyLanguage(code);
    langSelect.classList.remove("open");
    langSelectBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", () => {
  langSelect.classList.remove("open");
  langSelectBtn.setAttribute("aria-expanded", "false");
});

// Initial Language Setup
let saved = "en";
try { saved = localStorage.getItem("goldenLotusLang") || "en"; } catch (e) {}
applyLanguage(translations[saved] ? saved : "en");

// Header Scroll state
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile Navigation
const menuBtn = document.querySelector("#menuBtn"), nav = document.querySelector("#nav");
menuBtn.addEventListener("click", () => {
  const opened = menuBtn.classList.toggle("active");
  nav.classList.toggle("open", opened);
  menuBtn.setAttribute("aria-expanded", String(opened));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.classList.remove("active");
  menuBtn.setAttribute("aria-expanded", "false");
}));

// Scroll Reveal Animations
const io = new IntersectionObserver(items => items.forEach(item => {
  if (item.isIntersecting) {
    item.target.classList.add("visible");
    io.unobserve(item.target);
  }
}), { threshold: .12 });
document.querySelectorAll(".about-image,.feature,.stay-image,.wellness-content,.location-top,.map,.final-content").forEach(el => {
  el.classList.add("reveal");
  io.observe(el);
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Modal Functionality
const modal = document.getElementById("bookingModal");
const openBtns = document.querySelectorAll(".open-booking-btn");
const closeBtn = document.getElementById("modalClose");
const backdrop = document.getElementById("modalBackdrop");
const bookingForm = document.getElementById("bookingForm");

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openBtns.forEach(btn => btn.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(translations[currentLang].bookingSuccess || translations.en.bookingSuccess);
  closeModal();
  bookingForm.reset();
});