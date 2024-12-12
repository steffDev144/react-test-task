import { useSelector, useDispatch } from 'react-redux'
import { search, favourites } from "../../reducers/typeSlice";

import './Header.scss';

export default function Header() {
	const type = useSelector(state => state.type.value);
	const dispatch = useDispatch();

	let searchColor, favouritesColor;

	if(type === 'search') {
		searchColor = {color: '#00ded1'};
	} else {
		favouritesColor = {color: '#00ded1'};
	}

	return (
		<header className="header">
			<div className="container">
				<ul className="header__list">
					<li
						className="header__list-item"
						style={searchColor}
						onClick={() => dispatch(search())}>Поиск</li>

					<li
						className="header__list-item"
						style={favouritesColor}
						onClick={() => dispatch(favourites())}>Избранное</li>
				</ul>
			</div>
		</header>
	)
}