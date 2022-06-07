import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [text, setText] = useState(-1);

    function callback(message: number) {
        setText(message);
    }

    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
            setText(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {text}
        </div>
    );
}
