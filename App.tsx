import * as React from 'react';
import reactDOM from 'react-dom';
import 'ui/styles/variables.module.css';
import 'ui/styles/typography.module.css';

export default function App() {
    return (
        <div>
            {/* Здесь должен быть роутер и прочие ХОКи */}
        </div>
    );
}

reactDOM.render(<App />, document.querySelector('#root'));
