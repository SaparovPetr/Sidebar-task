import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { themeTokens } from "../../tokens/tokens";

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

const NavContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(76vh - 72px);
	margin-top: 16px;
`;

const SidebarOuterContainer = styled.div`
	height: 97vh;
	background-color: ${({ theme }) => theme.sidebarBackground};
	color: ${({ theme }) => theme.textColor};
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: ${({ $isOpened }) => ($isOpened ? "250px" : "80px")};

	transition-property: width;
	transition-duration: ${({ $isOpened, theme }) =>
		$isOpened ? theme.fastDuration : theme.slowDuration};
	transition-timing-function: ${({ theme }) => theme.easeInOut};
	transition-delay: ${({ $isOpened, theme }) =>
		$isOpened ? theme.delayShort : theme.delayMedium};

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const SidebarInnerContainer = styled.div`
	width: ${({ $isOpened }) => ($isOpened ? "250px" : "80px")};

	transition-property: width;
	transition-duration: ${({ $isOpened, theme }) =>
		$isOpened ? theme.slowDuration : theme.fastDuration};
	transition-timing-function: ${({ theme }) => theme.easeInOut};
	transition-delay: ${({ $isOpened, theme }) =>
		$isOpened ? theme.delayShort : theme.delayMedium};

	margin: 0 auto;
`;

const LogoArea = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 16px;

	img {
		width: 40px;
		height: 40px;
		margin-right: ${({ $isOpened }) => ($isOpened ? "8px" : "0")};

		transition-property: margin-right;
		transition-duration: ${({ theme }) => theme.mediumDuration};
		transition-timing-function: ${({ theme }) => theme.ease};
		transition-delay: 0s;
	}
	span {
		font-size: 1.2rem;
		font-weight: bold;
		color: ${({ theme }) => theme.logoColor};
		white-space: nowrap;
		opacity: ${({ $isOpened }) => ($isOpened ? "1" : "0")};

		transition-property: opacity;
		transition-duration: ${({ theme }) => theme.mediumDuration};
		transition-timing-function: ${({ theme }) => theme.ease};
		transition-delay: ${({ $isOpened }) => ($isOpened ? "0.2s" : "0s")};

		cursor: default;
	}

	.toggle {
		position: absolute;
		right: ${({ $isOpened }) => ($isOpened ? "-10px" : "-30px")};
		width: 20px;
		height: 20px;

		background-color: ${({ theme, $isOpened }) =>
			$isOpened ? theme.activeButtonBackground : theme.buttonBackground};
		padding: 1px;
		border-radius: 50%;
		margin-left: auto;
		cursor: pointer;

		transition-property: right;
		transition-duration: ${({ theme }) => theme.mediumDuration};
		transition-timing-function: ${({ theme }) => theme.ease};
		transition-delay: 0s;

		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%)
				rotate(${({ $isOpened }) => ($isOpened ? "180deg" : "0deg")});
			color: ${({ theme }) => theme.textColor};

			transition-property: transform;
			transition-duration: ${({ theme }) => theme.mediumDuration};
			transition-timing-function: ${({ theme }) => theme.ease};
			transition-delay: 0s;
		}
	}
`;

const NavList = styled.div`
	display: flex;
	flex-direction: column;
	.nav-item {
		height: 24px;
		margin: 8px 20px;
		padding: 10px;
		border-radius: 10px;
		font-weight: bold;
		display: flex;
		align-items: center;
		cursor: pointer;
		color: ${({ theme }) => theme.textColor};
		background-color: transparent;

		transition-property: background-color, color, opacity;
		transition-duration: ${({ theme }) => theme.mediumDuration};
		transition-timing-function: ${({ theme }) => theme.easeInOut};
		transition-delay: 0s;

		&:hover {
			background-color: ${({ theme }) => theme.hoverBackground};
			color: ${({ theme }) => theme.hoverTextColor};
		}

		&:active {
			background-color: ${({ theme }) => theme.activeBackground};
			color: ${({ theme }) => theme.activeTextColor};
		}

		&.selected {
			background-color: ${({ theme }) => theme.activeBackground};
			color: ${({ theme }) => theme.activeTextColor};
			font-weight: 600;
		}

		span {
			margin-left: 8px;
			opacity: ${({ $isOpened }) => ($isOpened ? "1" : "0")};

			transition-property: opacity;
			transition-duration: ${({ theme }) => theme.mediumDuration};
			transition-timing-function: ${({ theme }) => theme.ease};
			transition-delay: ${({ $isOpened }) => ($isOpened ? "0.2s" : "0s")};
		}
	}
`;

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
							<FontAwesomeIcon icon={"angle-right"} $isOpened={$isOpened} />
						</div>
					</LogoArea>
					<NavContainer>
						<NavList $isOpened={$isOpened}>
							{routes.map((route) => (
								<div
									key={route.title}
									className={`nav-item${
										selectedPath === route.path ? " selected" : ""
									}`}
									onClick={() => goToRoute(route.path)}
								>
									<FontAwesomeIcon icon={route.icon} />
									<span>{route.title}</span>
								</div>
							))}
						</NavList>
					</NavContainer>

					<NavList $isOpened={$isOpened}>
						{bottomRoutes.map((route) => (
							<div
								key={route.title}
								className={`nav-item${
									selectedPath === route.path ? " selected" : ""
								}`}
								onClick={() => goToRoute(route.path)}
							>
								<FontAwesomeIcon icon={route.icon} />
								<span>{route.title}</span>
							</div>
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
