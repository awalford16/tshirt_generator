import { Configuration, OpenAIApi } from "openai"
import { Component } from "react";

export class OpenAI extends Component {
  constructor() {
    super();

    this.openai = new OpenAIApi(new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_KEY
    }))
  }

  createImage = async (prompt) => {
    console.log("Generatin image...")
    try {
      const result = await this.openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        user: "mytshirtgenerator"
      });

      console.log(result.data.data[0].url)
      return result.data.data[0].url
    } catch (e) {
      console.error(`There was a problem generating the image: ${e}`)
    }
  }
}