import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/usersapp/Register';
import Login from './components/usersapp/Login';
import RootLayout from './RootLayout';
import AboutUs from './components/usersapp/AboutUs';
import Home from './components/usersapp/Home';
import  Userprofile from './components/user-profile/Userprofile'
import Products from './components/products/Products';
 
import Gold from './components/gold/Gold';
import Diamond from './components/diamond/Diamond';
import Silver from './components/silver/Silver';
import LegalServices from './components/legalservices/LegalServices';
import BankLoan from './components/legalservices/BankLoan';
import LegalVerification from './components/legalservices/LegalVerification';
import PostLand from './components/postLand/PostLand';
import Help from './components/help/Help'; 
import General from './components/postLand/General';
import Dashboard from './components/postLand/Dashboard';
import Footer from './components/usersapp/Footer';
function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<RootLayout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/Register",
            element:<Register/>
          },
          {
            path:"/Login",
            element:<Login/>
          },
          {
            path:"/AboutUs",
            element:<AboutUs/>
          },
          {
            path:"/Help",
            element:<Help/>
          },
          {
              path:"/Diamond",
              element:<Diamond/>
          },
           
          {
            path:"/Silver",
            element:<Silver/>,
             
          },
            
          {
            path:"/LegalServices",
            element:<LegalServices/>,
            children:[
              {
                path:"BankLoan",
                element:<BankLoan/>
              },
              {
                path:"LegalVerification",
                element:<LegalVerification/>
              }
               
               
            ]
          },
          {
            path:"/PostLand",
            element:<PostLand/>,
            children:[
              {
                path:"Dashboard",
                element:<Dashboard/>
              },
              {
                path:"General",
                element:<General/>
              }
            ]
             
          },
           
          
          {
              path:"/Gold",
              element:<Gold/>,
               
          },
          {
              path:"/UserProfile",
              element:<Userprofile/>,
              children:[
                {
                  path:"Products",
                  element:<Products/>
                }
                 
              ]
          },
          {
            path:"/Footer",
            element:<Footer/>
          }
          
           
        ]
      }
       
  ])
  return (
    <div  className='main'>
      
       
      <RouterProvider router={router} />
      </div>

     
  );
}

export default App;
