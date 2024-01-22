import { TextAndIdInput, GenerateWavResponse } from "../types/ApiTypes";

// const apiDev = "http://127.0.0.1:8000";
const apiUrl = "https://fastapi-tts-azure.onrender.com";

const generateWav = async (
  inputData: TextAndIdInput
): Promise<GenerateWavResponse> => {
  try {
    const response = await fetch(`${apiUrl}/tts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    // console.log("generateWav data:", data);

    return { message: data.message, audio_url: data.audio_url };
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    throw new Error(`An error occurred: ${error.message}`);
  }
};

export default generateWav;
