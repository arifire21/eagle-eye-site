import { Button } from '@mui/base/Button';
import { HiArrowRight } from 'react-icons/hi'
import Link from 'next/link';

interface ButtonProps {
  variant: string;
  text: string;
  link: string;
}

export default function CTAButton({variant, text, link} : ButtonProps) {
  return  <Button className={`button ${variant}`}>
            <Link href={link} style={{textDecoration:'none'}}>{text}</Link> <HiArrowRight style={{verticalAlign: 'bottom'}}/>
          </Button>;
}
