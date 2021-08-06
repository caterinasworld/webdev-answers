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

  let p = document.createElement('p');
  p.innerHTML = `<span style="font-size1.6rem; font-weight: bold"> Hi! My name is Spongebob and this is my introduction. </span> I work as a fry
cook and I would like to get my drivers license in the near future. In
my free time, I enjoy hanging out with my best friend Patrick.`;
  p.style.fontSize = '1.4rem';
  p.style.lineHeight = '1.8rem';

  section.append(img);
  section.append(p);
  main.append(section);
};

createDOM();
