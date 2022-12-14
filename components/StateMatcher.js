import { useSelector } from 'react-redux';
import StateDisplay from "./StateDisplay";
import isEqual from 'lodash/isEqual';

export default function StateMatcher({
    title,
    expectedState,
}) {
    const currentState = useSelector(state => state);
    const success = isEqual(currentState, expectedState);
    
    return (
        <div>
            <h1>{title}</h1>

            <div className="state-displays">
                <StateDisplay title="Current State" value={currentState} />
                <StateDisplay title="Expected State" value={expectedState} success={success}/>
            </div>

        </div>
    )
}