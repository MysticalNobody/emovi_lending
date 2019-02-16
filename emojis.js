
export default class Emojis {
    static all = [
        { image: "images/e_unreal.svg", text: "Мистика", id: 16 },
        { image: "images/e_cruel.svg", text: "Жестокий", id: 11 },
        { image: "images/e_ekshn.svg", text: "Экшн", id: 3 },
        { image: "images/e_clever.svg", text: "Умный", id: 5 },
        { image: "images/e_funny.svg", text: "Смешной", id: 1 },
        { image: "images/e_touching.svg", text: "Трогательный", id: 14 },
        { image: "images/e_honest.svg", text: "Добрый", id: 0 },
        { image: "images/e_romantic.svg", text: "Романтика", id: 7 },
        { image: "images/e_clever2.svg", text: "Вдохновляющий", id: 6 },
        { image: "images/e_sexual.svg", text: "Сексуальный", id: 19 },
        { image: "images/e_young.svg", text: "Молодёжный", id: 4 },
        { image: "images/e_mystic.svg", text: "Пугающий", id: 12 },
        { image: "images/e_atmo.svg", text: "Атмосферный", id: 9 },
        { image: "images/e_terrible.svg", text: "Волнующий", id: 8 },
        { image: "images/e_beautiful.svg", text: "Красивый", id: 17 }
    ]
    static getById(id) {
        for (var i = 0; i < Emojis.all.length; i += 1) {
            if (Emojis.all[i].id == id) return Emojis.all[i];
        }
    }
}