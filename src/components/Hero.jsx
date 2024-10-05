
const Hero = () => {
  return (
    <header className="hero bg-cover bg-center min-h-[70vh] text-white flex justify-center items-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683133553448-4484a17fa6d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="bg-black bg-opacity-50 p-16 text-center">
        <h1 className="text-4xl">Welcome to Shopp</h1>
        <p className="mt-2 text-lg">Order your favourite item</p>
      </div>
    </header>
  );
};

export default Hero;
