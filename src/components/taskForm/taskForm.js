import React from 'react'
import './taskForm.css'
import ApplyButton from './applyButton'


export default class TaskCreationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moreButton: false
        }
    }
    isFormValid = () => {
        const { firstName, lastName, fromName, toName, email, type, taskName } = this.props.data
        if (firstName && lastName && fromName && toName && email && type && taskName) {
            return 'rootFilled'
        } else {
            return 'rootNotFilled'
        }
    }

    handeClick = (event) => {
        this.setState(prevState => ({
            moreButton: !prevState.moreButton
        }));
    }

    render() {
        const { data, handler, submit, checkboxHandler, close } = this.props
        return (

            <form className='container'>
                <div className="close-button"><span onClick={close} className='cross'>✕</span></div>
                <input
                    type='text'
                    value={data.taskName}
                    name='taskName'
                    id='taskName'
                    onChange={handler}
                    className='inputs'
                    placeholder='Task Name'
                />
                <input
                    type='text'
                    value={data.firstName}
                    name='firstName'
                    id='firstName'
                    onChange={handler}
                    className='inputs'
                    placeholder='First Name'
                />

                <input
                    type='text'
                    value={data.lastName}
                    id='lastName'
                    name='lastName'
                    onChange={handler}
                    className='inputs'
                    placeholder='Last Name'
                />

                <input
                    type="text"
                    value={data.email}
                    name="email" id="email"
                    onChange={handler}
                    placeholder='Email'
                    className='inputs'
                />

                <div className='inputsFromTo'>
                    <input
                        type="text"
                        value={data.fromName}
                        placeholder="From"
                        name="fromName" id="fromName"
                        onChange={handler}
                        required
                        className='inputsFrom'
                    />
                    <input
                        type="text"
                        placeholder="To"
                        name="toName" id="toName"
                        value={data.toName}
                        onChange={handler}
                        required
                        className='inputsTo'
                    />

                </div>

                <div className='type-pr'>
                    <label >Type</label>
                    <select className='type' id="type" name="type" onChange={handler} defaultValue={data.type} >
                        <option disabled={true} value="">Select type of the task</option>
                        <option value="IT">IT</option>
                        <option value="Design">Design</option>
                        <option value="Music">Music</option>
                    </select>
                </div>

                <div className='moreButton'>
                    <span className='moreIcon' id='moreButton' value={this.state.moreButton} onClick={this.handeClick}>More {this.state.moreButton ? (<span>⮟</span>) : (<span>⮝</span>)}</span>

                </div>

                {this.state.moreButton === true ? (
                    <div>
                        <hr />
                        <div className='type-pr'>
                            <label >Priority</label>
                            <select className='type' id="priority" name="priority" onChange={handler} defaultValue="" >
                                <option disabled={true} value="">Select priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className='report-style'>
                            <div>
                                <textarea
                                    className='comment'
                                    type="text"
                                    placeholder="Comment"
                                    name="comment" id="comment"
                                    onChange={handler}
                                    value={data.comment}
                                    required
                                />
                                <label >
                                    Report:
                    <input
                                        id='report'
                                        name="report"
                                        type="checkbox"
                                        checked={data.report}
                                        onChange={checkboxHandler} />
                                </label>

                            </div>
                        </div>

                    </div>
                ) : (
                        null
                    )}


                <div>
                    <ApplyButton className={this.isFormValid()} onClick={submit} />
                </div>
            </form>
        );
    }
}