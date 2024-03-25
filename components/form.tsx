import { FormControl } from '@mui/base/FormControl';
import { Input } from '@mui/base/Input';
import styles from '@/styles/form.module.scss'
import { Button, TextareaAutosize } from '@mui/base';
import { useState } from 'react';
import FormSnackbar from './formSnackbar';

export default function QuoteForm() {
  //form consts/functions
  const [isFormValid, setFormValid] = useState<boolean>(false)
  const [nameInput, setName] = useState<string>("")
  const [emailInput, setEmail] = useState<string>("")
  const [complexNameInput, setComplex] = useState<string>("")
  const [complexAddressInput, setAddress] = useState<string>("")
  const [serviceValue, setService] = useState<string>("")
  const [detailsInput, setDetails] = useState<string>("")

  //snackbar consts
  const [snackbarState, setSnackbarState] = useState<string>(null)
  const [SnackbarOpen, setSnackbarOpen] = useState<boolean>(false)

  const handleValidate = () => {
    if(nameInput || emailInput || complexNameInput || complexAddressInput || serviceValue || detailsInput){
        setSnackbarState('warning')
        setSnackbarOpen(true)
        console.log(nameInput, emailInput, complexNameInput, complexAddressInput, serviceValue, detailsInput)
        // break;
      } else {
        setFormValid(true)
      }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidate();
  
    if(isFormValid){
        console.log('test')
        setSnackbarState('error') // change when api is done
        setSnackbarOpen(true)
    }
  }
  
  return(
    <>
    <form className={styles.form}>
      <FormControl defaultValue="" required>
        <label className={styles.label}>First and Last Name <sup className={styles.req}>*</sup></label>
        <Input className={styles.formInput} aria-label="Full Name input"  onChange={(e) => setName(e.target.value)}/>
      </FormControl>

      <FormControl defaultValue="" required>
        <label className={styles.label}>Email <sup className={styles.req}>*</sup></label>
        <Input placeholder="example@domain.com" aria-label="Email input" type='email' onChange={(e) => setEmail(e.target.value)}/>
      </FormControl>

      <FormControl defaultValue="" required>
        <label className={styles.label}>Name of Complex or Business<sup className={styles.req}>*</sup></label>
        <Input aria-label="Name of Complex or Business input"  onChange={(e) => setComplex(e.target.value)}/>
      </FormControl>

      <FormControl defaultValue="" required>
        <label className={styles.label}>Address of Complex or Business <sup className={styles.req}>*</sup></label>
        <Input aria-label="Address of Complex or Business input" onChange={(e) => setAddress(e.target.value)}/>
      </FormControl>

      <label className={styles.label}>Service Requested <sup className={styles.req}>*</sup></label>
      <FormControl defaultValue="" required className={styles.radioContainer} onChange={(e) => setService(e.target.value)}>
        <div className={styles.radioItem}>
          <Input id='monitor' name='service-radio' aria-label="Monitoring/Enforcement radio button input" type='radio'/>
          <label htmlFor='monitor'>Monitoring/Parking</label>
        </div>
        <div className={styles.radioItem}>
          <Input id='paint' name='service-radio' aria-label="Painting radio button input" type='radio'/>
          <label htmlFor='paint'>Painting</label>
        </div>
      </FormControl>

      <FormControl defaultValue="" required  onChange={(e) => setDetails(e.target.value)}>
        <label className={styles.label}>Additional Details <sup className={styles.req}>*</sup></label>
        <br/>
        <small style={{color:"#333"}}>Describe the scope and/or details about the service you are requesting</small>
        <TextareaAutosize className={styles.formInput} aria-label="Details of Service textarea" minRows={4} />
      </FormControl>

      <Button className='button primary' onClick={handleSubmit} style={{marginTop:'1rem'}}>Submit Quote</Button>
    </form>

    <FormSnackbar state={snackbarState} isOpen={SnackbarOpen}/>
    </>
  )
}
