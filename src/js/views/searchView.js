class SearchView {
  _parent = document.querySelector('.search');

  getQuery() {
    const query = this._parent.querySelector('.search__field').value;
    this._clearInput();
    this._parent.querySelector('.search__field').blur();
    return query;
  }

  _clearInput() {
    this._parent.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parent.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
