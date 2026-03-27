const MainLayout = async ({ children }: LayoutProps<"/[locale]">) => {
	return <div className="h-full p-5">{children}</div>;
};

export default MainLayout;
