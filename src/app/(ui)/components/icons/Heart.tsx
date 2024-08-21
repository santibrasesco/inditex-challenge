import { MouseEventHandler } from "react";

interface Props {
    width?: number,
    height?: number,
    fill?: string,
    stroke?: string,
    onClick?: MouseEventHandler<SVGSVGElement>
}

export const Heart = ({ width = 50, height = 50, fill = '#EC1D24', stroke, onClick }: Props) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        data-testid="heart"
    >
        <path
            fill={fill}
            stroke={stroke}
            fillRule="evenodd"
            d="M12 3.639 6-.003 0 3.64v7.803l12 10.231 12-10.23V3.638L18-.003 12 3.64Z"
            clipRule="evenodd"
        />
    </svg>
);