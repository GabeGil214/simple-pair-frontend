import React from 'react'

function AddItem(){

  return(
    <div className="col-xs-12 col-md-8">
      <div className="form-group"><p className="input-label">Food Item</p><input className="form-control" type="food-item" name="food-item" /></div>
      <div className="form-group"><p className="input-label">Description</p><input className="form-control" type="description" name="description" /></div>
      <div className="form-group"><p className="input-label">Category</p><input className="form-control" type="category" name="category" /></div>
    </div>
  )
}

export default AddItem;
