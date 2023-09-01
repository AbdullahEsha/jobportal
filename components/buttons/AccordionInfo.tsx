'use client'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material'
import Image from 'next/image'

const AccordionInfo = ({ isOpen, onToggle }: any) => {
  return (
    <Accordion sx={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}>
      <AccordionSummary
        expandIcon={isOpen ? <RemoveIcon /> : <AddIcon />}
        onClick={onToggle}
      >
        <Typography component="p" fontWeight="600" color="#0009">
          Sales & Marketing
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          display="flex"
          alignItems="center"
          pl="10px"
          justifyContent="space-between"
          sx={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
            borderRadius: '5px',
            '&:hover': {
              borderColor: '#ccc',
            },
            '&:hover button': {
              backgroundColor: '#182f59',
              color: '#fff',
              border: '1px solid #182f59',
            },
          }}
        >
          <Typography component="p">Sales Manager</Typography>
          <Button
            variant="text"
            color="primary"
            sx={{ border: '1px solid #ccc' }}
          >
            Apply Now
            <Image
              src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg"
              alt="Flag 1"
              height={20}
              width={20}
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                verticalAlign: 'middle',
                marginLeft: '5px',
              }}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bd.svg"
              alt="Flag 2"
              height={20}
              width={20}
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                verticalAlign: 'middle',
                marginLeft: '5px',
              }}
            />
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionInfo
