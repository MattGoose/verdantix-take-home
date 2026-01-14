import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import verdantixLogo from'../assets/verdantix.png'

const RootLayout = () => (
  <>
    <nav className="navbar navbar-expand-md">
        <div className="container">
            <div className="d-flex justify-content-between w-100">
                <Link className="border-0" to="/">
                    <img className="img-fluid" src={verdantixLogo} />
                </Link>

                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/">For Corporate</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/investor">For Investors</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/blog">Blog</Link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
    <Outlet />
    {/* <TanStackRouterDevtools /> */}
  </>
)

export const Route = createRootRoute({ component: RootLayout })