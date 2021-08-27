import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'projects/lib-tooltip/src/public-api';

const modules = {
    imports: [
        CommonModule, TooltipModule,
    ],
  };

const argTypes = {
    tooltip: {
      name: 'tooltip',
      type: { name: 'string', required: true },
      description: 'Text to be displayed',
      table: {
        type: { summary: 'string' },
      },
      control: 'text'
    },
    placement: {
        name: 'placement',
        type: { name: 'string', required: false },
        defaultValue: 'left',
        description: 'Tooltip orientation',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'left' },
        },
        options: ['left','top','bottom','right'],
        control: 'select'
    },
    offset: {
        name: 'offset',
        type: { name: 'number', required: false },
        defaultValue: 8,
        description: 'Margin between the tooltip and it\'s host.',
        table: {
          type: { summary: 'number' },
          defaultValue: { summary: 8 },
        },
        control: 'number'
    },
    leftOffset: {
        name: 'leftOffset',
        type: { name: 'number', required: false },
        defaultValue: 0,
        description: 'Horizontal tooltip position, positive numbers will push it to the left, while negative numbers will push it to the right',
        table: {
          type: { summary: 'number' },
          defaultValue: { summary: 0 },
        },
        control: 'number'
    },
    topOffset: {
        name: 'topOffset',
        type: { name: 'number', required: false },
        defaultValue: 0,
        description: 'Vertical tooltip position, positive numbers will push it down, while negative numbers will push it up.',
        table: {
          type: { summary: 'number' },
          defaultValue: { summary: 0 },
        },
        control: 'number'
    },
    wordBreak: {
        name: 'wordBreak',
        type: { name: 'string', required: false },
        defaultValue: 'none',
        description: 'Allows for breaking lines withing the same word.',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'none' },
        },
        control: 'text'
    },
    textAlign: {
        name: 'textAlign',
        type: { name: 'string', required: false },
        defaultValue: 'center',
        description: 'Sets the horizontal alignment of the tooltip content inside it\'s box',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'center' },
        },
        options: ['start','end','left','right','center','justify','match-parent'],
        control: 'select'
    },
    showOnlyIfOverflowEllipsis: {
        name: 'showOnlyIfOverflowEllipsis',
        type: { name: 'boolean', required: false },
        defaultValue: false,
        description: 'Only shows the tooltip if the text is overflowed (not entirely showing up, with \'...\').',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: false },
        },
        control: 'boolean'
    }
  }

export default {
  title: 'Tooltip Directive',
  argTypes: argTypes
} as Meta;

const Template: Story = (args) => ({
    moduleMetadata: modules,
    template: `
        <button 
        tooltip="${args.tooltip}" 
        placement="${args.placement}"
        offset="${args.offset}"
        leftOffset="${args.leftOffset}"
        topOffset="${args.topOffset}"
        wordBreak="${args.wordBreak}"
        textAlign="${args.textAlign}"
        >
            Tooltip Host
        </button>
    `,
})

export const BasicUsage = Template.bind({});

BasicUsage.args = {
    tooltip: 'tooltip',
    placement: 'top'
}