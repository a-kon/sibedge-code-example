import * as React from 'react';
import style from './style.module.css';

interface Props<T extends string> {
    active: T,
    buttons: Array<T>,
    text: Record<T, string>,
    onChange: (value: T) => void,
}

export function ButtonGroup<T extends string>(props: React.PropsWithChildren<Props<T>>): JSX.Element {
    const {active, buttons, text, onChange} = props;

    return (
        <div className={style.wrapper}>
            {buttons.map(button => (
                <div
                    // Тут мог бы быть classnames
                    className={`${style.button} ${button === active ? style.active : ''}`}
                    key={button}
                    // Можно было бы заменить обернуть onChange в useCallback и запихать button в data-*
                    // но это экономия на спичках
                    onClick={() => onChange(button)}
                >
                    {text[button]}
                </div>
            ))}
        </div>
    );
}
