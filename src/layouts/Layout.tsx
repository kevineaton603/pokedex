const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center dark:bg-slate-700 dark:text-white">
      <header className="sticky top-0 z-50 mb-2 flex min-h-full w-full flex-col items-center justify-center py-2 dark:bg-slate-800 sm:p-2">
        <h1 className="p-2 font-pokemon text-4xl tracking-widest">POKEDEX</h1>
      </header>
      <main className="flex w-full flex-col items-center">{children}</main>
    </div>
  );
};

export default Layout;
