import './Philosophers.css';

export default function Philosophers({ name, image, alt }) {
	return (
		<div className="philosopher-container">
			<h2>{name}</h2>
			<img 
				src={image} 
				// width="300"
				// height="300"
				alt={alt} 
			/>
		</div>
	)
}