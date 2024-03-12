import { useMemo, useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {
	const dispatch = useDispatch();
	// Memoize the selector function
    const selectAuth = (state) => state.auth;
    const memoizedSelector = useMemo(() => selectAuth, []);

    // Use the memoized selector function
    const auth = useSelector(memoizedSelector);
	const { currentUser } = auth;
	const [state, setState] = useState({
		task: '',
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(state.task, currentUser.id));
		setState({
			task: '',
		});
	};

	return (
		<div>
			<div className='addtask'>
				<form action='' onSubmit={handleSubmit}>
					<input
						type='text'
						name='task'
						placeholder='add your task'
						onChange={handleChange}
						value={state.task}
					/>
					<button className='button'>Add Task</button>
				</form>
			</div>
		</div>
	);
};

export default AddTask;
