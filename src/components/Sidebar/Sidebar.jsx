import { useState } from "react";
import styled from "styled-components";
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

// компоннты
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
	transition: width
		${({ $isOpened, theme }) =>
			$isOpened ? theme.fastDuration : theme.slowDuration}
		${({ theme }) => theme.easeInOut}
		${({ $isOpened, theme }) =>
			$isOpened ? theme.delayShort : theme.delayMedium};

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const SidebarInnerContainer = styled.div`
	width: ${({ $isOpened }) => ($isOpened ? "250px" : "80px")};
	transition: width
		${({ $isOpened, theme }) =>
			$isOpened ? theme.slowDuration : theme.fastDuration}
		${({ theme }) => theme.easeInOut}
		${({ $isOpened, theme }) =>
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
		transition: margin-right ${({ theme }) => theme.mediumDuration}
			${({ theme }) => theme.ease};
	}
	span {
		font-size: 1.2rem;
		font-weight: bold;
		color: ${({ theme }) => theme.logoColor};
		white-space: nowrap;
		opacity: ${({ $isOpened }) => ($isOpened ? "1" : "0")};
		transition: opacity ${({ theme }) => theme.mediumDuration}
			${({ theme }) => theme.ease}
			${({ $isOpened }) => ($isOpened ? "0.2s" : "0s")};
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

		transition: right ${({ theme }) => theme.mediumDuration}
			${({ theme }) => theme.ease};

		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%)
				rotate(${({ $isOpened }) => ($isOpened ? "180deg" : "0deg")});
			color: ${({ theme }) => theme.textColor};
			transition: transform ${({ theme }) => theme.mediumDuration}
				${({ theme }) => theme.ease};
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
		transition: background-color ${({ theme }) => theme.mediumDuration}
				${({ theme }) => theme.easeInOut},
			color ${({ theme }) => theme.mediumDuration}
				${({ theme }) => theme.easeInOut},
			opacity ${({ theme }) => theme.mediumDuration}
				${({ theme }) => theme.easeInOut};

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
			transition: opacity ${({ theme }) => theme.mediumDuration}
				${({ theme }) => theme.ease}
				${({ $isOpened }) => ($isOpened ? "0.2s" : "0s")};
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
		<SidebarOuterContainer theme={theme} $isOpened={$isOpened}>
			<SidebarInnerContainer theme={theme} $isOpened={$isOpened}>
				<LogoArea theme={theme} $isOpened={$isOpened}>
					<img src={logo} alt="TensorFlow logo" />
					<span>TensorFlow</span>

					<div className="toggle" onClick={toggleSidebar}>
						<FontAwesomeIcon icon={"angle-right"} $isOpened={$isOpened} />
					</div>
				</LogoArea>
				<NavContainer>
					<NavList theme={theme} $isOpened={$isOpened}>
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

				<NavList theme={theme} $isOpened={$isOpened}>
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
	);
};

Sidebar.propTypes = {
	color: PropTypes.string.isRequired,
};

export default Sidebar;
