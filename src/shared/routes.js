export const makeMainRoutes = () => {
    return (    
      <Router history={history}>           
          <div>             
              <Route  path="/home" render={(props) => <ContenedorCards auth={auth} {...props} />} /> 
              <Route  path="/porvisitar" render={(props) => <TripsContainer auth={auth} {...props} />}  />      
              <Route  path="/misviajes"  render={(props) => <TripsOption auth={auth} {...props} />} />  
             
          </div>
    </Router>

  )


}
