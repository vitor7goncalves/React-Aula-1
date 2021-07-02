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

        Context API = passa parametros do avo para o neto sem precisar passar pelo pai
        const exempleContext = React.createContext('exemple');   Usando Provider e Consumer.
         function MeuComponente4(props) {
            return (
                React.createElement(EmpresaContext.Consumer, null,
                    (empresaContext) => (
                        React.createElement('div', { className: 'Componente-4' }),
                        React.createElement('p', null, empresaContext)
                         //Para consumir é necessario uma funçao ou como neste caso uma aero function.
                    )
                )
            )
        }

        npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
        no JSX Babel nao preciso usar React.createElement(exemple) basta usar <exemple/> como tag de HTML

                 Código javasript react padrão--No mail.js está sendo usado a sintaxe JSX
        const EmpresaContext = React.createContext('empresa');

        function MeuComponente1() {
            const minhaEmpresa = 'Storm Wizard Studios';
            return (
                React.createElement(EmpresaContext.Provider, { value: minhaEmpresa },
                    React.createElement('div', { className: 'Componente-1' },
                        React.createElement(MeuComponente2, { empresa: minhaEmpresa })
                        //Modo Provider para prover dados para quem vai consumir
                    )
                )
            )
        }
        function MeuComponente2(props) {
            return React.createElement('div', { className: 'Componente-2' },
                React.createElement(MeuComponente3, { empresa: props.empresa }));
        }
        function MeuComponente3(props) {
            return React.createElement('div', { className: 'Componente-3' },
                React.createElement(MeuComponente4, { empresa: props.empresa }));
        }
        function MeuComponente4(props) {
            return (
                React.createElement(EmpresaContext.Consumer, null,
                    (empresaContext) => (
                        React.createElement('div', { className: 'Componente-4' }),
                        React.createElement('p', null, empresaContext)
                         //Modo Consumer para consumir os dados do MeuComponente1
                    )
                )
            )
        }
        function MeuComponente() {
            return React.createElement('div', { id: 'Componente' }, React.createElement(MeuComponente1));
        }

        ReactDOM.render(
            React.createElement(MeuComponente),
            document.getElementById('app')
        )

        Comando executado no terminal para tranpilar Script SJX em Script JS para que possa ser executado pelo navegador
                                   "npx babel main.js -o dist.js"
                                   main.js é o script em que estou trabalhando e o dist.js é o que ira executar no navegador -o significa output que é p arquivo de saída.
    