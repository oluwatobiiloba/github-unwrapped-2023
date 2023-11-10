import { SVGProps } from "react";

export const UFO_WIDTH = 322;
export const UFO_HEIGHT = 208;

export const Ufo = ({
  x,
  y,
  scale,
  explodeAfter,
  ...props
}: SVGProps<SVGSVGElement> & {
  x: number;
  y: number;
  scale: number;
  explodeAfter: number;
}) => {
  const actualUfoWidth = UFO_WIDTH * scale;
  const actualUfoHeight = UFO_HEIGHT * scale;

  return (
    <div>
      <svg
        width="322"
        height="208"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
          width: actualUfoWidth,
          height: actualUfoHeight,
          position: "absolute",
          left: x - actualUfoWidth / 2,
          top: y - actualUfoHeight / 2,
        }}
        viewBox="0 0 322 208"
        fill="none"
        {...props}
      >
        <path
          d="M145.25 2.55001C147.96 0.370008 152.02 0.45001 153.82 2.49001C155.52 4.42001 156.03 7.11001 156.37 9.66001C157.2 15.79 157.47 22 157.18 28.18"
          stroke="#469E57"
          strokeMiterlimit="10"
        />
        <path
          d="M168.37 5.16998C165.66 5.35998 162.83 6.18999 161.03 8.23999C159.33 10.17 158.82 12.86 158.48 15.41C157.65 21.54 157.38 27.75 157.67 33.93"
          stroke="#469E57"
          strokeMiterlimit="10"
        />
        <path
          d="M245.66 103.24C244.15 107.1 241.79 110.24 240.86 112.25C240.14 113.87 239.69 114.77 239.69 114.77H75.1C75.1 114.77 74.7 113.89 74.04 112.33C73.19 110.32 71.93 107.17 70.53 103.28C63.75 84.43 53.97 48.08 75.1 38.64C112.42 21.97 198.69 23 239.69 38.64C262.82 47.46 253.06 84.23 245.66 103.25V103.24Z"
          fill="#A2E2B7"
        />
        <path
          d="M285.97 110.84C268.12 107.39 249.94 104.92 231.89 103.24C179.76 98.33 128.67 99.95 89.4401 103.27C62.9101 105.51 41.8101 108.52 29.4901 110.84C-1.17994 116.6 0.780055 131.74 0.780055 131.74C0.780055 123.17 38.1901 115.76 92.3101 112.32C92.8501 113.88 93.18 114.76 93.18 114.76H227.83C227.83 114.76 228.2 113.86 228.79 112.24C283.35 115.65 321.15 123.07 321.2 131.68C321.2 131.68 323.69 118.13 285.97 110.84ZM161.33 122.85C140.8 122.85 120.25 123.48 102.48 124.47C101.35 124.53 100.22 124.59 99.1301 124.66C69.1601 126.44 47.9101 129.2 49.6101 131.47C49.6701 131.56 49.7301 131.64 49.8101 131.73H106.14L272.11 131.7C272.19 131.61 272.26 131.53 272.34 131.44C275.55 127.76 218.5 122.83 161.33 122.85Z"
          fill="white"
        />
        <path
          d="M228.79 112.25C208.21 110.95 185.24 110.24 160.99 110.24C136.41 110.26 113.12 111 92.31 112.33C38.19 115.78 0.780029 123.18 0.780029 131.75C0.800029 138.87 26.66 145.19 66.49 149.09C77.35 150.16 89.25 151.05 101.95 151.73H102C106.02 151.93 110.1 152.13 114.27 152.3C114.29 152.3 114.32 152.28 114.33 152.3C114.52 152.3 114.7 152.32 114.89 152.32C116.16 152.37 117.44 152.41 118.72 152.46C132.19 152.95 146.36 153.22 160.99 153.22C175.62 153.22 189.03 152.97 202.17 152.49C202.17 152.51 202.19 152.49 202.19 152.49C208.11 152.29 213.87 152.03 219.49 151.73C232.35 151.05 244.38 150.17 255.35 149.09C295.27 145.18 321.2 138.85 321.2 131.71V131.69C321.15 123.08 283.35 115.67 228.79 112.25Z"
          fill="#3F7749"
        />
        <path
          d="M170.94 7.87C172.63 7.87 174 6.49999 174 4.81C174 3.12001 172.63 1.75 170.94 1.75C169.25 1.75 167.88 3.12001 167.88 4.81C167.88 6.49999 169.25 7.87 170.94 7.87Z"
          stroke="#469E57"
          strokeMiterlimit="10"
        />
        <path
          d="M142.73 6.95999C144.31 6.95999 145.59 5.67953 145.59 4.09999C145.59 2.52046 144.31 1.23999 142.73 1.23999C141.151 1.23999 139.87 2.52046 139.87 4.09999C139.87 5.67953 141.151 6.95999 142.73 6.95999Z"
          stroke="#469E57"
          strokeMiterlimit="10"
        />
        <path
          d="M272.35 131.44C272.27 131.53 272.2 131.61 272.12 131.7C266.85 137.71 261.23 143.52 255.36 149.08C247.08 156.93 238.29 164.28 229.25 171.02C228.97 171.24 228.69 171.45 228.4 171.65H228.38C207.83 186.88 186.14 198.94 166.45 206.43C164.75 207.08 163.05 207.39 161.35 207.42C160.38 207.47 159.4 207.39 158.41 207.22C156.94 207 155.49 206.59 154.02 205.98C129.25 195.95 98.4901 175.73 75.9801 157.23L74.4701 155.98C71.6601 153.63 69.0001 151.33 66.5001 149.07C59.3501 142.64 53.5501 136.66 49.8101 131.72C49.7301 131.63 49.6701 131.55 49.6101 131.46C47.9101 129.19 69.1501 126.42 99.1301 124.65C100.23 124.59 101.35 124.53 102.48 124.46C120.25 123.47 140.8 122.84 161.33 122.84C218.5 122.82 275.55 127.75 272.34 131.43L272.35 131.44Z"
          fill="url(#paint0_linear_5_736)"
        />
        <path
          d="M232.41 134.42C234.16 135.47 219.51 153.03 217.13 153.52C212.88 154.39 202.22 154.16 202.12 152.42C201.93 149.2 210.63 136.12 213.56 133.29C215.92 131.01 230.63 133.35 232.41 134.42Z"
          fill="white"
        />
        <path
          d="M162.57 207.37L161.35 207.42C160.38 207.47 159.4 207.39 158.41 207.22C139 185.13 125.19 167.78 114.89 152.31C114.87 152.29 114.87 152.28 114.86 152.26C114.52 151.75 114.2 151.26 113.87 150.76C109.54 144.16 105.87 137.89 102.65 131.73C101.4 129.37 100.24 127 99.1299 124.65C100.23 124.59 101.35 124.53 102.48 124.46C103.62 126.87 104.84 129.28 106.14 131.72C109.38 137.81 113.09 144.02 117.47 150.57C117.79 151.06 118.13 151.57 118.47 152.07C118.55 152.19 118.62 152.32 118.72 152.44C129.06 167.71 143.31 185.5 162.56 207.36L162.57 207.37Z"
          fill="#3F7749"
        />
        <path
          d="M75.99 157.24C83.85 155.6 97.45 153.27 114.28 152.3C114.3 152.3 114.33 152.28 114.34 152.3C114.51 152.28 114.68 152.27 114.87 152.27C116.06 152.19 117.26 152.15 118.49 152.08C128.8 151.65 140.17 151.76 152.09 152.85L153.02 152.93L152.12 142.1L152.06 141.4L150.53 141.52L150.58 142.09L151.32 151.22C139.3 150.17 127.84 150.09 117.48 150.57C116.26 150.63 115.07 150.69 113.88 150.76C109.71 151.01 105.74 151.33 102.01 151.72H101.96C89.91 152.96 80.31 154.72 74.47 155.98L75.98 157.23L75.99 157.24Z"
          fill="#3F7749"
        />
        <path
          d="M174.48 168.51C174.22 167.02 172.91 165.88 171.34 165.88C169.59 165.88 168.15 167.32 168.15 169.07C168.15 170.82 169.59 172.26 171.34 172.26C172.92 172.26 174.23 171.12 174.48 169.61C174.52 169.44 174.53 169.26 174.53 169.08C174.53 168.9 174.51 168.71 174.48 168.53V168.51ZM171.34 171.16C170.19 171.16 169.24 170.22 169.24 169.06C169.24 167.9 170.19 166.96 171.34 166.96C172.49 166.96 173.45 167.91 173.45 169.06C173.45 170.21 172.5 171.16 171.34 171.16Z"
          fill="#3F7749"
        />
        <path
          d="M151.34 133.1C148.84 133.1 146.8 135.14 146.8 137.64C146.8 139.86 148.44 141.73 150.57 142.09C150.82 142.15 151.08 142.17 151.34 142.17C151.6 142.17 151.87 142.15 152.11 142.09C154.23 141.73 155.86 139.87 155.86 137.64C155.86 135.14 153.82 133.1 151.33 133.1H151.34ZM151.34 140.62C149.69 140.62 148.34 139.28 148.34 137.64C148.34 136 149.68 134.64 151.34 134.64C153 134.64 154.32 135.98 154.32 137.64C154.32 139.3 152.98 140.62 151.34 140.62Z"
          fill="#3F7749"
        />
        <path
          d="M230.3 170.23L229.24 171.02C228.96 171.24 228.68 171.45 228.39 171.65H228.37C196.87 169.5 178.09 169.92 174.45 170.03C174.03 170.03 173.8 170.05 173.79 170.05L173.71 168.5C173.71 168.5 173.97 168.48 174.45 168.48C178.33 168.36 198.41 168.01 230.3 170.22V170.23Z"
          fill="#3F7749"
        />
        <path
          d="M230.55 147.67C230.83 147.74 231.12 147.82 231.32 148.07C231.69 148.55 231.46 149.32 231.19 149.89C229.2 153.97 225.67 156.67 222.05 158.61C220.51 159.43 218.91 160.16 217.22 160.28C215.21 160.43 213.27 159.71 211.32 158.99C210.15 158.56 209.87 157.03 210.81 156.21C213.8 153.57 216.77 150.86 219.83 148.36C222.89 145.86 226.94 146.81 230.56 147.68L230.55 147.67Z"
          fill="#A2E2B7"
        />
        <path
          d="M80.1201 145.96C83.0601 144.49 86.4701 143.79 90.3301 143.51"
          stroke="#A2E2B7"
          stroke-width="3"
          strokeMiterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M94.6599 135.05C99.4599 133.89 103.79 132.96 108.59 133.12"
          stroke="#A2E2B7"
          stroke-width="5"
          strokeMiterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M176.29 197.43C178.466 197.43 180.23 195.666 180.23 193.49C180.23 191.314 178.466 189.55 176.29 189.55C174.114 189.55 172.35 191.314 172.35 193.49C172.35 195.666 174.114 197.43 176.29 197.43Z"
          fill="#469E57"
        />
        <path
          d="M188.93 189.27C190.543 189.27 191.85 187.963 191.85 186.35C191.85 184.737 190.543 183.43 188.93 183.43C187.317 183.43 186.01 184.737 186.01 186.35C186.01 187.963 187.317 189.27 188.93 189.27Z"
          fill="#469E57"
        />
        <path
          d="M178.56 186.11C180.173 186.11 181.48 184.803 181.48 183.19C181.48 181.577 180.173 180.27 178.56 180.27C176.947 180.27 175.64 181.577 175.64 183.19C175.64 184.803 176.947 186.11 178.56 186.11Z"
          fill="#469E57"
        />
        <path
          d="M222 49.44C227.98 53.15 233.32 59.6 233.49 66.64C233.54 68.62 230.93 69.68 230.57 69.77C227.95 70.4 225.97 69.98 223.53 68.85C220.99 67.68 219.52 65.05 217.94 62.74C215.43 59.09 212.26 55.9 208.61 53.37C205.12 50.95 198.41 45.76 206.61 45.29C211.84 44.99 217.59 46.7 222 49.43V49.44Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5_736"
            x1="161.41"
            y1="82.67"
            x2="160.21"
            y2="223.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.38" stop-color="#469E57" />
            <stop offset="1" stop-color="#A2E2B7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
