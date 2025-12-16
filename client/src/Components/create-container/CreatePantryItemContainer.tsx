import React from 'react';
import './createContainer.css';
import CreatePantryItemForm, {FormFields } from './CreatePantryItemForm';

type Props = {
  onCreated: (newItem: FormFields) => void;
};

const CreatePantryItemContainer = ({ onCreated }: Props) => {
  return (
    <section className="create-container">
      <div className="create-card">
        <div className="create-head">
          <h2 className="create-title">Add pantry item</h2>
          <p className="create-subtitle">Fast input. Clean tracking</p>
        </div>
        <CreatePantryItemForm onCreated={onCreated} />
      </div>
    </section>
  );
};

export default CreatePantryItemContainer;






// import './createContainer.css';
// import CreatePantryItemForm from './CreatePantryItemForm';

// const CreatePantryItemContainer = () => {
//   return (
//     <>
//       <div className='create-container'>
//       <CreatePantryItemForm />
//       </div>
//     </>
//   );
// };

// export default CreatePantryItemContainer;
