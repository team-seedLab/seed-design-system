// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { config } from '@repo/eslint-config/react-internal';
import storybook from 'eslint-plugin-storybook';

export default [...config, ...storybook.configs['flat/recommended']];
