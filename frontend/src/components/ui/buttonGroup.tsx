import { Button } from "./button";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const ButtonGroup = ({ buttons, isSelected, setIsSelected }: any) => {
	return (
		<div className="button-group">
			{buttons.map((text: string, index: number) => {
				return (
					<Button
						key={text}
						className="mt-2"
						variant={isSelected === index ? "third" : "fourth"}
						onClick={() => setIsSelected(index)}
					>
						{text}
					</Button>
				);
			})}
		</div>
	);
};
