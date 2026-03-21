import { getExtracted } from "next-intl/server";

export default async function IndexPage() {
	const t = await getExtracted();
	const distributeToColumns = <T,>(items: T[], columnsCount: number): T[][] => {
		const columns: T[][] = Array.from({ length: columnsCount }, () => []);
		items.forEach((item, index) => {
			const column = columns[index % columnsCount];
			if (column) {
				column.push(item);
			}
		});
		return columns;
	};

	console.log(distributeToColumns);
	return <div>{t("hello")}</div>;
}
