import React, {useState} from 'react';
import './App.css';
import Item from './components/Item';
import Header from './components/Header';

function App() {

  const [itemList, setItemList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [itemEdit, setItemEdit] = useState(null);
  const [itemText, setItemText] = useState('');

  const handleInputValue = (event) => {
      setInputValue(event.target.value);
  }

  const handleItemText = (event) => {
    setItemText(event.target.value);
  }

  const addItem = () => {
      const item = {
        id: itemList.length === 0 ? 1 : itemList[itemList.length - 1].id + 1,
        itemName: inputValue,
        packed: false
      }
      setItemList([...itemList, item]);
  }

  const deleteItem = (id) => {
      setItemList(itemList.filter((item) => {
        if(item.id === id) {
          return false
        } else {
          return true
        }
      }))
  }

  const packedItem = (id) => {
    setItemList(itemList.map((item) => {
      if (item.id === id) {
        return {...item, packed: true};
      } else {
        return item
      }
    }))
  }

  const editItem = (id) => {
    const updatedItem = itemList.map((item) => {
      if (item.id === id) {
        item.itemName = itemText
      }
        return item
    })
    setItemList(updatedItem);
    setItemEdit(null);
    setItemText('');
}




  return (
    <>
    <Header />
    <div className="form">
      <input type='text' placeholder='Enter Item' onChange={handleInputValue}/>
      <button type='submit' onClick={addItem}>Add</button> 
    </div>
    <div>
      {itemList.map((item) => {
          return (
            <Item 
            item={item} 
            deleteItem={deleteItem}
            packedItem={packedItem}
            setItemEdit={setItemEdit}
            itemEdit={itemEdit}
            handleItemText={handleItemText} 
            itemText={itemText}
            editItem={editItem}
            />
          )
      })}
    </div>
    </>
  );
}

export default App;
