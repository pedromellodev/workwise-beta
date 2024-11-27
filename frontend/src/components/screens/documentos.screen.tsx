type RenderComponentProps = {
	nomeFuncionario: string;
};

type RenderComponentType = (
	props: RenderComponentProps,
) => JSX.Element | null | undefined;

const Documentos: RenderComponentType = ({ nomeFuncionario }) => {
	return (
		<div className="space-y-4 mb-8">
			<div className="bg-purple-400 text-center py-2 rounded-md">
				<h2 className="text-white">Documentação</h2>
			</div>
		</div>
	);
};

export default Documentos;
