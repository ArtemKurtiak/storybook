import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: {action: 'clicked'},
        variant: {
            options: ['primary', 'danger', 'success', 'warning'],
            control: {type: 'radio'}
        }
    }
}

const Template = args => <Button {...args} />

export const UIButton = Template.bind({});
UIButton.args = {
    text: 'Primary button',
    variant: 'primary'
}
