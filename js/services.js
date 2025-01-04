const API_KEY = "557c5aca31cc50365f247c4ba2fac2b2";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=ru-RU";

// тренд дня trending/all/day?api_key=<<api_key>>
// тренд недели trending/all/week?api_key=<<api_key>>

const getData = (url) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw `Что-то пошло не так, ошибка ${response.status}`;
    })
    .catch((err) => console.error(err));

export const getTriends = async (type = "all", period = "day", page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};
