export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  available: boolean;
}

export const CATEGORIES = [
  "Developer",
  "Teks",
  "Konverter",
  "Kalkulator",
  "Keamanan",
  "Utilitas",
] as const;

export const TOOLS: Tool[] = [
  // Developer
  { slug: "json-formatter", name: "JSON Formatter",
    description: "Format & validasi JSON biar rapi",
    category: "Developer", available: true },
  { slug: "base64", name: "Base64 Encode/Decode",
    description: "Encode & decode teks ke Base64",
    category: "Developer", available: true },
  { slug: "uuid-generator", name: "UUID Generator",
    description: "Buat ID unik format UUID",
    category: "Developer", available: false },
  { slug: "hash-generator", name: "Hash Generator",
    description: "Generate hash MD5, SHA-256, SHA-512",
    category: "Developer", available: false },
  { slug: "url-encoder", name: "URL Encode/Decode",
    description: "Encode & decode URL",
    category: "Developer", available: false },

  // Teks
  { slug: "word-counter", name: "Penghitung Kata",
    description: "Hitung kata, huruf, dan kalimat",
    category: "Teks", available: true },
  { slug: "case-converter", name: "Konverter Huruf",
    description: "Ubah ke UPPER, lower, Title Case",
    category: "Teks", available: false },
  { slug: "text-reverser", name: "Pembalik Teks",
    description: "Balik urutan teks",
    category: "Teks", available: false },

  // Konverter
  { slug: "temperature", name: "Konverter Suhu",
    description: "Celsius, Fahrenheit, Kelvin",
    category: "Konverter", available: false },
  { slug: "length", name: "Konverter Panjang",
    description: "Meter, kaki, inci, mil",
    category: "Konverter", available: false },
  { slug: "weight", name: "Konverter Berat",
    description: "Kg, gram, pon, ons",
    category: "Konverter", available: false },

  // Kalkulator
  { slug: "bmi", name: "Kalkulator BMI",
    description: "Hitung indeks massa tubuh",
    category: "Kalkulator", available: false },
  { slug: "percentage", name: "Kalkulator Persen",
    description: "Hitung persentase dengan mudah",
    category: "Kalkulator", available: false },
  { slug: "age", name: "Kalkulator Umur",
    description: "Hitung umur dari tanggal lahir",
    category: "Kalkulator", available: false },

  // Keamanan
  { slug: "password-generator", name: "Generator Password",
    description: "Buat password kuat dan acak",
    category: "Keamanan", available: false },
  { slug: "qr-generator", name: "Generator QR Code",
    description: "Buat QR code dari teks atau URL",
    category: "Keamanan", available: false },
  { slug: "password-strength", name: "Cek Kekuatan Password",
    description: "Ukur seberapa kuat password",
    category: "Keamanan", available: false },

  // Utilitas
  { slug: "stopwatch", name: "Stopwatch",
    description: "Stopwatch dengan fitur lap",
    category: "Utilitas", available: false },
  { slug: "timer", name: "Timer Hitung Mundur",
    description: "Timer hitung mundur",
    category: "Utilitas", available: false },
  { slug: "random-number", name: "Angka Acak",
    description: "Generate angka acak dalam range",
    category: "Utilitas", available: false },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return TOOLS.filter((t) => t.category === category);
}
