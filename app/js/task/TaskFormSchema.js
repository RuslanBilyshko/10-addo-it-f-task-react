import priority from '../data/priority';
import projects from '../data/projects';

let taskFormSchema = [

    {
        type: 'text',
        name: 'title',
        labelOnly: true,
        placeholder: "Title task..."
    },
    {
        type: 'date',
        name: 'date',
        labelOnly: true,
        placeholder: "Date task..."
    },
    {
        type: 'select',
        name: 'priority',
        labelOnly: true,
        placeholder: "Priority...",
        options: priority
    },
    {
        type: 'select',
        name: 'project',
        labelOnly: true,
        placeholder: "Project...",
        options: projects
    },
    {
        type: 'submit',
        value: 'Save'
    },
    {
        type: 'link',
        value: 'Cancel'
    }
    // {
    //     type: 'text',
    //     name: 'color',
    //     labelOnly: true,
    //     placeholder: "Color task..."
    // },


];

export default taskFormSchema;
