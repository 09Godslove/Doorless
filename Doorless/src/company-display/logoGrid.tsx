import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { useEffect, useRef, useState } from 'react'
import { fetchCompanyLogo } from './logos'
import { SubTitle } from '../styledComp'

type LogoItem = {
  title: string
  route: string
  id: string
  order: number
}

export default function LogoGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInstance = useRef<GridStack | null>(null)
  const [data, setData] = useState<LogoItem[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchCompanyLogo()
      .then(setData)
      .catch(() => setError(true))
  }, [])

  // Initialize GridStack AFTER data is loaded
  useEffect(() => {
    if (!gridRef.current || !data || gridInstance.current) return

    gridInstance.current = GridStack.init(
      { 
        margin: 5,
      },
      gridRef.current
    )

    // Cleanup on unmount
    return () => {
      if (gridInstance.current) {
        gridInstance.current.destroy(false)
        gridInstance.current = null
      }
    }
  }, [data]) // Add data as dependency

  if (error) return <p>Can't display logos</p>
  if (!data) return <p>Loading...</p>

  return (
    <div
      ref={gridRef}
      className="grid-stack"
      style={{ height: '100vh', width: '100vw', border: '1px solid red'  }}
    >
      {data.map((item) => (
        <div 
          className="grid-stack-item" 
          data-gs-w="3" 
        //   data-gs-h="2"
          key={item.id}
        >
          <div className="grid-stack-item-content">
            <img 
              src={item.route} 
              alt={item.title}
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
            <SubTitle>{item.title}</SubTitle>
          </div>
        </div>
      ))}
    </div>
  )
}