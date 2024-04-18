import styles from './App.module.css';
import { Numbers } from './components/Numbers/Numbers';
import { Page2 } from './components/Page2/Page2';
import { Solutions } from './components/Solutions/Solutions';
import { UsedBy } from './components/UsedBy/UsedBy';
import { Welcome } from './components/Welcome/Welcome';
// import { Blank } from "./Blank";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Insights } from './components/Insights/Insights';
import { BottomFooter } from './components/BottomFooter/BottomFooter';

function App() {

  return (
    <div className={styles.App}>
      <Contact/>
      <Navbar />
      <Welcome />
      <UsedBy />
      <Page2 />
      <Footer/>
      {/* <Blank /> */}
      <Solutions />
      <Insights />
      {/* <BottomFooter /> */}
    </div>
  )
}

export default App
