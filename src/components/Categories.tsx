import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCategory } from '../features/Categories/categorySlice';
import { openModal } from '../features/Modal/modalSlice';
import CategoryModal from './CategoryModal';

const Categories = () => {
    const allCategories = useSelector((state: any) => state.category.categoryList);
    const modalState = useSelector((state: any) => state.modal.modalState);
    const dispatch = useDispatch();
  return (
    <div>
        <div>
            <h5>All Categories</h5>
            <ul>
                {
                    allCategories.map((cat:any) => (
                        <li key={cat.id} className="cat-list-item">
                            <span>{cat.category}</span>
                            <span>
                                <button
                                    onClick={() => dispatch(removeCategory(cat.id))}
                                >
                                    Remove Category
                                </button>
                            </span>
                        </li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => dispatch(openModal())}>Add Category</button>
            </div>
        </div>
        {modalState && <CategoryModal/>}
    </div>
  )
}

export default Categories