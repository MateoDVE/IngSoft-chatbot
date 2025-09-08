const dict = {
  es: {
    hello: (n) => `Hola, ${n}`,
    morning: "Buenos días",
    afternoon: "Buenas tardes",
    evening: "Buenas noches",
    adult_f: "Sra.",
    adult_m: "Sr.",
    young_f: "señorita",
    young_m: "joven",
  },
  en: {
    hello: (n) => `Hello, ${n}`,
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    adult_f: "Ms.",
    adult_m: "Mr.",
    young_f: "Miss",
    young_m: "young man",
  },
};

export function nombre(name, lang = "es") {
  const t = dict[lang] ?? dict.es;
  return t.hello((name ?? "").trim());
}

export function obtenerSaludo(hora, lang = "es") {
  const t = dict[lang] ?? dict.es;
  if (hora >= 5 && hora < 12) return t.morning;
  if (hora >= 12 && hora < 18) return t.afternoon;
  return t.evening;
}

export function saludoPorGeneroEdad(saludo, genero, edad, lang = "es") {
  const t = dict[lang] ?? dict.es;
  const isAdult = Number(edad) > 30;
  if (isAdult) {
    if (genero === "femenino") return `${saludo} ${t.adult_f}`;
    return `${saludo} ${t.adult_m}`;
  }
  if (genero === "femenino") return `${saludo} ${t.young_f}`;
  return `${saludo} ${t.young_m}`;
}

// Función de alto nivel para armar todo en una sola llamada
export function buildGreeting({ name, genero, edad, hora, lang = "es" }) {
  const s = obtenerSaludo(hora, lang);
  const s2 = saludoPorGeneroEdad(s, genero, edad, lang);
  return `${s2} ${nombre(name, lang)}`;
}

// Default export (compat con pruebas antiguas ES que esperan "Hola, X")
export default function nombreDefault(a) {
  return nombre(a, "es");
}