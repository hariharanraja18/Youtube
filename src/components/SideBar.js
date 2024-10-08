import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
 const isMenuOpen =useSelector(Store => Store.app.isMenuOpen);
 if (!isMenuOpen) return null;
  return (
		<div>
			<ul>
				<Link to={"/"}>
					<li className="mx-2 my-5">Home</li>
				</Link>
				<li className="mx-2 my-5">Shorts</li>
				<li className="mx-2 my-5">Subscriptions</li>
				<li className="mx-2 my-5">You</li>
			</ul>
		</div>
	);
}

export default SideBar;
