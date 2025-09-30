/**
 * Shared constants and styling patterns used across components
 */

// Brand colors
export const BRAND_COLORS = {
  primary: '#63b583',
  primaryLight: '#4a9666',
  primaryDark: '#5aa676',
  secondary: '#61b280',
  gradient: {
    primary: 'from-[#63b583] to-[#4a9666]',
    secondary: 'from-[#61b280] to-[#4a9666]',
    dark: 'from-black to-green-700',
    light: 'from-green-700 to-black',
  },
} as const;

// Common background gradients used across sections
export const BACKGROUND_GRADIENTS = {
  // Base section backgrounds - consistent dark theme
  section: 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950',
  sectionAlt: 'bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900',

  // Radial gradient overlays for depth - subtle brand color accents
  radial: {
    primary: 'bg-[radial-gradient(circle_at_20%_30%,rgba(99,181,131,0.03),transparent_70%)]',
    secondary: 'bg-[radial-gradient(circle_at_80%_70%,rgba(74,150,102,0.02),transparent_70%)]',
    tertiary: 'bg-[radial-gradient(circle_at_50%_50%,rgba(99,181,131,0.02),transparent_80%)]',
    quaternary: 'bg-[radial-gradient(circle_at_30%_20%,rgba(99,181,131,0.025),transparent_75%)]',
  },

  // Hero section specific backgrounds - consistent with base theme
  hero: {
    main: 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950',
    radial1: 'bg-[radial-gradient(circle_at_30%_40%,rgba(99,181,131,0.03),transparent_70%)]',
    radial2: 'bg-[radial-gradient(circle_at_70%_80%,rgba(99,181,131,0.02),transparent_70%)]',
    radial3: 'bg-[radial-gradient(circle_at_20%_80%,rgba(99,181,131,0.02),transparent_80%)]',
    radial4: 'bg-[radial-gradient(circle_at_50%_20%,rgba(99,181,131,0.025),transparent_80%)]',
  },

  // Solutions section backgrounds - consistent with base theme
  solutions: {
    main: 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950',
    radial1: 'bg-[radial-gradient(circle_at_50%_50%,rgba(99,181,131,0.03),transparent_70%)]',
    radial2: 'bg-[radial-gradient(circle_at_20%_80%,rgba(74,150,102,0.02),transparent_70%)]',
  },

  // Contact section backgrounds - consistent with base theme
  contact: {
    main: 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950',
  },

  // Resources section backgrounds - consistent with base theme
  resources: {
    main: 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950',
  },

  // Grid pattern overlays
  grid: 'bg-grid-pattern opacity-[0.02]',
} as const;

// Common styling classes
export const COMMON_STYLES = {
  section: 'py-16 lg:py-24 relative overflow-hidden',
  container: 'container mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
  card: 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300',
  button: {
    primary: `bg-gradient-to-r ${BRAND_COLORS.gradient.primary} hover:from-[#4a9666] hover:to-[#63b583] text-white border-0 shadow-lg hover:shadow-xl hover:shadow-[#63b583]/30 transition-all duration-300 hover:-translate-y-1`,
    secondary: 'bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50',
  },
} as const;

// Animation configurations
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  staggerChildren: {
    container: {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, margin: '-50px' },
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    item: {
      variants: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      },
    },
  },
} as const;
