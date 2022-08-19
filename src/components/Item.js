import React from "react";
import './Item.css'
import Counter from "./Counter";
import {ThumbUpRounded, EditRounded, DeleteRounded} from '@material-ui/icons';


const Item = ({item, deleteItem, packedItem, setItemEdit, itemEdit, handleItemText, itemText, editItem}) => {
    return(
        <div className='item' style={{textDecoration: item.packed ? 'line-through' : 'none'}}>
            {itemEdit === item.id ? (<p>
              <input type='text' placeholder="New Item" onChange={handleItemText} value={itemText}/>
              <button onClick={() => editItem(item.id)}>Submit</button>
              </p>) 
              : 
              (<h2>{item.itemName}</h2>)}
        <div className="buttons">
            <Counter/>
            <ThumbUpRounded onClick={() => packedItem(item.id)}/>
            <EditRounded onClick={() => setItemEdit(item.id)}/>
            <DeleteRounded onClick={() => deleteItem(item.id)}/>
        </div>
        </div>
    )
};

export default Item;