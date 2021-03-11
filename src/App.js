import './App.css';
import CustomList from './lab2/MyList.js'

const arrayData =
    [
        {firstName: "Nikita", lastName: "Fedorov"},
        {firstName: "Igor", lastName: "Cool"}
    ];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2 className="LabName">
                    Разработка web-приложений.
                    <br/>
                    Лабораторная работа 2. Single Page Application.
                </h2>
            </header>
            <CustomList array={arrayData}/>
        </div>
    );
}

export default App;
