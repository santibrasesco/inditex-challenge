import { MouseEventHandler } from "react";

interface Props {
    width?: number,
    height?: number,
    onClick?: MouseEventHandler<SVGSVGElement>
}

export const HeartEmpty = ({ width = 50, height = 50, onClick }: Props) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        data-testid="heart-empty"
    >
        <path
            fill="#fff"
            d="M7 1.673 7.519.82 7 .504l-.519.315.519.854Zm6 3.642-.519.855.519.315.519-.315L13 5.315Zm-12 0L.481 4.46 0 4.752v.563h1Zm0 7.803H0v.462l.351.3.649-.762ZM13 23.35l-.649.76.649.554.649-.553L13 23.35Zm12-10.232.649.761.351-.299v-.462h-1Zm0-7.803h1v-.563l-.481-.292-.519.855Zm-6-3.642.519-.854L19 .504l-.519.315.519.854Zm-12.519.855 6 3.642 1.038-1.71-6-3.641-1.038 1.71ZM1.52 6.17l6-3.642L6.48.818l-6 3.642L1.52 6.17ZM2 13.118V5.315H0v7.803h2Zm11.649 9.47-12-10.23L.35 13.878l12 10.232 1.298-1.522Zm0 1.523 12-10.232-1.298-1.521-12 10.23 1.298 1.523ZM26 13.118V5.315h-2v7.803h2Zm-.481-8.658-6-3.641-1.038 1.71 6 3.64L25.52 4.46ZM18.48.82l-6 3.641 1.038 1.71 6-3.642L18.48.818Z"
        />
    </svg>
)
