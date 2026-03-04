const path = require('path')
const colors = require('./tokens/colors')

module.exports = {
  colors,
  logos: {
    fieldflowLabs: {
      logo: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-logo.svg'),
      logoPng: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-logo.png'),
      icon: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-icon.svg'),
      iconPng: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-icon.png'),
      iconWhite: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-icon-white.svg'),
      favicon: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-favicon.svg'),
      faviconPng: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-favicon.png'),
      iconCircle: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-icon-circle.svg'),
      iconCircleWhite: path.resolve(__dirname, 'logos/fieldflow-labs/fieldflow-labs-icon-circle-white.svg'),
    },
    fieldflow: {
      logo: path.resolve(__dirname, 'logos/fieldflow/fieldflow-logo.svg'),
      icon: path.resolve(__dirname, 'logos/fieldflow/fieldflow-icon.svg'),
      iconWhite: path.resolve(__dirname, 'logos/fieldflow/fieldflow-icon-white.svg'),
      iconCircle: path.resolve(__dirname, 'logos/fieldflow/fieldflow-icon-circle.svg'),
      iconCircleWhite: path.resolve(__dirname, 'logos/fieldflow/fieldflow-icon-circle-white.svg'),
      favicon: path.resolve(__dirname, 'logos/fieldflow/fieldflow-favicon.svg'),
      faviconPng: path.resolve(__dirname, 'logos/fieldflow/fieldflow-favicon.png'),
    },
    fieldflowSync: {
      logo: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-logo.svg'),
      logoPng: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-logo.png'),
      icon: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-icon.svg'),
      iconPng: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-icon.png'),
      iconWhite: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-icon-white.svg'),
      favicon: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-favicon.svg'),
      faviconPng: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-favicon.png'),
      iconCircle: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-circle.svg'),
      iconCircleWhite: path.resolve(__dirname, 'logos/fieldflow-sync/fieldflow-sync-circle-white.svg'),
    },
  },
}
