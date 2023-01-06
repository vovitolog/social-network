const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store: StoreType = {
    _state: {
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
    },
    _callSubscriber(state: RootStateType) {
        console.log('State was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },

    addPost() {
        const postToAdd: PostType = {id: new Date().getTime(), message: this._state.profilePage.newPostText}
        this._state.profilePage.posts.push(postToAdd);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === ADD_POST) {

            const postToAdd: PostType = {id: new Date().getTime(), message: this._state.profilePage.newPostText}
            this._state.profilePage.posts.push(postToAdd);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        postText: postText;
    }
}

export const UpdateNewPostTextActionCreator = (text: string): UpdateNewPostTextType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

type AddPostActionType = {
    type: "ADD-POST",
    postText: string
}

type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}

export type actionsTypes = AddPostActionType | UpdateNewPostTextType;

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newPost: string) => void
    addPost: () => void
    _callSubscriber: (state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: actionsTypes) => void
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

export default store;