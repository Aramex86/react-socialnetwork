let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: 'Hello how are you',
                likesCount: 10
            }, {
                id: 2,
                message: 'I am fine',
                likesCount: 25
            }, {
                id: 3,
                message: 'Happy birthday',
                likesCount: 30
            }, {
                id: 4,
                message: 'Hello how are you',
                likesCount: 20
            }, {
                id: 5,
                message: 'Hello how are you',
                likesCount: 20
            }, {
                id: 6,
                message: 'Hello how are you',
                likesCount: 20
            }

        ]
    },
    messagesPage: {
        dialogs: [
            {
                id: 1,
                name: 'Olga',
                img: 'https://randomuser.me/api/portraits/women/88.jpg'
            }, {
                id: 2,
                name: 'Vasea',
                img: 'https://randomuser.me/api/portraits/men/31.jpg'
            }, {
                id: 3,
                name: 'Sveta',
                img: 'https://randomuser.me/api/portraits/women/57.jpg'
            }, {
                id: 4,
                name: 'Misha',
                img: 'https://randomuser.me/api/portraits/men/76.jpg'
            }, {
                id: 5,
                name: 'Slava',
                img: 'https://randomuser.me/api/portraits/men/94.jpg'
            }
        ],
        messages: [
            {
                id: 1,
                message: 'Hello how are you',
                img: 'https://randomuser.me/api/portraits/men/40.jpg'
            }, {
                id: 2,
                message: 'I am fine!!!',
                img: 'https://randomuser.me/api/portraits/women/88.jpg'

            }, {
                id: 3,
                message: 'Happy birthday',
                img: 'https://randomuser.me/api/portraits/men/40.jpg'

            }, {
                id: 4,
                message: 'Thanks yo!!',
                img: 'https://randomuser.me/api/portraits/women/88.jpg'
            }
        ]
    },
    sideBar: {
        friends: [
            {
                name: 'Sveta',
                img: 'https://randomuser.me/api/portraits/women/57.jpg'
            },
            {
                name: 'Misha',
                img: 'https://randomuser.me/api/portraits/men/76.jpg'
            },
            {
                name: 'Olga',
                img: 'https://randomuser.me/api/portraits/women/88.jpg'
            }
        ]
    }
}

export default state;