//список имен
const LIST_OF_NAMES = [
  'Шуриком',
  'Гришей',
  'Владом',
  'Злодияр',
  'Ванила',
  'Зима',
  'Близко',
  'Галактион',
  'Агуша',
];

//список описаний к фото
const PHOTO_DESCRIPTION_LIST = [
  'со вкусом',
  'как на картинке',
  'прекрасно',
  'приятно',
  'ярко',
  'тонко',
  'превосходно',
  'искусно',
  'изящно',
];

//список комментариев к фото
const LIST_OF_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

//вернет случайное целое число в диапазоне от a до b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//вернет случайный элемент
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//вернет случайный, уникальный ID
const photoId = [0];

const getRandomUniquePhotoId = (a, b) => {
  let randomIntegerID = getRandomInteger(a, b);
  while (photoId.includes(randomIntegerID)) {
    randomIntegerID = getRandomInteger(a, b);
  }
  photoId.push(randomIntegerID);
  return randomIntegerID;
};

//вернет случайный, уникальный номер для адреса фото
const urlNums = [0];

const getRandomUniqueUrlNums = (a, b) => {
  let randomIntegerNum = getRandomInteger(a, b);
  while (urlNums.includes(randomIntegerNum)) {
    randomIntegerNum = getRandomInteger(a, b);
  }
  urlNums.push(randomIntegerNum);
  return randomIntegerNum;
};

//вернет случайный, уникальный ID комментария
const commentId = [0];

const getRandomUniqueCommentId = (a, b) => {
  let randomIntegerId = getRandomInteger(a, b);
  while (commentId.includes(randomIntegerId)) {
    randomIntegerId = getRandomInteger(a, b);
  }
  commentId.push(randomIntegerId);
  return randomIntegerId;
};

//создаст объект для массива с комментариями к фото
const createCommentedObject = () => ({
  id: getRandomUniqueCommentId(1,999),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(LIST_OF_COMMENTS),
  name: getRandomArrayElement(LIST_OF_NAMES),
});

//создаст объект для массива с описанием фото
const createDescriptiveObject = () => ({
  id: getRandomUniquePhotoId(1, 25),
  url: `photos/${getRandomUniqueUrlNums(1, 25)}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION_LIST),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createCommentedObject),
});

descriptionArray = Array.from({length: 25}, createDescriptiveObject);
