import AddMovie from "./components/AddMovie";
import List from "./components/List";
import {ListProvider} from './components/ListContext';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
     
    <ListProvider>
      <Nav/>
      <AddMovie/>
      <List/>


    </ListProvider>
    </div>
  );
}

export default App;
