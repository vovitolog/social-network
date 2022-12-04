let state = {
    profilePage: {
        posts:
            [
                {id: 1, message: 'Hi, bro'},
                {id: 2, message: 'How are you?  '},
            ],
    },
    dialogsPage: {
        dialogs:
            [
                {id: 1, name: 'John'},
                {id: 2, name: 'Steve'},
                {id: 3, name: 'Brady'},
                {id: 4, name: 'Traver'},
                {id: 5, name: 'Stacy'},
            ],
        messages:
            [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are You'},
                {id: 3, message: 'Bye'},
            ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Steve'},
            {id: 3, name: 'Brady'},
        ]
    }
}

export default state;