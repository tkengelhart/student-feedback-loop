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
            <div>
                <h2>Please press start</h2><button onClick={(event) => startButton(event)}>START</button>
            </div>
        </>
    )
}

export default Home;