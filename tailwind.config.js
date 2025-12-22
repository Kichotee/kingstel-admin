/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const PRIMARY = {
  primary: "#0F00BD",
  secondary: "#4C3B57",
  tertiary: "#4F3954",
};

const NEUTRAL = {
  black: "#191D24",
  white: "#FFFFFF",
  border: "#C9CFD9",
  bg: "#FAFAFA",
  commonBg: "#E1E1EC",
  bodyText: "#000000",
  sideBar: "#FFFFFFCC",
  greyBg: "#F9FAFB",
  offBlue: "#D1DFFE",
  offwhite:"f0f2f5"
};

const ERROR = {
  150: "#910D2C",
  critical: "#DA1414",
  100: "#E30000",
  50: "#EC1C24",
};

const WARNING = {
  150: "#996B00",
  100: "#FFD166",
  50: "#FFF0CC",
};

const TINT = {
  250: "#82CAF2",
  200: "#B1DEF7",
  150: "#DFF1FC",
  100: "#E8F5FD",
  50: "#F1F9FE",
};

const SUCCESS = {
  500: "#039855",
  150: "#147931",
  100: "#2FBE22",
  50: "#D5FCEB",
};
const SHADE = {
  250: "#06293C",
  200: "#0B486A",
  150: "#106898",
  100: "#1587C6",
  50: "#26A3E8",
};

const GREY = {
  100: "#8A8A8A",
};

const BORDER = {
  primary: "#AAAAAA",
  secondary: "#CDCED9",
};
const TEXT = {
  main: "#2E2C34",
  sub: "#5D5969",
  blue: "#19184E",
  offWhite: "#EBE7EF",
};

const palette = {
  brand: {
    ...PRIMARY,
  },
  success: {
    ...SUCCESS,
  },
  text: {
    ...TEXT,
  },
  shade: {
    ...SHADE,
  },
  tint: {
    ...TINT,
  },
  warning: {
    ...WARNING,
  },
  grey: {
    ...GREY,
  },
  error: {
    ...ERROR,
  },
  neutral: {
    ...NEUTRAL,
  },
  border: {
    ...BORDER,
  },
};
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
                ...colors,
                ...palette,
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'Helvetica',
  				'Segoe UI'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

