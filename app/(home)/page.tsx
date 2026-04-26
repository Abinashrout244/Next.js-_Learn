const Home = () => {
  const name: string = "Welcome To new Journy";
  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <h1 className="text-2xl font-semibold text-white">{name}</h1>
    </div>
  );
};

export default Home;
