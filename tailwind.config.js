<<<<<<< HEAD
/* © Andy Bell - https://github.com/Set-Creative-Studio/cube-boilerplate */

import plugin from 'tailwindcss/plugin';
import postcss from 'postcss';
import postcssJs from 'postcss-js';

import {clampGenerator} from './src/_config/utils/clamp-generator.js';
import {tokensToTailwind} from './src/_config/utils/tokens-to-tailwind.js';

// Raw design tokens
import colorTokens from './src/_data/designTokens/colors.json';
import fontTokens from './src/_data/designTokens/fonts.json';
import spacingTokens from './src/_data/designTokens/spacing.json';
import textSizeTokens from './src/_data/designTokens/textSizes.json';
import textLeadingTokens from './src/_data/designTokens/textLeading.json';
import textWeightTokens from './src/_data/designTokens/textWeights.json';
import viewportTokens from './src/_data/designTokens/viewports.json';
=======
const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

const clampGenerator = require('./src/_assets/css-utils/clamp-generator.js');
const tokensToTailwind = require('./src/_assets/css-utils/tokens-to-tailwind.js');

// Raw design tokens
const colorTokens = require('./src/_assets/design-tokens/colors.json');
const fontTokens = require('./src/_assets/design-tokens/fonts.json');
const spacingTokens = require('./src/_assets/design-tokens/spacing.json');
const textSizeTokens = require('./src/_assets/design-tokens/text-sizes.json');
>>>>>>> db1207a (first commit)

// Process design tokens
const colors = tokensToTailwind(colorTokens.items);
const fontFamily = tokensToTailwind(fontTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
<<<<<<< HEAD
const fontWeight = tokensToTailwind(textWeightTokens.items);
const lineHeight = tokensToTailwind(textLeadingTokens.items);
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

export default {
  content: ['./src/**/*.{html,js,md,njk,liquid,webc}'],
  presets: [],
  theme: {
    screens: {
      ltsm: {max: `${viewportTokens.sm}px`},
      sm: `${viewportTokens.sm}px`,
      md: `${viewportTokens.md}px`,
      navigation: `${viewportTokens.navigation}px`
    },
    colors,
    spacing,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
=======
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

module.exports = {
  content: ['./src/**/*.{html,js,jsx,mdx,njk,twig,vue}'],
  presets: [],
  theme: {
    screens: {
      md: '50em',
      lg: '80em'
    },
    colors,
    spacing,
    fontSize,
    fontFamily,
    fontWeight: {
      normal: 400,
      bold: 700,
      black: 800
    },
>>>>>>> db1207a (first commit)
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    margin: ({theme}) => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    padding: ({theme}) => theme('spacing')
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],

  // Disables Tailwind's reset etc
  corePlugins: {
<<<<<<< HEAD
    preflight: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false
  },

  // Prevents Tailwind's core components
  blocklist: ['container'],

  // Prevents Tailwind from generating that wall of empty custom properties
  experimental: {
    optimizeUniversalDefaults: true
  },

=======
    preflight: false
  },
>>>>>>> db1207a (first commit)
  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({addComponents, config}) {
      let result = '';

      const currentConfig = config();

      const groups = [
        {key: 'colors', prefix: 'color'},
        {key: 'spacing', prefix: 'space'},
        {key: 'fontSize', prefix: 'size'},
<<<<<<< HEAD
        {key: 'lineHeight', prefix: 'leading'},
        {key: 'fontFamily', prefix: 'font'},
        {key: 'fontWeight', prefix: 'font'}
=======
        {key: 'fontFamily', prefix: 'font'}
>>>>>>> db1207a (first commit)
      ];

      groups.forEach(({key, prefix}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });

      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result))
      });
    }),

    // Generates custom utility classes
    plugin(function ({addUtilities, config}) {
      const currentConfig = config();
      const customUtilities = [
        {key: 'spacing', prefix: 'flow-space', property: '--flow-space'},
<<<<<<< HEAD
        {key: 'spacing', prefix: 'region-space', property: '--region-space'},
        {key: 'spacing', prefix: 'gutter', property: '--gutter'}
=======
        {key: 'colors', prefix: 'spot-color', property: '--spot-color'}
>>>>>>> db1207a (first commit)
      ];

      customUtilities.forEach(({key, prefix, property}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          addUtilities({
<<<<<<< HEAD
            [`.${prefix}-${key}`]: postcssJs.objectify(postcss.parse(`${property}: ${group[key]}`))
=======
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            )
>>>>>>> db1207a (first commit)
          });
        });
      });
    })
  ]
};
