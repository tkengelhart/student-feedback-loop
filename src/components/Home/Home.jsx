import { useHistory } from 'react-router-dom';
import { useState } from 'react';


//create starting page with a start button

function Home() {
    const history = useHistory();
    const [start, disableStart] = useState(false);

    function startButton() {
        // disableStart(true);

        history.push('/feelings')
    }

    return (
        <>
            <div>
                <h2>Press START to begin.</h2><button onClick={(event) => startButton(event)}>START</button>
            </div>
        </>
    )
}

export default Home;