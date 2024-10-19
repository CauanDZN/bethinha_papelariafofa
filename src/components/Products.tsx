import React from 'react';
import './Products.css';

const Products: React.FC = () => {
  const products = [
    { id: 1, name: 'Caderno Fofinho', image: '/images/produto-1.jpg' },
    { id: 2, name: 'Caneta Colorida', image: '/images/produto-2.jpg' },
    { id: 3, name: 'Adesivos Divertidos', image: '/images/produto-3.jpg' },
    { id: 4, name: 'Post-it Amoroso', image: '/images/produto-4.jpg' },
    { id: 5, name: 'Mochila Linda', image: '/images/produto-5.jpg' },
    { id: 6, name: 'Estojo Estiloso', image: '/images/produto-6.jpg' },
    { id: 7, name: 'Lápis de Cor', image: '/images/produto-7.jpg' },
    { id: 8, name: 'Copo Térmico', image: '/images/produto-8.jpg' },
    { id: 9, name: 'Régua Criativa', image: '/images/produto-9.jpg' },
    { id: 10, name: 'Canecas Fofas', image: '/images/produto-10.jpg' },
    { id: 11, name: 'Caderno de Anotações', image: '/images/produto-11.jpg' },
  ];

  const handleProductClick = (productName: string) => {  // Definição do tipo
    const message = `Oi! Quero comprar ${productName}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="products">
      <h2>Nossos Produtos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => handleProductClick(product.name)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
