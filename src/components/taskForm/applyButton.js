import "./applyButton.css";

export default function ApplyButton({
    onClick = () => { },
    id = '',
    content = 'Apply',
    disabled = false,
    className = 'rootNotFilled'
}) {

    // Default styling work ib progress

    return (
        <div className={className} onClick={onClick}>
            <span className={'applyButton'}
                id={id}

                disabled={disabled}
            >
                {content}
            </span>
        </div>);
}
