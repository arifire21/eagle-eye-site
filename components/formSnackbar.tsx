import { Button, Snackbar, SnackbarCloseReason } from '@mui/base';
import { useEffect, useState } from 'react';
import { HiExclamation, HiCheck, HiQuestionMarkCircle, HiOutlineX } from "react-icons/hi";

interface SnackbarProps {
    state: string;
    isOpen: boolean
}

export default function FormSnackbar({state, isOpen} : SnackbarProps) {

    const [icon, setIcon] = useState(<HiQuestionMarkCircle color='gray'/>)
    // const [iconColor, setIconColor] = useState<string>('gray')
    const [title, setTitle] = useState<string>('Null state')
    const [description, setDescription] = useState<string>(`You shouldn't see this`)

    const [open, setOpen] = useState(false);
    const [exited, setExited] = useState(true);
  
    // const handleClose = (_: any, reason: SnackbarCloseReason) => {
    //   if (reason === 'clickaway') {
    //     return;
    //   }
  
    //   setOpen(false);
    // };

    const handleClose = () => {
        setOpen(false)
    }
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleOnEnter = () => {
      setExited(false);
    };
  
    const handleOnExited = () => {
      setExited(true);
    };

    useEffect(() => {
        switch (state) {
            case 'success':
                setIcon(<HiCheck color='green'/>)
                setTitle(`Quote submitted!`)
                setDescription(`Thank you!`)
                break;
            case 'warning':
                setIcon(<HiExclamation color='yellow'/>)
                setTitle(`Quote not submitted!`)
                setDescription(`Please check all form fields.`)
                break;
            case 'error':
                setIcon(<HiExclamation color='red'/>)
                setTitle(`Quote not submitted!`)
                setDescription(`Error. TBD.`)
            break;
            default:
                setIcon(<HiQuestionMarkCircle color='gray'/>)
                setTitle('Null state')
                setDescription(`You shouldn't see this`)
                break;
        }
    }, [state]);

    return(
        <Snackbar open={open} autoHideDuration={3000}>
            {icon}
            <div className="snackbar-message">
            <p className="snackbar-title">{title}</p>
            <p className="snackbar-description">{description}</p>
            </div>
            <Button onClick={handleClose} className="snackbar-close-icon"><HiOutlineX/></Button>
        </Snackbar>
    )
}