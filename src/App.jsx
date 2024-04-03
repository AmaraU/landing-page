import styles from './App.module.css';
import { UsedBy } from './components/UsedBy/UsedBy';
import { Welcome } from './components/Welcome/Welcome';

function App() {

  return (
    <div className={styles.App}>
      <Welcome />
      <UsedBy />
    </div>
  )
}

export default App
