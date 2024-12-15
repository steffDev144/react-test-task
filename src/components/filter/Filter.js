import { Select } from '@consta/uikit/SelectDeprecated';
import { useState } from 'react';
import { Tag } from '@consta/uikit/Tag';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Button } from '@consta/uikit/Button';
import { useSelector, useDispatch } from "react-redux";
import { updateLoading } from "../../reducers/loadingSlice";
import { editTag } from "../../reducers/tagsSlice";

import "./Filter.scss";
import API from "../../modules/universAPI";

export default function Filter() {
	const [value, setValue] = useState([]);
	const [checked, setChecked] = useState(false);
	const tags = useSelector(state => state.tags.value);
	const dispatch = useDispatch();
	let items = [];
	if(tags.payload) {
		items = tags.payload;
	} else {
		items = tags;
	}

	function searchTags() {
		dispatch(updateLoading(true));
		API.searchCardsByTag(value, checked)
			.then((data)=>{
				dispatch(updateLoading(data));
			})
			.catch((e) => {
				console.log(e)
			})
	}

	function editSelect(e) {
		const stateTrue = {
			label: e.label,
			id: e.id,
		}
		setValue([
			...value,
			stateTrue
		]);

		selectTag(e, items, true);
	}

	function deleteSelect(id, e) {
		const items = value.filter((item) => item.id !== id);
		setValue(items);

		selectTag(e, tags.payload, false);
	}

	function selectTag(e, items, bool) {
		const stateTrue = {
			label: e.label,
			id: e.id,
			disabled: bool,
		}

		let newTags = items;
		let indexTag;
		newTags.forEach((item, i) => {
			if(item.id === e.id) {
				indexTag = i;
			}
		});

		const newTags2 = [...newTags.slice(0, indexTag), stateTrue, ...newTags.slice((indexTag + 1), newTags.length)];

		dispatch(editTag([...newTags2]));
	}
	let disable = true;
	if(value[0]) {
		disable = false;
	}

	return (
		<div className="filter">
			<h3 className="filter__title">Фильтры</h3>
			<Select
				placeholder="Выберите теги"
				label="Страны"
				items={items}
				value={value}
				onChange={({value}) => editSelect(value)}
				renderValue={() => {
					const tags = value.map((el) => {
						return <Tag mode="cancel" key={el.id} onCancel={() => deleteSelect(el.id, el)} label={el.label} />
					})
					return (
						<>
							{tags}
						</>
					)
				}}
			/>
			{checked ?
				<Checkbox checked onClick={() => setChecked(!checked)} label="показать первые 20" />
				:
				<Checkbox onClick={() => setChecked(!checked)} label="показать первые 20" />
			}
			<Button label="Применить" disabled={disable}  view="secondary" onClick={() => searchTags()} />
		</div>
	)
}