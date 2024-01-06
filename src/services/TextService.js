// Import axios
import axios from "axios";

class TextService {
  async getRandomText() {
    let result = await axios.get("https://api.quotable.io/random");
    return result.data.content;
  }
}

export default new TextService();
