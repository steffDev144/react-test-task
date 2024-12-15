import { Card } from '@consta/uikit/Card';
import { useSelector, useDispatch } from "react-redux";
import { setFavorite } from "../../reducers/favouritesSlice";
import { Modal } from '@consta/uikit/Modal';
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { useState } from "react";


import './CardsItem.scss';
import API from "../../modules/universAPI";

function CardsItem (props) {
	const {item, index, active} = props;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const favorite = useSelector(state => state.favorite.value);
	let info;
	const dispatch = useDispatch();

	function favouritesEdit(id, e) {
		let arr;

		if(favorite.payload) {
			arr = [...favorite.payload, id];
		} else {
			arr = [...favorite, id];
		}

		let arr1 = new Set(arr);

		dispatch(setFavorite([...arr1]));

	}

	function setInfo(name) {

		API.searchCardsByName(name)
			.then((data)=>{
				info = data;
				setIsModalOpen(true);
				console.log(info);
			})
			.catch((e) => {
				console.log(e)
			})
	}

	return (
		<>
			<Card verticalSpace="l" horizontalSpace="m" shadow={true} border={true} className="cards__item">
				<div className="cards__item-title" onClick={() => setInfo(item)}>{item}</div>

				<div className={active ? "cards__item-favourites active" : "cards__item-favourites"} onClick={(e) => favouritesEdit(index, e)}>
					В избранное
					<span>
						{!active ?
							<svg width="13" height="12" viewBox="0 0 13 12" fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd"
									  d="M6.59998 8.28685L9.40689 9.94277L8.66257 6.82414L11.1112 4.75073L7.88769 4.48342L6.59998 1.51368L5.31226 4.48342L2.08875 4.75073L4.53738 6.82414L3.79306 9.94277L6.59998 8.28685ZM2.27398 12L3.42198 7.19L-0.400024 3.95368L4.63298 3.53632L6.59998 -1L8.56698 3.53632L13.6 3.95368L9.77798 7.19L10.926 12L6.59998 9.4479L2.27398 12Z"
									  fill="#00395C" fillOpacity="0.8"/>
							</svg>
							:
							<svg width="13" height="12" viewBox="0 0 13 12" fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.79993 9.4479L11.1259 12L9.97793 7.19L13.7999 3.95368L8.76693 3.53632L6.79993 -1L4.83293 3.53632L-0.200073 3.95368L3.62193 7.19L2.47393 12L6.79993 9.4479Z"
									fill="#00395C" fillOpacity="0.8"/>
							</svg>
						}

					</span>
				</div>

			</Card>
			<Modal
				isOpen={isModalOpen}
				hasOverlay
				onClickOutside={() => setIsModalOpen(false)}
				onEsc={() => setIsModalOpen(false)}
			>
				<Text as="p" size="s" view="secondary" lineHeight="m">
					{info ? info[0].name : null}
				</Text>
				<Text as="p" size="s" view="secondary" lineHeight="m">
					Это содержимое модального окна. Здесь может быть что угодно: текст,
					изображение, форма или таблица. Всё, что хочется вынести из контекста
					и показать поверх основной страницы.
				</Text>
				<div>
					<Button
						size="m"
						view="primary"
						label="Закрыть"
						width="default"
						onClick={() => setIsModalOpen(false)}
					/>
				</div>
			</Modal>
		</>
	)
}

export default CardsItem;