import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";


export default {
    title: 'AddItemForm Stories',
    component: AddItemForm
}

export const AddItemFormBaseExample = (props: any) => {
    return (<AddItemForm
        addItem={action('Button inside from clicked')}
    />)
}

export const AddItemFormDisabledExample = (props: any) => {
    return (<AddItemForm
        disabled={true}
        addItem={action('Button inside from clicked')}
    />)
}