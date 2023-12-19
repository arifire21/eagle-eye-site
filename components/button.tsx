import { Button } from '@mui/base/Button';
import { HiArrowRight } from 'react-icons/hi'

interface ButtonProps {
  variant: string;
  text: string;
}

export default function CTAButton({variant, text} : ButtonProps) {
  return <Button className={`button ${variant}`}>{text} <HiArrowRight style={{verticalAlign: 'bottom'}}/></Button>;
}
