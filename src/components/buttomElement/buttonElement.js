import "./button.css";

export default function ButtonElement({
    key = '',
    disabled = false,
    color = '',
    style = {},
    variant = '',
    size = '',
    onClick = () => { },
    id = '',
    content='+'
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
