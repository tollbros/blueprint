import Icon from './Icon';
import iconData from '../../icons/iconData';

const ICON_NAMES = Object.keys(iconData).sort();

export default {
  title: 'Components/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'utility-search',
  alt: 'Search icon',
  size: 24,
};

export const Gallery = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '16px',
    }}
  >
    {ICON_NAMES.map((iconName) => (
      <div
        key={iconName}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Icon name={iconName} size={32} alt={`${iconName} icon`} />
        <span style={{ fontSize: '12px', textAlign: 'center' }}>{iconName}</span>
      </div>
    ))}
  </div>
);
