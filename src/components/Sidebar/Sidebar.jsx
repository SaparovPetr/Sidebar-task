import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { themeTokens } from "../../tokens/tokens";

import {
	NavContainer,
	SidebarOuterContainer,
	SidebarInnerContainer,
	LogoArea,
	NavList,
} from "./Sidebar.styles";

const routes = [
	{ title: "Home", icon: "fas-solid fa-house", path: "/" },
	{ title: "Sales", icon: "chart-line", path: "/sales" },
	{ title: "Costs", icon: "chart-column", path: "/costs" },
	{ title: "Payments", icon: "wallet", path: "/payments" },
	{ title: "Finances", icon: "chart-pie", path: "/finances" },
	{ title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
	{ title: "Settings", icon: "sliders", path: "/settings" },
	{ title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = ({ color }) => {
	const [$isOpened, setIsOpened] = useState(true);
	const [selectedPath, setSelectedPath] = useState("/");

	const theme = color === "light" ? themeTokens.light : themeTokens.dark;

	const goToRoute = (path) => {
		setSelectedPath(path);
		console.log(`going to "${path}"`);
	};

	const toggleSidebar = () => {
		setIsOpened((v) => !v);
	};

	return (
		<ThemeProvider theme={theme}>
			<SidebarOuterContainer $isOpened={$isOpened}>
				<SidebarInnerContainer $isOpened={$isOpened}>
					<LogoArea $isOpened={$isOpened}>
						<img src={logo} alt="TensorFlow logo" />
						<span>TensorFlow</span>

						<div className="toggle" onClick={toggleSidebar}>
							<FontAwesomeIcon icon={"angle-right"} />
						</div>
					</LogoArea>
					<NavContainer>
						<NavList $isOpened={$isOpened}>
							{routes.map((route) => (
								<li
									key={route.title}
									className={`nav-item${
										selectedPath === route.path ? " selected" : ""
									}`}
									onClick={() => goToRoute(route.path)}
								>
									<FontAwesomeIcon icon={route.icon} />
									<span>{route.title}</span>
								</li>
							))}
						</NavList>
					</NavContainer>

					<NavList $isOpened={$isOpened}>
						{bottomRoutes.map((route) => (
							<li
								key={route.title}
								className={`nav-item${
									selectedPath === route.path ? " selected" : ""
								}`}
								onClick={() => goToRoute(route.path)}
							>
								<FontAwesomeIcon icon={route.icon} />
								<span>{route.title}</span>
							</li>
						))}
					</NavList>
				</SidebarInnerContainer>
			</SidebarOuterContainer>
		</ThemeProvider>
	);
};

Sidebar.propTypes = {
	color: PropTypes.string.isRequired,
};

export default Sidebar;
