export interface IEmotion {
  id: string;
  nome: string;
}

export interface IEmotionApiResponse {
  sucess: boolean;
  data: IEmotion[];
}
