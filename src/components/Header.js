import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
const Header = () => {
	return (
		<header>
			<nav class="navbar">
				<img src={logo} alt="codesquad.org logo" class="logo" />
				<ul class="links">
					<li>
						<a href="/">What we do</a>
					</li>
					<li>
						<a href="/">For businesses</a>
					</li>
					<li class="active">
						<a href="/">For students</a>
					</li>
					<li>
						<a href="/">About Us</a>
					</li>
					<li>
						<a href="/">Get involved</a>
					</li>
					<li>
						<a href="/">Donate</a>
					</li>
				</ul>
				<img class="menu" src={menu} alt="menu bar" />
			</nav>
		</header>
	);
};

export default Header;
