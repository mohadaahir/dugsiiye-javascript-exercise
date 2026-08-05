const fromLanguage = document.querySelector('#fromLanguage');
const toLanguage = document.querySelector('#toLanguage');
const inputText = document.querySelector('#inputText');
const translateBtn = document.querySelector('#translateBtn');
const outputText = document.querySelector('#outputText');

const API_KEY = 'YOUR_ROTATED_KEY_HERE'; // rotate this on RapidAPI, never commit real keys

// Fallback list in case the languages endpoint fails
const FALLBACK_LANGUAGES = {
  en: 'English', es: 'Spanish', fr: 'French', de: 'German',
  it: 'Italian', pt: 'Portuguese', ru: 'Russian', zh: 'Chinese', ar: 'Arabic'
};

async function loadLanguages() {
  const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const result = await response.json();
    // Typical shape: { translation: { en: { name: "English", ... }, ... } }
    const languages = result?.translation;

    if (!languages) throw new Error('Unexpected response shape');

    populateDropdowns(languages, 'en', 'es');
  } catch (error) {
    console.error('Falling back to static language list:', error);
    populateDropdowns(
      Object.fromEntries(Object.entries(FALLBACK_LANGUAGES).map(([code, name]) => [code, { name }])),
      'en',
      'es'
    );
  }
}

function populateDropdowns(languages, defaultFrom, defaultTo) {
  const entries = Object.entries(languages).sort((a, b) => a[1].name.localeCompare(b[1].name));

  for (const [code, info] of entries) {
    const option1 = new Option(info.name, code);
    const option2 = new Option(info.name, code);
    fromLanguage.add(option1);
    toLanguage.add(option2);
  }

  fromLanguage.value = defaultFrom;
  toLanguage.value = defaultTo;
}

translateBtn.addEventListener('click', async () => {
  const text = inputText.value.trim();

  if (!text) {
    outputText.textContent = 'Please enter some text to translate.';
    return;
  }

  const from = fromLanguage.value;
  const to = toLanguage.value;

  outputText.textContent = 'Translating...';
  translateBtn.disabled = true;

  const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${to}&from=${from}&textType=plain`;

  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([{ text }])
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const result = await response.json();
    const translated = result?.[0]?.translations?.[0]?.text;

    outputText.textContent = translated || 'No translation returned.';
  } catch (error) {
    console.error(error);
    outputText.textContent = 'Something went wrong. Please try again.';
  } finally {
    translateBtn.disabled = false;
  }
});

// Kick things off
loadLanguages();