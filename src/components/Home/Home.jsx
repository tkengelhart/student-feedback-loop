import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();


    function startButton() {
        history.push('/feelings')
    }

    return (
        <>

            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
            <div>

                Please press <button onClick={(event) => startButton(event)}>START</button> to begin!
        </div>
        </>
    )
}

export default Home;