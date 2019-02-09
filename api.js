import axios from 'axios';
export default class Api {
    static async getFlims(emojis) {
        return (await axios.get('https://api.emovi.app/v1/movie/search?emo_ids=' + emojis)).data.results;
    }
    static async getResults() {
        return (await axios.get('https://dev.emovi.app/v1/night/result', {
            headers: {
                'API-Key': 'qMNVwrWAF7UEFK6j3bnwcvQvnU3Xet',
            }
        })).data;
    }
    static async sendVote(emojis) {
        return (await axios.post('https://dev.emovi.app/v1/night/vote', emojis)).data;
    }
}
