import picture from "../assets/img.jpeg";
const Hero = (props) => {
	return (
		<>
			<div class="hero">
				<div class="img-container">
					<img
						src={picture}
						alt="students and instructors at code squad looking a computer"
					/>
				</div>
				<h1>{props.title}</h1>
				<p>{props.age + 5}</p>
				<p>{props.isHere ? "Is Here" : "Is not here"}</p>
			</div>

			<div class="divider" style={{ background: props.color }}>
				<h2>{props.message}</h2>
			</div>
		</>
	);
};

export default Hero;
