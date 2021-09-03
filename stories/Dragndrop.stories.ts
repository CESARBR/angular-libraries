import { Story, Meta } from '@storybook/angular/types-6-0';
import { action, actions } from '@storybook/addon-actions';
import { NgDragndropInput } from 'projects/lib-dragndrop/src/public-api';

const modules = {
    imports: [
        NgDragndropInput,
    ],
};

export default {
    title: 'Drag-n-drop Directive',
    //argTypes: argTypes
    argTypes: { 
        fileDropped: { action: 'file dropped' } 
    },
   /* parameters: {
        actions: {
          handles: ['fileDropped', 'div'],
        },
    },*/
} as Meta;

const Template: Story = (args) => ({
    moduleMetadata: modules,
    template: `
        <div dragndrop">
            <button
            class="upload-button">Upload Documents</button>
        </div>
    `
})

export const BasicUsage = Template.bind({});