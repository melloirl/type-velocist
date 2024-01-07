// Import axios
import axios from "axios";

class TextService {
  async getRandomText(minLength = 200, maxLength = 500) {
    let result = await axios.get(
      `https://api.quotable.io/quotes/random?minLength=${minLength}&maxLength=${maxLength}`
    );
    console.log(result);
    return result.data[0].content;
  }
}

export default new TextService();
