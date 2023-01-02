import { Meta, Links } from "@remix-run/react"
import styles from './styles/index.css'           // Se cargara en todas las paginas

//---> Funcion para el componente importado 'Meta'
//---> Añadir informacion a la pagina
export function meta() {
  return (
    {
      charset: 'utf-8',
      title: 'GuitarLa-Remix',
      viewport:'width=device-width,initial-scale=1'
    }
  )
}

//---> Funcion para el componente importado 'Links'
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    }      
  ]
}

//---> Componente principal
export default function App() {
  return (
    <Document>
      <h1>Header 1</h1>
    </Document>
  )
}

//---> Componente para darle formato a la pagina
function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}