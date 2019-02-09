import axios from 'axios';
export default class Api {
    static async getFlims(emojis) {
        return (await axios.get('http://localhost:1337/api.emovi.app/v1/movie/search?emo_ids=' + emojis)).data.results;
    }
    static async getResults() {
        return (await axios.get('http://localhost:1337/dev.emovi.app/v1/night/result', {
            headers: {
                'API-Key': 'qMNVwrWAF7UEFK6j3bnwcvQvnU3Xet',
            } //Хранить в открытом виде api-key плохо, но что поделать, другой авторизации не завезли
        })).data;
    }
    static async sendVote(emojis) {
        return (await axios.post('http://localhost:1337/dev.emovi.app/v1/night/vote', { "emotions": emojis }, {
            headers: {
                'API-Key': 'qMNVwrWAF7UEFK6j3bnwcvQvnU3Xet',
            } //Хранить в открытом виде api-key плохо, но что поделать, другой авторизации не завезли
        })).data;
    }
}
