let db = {
    users: [
        {
            userId: 'PBPKo8x7neYHn1H2kZwLZ9mwX1j1',
            email: 'emma@mail.com',
            handle: 'emma',
            createdAt: '2019-09-06T06:36:49.236Z',
            imageUrl: 'image/ewfwefwefwefwfew',
            bio: 'Hello and Nice to meet you!',
            website: 'https://user.com',
            location: 'Lonon, UK'
        }
    ],
     screams: [
        {
            userHandle: 'user',
            bodt: 'this is the scream body',
            createdAt: '2019-09-05T16:02:51.908Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'jdwqoijdwoqdjdqjop',
            body: 'nice one mate!',
            createdAt: '2019-09-06T06:36:49.236Z'
        }
    ]
};


//Redux data
const userDetails = {
    credentials: {
        userId: 'PBPKo8x7neYHn1H2kZwLZ9mwX1j1',
        email: 'emma@mail.com',
        handle: 'emma',
        createdAt: '2019-09-06T06:36:49.236Z',
        imageUrl: 'image/ewfwefwefwefwfew',
        bio: 'Hello and Nice to meet you!',
        website: 'https://user.com',
        location: 'Lonon, UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: '4BBaciXpzHzJav8g7b1z'
        },
        {
            userHandle: 'user',
            screamId: 'NMc8U14tOFE5FmTHgGhQ'
        }
    ]
}
