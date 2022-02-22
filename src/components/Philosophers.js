import './Philosophers.css';

export default function Philosophers({ name }) {
	return (
		<div className="philosopher-container">
			<h2>{name}</h2>
		</div>
	)
}