const english = {
  "name": "english",
  "langType": "english",
  "navbar": {
    "home": "Prakash Acharya",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "about": "About",
  }
}
const spanish = {
  "name": "spanish",
  "langType": 'español',
  "navbar": {
    "home": "Prakash Acharya",
    "portfolio": "Portafolio",
    "contact": "Contacto",
    "about": "Acerca de",
  }
}

const nepali = {
  "name": "nepali",
  "langType": 'नेपाली',
  "navbar": {
    "home": "प्रकाश आचार्य",
    "portfolio": "पोर्टफोलियो",
    "contact": "सम्पर्क",
    "about": "मेरो बारेमा",
  }
}

export const lang = [english, nepali, spanish];
export const langType = lang.map(a => a.name);
export const langTypeSelection = lang.map((a) => {
  return {
    name: a.name,
    langType: a.langType
  }
})
