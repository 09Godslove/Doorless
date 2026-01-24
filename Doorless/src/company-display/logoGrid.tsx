import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { useEffect, useRef, useState } from 'react'
import { fetchCompanyLogo } from './logos'
import { SubTitle } from '../styledComp'
import { useNavigate } from 'react-router-dom';

type LogoItem = {
  title: string
  route: string
  id: string
  order: number
}

export default function LogoGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [data, setData] = useState<LogoItem[] | null>(null)
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompanyLogo()
      .then(setData)
      .catch(() => setError(true))
  }, [])


  if (error) return <p>Can't display logos</p>
  if (!data) return <p>Loading...</p>

  return (
    <Grid container spacing={2}
      ref={gridRef}
      className="grid-stack"
      style={{ height: '100vh', width: '100vw', border: '1px solid red'  }}
    >
      {data.map((item) => ( 
        <Grid
          container
          direction={'row'} 
          size='auto' 
          key={item.id} 
          sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
          <Card sx={{ width: 200, cursor: 'pointer' }} onClick={() => {
            navigate('/company-info', { state: item });
          }}>
            <CardContent style={{ border: '3px solid green'}} sx={{ height: 200 }}>
              <img 
                src={item.route} 
                alt={item.title}
                style={{ maxWidth: '80%', height: 'auto', objectFit: 'contain' }}
              />
              <SubTitle>{item.title}</SubTitle>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}