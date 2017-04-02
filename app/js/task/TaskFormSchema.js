import priority from '../data/priority';
import projects from '../data/projects';
import CONST_FORM from './../form/Constants';

let taskFormSchema = [

    {
        type: 'text',
        name: 'title',
        label: "Название",
        //labelOnly: true,
        placeholder: "Title task..."
    },
    {
        type: 'date',
        name: 'date',
        label: "Дата",
        //labelOnly: true,
        placeholder: "Date task..."
    },
    {
        type: 'select',
        name: 'priority',
        label: "Приоритет",
        //labelOnly: true,
        placeholder: "Priority...",
        options: priority
    },
    {
        type: 'select',
        name: 'project',
        label: "Проект",
        //labelOnly: true,
        placeholder: "Project...",
        options: projects
    },
    {
        type: 'submit',
        value: 'Save',
        id: "submit"
    },
    // {
    //     type: 'link',
    //     value: 'Cancel',
    //     id: 'cancel',
    //     eventName: CONST_FORM.CANCEL
    // },
    // {
    //     type: 'text',
    //     name: 'color',
    //     labelOnly: true,
    //     placeholder: "Color task..."
    // },


];

export default taskFormSchema;
