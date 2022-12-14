export default function StateDisplay({
    title,
    value,
    success = true,
}) {

    const status = success ? 'success' : 'failed';

    return (
        <code className={`state-display ${status}`}>
            <div>{title}</div>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </code>
    )
}