import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
//using Inter applies the font throughout the application

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});