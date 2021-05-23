import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Home() {
    const history = useHistory();
    const [start, disableStart] = useState(false);

    function startButton() {
        disableStart(true);

        history.push('/feelings')
    }

    return (
        <>

            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
            <div>
                <h2>Please press <button onClick={(event) => startButton(event)}>START</button> to begin!</h2>

            </div>
        </>
    )
}

export default Home;