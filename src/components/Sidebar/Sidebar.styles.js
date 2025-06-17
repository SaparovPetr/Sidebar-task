import styled from "styled-components";

export const NavContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(76vh - 72px);
	margin-top: 16px;
`;

export const SidebarOuterContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 97vh;
	width: ${({ $isOpened }) => ($isOpened ? "250px" : "80px")};
	background-color: ${({ theme }) => theme.sidebarBackground};
	color: ${({ theme }) => theme.textColor};
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	transition-property: width;
	transition-duration: ${({ $isOpened, theme }) =>
        $isOpened ? theme.fastDuration : theme.slowDuration};
	transition-timing-function: ${({ theme }) => theme.easeInOut};
	transition-delay: ${({ $isOpened, theme }) =>
        $isOpened ? theme.delayShort : theme.delayMedium};
`;

export const SidebarInnerContainer = styled.div`
	width: ${({ $isOpened }) => ($isOpened ? "250px" : "80px")};
	margin: 0 auto;

	transition-property: width;
	transition-duration: ${({ $isOpened, theme }) =>
        $isOpened ? theme.slowDuration : theme.fastDuration};
	transition-timing-function: ${({ theme }) => theme.easeInOut};
	transition-delay: ${({ $isOpened, theme }) =>
        $isOpened ? theme.delayShort : theme.delayMedium};
`;

export const LogoArea = styled.div`
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
		cursor: default;

		transition-property: opacity;
		transition-duration: ${({ theme }) => theme.mediumDuration};
		transition-timing-function: ${({ theme }) => theme.ease};
		transition-delay: ${({ $isOpened }) => ($isOpened ? "0.2s" : "0s")};
	}

	.toggle {
		position: absolute;
		right: ${({ $isOpened }) => ($isOpened ? "-10px" : "-30px")};
		width: 20px;
		height: 20px;
		padding: 1px;
		margin-left: auto;
		border-radius: 50%;
		cursor: pointer;
		background-color: ${({ theme, $isOpened }) =>
        $isOpened ? theme.activeButtonBackground : theme.buttonBackground};

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

export const NavList = styled.div`
	display: flex;
	flex-direction: column;

	.nav-item {
		height: 24px;
		margin: 8px 20px;
		padding: 10px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		cursor: pointer;
		font-weight: bold;
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
