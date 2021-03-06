import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/Button';
import Icon from '../src/Icon';

const stories = storiesOf('Components|Button', module);

stories.addParameters({
  info: {
    text: `There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.`
  }
});

stories.add('Default', () => (
  <div>
    <Button waves="light" style={{ marginRight: '5px' }}>
      button
    </Button>
    <Button waves="light" style={{ marginRight: '5px' }}>
      button<Icon left>cloud</Icon>
    </Button>
    <Button waves="light">
      button<Icon right>cloud</Icon>
    </Button>
  </div>
));

stories.add('Floating', () => (
  <Button floating large className="red" waves="light" icon="add" />
));

stories.add('Flat', () => (
  <Button flat waves="light">
    Button
  </Button>
));

stories.add('Submit', () => (
  <Button type="submit" waves="light">
    Submit<Icon right>send</Icon>
  </Button>
));

stories.add('Large', () => (
  <div>
    <Button node="a" waves="light" large style={{ marginRight: '5px' }}>
      Button
    </Button>
    <Button node="a" waves="light" large style={{ marginRight: '5px' }}>
      Button<Icon left>cloud</Icon>
    </Button>
    <Button node="a" waves="light" large>
      Button<Icon right>cloud</Icon>
    </Button>
  </div>
));

stories.add('Small', () => (
  <div>
    <Button node="a" waves="light" small style={{ marginRight: '5px' }}>
      Button
    </Button>
    <Button node="a" waves="light" small style={{ marginRight: '5px' }}>
      Button<Icon left>cloud</Icon>
    </Button>
    <Button node="a" waves="light" small>
      Button<Icon right>cloud</Icon>
    </Button>
  </div>
));

stories.add('Disabled', () => (
  <div>
    <Button large disabled style={{ marginRight: '5px' }}>
      Button
    </Button>
    <Button disabled style={{ marginRight: '5px' }}>
      Button
    </Button>
    <Button flat disabled style={{ marginRight: '5px' }}>
      Button
    </Button>
    <Button floating disabled>
      <Icon>add</Icon>
    </Button>
  </div>
));

stories.add('Link', () => (
  <Button waves="light" node="a" href="http://react-materialize.github.io/">
    Open Me In New Tab
  </Button>
));

const storiesFab = storiesOf('Components|FAB', module);
const children = [
  <Button key="1" floating icon="insert_chart" className="red" />,
  <Button key="2" floating icon="format_quote" className="yellow darken-1" />,
  <Button key="3" floating icon="publish" className="green" />,
  <Button key="4" floating icon="attach_file" className="blue" />
];
const props = {
  floating: true,
  fab: true,
  icon: 'edit',
  className: 'red',
  large: true
};

storiesFab.add('Top', () => <Button {...props}>{children}</Button>);

storiesFab.add('Left', () => (
  <Button {...props} fab={{ direction: 'left' }}>
    {children}
  </Button>
));

storiesFab.add('Right', () => (
  <Button {...props} fab={{ direction: 'right' }} style={{ left: '23px' }}>
    {children}
  </Button>
));

storiesFab.add('Bottom', () => (
  <Button {...props} fab={{ direction: 'bottom' }} style={{ top: '50px' }}>
    {children}
  </Button>
));
