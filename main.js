
const EmpresaContext = React.createContext('empresa');
const GameContext = React.createContext('game');

function MeuComponente1() {
    const minhaEmpresa = 'Storm Wizard Studios',
    meuGame = 'Magus Pocus';
    
    return (
        <div className="componentes-1">
            <MeuComponente2>
                <p>{minhaEmpresa}</p>
                <MeuComponente4 game={meuGame}/>
            </MeuComponente2>
        </div>
    )
}
function MeuComponente2(props) {
    return (
        <div id="componentes-2">
            <header>{props.children}</header>
        </div>
    )
}
function MeuComponente3(props) {
    return (
        <div id="componentes-3">
            <MeuComponente4 />
        </div>
    )
}
function MeuComponente4(props) {
    const [tempo , setTempo] = React.useState(20);
    
    setTimeout(function(){
        setTempo(30)
    }, 1000);

    return (
        <div className="componentes-4">
            <p>{props.game} - {tempo}</p>
        </div>
    )
}
function MeuComponente() {
    return (
        <div id="componentes">
            <MeuComponente1 />
        </div>
    )
}

ReactDOM.render(
    <MeuComponente />,
    document.getElementById('app')
)
