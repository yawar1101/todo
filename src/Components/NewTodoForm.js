import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState('')
    function onSubmitHandler(e) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
      }
  return (
    <form className="new-item-form" onSubmit={onSubmitHandler}>
      <div className="form-row">
        <label htmlFor="item" className="labelParent">
          New Item
        </label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add Item</button>
    </form>
  );
}

