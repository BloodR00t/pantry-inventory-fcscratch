import styles from './createContainer.css';

const CreatePantryItemForm = () => {
  return (
    <>
      <div className='create-form'>CreatePantryItemForm</div>
      <form>
        <input type='text' placeholder='Item Name' />
        <input type='number' placeholder='Quantity' />
        <input type='text' placeholder='Category' />
        <input type='Date' placeholder='Expiration Date' />
      </form>
    </>
  );
};

export default CreatePantryItemForm;

/*useForm notes

*/
