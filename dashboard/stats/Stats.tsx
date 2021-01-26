import * as React from 'react';
import {Problem} from './problem/Problem';
import {Graph} from './graph/Graph';
import style from './style.module.css';

export const Stats: React.FC = () => {
    // Эти данные берутся с бекенда, селектор здесь и ниже для примера заменил на сырые данные
    const problems = [
        {title: 'Errors', value: 0.12, avg: 0.11},
        {title: 'Zeroes', value: 5.12, avg: 0.11},
        {title: 'Timeouts', value: 0.12, avg: 0.11},
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.problems}>
                {problems.map(problem => (
                    <Problem
                        key={problem.title}
                        title={problem.title}
                        value={problem.value}
                        avg={problem.avg}
                    />
                ))}
            </div>
            {/* Эти данные тоже берутся с бекенда */}
            <Graph segments={[
                {text: 'Error 500', count: 1256, color: '#FFCC00'},
                {text: 'Error 501', count: 800, color: '#5856D5'},
                {text: 'Error 502', count: 650, color: '#2196F3'},
                {text: 'Other', count: 330, color: '#A0B0B9'},
            ]}/>
        </div>
    );
};
