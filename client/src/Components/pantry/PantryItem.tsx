// client/src/components/pantry/PantryItem.tsx
import React from 'react';

export interface PantryItemType {
  _id?: string;
  name: string;
  category?: string;
  quantity: number;
  unitType?: string;
  threshold?: number;
}

type PantryItemProps = {
  pantryItem: PantryItemType;
  onUpdate: (name: string) => void;
  onDelete: (name: string) => void;
  disabled?: boolean;
};

const PantryItem = ({ pantryItem, onUpdate, onDelete, disabled = false }: PantryItemProps) => {
  const { name, category, quantity, unitType, threshold } = pantryItem;

  return (
    <article className="pantry-card">
      <div className="pantry-card__top">
        <h3 className="name">{name.toUpperCase()}</h3>
        {category ? <span className="pill">{category.toLowerCase()}</span> : <span className="pill pill--muted">uncategorized</span>}
      </div>

      <ul className="listItems">
        <li className="quantity">
          <span className="label">Quantity</span>
          <span className="value">
            {quantity}
            {unitType ? <span className="unit"> {unitType.toLowerCase()}</span> : null}
          </span>
        </li>

        {typeof threshold === 'number' && (
          <li className="threshold">
            <span className="label">Threshold</span>
            <span className="value">{threshold}</span>
          </li>
        )}
      </ul>

      <div className="button-container">
        <button
          type="button"
          onClick={() => onUpdate(name)}
          disabled={disabled}
          className="button button--ghost"
        >
          Update
        </button>

        <button
          type="button"
          onClick={() => onDelete(name)}
          disabled={disabled}
          className="button button--danger"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default PantryItem;















// import React from 'react';

// export interface PantryItemType {
//   _id?: string;
//   name: string;
//   category?: string;
//   quantity: number;
//   unitType?: string;
//   threshold?: number;

// type PantryItemProps = {
//   pantryItem: PantryItemType;
//   onUpdate: (name: string) => void;
//   onDelete: (name: string) => void;
//   disabled?: boolean;
// };
//   onButtonClick?: () => void;
//   // buttonText?: string;
//   buttonDisabled?: boolean;
//   }

// interface PantryItemProps {
//   pantryItem: PantryItemType;
// }

// // function to convert Date to a React readable format
// // const formatExpirationDate = (date?: Date): string => {
// //   if (!date) {
// //     return "N/A";
// //   }
// //   return new Intl.DateTimeFormat('en-US', {
// //     year: 'numeric',
// //     month: '2-digit',
// //     day: '2-digit',
// //   }).format(date);
// // };

// const PantryItem = ({ pantryItem }: PantryItemProps) => {
//   // deconstruct pantryItem
//   const { name, category, quantity, unitType, threshold, onButtonClick, buttonDisabled = false } =
//     pantryItem;

    
//     const handleClick = () => {
//       if (onButtonClick) {
//         onButtonClick();
//       }
//      console.log("button works"); 
//     }
//   return (
//     <>
//       <article className='pantry-card'>
        
//           <h3 className='name'> { name.toUpperCase() }</h3>
//           <ul className='listItems'>
//             {category && <li className='category'>Category: { category.toLowerCase() }</li>}
//             <li className='quantity'>Quantity: { quantity }</li>
//            {unitType && <li className='unitType'>Unit: { unitType.toLowerCase() }</li>}
//             {threshold && <li className='threshold'>Buy more if you have less than { threshold }</li>}
//            {/* {expirationDate && <li className='expirationDate'>Expiration date: { formatExpirationDate(expirationDate) }</li>} */}
//           </ul>
//           <div className="button-container">
//            <button onClick={handleClick}
//           disabled={buttonDisabled}
//           className="button">Update Item</button>
//           <button onClick={handleClick}
//           disabled={buttonDisabled}
//           className="button">Delete Item</button>
//           </div>
        
//       </article>
//     </>
//   );
// };

// export default PantryItem;


