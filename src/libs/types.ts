type dummyNftType = {
  name: string;
  owner: string;
  spread: number;
  img: string;
  buy: number;
  sell: number;
  listed: number;
  listedpercent: number;
  Mcap: string;
  vol24h: string;
};


type dummyVisitedNftType =  {
  name: string;
  img: string;
  mcap: string;
  priceUp: string;
  priceDown: string;
};


type dummyHotNftType = {
  name: string;
  img: string;
  mcap: string;
  priceUp: string;
  priceDown: string;
};

type dummyTrendingNftType ={
  name: string;
  owner: string;
  img: string;
  mcap: string;
  listed: string;
};


type dummyRecentNftType = {
  name: string;
  owner: string;
  img: string;
  mcap: string; 
};


type dummyUserProfilesProps = {
  [key:string]:{
  userName:string,
  banner:string,
  profilePic:string,
  joined:string,
  trendingNftDetails:{
    nftName:string,
    img:string,
    listners:string,
    mcap:string,
    supply:string,
    mints:string
  },
  addressDetails:{
    name:string,
    value:string
  }[],
  allNFts:{
    name: string,
    img: string,
    supply: string,
    mints: string,
    mintPercent: string,
    mcap: string,
    mcapUp: string,
    mcapDown: string,
    listeners: string,
    listenersUp: string,
    listenersDown: string,
    priceUp: string,
    priceDown: string,
  }[],
  buyNFts:{
    name: string,
    img: string,
    supply: string,
    mints: string,
    mintPercent: string,
    mcap: string,
    mcapUp: string,
    mcapDown: string,
    listeners: string,
    listenersUp: string,
    listenersDown: string,
    priceUp: string,
    priceDown: string,
  }[]
}
}


type  dummyNftDataProps = {
  [key: string]:
  { nftName: string,
  banner: string,
  nftImage: string,
  currentOwner: string,
  creator: string,
  joined: string,
  nftDetails: {
    buy: string,
    sell: string,
    listners: string,
    mcap: string,
    supply: string,
    mints: string
  },
  addressDetails: {
    name: string,
    value: string
  }[],
  comments: {
    name: string,
    img: string,
    comment: string,
    date: string,
    likes: string,
    dislikes: string,
    replies: string
  }[]
}
}

export type { dummyNftType,dummyVisitedNftType,dummyHotNftType,dummyTrendingNftType,dummyRecentNftType,dummyUserProfilesProps,dummyNftDataProps } 