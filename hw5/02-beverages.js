const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');
app.style.display = 'flex';
app.style.flexFlow = 'row wrap';
app.style.justifyContent = 'center';
app.style.marginTop = '2rem';

const addElementToDOM = (element) => {
  let drink = document.createElement('figure');
  drink.setAttribute('class', 'figure');

  let img = document.createElement('img');
  img.style.width = '100%';
  img.setAttribute('src', `${element.strDrinkThumb}`);
  img.setAttribute('alt', `image of the ${element.strDrink} drink`);

  let caption = document.createElement('figcaption');
  caption.setAttribute('class', 'figcaption');

  let heading = document.createElement('h4');
  heading.textContent = `${element.strDrink}`;

  caption.appendChild(heading);
  drink.appendChild(img);
  drink.appendChild(caption);

  app.appendChild(drink);
};

// fetchData with promise
const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.drinks;
    })
    .then((drinks) => {
      // console.log('Drinks', drinks);

      drinks.forEach((item) => {
        addElementToDOM(item);
      });
    })
    .catch((error) => {
      console.error(error);

      let element = document.createElement('div');
      element.textContent = `An error occured. Please try again.`;
      element.style.marginBottom = '2rem';
      app.append(element);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

// fetchData with async/await
const fetchDataAsyncAwait = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();

    data.drinks.forEach((item) => {
      addElementToDOM(item);
    });
  } catch (error) {
    console.error(error);

    let element = document.createElement('div');
    element.textContent = `An error occured. Please try again.`;
    element.style.marginBottom = '2rem';
    app.append(element);
  } finally {
    app.removeChild(loading);
  }
};

fetchData(url);
// fetchDataAsyncAwait(url);
