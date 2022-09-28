
export type User = {
  id?:number;
  email:string;
  nickname:string;
  profileURL:string | null;
  recomanded:number;
  likePost:Array<{id:number}>;
  myUpload:Array<{id:number}>;
  height:number;
  weight:number;
}

export type RankUser = {
  id:number;
  profileURL:string | null;
  nickname:string;
  total:number;
}