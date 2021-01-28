import icons from 'url:../../img/icons.svg';

import previewView from './previewView.js';
import View from './View.js';

class ResultsView extends View {
  _parent = document.querySelector('.results');
  _errorMessage = 'No recipe found. Search something different. :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
