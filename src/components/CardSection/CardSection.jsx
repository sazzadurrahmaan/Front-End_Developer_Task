import Card from "./Card";


const cardsData = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Full Sleeved White Shirt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Full Sleeved White Shirt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Full Sleeved White Shirt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Full Sleeved White Shirt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  }
];

const CardsSection = () => {
  return (
    <section className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default CardsSection;
