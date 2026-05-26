import type { Preview, Decorator } from '@storybook/react-vite'
import '../src/tokens/index.css'
import '../src/themes/index.css'

const withTheme: Decorator = (Story, context) => {
  document.documentElement.setAttribute('data-theme', context.globals['theme'] ?? 'light')
  return Story()
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Component theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'error',
    },
  },
}

export default preview
