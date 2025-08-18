import { ref, computed } from 'vue'
import enTranslations from '@/locales/en.json'
import frTranslations from '@/locales/fr.json'

const currentLanguage = ref(localStorage.getItem('language') || 'en')

const translations = {
  en: enTranslations,
  fr: frTranslations
}

export function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }
    
    return value || key
  }

  const currentLang = computed(() => currentLanguage.value)

  return {
    currentLanguage: currentLang,
    setLanguage,
    t
  }
}
