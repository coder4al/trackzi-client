import { useMemo } from 'react';
import './Sidebar.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	// Memoize the selector function
    const selectAuth = (state) => state.auth;
    const memoizedSelector = useMemo(() => selectAuth, []);

    // Use the memoized selector function
    const auth = useSelector(memoizedSelector);
	const { currentUser } = auth;

	return (
		<div>
			<ul className='sidebar'>
				<li className='list-item'>
					<h5>{currentUser.username}</h5>
				</li>
				<li className='list-item'>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
				<li className='list-item'>
					<Link to='/settings'>Settings</Link>
				</li>
				<li className='list-item'>
					<Link to='/profile'>Profile</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
