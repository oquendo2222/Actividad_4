import React from 'react'
import{ Hero } from'../components/Hero';
import{ CreditCard } from'../components/CreditCard';
import{ creditsData } from '../data/creditsData';

export const Home = () => {

  console.log('Datos de créditos', creditsData);
  
  return ( 
    <>
  <Hero
  title = "Encuentra el crédito perfecto para ti"
  subtitle = "Este credito no es un gasto, es la inversion inicial para tu futuro éxito"
  />
  <main className='container'>
    <section className='credits-section'>
      <h3>Nuestros Productos</h3>
      
      <div className='credits-grid'>
        {creditsData.map((credit) =>{
          return(
            <CreditCard
            key={credit.id} // Key identifica cada elemento de forma unica
            credit={credit} //pasamos el objeto completo como prop
            />
          );
        })}
      </div>
    </section>
  </main>
  </>
  
  );
};

