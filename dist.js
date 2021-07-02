"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EmpresaContext = React.createContext('empresa');
var GameContext = React.createContext('game');

function MeuComponente1() {
  var minhaEmpresa = 'Storm Wizard Studios',
      meuGame = 'Magus Pocus';
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement("p", null, minhaEmpresa), /*#__PURE__*/React.createElement(MeuComponente4, {
    game: meuGame
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes-2"
  }, /*#__PURE__*/React.createElement("header", null, props.children));
}

function MeuComponente3(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null));
}

function MeuComponente4(props) {
  var _React$useState = React.useState(20),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tempo = _React$useState2[0],
      setTempo = _React$useState2[1];

  setTimeout(function () {
    setTempo(30);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, props.game, " - ", tempo));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById('app'));
