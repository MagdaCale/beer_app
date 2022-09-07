import { Link } from 'react-router-dom';
import './App.scss';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: #FFCA41;
  color: #ffff;
  text-decoration: none;
  font-size: 30px;
  border: none;
  font-weight: 900;
  text-align: left;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
`

function App() {
  return (
    <main className="mainApp">
      
      <section className='home-section'>

        <article className='home-page'>
          <img src="./img/christin.png" alt="" />
          <StyledLink to='/all_beers' >All Beers</StyledLink>
        </article>

        <article className='home-description'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequuntur?</p>
        </article>

      </section>

      <section className='home-section'>

        <article className='home-page'>
          <img src="./img/proriat.png" alt="" />
          <StyledLink to='/all_beers/random'>Random Beer</StyledLink>
        </article>

        <article className='home-description'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequuntur?</p>
        </article>
        
      </section>

        
      <div className='comtainer'></div>
    
    </main>
  );
}

export default App;
