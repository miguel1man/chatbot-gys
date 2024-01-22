export interface TextAndIdInput {
  id: string;
  text: string;
}

export interface GenerateWavResponse {
  message: string;
  audio_url: string;
}
