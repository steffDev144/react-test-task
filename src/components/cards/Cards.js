
import { useSelector } from "react-redux";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProgressSpin } from '@consta/uikit/ProgressSpin';

import CardsItem from "../cardsItem/CardsItem";

import './Cards.scss';
import Filter from "../filter/Filter";

const Cards = () => {
	const items = useSelector(state => state.cards.items);
	const favorite = useSelector(state => state.favorite.value);
	const loading = useSelector(state => state.loading.value);


	return (
		<section className="cards">
			<Container className="cards__wrapper">
				{loading ?
					<ProgressSpin size="2xl" style={{margin: "0 auto"}} />
					:
					<Row>
						{items.payload ? items.payload.map((item, index) => {
							let active = false;
							if(favorite.payload && favorite.payload.indexOf(index) > -1) {
								active = true;
							}
							return <Col key={index} className="col-xs-1-10"><CardsItem item={item} active={active} key={index} index={index} /></Col>
						}) : null}
					</Row>
				}

				<Filter />
			</Container>

		</section>
	)
}

export default Cards;