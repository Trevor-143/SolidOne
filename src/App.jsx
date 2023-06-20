import logo from './logo.svg';
import styles from './App.module.css';
// import { createComponent } from 'solid-js/web';
import { createSignal, createEffect } from 'solid-js';
import Counter from './components/Counter';

function App() {

  const [ counter, setCounter ] = createSignal(0)
  
  createEffect(() => {
    console.log('registered')
  })

  // setInterval(() => {
    // setCounter(counter() + 1 )
  // }, 1000);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h3>Simple Counter</h3>
      </header>

      <div class={styles.countDisplay} >
        <Counter value={counter()} />
        <div class={styles.buttons} >
          <button onclick={() => setCounter(counter() - 1)} >Sub</button>
          <button onclick={() => setCounter(counter() + 1)} >Add</button>
          <button onclick={() => setCounter(0) } >Reset</button>
        </div>
      </div>


    </div>
  );
}

export default App;
