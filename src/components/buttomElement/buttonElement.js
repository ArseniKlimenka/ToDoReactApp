import "./button.css";

export default function ButtonElement({
    onClick = () => { },
    id = '',
    content = '+'
}) {

    // Default styling work ib progress

    return (
        <div className='root'>
            <span className='button'
                id={id}
                onClick={onClick}
            >
                {content}
            </span>
        </div>);
}
