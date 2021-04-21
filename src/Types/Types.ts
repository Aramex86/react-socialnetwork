
export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type PhotosType = {
  small: string;
  large: string;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type UserType={
    name:string
    id:number
    photos:PhotosType
    status:null
    followed:boolean
    
  }

  export type FriendsType={
    name: string
    img: string
  }


  //News Reducer types


  export type NewsArticalsType={
    description: string
    image: string
    publishedAt: string
    section: string
    title: string
    url: string
    abstract:string
    created_date:string
    byline:string
  }
//Music Reducer types

export type SongsType={
  id: number
  artist: string,
  name: string,
  cover:string,
  bg: string,
  song: string,
  playerBg: string,
}
export type FavoriteType={
        id: number
        artist: string
        cover: string
        name: string
        song: string
}
export type SongItemType={
  id: number
  artist: string
  cover: string
  name: string
  song: string
}


