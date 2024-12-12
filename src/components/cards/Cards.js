
import { useSelector } from "react-redux";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardsItem from "../cardsItem/CardsItem";

import './Cards.scss';

const Cards = () => {
	const items = useSelector(state => state.cards.items);


	return (
		<section className="cards">
			<Container>
				<Row>
					{items.payload ? items.payload.map((item, index) => {
						return <Col key={index} className="col-xs-1-10"><CardsItem item={item} key={index} index={index} /></Col>
					}) : null}
				</Row>
			</Container>

		</section>
	)
}

export default Cards;