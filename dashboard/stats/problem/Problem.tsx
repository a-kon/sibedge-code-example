import * as React from 'react';
import style from './style.module.css';

type Props = {
    title: string,
    value: number,
    avg: number,
}

export const Problem: React.FC<Props> = ({title, value, avg}) => (
    <div className={style.wrapper}>
        <div className={style.point} />
        <div className={style.title}>{title}: {value.toFixed(2)}%</div>
        <div className={style.avg}>Average: {avg.toFixed(2)}%</div>
    </div>
);
