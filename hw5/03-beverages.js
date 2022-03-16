$(document).ready(function () {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const addElementToDOM = (element) => {
    $('#results')
      .css({
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        marginTop: '2rem',
      })
      .append(
        $('<figure>')
          .addClass('figure')
          .css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          })
          .append(
            $('<img>')
              .css('width', '100%')
              .attr({
                src: `${element.strDrinkThumb}`,
                alt: `image of the ${element.strDrink} drink`,
              })
          )
          .append(
            $('<figcaption>')
              .addClass('figcaption')
              .append($('<h4>').text(element.strDrink))
          )
      );
  };

  const fetchData = (url) => {
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        console.log(data);

        data.drinks.forEach((item) => {
          addElementToDOM(item);
        });
      },
      error: (error) => {
        console.log(error);
        $('#results')
          .append('<div>')
          .css('marginBottom', '2rem')
          .text(`An error occurred. Please try again.`);
      },
      complete: () => {
        $('#loading').remove();
      },
    });
  };

  fetchData(url);
});
