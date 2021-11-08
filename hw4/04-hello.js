const createDOM = () => {
  let main = document.querySelector('main');

  let section = document.createElement('section');
  section.style.width = '50vw';
  section.style.margin = '60px auto';

  let img = document.createElement('img');
  img.setAttribute('src', 'http://placekitten.com/200/200');
  img.setAttribute('alt', 'image of a kitten');
  img.setAttribute('width', '200');
  img.setAttribute('height', '200');
  img.setAttribute('style', 'border-radius: 100px');
  section.style.margin = '100px auto';
  section.style.textAlign = 'center';

  let bio = document.createElement('div');
  bio.style.marginTop = '2rem';
  bio.style.fontSize = '1.4rem';
  bio.style.lineHeight = '1.8rem';

  let name = document.createElement('span');
  name.textContent = `Hi! My name is Spongebob and this is my introduction. `;
  name.style.fontSize = '1.6rem';
  name.style.fontWeight = 'bold';

  let intro = document.createElement('span');
  intro.textContent = `I work as a fry
  cook and I would like to get my drivers license in the near future. In
  my free time, I enjoy hanging out with my best friend Patrick.`;

  bio.append(name);
  bio.append(intro);

  section.append(img);
  section.append(bio);
  main.append(section);
};

createDOM();
