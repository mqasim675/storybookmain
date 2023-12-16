import { IconButton } from './IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
    iconName: { control: 'text' },
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

export const Primary = {
  args: {
    iconName: 'icon-name',
    label: 'Primary Button',
    primary: true,
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    iconName: 'icon-name',
    label: 'Secondary Button',
    primary: false,
    size: 'medium',
  },
};

export const Large = {
  args: {
    iconName: 'icon-name',
    label: 'Large Button',
    primary: true,
    size: 'large',
  },
};

export const Small = {
  args: {
    iconName: 'icon-name',
    label: 'Small Button',
    primary: false,
    size: 'small',
  },
};
