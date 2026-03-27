import { getExtracted } from "next-intl/server";

// Minimal repro: generic arrow function in a .tsx file.
// The trailing comma in <T,> is required in .tsx to disambiguate
// a generic from a JSX opening tag.
const identity = <T,>(value: T): T => value;

export default async function IndexPage() {
	const t = await getExtracted();
	return <div>{t("hello")} {identity("world")}</div>;
}
