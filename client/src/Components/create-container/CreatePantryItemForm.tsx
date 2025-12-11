import styles from './createContainer.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
// import { z } from 'zod';

//I'll go down a rabbit hole if I keep looking at data validation.
// const schema = z.object({
//   name: z.string().required("Item is required");

// });

type FormFields = {
  _id?: string;
  name: string;
  category?: string;
  quantity: number;
  unitType?: string;
  threshold?: number;
  expirationDate?: Date;
};

const CreatePantryItemForm = () => {
  // const { register, handleSubmit } = useForm<FormFields>();

  // const onSubmit: SubmitHandler<FormFields> = (data) => {
  //   console.log(data);
  // };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (err) {
      setError('name', { message: 'You entered something wrong' });
      console.log(err);
    }
  };
  return (
    <>
      <div>CreatePantryItemForm</div>
      <form className='create-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: true,
          })}
          type='text'
          placeholder='Item Name'
        />
        <input {...register('category')} type='text' placeholder='Category' />
        <input
          {...register('quantity', {
            required: true,
          })}
          type='number'
          placeholder='Quantity'
        />
        <input {...register('unitType')} type='text' placeholder='Unit Type' />
        <input {...register('threshold')} type='text' placeholder='Threshold' />
        <input
          {...register('expirationDate')}
          type='date'
          placeholder='Expiration Date'
        />
        <button disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Filling your pantry!' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default CreatePantryItemForm;

/*useForm notes


*/
