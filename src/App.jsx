import { Router } from "./Router/Router"
import { GlobalStyle, MainPage } from "./GlobalStyle"

export const App = () => {

  return (
    <MainPage>
      <GlobalStyle />
      <Router />
    </MainPage>
  )
}

