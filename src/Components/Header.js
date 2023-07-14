import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Header() {
	return (
		<>
			<Navbar className="navbar">
				<Container>
					<Image
						src="../images/Sewing-Supplies-Color-Clipart-GraphicsFairy.jpeg"
						width={100}
						height={100}
					/>
					<h1 className="brand">MaraData's Designs</h1>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
