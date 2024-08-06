import { Meta, StoryObj } from '@storybook/angular';

import { PagesComponent } from './pages.component';

type ComponentWithCustomControls = PagesComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Pages',
  component: PagesComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Pages` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Pages: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
