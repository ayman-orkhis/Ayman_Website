import { ref, watch } from 'vue'

const isDarkMode = ref(false)

// Initialize dark mode from localStorage or system preference
const initializeDarkMode = () => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) {
    isDarkMode.value = JSON.parse(savedMode)
  } else {
    // Check system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Apply initial theme
  updateTheme()
}

// Update theme classes and localStorage
const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark-mode')
  } else {
    document.documentElement.classList.remove('dark')
    document.body.classList.remove('dark-mode')
  }
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value))
}

// Watch for changes and update theme
watch(isDarkMode, updateTheme)

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    isDarkMode,
    toggleDarkMode,
    initializeDarkMode
  }
}
