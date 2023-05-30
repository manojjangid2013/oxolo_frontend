import { Box } from '@mui/material';

export default function PageBody({ children }: { children: any }) {
  return (
    <Box sx={{ m: 5, display: 'flex', flexDirection: 'column' }}>
      {children}
    </Box>
  );
}
