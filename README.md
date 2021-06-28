Aula 1: React.js é uma blibioteca baseada em "COMPONENTS". Components basicamente são funções e classes.
Entendendo a chamada de Components.

Aula 2: Cadeia de Components.
function MeuComponente1(){
            return React.createElement('div', null,  React.createElement(MeuComponente2));
        }                      Esse null serve para passar propriedades ao component.
        function MeuComponente1(){
            return React.createElement('div', {id : 'component'},  React.createElement(MeuComponente2));
        }                      Esse null serve para passar propriedades ao component.

        Onway date flow ou Onway date bind significa que as informaçoes so seguem em uma direçao
        do pai pra filho e assim por diante, nunca em sentido oposto.