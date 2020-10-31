import React, { useCallback} from 'react';
import Logo from './logoRenderer/LogoRenderer';
import './App.css';

function App() {
const index = 0;
  
const frameCount = 5;
const html = document.documentElement;

  const handleScroll = useCallback(()=> {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction =Number((scrollTop / maxScrollTop).toFixed(2));
    const frameIndex= Math.floor(scrollFraction * frameCount)
    console.log(frameIndex)
  },[])

  window.addEventListener('scroll',handleScroll)

  return (
        <div className="Canvas" >
          <div className='View'  >
            <Logo index={index} />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
             </a>
          </div>
        </div>
  );
}



export default App;
