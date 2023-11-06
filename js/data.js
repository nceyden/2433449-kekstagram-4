import {getRandomInteger} from './util.js';

const COUNT_PHOTO = 25;
const COMMENTS_MAX = 30;

const Likes = {
  MIN:15,
  MAX:200
};

const DESCRIPTIONS = [
  'Закат над горизонтом',
  'Цветы в полнейшем расцвете',
  'Магический лес',
  'Пейзаж средневекового замка',
  'Вечерний пляж',
  'Урбанистический пейзаж',
  'Парящие облака',
  'Загадочная долина',
  'Одинокая фигура в тумане',
  'Встреча с морем'
];

const NAMES = [
  'Ваня',
  'Дима',
  'Света',
  'Паша',
  'Катя',
  'Свят',
];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getPhoto = () => Array.from({length: COUNT_PHOTO}, addPhoto);

export {getPhoto};
