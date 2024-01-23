import logoImg from './assets/react-core-concepts.png';
import componentImage from './assets/components.png';
import {CORE_CONCEPTS} from './data.js';
import TabButton from './components/TabButton.jsx';
const reactDescriptions= ['Fundamental', 'Crucial', 'Core' ]
function getRandomInt(max){
    return Math.floor(Math.random()*(max+1));
}

function Header(){
    const descriptions= reactDescriptions[getRandomInt(2)]
    return(
        <header>
        <img src={logoImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptions} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}

function CoreConcepts(props){
    return(
       <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
       </li> 
    )
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                <CoreConcepts 
                    title={CORE_CONCEPTS[0].title}
                    description={CORE_CONCEPTS[0].description}
                    image={CORE_CONCEPTS[0].image}
                />
                <CoreConcepts 
                   {...CORE_CONCEPTS[1]}
                />
                <CoreConcepts {...CORE_CONCEPTS[2]}
                />
                <CoreConcepts 
                   {...CORE_CONCEPTS[3]}
                />
             
            </ul>
        </section>
        <section id='examples'>
                <h2>Examples</h2>
                <menu>
                    <TabButton>Components</TabButton>
                    <TabButton children='JSX'/>
                    <TabButton>Props</TabButton>
                    <TabButton>State</TabButton>
                </menu>
            </section>
      </main>
    </div>
  );
}

export default App;
