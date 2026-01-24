import { useLocation, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

type LogoItem = {
  title: string
  route: string
  id: string
}

function TabPanel({
  value,
  index,
  children,
}: {
  value: number
  index: number
  children: React.ReactNode
}) {
  return (
    <div hidden={value !== index} style={{ width: '100%'}}>
      {value === index && (
        <Box sx={{ pt: 4 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

export default function CompanyDetails() {
  const location = useLocation()
  const company = location.state as LogoItem | undefined
  const [tab, setTab] = useState(0)

  if (!company) return <Navigate to="/" replace />

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#5a4e4e",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', pt: 6, pb: 4 }}>
        <img
          src={company.route}
          alt={company.title}
          style={{ height: 110, objectFit: 'contain', borderRadius: '8px'}}
        />
        <Typography variant="h5" sx={{ mt: 2 }}>
          {company.title}
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          centered
        >
          <Tab label="Info" />
          <Tab label="Salary" />
          <Tab label="Commuting" />
        </Tabs>
      </Box>

      {/* Content wrapper */}
      <Box
        sx={{
          flex: 1,                  
          display: 'flex',
          justifyContent: 'center', 
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 900,          
            px: 3,
          }}
        >
          <TabPanel value={tab} index={0}>
            <Typography variant="body1" align="center">
              General information about {company.title} goes here.
            </Typography>
          </TabPanel>

          <TabPanel value={tab} index={1}>
            <Typography variant="body1" align="center">
              Salary ranges, benefits, and compensation details.
            </Typography>
          </TabPanel>

          <TabPanel value={tab} index={2}>
            <Typography variant="body1" align="center">
              Office locations, commuting options, and transport info.
            </Typography>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  )
}
