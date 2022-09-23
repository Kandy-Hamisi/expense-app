import { useState } from 'react'
import { useDispatch } from 'react-redux'
import categoryConstants from '../constants/categoryConstants'
import { addCategory } from '../features/Categories/categorySlice';
import { closeModal } from '../features/Modal/modalSlice';

const CategoryModal = () => {

    const dispatch = useDispatch();

    const [categoryType, setCategoryType ] = useState({
        id: 0,
        category: ""
    })
    

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        // const selectedCategory = categoryConstants.filter(myItem => myItem.category === value);
        setCategoryType({...categoryType, [name]:value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(categoryType.category) {
            const selectedCategory =  categoryConstants.filter(myItem => myItem.category === categoryType.category)

            const newCategory = {...categoryType, id: selectedCategory[0].id}

            dispatch(addCategory(newCategory));

            dispatch(closeModal());
        }
    }

  return (
    <section className='light-box'>
        <div className='form-container'>
            <div className="wrapper">
                <h4>Add Transaction Category</h4>
                <form action="" name="myForm" className='category-form'>
                    <div className='form-group'>
                        <label htmlFor="category">Category Name</label>
                        <select name="category" id="category" onChange={handleChange} className='form-control'>
                            <option value="">Select Category</option>
                            {
                                categoryConstants.map(item => (
                                    <option key={item.id} value={item.category}>{item.category}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <button onClick={handleSubmit}>Add Category</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default CategoryModal