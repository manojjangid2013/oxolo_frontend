import { Box } from '@mui/material';

export default function PageLayout({ children }: { children: any }) {
  return <Box sx={{ mx: 6, my: 3, width: '100%' }}>{children}</Box>;
}
