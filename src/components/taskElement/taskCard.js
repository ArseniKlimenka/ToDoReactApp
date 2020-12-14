import './taskCard.css'
export default function TaskCard({
    onClick = () => { },
    id = '',
    content = '+',
    data = {}
}) {
    const getPriority = (priority) => {
        switch (priority) {
            case 'low':
                return 'priority-style-low'
            case 'medium':
                return 'priority-style-medium'
            case 'high':
                return 'priority-style-high'
            default:
                return 'priority-style-medium'
        }
    }   
    return (

        <div className='root-card'>

            <div className='header-line'>
                <div className='header-type'>
                    <span className='type-style' >{data.item.type}</span>
                </div>
                <div className={getPriority(data.item.priority)}>
                    <span  >{data.item.priority}</span>
                </div>
            </div>

            <div className='header-card'>
                <span>{data.item.taskName}</span>
            </div>
            <div className='buttons-card'>
                <span>buttons</span>
            </div>

            <div className='comment-card-root'>
                <span >{data.item.comment}</span>
            </div>
            <div className='footer-card'>
                <div className='footer-card-fromto'>
                    <span>{`From ${data.item.fromName} To ${data.item.toName} `}</span>

                </div>
                <div className='footer-card-name'>
                    <span>{`${data.item.firstName} ${data.item.lastName}`}</span>
                </div>

            </div>
            <div className='task-priority'>          
            </div>
        </div>);
}
