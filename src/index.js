import _ from 'lodash';
import $ from 'jquery';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

function makeIndex() {
  $('body').append('<ul><li>1</li><li>2</li><li>3</li></ul>');
}
document.body.appendChild(component());
makeIndex();
