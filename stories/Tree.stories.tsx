import {Tree, TreeItem} from '../src/Tree';

import type {Meta} from '@storybook/react';

const meta: Meta<typeof Tree> = {
  component: Tree,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => (
  <Tree aria-label="Files" {...args}>
    <TreeItem title="Documents">
      <TreeItem title="Project">
        <TreeItem title="Weekly Report" />
      </TreeItem>
    </TreeItem>
    <TreeItem title="Photos">
      <TreeItem title="Image 1" />
      <TreeItem title="Image 2" />
    </TreeItem>
  </Tree>
);

Example.args = {
  style: { height: '300px' },
  defaultExpandedKeys: ['documents', 'photos', 'project']
};
