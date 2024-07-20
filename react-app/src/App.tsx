import './App.css'
import ListGroup from './components/ListGroup';
import Message from './Message'

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'Test',
    'Something'
  ];

  const handleSelectItem = (item: string) => console.log("from Parent:" + item)

  let title = "Cities"

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
}

export default App
