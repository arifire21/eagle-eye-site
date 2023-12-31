import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import styles from '@/styles/form.module.scss'
import { TextareaAutosize } from '@mui/base';

// interface ButtonProps {
//   variant: string;
//   text: string;
// }

export default function QuoteForm() {
  return(
    <form className={styles.form}>
      <FormControl defaultValue="" required>
        <label className={styles.label}>First and Last Name <sup>*</sup></label>
        <Input className={styles.formInput} aria-label="Full Name input" />
      </FormControl>

      <FormControl defaultValue="" required>
        <label className={styles.label}>Email <sup>*</sup></label>
        <Input aria-label="Email input" placeholder="example@domain.com" type='email'/>
      </FormControl>

      <FormControl defaultValue="" required>
        <label className={styles.label}>Name of Complex or Business<sup>*</sup></label>
        <Input aria-label="Name of Complex or Business input" />
      </FormControl>

      <FormControl defaultValue="" required>
        <label className={styles.label}>Address of Complex or Business <sup>*</sup></label>
        <Input aria-label="Address of Complex or Business input"/>
      </FormControl>

      <label className={styles.label}>Service Requested <sup>*</sup></label>
      <FormControl defaultValue="" required className={styles.radioContainer}>
        <div className={styles.radioItem}>
          <Input id='monitor' name='service-radio' aria-label="Monitoring/Enforcement radio button input" type='radio'/>
          <label htmlFor='monitor'>Monitoring/Parking</label>
        </div>
        <div className={styles.radioItem}>
          <Input id='paint' name='service-radio' aria-label="Painting radio button input" type='radio'/>
          <label htmlFor='paint'>Painting</label>
        </div>
      </FormControl>

      <FormControl defaultValue="" required>
        <label className={styles.label}>Additional Details <sup>*</sup></label>
        <TextareaAutosize className={styles.formInput} aria-label="Details of service Textarea" minRows={4} />
      </FormControl>
    </form>
  )
}
