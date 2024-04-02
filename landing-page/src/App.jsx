import styles from './App.module.css';
import { Welcome } from './components/Welcome';

function App() {

  return (
    <div className={styles.App}>
      <Welcome />
    </div>
  )
}

export default App
