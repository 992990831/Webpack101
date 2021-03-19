export default function printMe() {
    console.log('I get called from print.js!');
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'hello, world!'; //_.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
  
    element.appendChild(btn);
    
    return element;
  }
  
  document.body.appendChild(component());
  