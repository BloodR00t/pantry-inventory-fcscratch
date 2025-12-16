// client/src/components/pantry/PantryItemContainer.tsx
import React from 'react';
import './pantry.css';
import PantryItem, { type PantryItemType } from './PantryItem.tsx';

type Props = {
  items: PantryItemType[];
  loading: boolean;
  error: string;
  onUpdate: (name: string) => void;
  onDelete: (name: string) => void;
};

const PantryItemContainer = ({ items, loading, error, onUpdate, onDelete }: Props) => {
  if (loading) {
    return (
      <section className="pantry-container">
        <div className="pantry-meta">
          <h2 className="section-title">Your pantry</h2>
          <p className="section-subtitle">Loading items…</p>
        </div>

        <div className="pantry-grid">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="skeleton-card" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pantry-container">
        <div className="pantry-meta">
          <h2 className="section-title">Your pantry</h2>
          <p className="error-text">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pantry-container">
      <div className="pantry-meta">
        <h2 className="section-title">Your pantry</h2>
        <p className="section-subtitle">{items.length} item{items.length === 1 ? '' : 's'}</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <p className="empty-title">No items yet.</p>
          <p className="empty-subtitle">Add something above to start tracking your pantry.</p>
        </div>
      ) : (
        <div className="pantry-grid">
          {items.map((pItem) => (
            <PantryItem
              key={pItem._id ?? pItem.name}
              pantryItem={pItem}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PantryItemContainer;


// interface PantryItemType {
//   _id?: string;
//   name: string;
//   category?: string;
//   quantity: number;
//   unitType?: string;
//   threshold?: number;
//   // expirationDate?: string;
// }

// const PantryItemContainer = () => {
//   const [pItems, setPItems] = useState<PantryItemType[]>([]);

//   useEffect(() => {
//     async function getPantryItems() {
//       const response = await fetch('http://localhost:3000');
//       if (!response.ok) {
//         const message = `An error occurred: ${response.statusText}`;
//         console.error(message);
//         return;
//       }
//       const items = await response.json();
//       setPItems(items);
//     }
//     getPantryItems();
//     return;
//   }, []);

//   console.log(`Items: ${pItems}`);

//   return (
//     <div className='pantry-container'>
//       {pItems.map((pItem) => (
//         <PantryItem key={pItem._id} pantryItem={pItem} />
//       ))}
//     </div>
//   );
// };

// export default PantryItemContainer;
