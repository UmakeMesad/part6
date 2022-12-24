import {v4 as uuidv4} from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: ' 📃 To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn CSS'
            },
            {
                id: uuidv4(),
                title: 'Learn HTML'
            },
            {
                id: uuidv4(),
                title: 'Learn Web Mobile'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ In progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn Sleep'
            },
            {
                id: uuidv4(),
                title: 'Learn Tiktok'
            },
            {
                id: uuidv4(),
                title: 'Learn Facebook'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ QA',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn CSS'
            },
            {
                id: uuidv4(),
                title: 'Learn LMHT Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn Sleep'
            },
            {
                id: uuidv4(),
                title: 'Learn Valorant'
            },
            {
                id: uuidv4(),
                title: 'Learn CSGO'
            }
        ]
    }
    
]

export default mockData