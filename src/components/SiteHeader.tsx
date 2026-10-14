import { MainNavbar } from './MainNavbar'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="header-container utility-content">
          <span>Traveltodo, votre agence de voyage en ligne</span>
          <a href="#destinations-title">Découvrez nos destinations</a>
        </div>
      </div>
      <MainNavbar />
    </header>
  )
}
