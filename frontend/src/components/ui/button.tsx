import { forwardRef, type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
	base: "w-full flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2",

	variants: {
		variant: {
			primary:
				"bg-purple-600 text-violet-50 hover:bg-roxo:detalhes ring-violet-500",
			secondary: "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 ring-zinc-900",
			third:"bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500",
			fourth: "bg-purple-200 text-purple-800 border-2 border-purple-400 font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 active:bg-purple-500",
			fifth: "bg-white text-purple-800 font-semibold py-2 px-4 rounded-lg transition-all duration-300  hover:bg-purple-200  hover:text-white-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"

		},
		size: {
			default: "px-4 py-2.5",
			sm: "px-3 py-1.5",
		},
	},

	defaultVariants: {
		variant: "primary",
		size: "default",
	},
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				{...props}
				ref={ref}
				className={button({ variant, size, className })}
			/>
		);
	},
);

Button.displayName = "Button";
