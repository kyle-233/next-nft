type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="53.00000000000001"
      {...props}
    >
      <g>
        <title>Layer 1</title>
        <text
          fill="none"
          x="18.47156"
          y="35.39563"
          id="svg_23"
          fontSize="24"
          fontFamily="'Roboto Mono'"
          textAnchor="start"
          xmlSpace="preserve"
          fontWeight="bold"
          strokeWidth="0"
          stroke="#000"
        >
          V
        </text>
        <text
          fill="none"
          x="33.68558"
          y="35.39563"
          id="svg_24"
          fontSize="24"
          fontFamily="'Roboto Mono'"
          textAnchor="start"
          xmlSpace="preserve"
          fontWeight="bold"
          strokeWidth="0"
          stroke="#000"
        >
          e
        </text>
        <text
          fill="#84D3DB"
          x="48.02253"
          y="35.39563"
          id="svg_25"
          fontSize="24"
          fontFamily="'Roboto Mono'"
          textAnchor="start"
          xmlSpace="preserve"
          fontWeight="bold"
          strokeWidth="0"
          stroke="#000"
        >
          s
        </text>
        <text
          fill="none"
          stroke="#000"
          x="61.22472"
          y="35.39563"
          id="svg_26"
          fontSize="24"
          fontFamily="'Roboto Mono'"
          textAnchor="start"
          xmlSpace="preserve"
          fontWeight="bold"
          strokeWidth="0"
        >
          e
        </text>
        <text
          fill="#000000"
          stroke="#000"
          strokeWidth="0"
          x="45.14504"
          y="35.83982"
          id="svg_27"
          fontSize="24"
          fontFamily="'Roboto Mono'"
          textAnchor="start"
          xmlSpace="preserve"
        />
        <text
          fontWeight="bold"
          xmlSpace="preserve"
          textAnchor="start"
          fontFamily="'Roboto Mono'"
          fontSize="24"
          id="svg_2"
          y="35.39563"
          x="79.09099"
          strokeWidth="0"
          stroke="#000"
          fill="#ffffff"
        >
          N
        </text>
        <text
          fontWeight="bold"
          xmlSpace="preserve"
          textAnchor="start"
          fontFamily="'Roboto Mono'"
          fontSize="24"
          id="svg_3"
          y="35.39563"
          x="97.68558"
          strokeWidth="0"
          stroke="#000"
          fill="#ffffff"
        >
          F
        </text>
        <text
          fontWeight="bold"
          xmlSpace="preserve"
          textAnchor="start"
          fontFamily="'Roboto Mono'"
          fontSize="24"
          id="svg_4"
          y="35.39563"
          x="112.49639"
          strokeWidth="0"
          stroke="#000"
          fill="#ffffff"
        >
          T
        </text>
      </g>
    </svg>
  ),
  more: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  ),
  hero: (props: IconProps) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#F796FF"
        d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
        transform="translate(100 100)"
      ></path>
    </svg>
  ),

  view: (props: IconProps) => (
    <svg viewBox="0 0 100 100" width="120" height="120" {...props}>
      <defs>
        <path
          id="circle"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        ></path>
      </defs>
      <text font-size="11.75">
        <textPath xlinkHref="#circle">
          view in opensea • view in opensea •
        </textPath>
      </text>
    </svg>
  ),
  arrowTopRight: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  ),
};
