import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
