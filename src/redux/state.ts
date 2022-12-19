let onChange = (state: RootStateType) => {
    console.log('State was changed')
}

export type PostType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let state: RootStateType = {
    profilePage: {
        posts:
            [
                {id: 1, message: 'Hi, bro'},
                {id: 2, message: 'How are you?  '},
            ],
        newPostText: 'It-kamasutra'
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
    // sidebar: {
    //     friends: [
    //         {id: 1, name: 'John'},
    //         {id: 2, name: 'Steve'},
    //         {id: 3, name: 'Brady'},
    //     ]
    // }
}

export const addPost = (newPost: string) => {
    const postToAdd: PostType = {id: new Date().getTime(), message: newPost}
    state.profilePage.posts.push(postToAdd);
    state.profilePage.newPostText = '';
    onChange(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    onChange(state);
}

export const subscribe = (observer: (state : RootStateType) => void) => {
    onChange = observer;
};

export default state;