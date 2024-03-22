import sushi_1 from '../tmp-img-sushi/California.png';
import sushi_2 from '../tmp-img-sushi/Philadelphia-origin.png';
import sushi_3 from '../tmp-img-sushi/Dragon.png'
import sushi_4 from '../tmp-img-sushi/Canada.png'
import sushi_5 from '../tmp-img-sushi/Alaska.png'
import sushi_6 from '../tmp-img-sushi/Volcano.png'
import sushi_7 from '../tmp-img-sushi/Dynamite.png'
import sushi_8 from '../tmp-img-sushi/Rainbow.png'
import sushi_9 from '../tmp-img-sushi/Spicy tuna roll.png'
import sushi_10 from '../tmp-img-sushi/Vegetable roll.png'
import sushi_11 from '../tmp-img-sushi/Crispy roll.png'
import sushi_12 from '../tmp-img-sushi/California Yaks.png'
import sushi_13 from '../tmp-img-sushi/Ebi yaki maki.png'
import sushi_14 from '../tmp-img-sushi/Shogun.png'
import sushi_15 from '../tmp-img-sushi/Tempura.png'
import sushi_16 from '../tmp-img-sushi/Tempura with shrimp.png'



export const sushi_list = [
    {
        id: 1,
        name: 'California',
        price: 6.3,
        img: sushi_1,
        pcs: 8,
        discount: 10,
        weight: '235gm',
        contains: '',
        isHot: false,
        isSpicy: false,
        //         Состав:
        // Нори
        // Сливочный сыр
        // Рис для суши
        // Мякоть авокадо
        // Васаби
        // Розовый маринованный имбирь
        // Свежий огурец
        // Обжаренный кунжут
        // Тобико
        // Крабовое мясо / рыба / морепродукты на выбор
        //     
    },
    {
        id: 2,
        name: 'Philadelphia',
        price: 6.5,
        img: sushi_2,
        pcs: 8,
        discount: 0,
        weight: '264gm',
        contains: '',
        isHot: false,
        isSpicy: false,
        //      Состав:
        // Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Лосось
        // Мякоть авокадо
        //
    },
    {
        id: 3,
        name: 'Dragon',
        price: 4.7,
        img: sushi_3,
        pcs: 6,
        discount: 0,
        weight: '179gm',
        contains: '',
        isHot: false,
        isSpicy: false,
        //        Состав:
        // Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Угорь
        // Краб
        // Соус из угря
        // Свежий огурец / мякоть авокадо на выбор
    },
    {
        id: 4,
        name: 'Canada',
        price: 5.1,
        img: sushi_4,
        pcs: 8,
        discount: 10,
        weight: '289gm',
        contains: '',
        isHot: false,
        isSpicy: false,
        //         Состав:
        // Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Свежий огурец
        // Лосось
        // Угорь
        // Соус унаги
        // Обжаренный кунжут
    },
    {
        id: 5,
        name: 'Alaska',
        price: 5.6,
        img: sushi_5,
        pcs: 8,
        discount: 0,
        weight: '279gm',
        contains: '',
        isHot: false,
        isSpicy: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Крабовое мясо
        // Лосось
        // Обжаренный кунжут
        // Свежий огурец
    },
    {
        id: 6,
        name: 'Volcano',
        price: 3.9,
        img: sushi_6,
        pcs: 8,
        discount: 0,
        weight: '240gm',
        contains: '',
        isHot: false,
        isSpicy: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Ингридиенты на выбор
    },
    {
        id: 7,
        name: 'Dynamite',
        price: 3.5,
        img: sushi_7,
        pcs: 6,
        discount: 10,
        weight: '178gm',
        contains: '',
        isHot: false,
        isSpicy: true,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Креветки темпура
        // Желтохвост
        // Ростки фасоли
        // Морковь
        // Мякоть авокадо
        // Свежий огурец
        // Чили
        // Острый майонез
    },
    {
        id: 8,
        name: 'Rainbow',
        price: 5.9,
        img: sushi_8,
        pcs: 8,
        discount: 0,
        weight: '290gm',
        contains: '',
        isHot: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Мякоть авокадо
        // Свежий огурец
        // Тунец / лосось / креветки / желтохвост на выбор
    },
    {
        id: 9,
        name: 'Spicy tuna roll',
        price: 5.3,
        img: sushi_9,
        pcs: 8,
        discount: 0,
        weight: '283gm',
        contains: '',
        isHot: false,
        isSpicy: true,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Тунец
        // Майонез
        // Соус чили
    },
    {
        id: 10,
        name: 'Vegetables roll',
        price: 3.8,
        img: sushi_10,
        pcs: 8,
        discount: 0,
        weight: '197gm',
        contains: '',
        isHot: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Свежий огурец
        // Морковь
        // Лук- шалот
        // Мякоть авокадо
        // Спаржа
    },
    {
        id: 11,
        name: 'Crispy roll',
        price: 4.8,
        img: sushi_11,
        pcs: 8,
        discount: 15,
        weight: '274gm',
        contains: '',
        isHot: false,
        isSpicy: true,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Острый тунец
        // Хрустящие морские водоросли
        // Темпура
    },
    {
        id: 12,
        name: 'California Yaks',
        price: 4.9,
        img: sushi_12,
        pcs: '',
        discount: 0,
        weight: '252gm',
        contains: '',
        isHot: true,
        isSpicy: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Креветки
        // Икра летучей рыбы
        // Свежий огурец
        // Мякоть авокадо
    },
    {
        id: 13,
        name: 'Ebi yaki maki',
        price: 5.1,
        img: sushi_13,
        pcs: 8,
        discount: 0,
        weight: '262gm',
        contains: '',
        isHot: true,
        isSpicy: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Омлет
        // Креветки
    },
    {
        id: 14,
        name: 'Shogun',
        price: 4.8,
        img: sushi_14,
        pcs: 8,
        discount: 10,
        weight: '254gm',
        contains: '',
        isHot: true,
        isSpicy: true,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Сливочный сыр
        // Креветки
        // Угорь
        // Острый соус
        // Свежий зеленый лук
    },
    {
        id: 15,
        name: 'Tempura',
        price: 5.7,
        img: sushi_15,
        pcs: 8,
        discount: 0,
        weight: '296gm',
        contains: '',
        isHot: true,
        isSpicy: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Темпура
        // Ингридиенты на выбор
    },
    {
        id: 16,
        name: 'Tempura with shrimp',
        price: 5.1,
        img: sushi_16,
        pcs: 8,
        discount: 10,
        weight: '237gm',
        contains: '',
        isHot: true,
        isSpicy: false,
        //         Состав:
        //             Нори
        // Рис для суши
        // Васаби
        // Розовый маринованный имбирь
        // Темпура
        // Креветки
        // Мякоть авокадо
        // Соус из угря
    },

];


