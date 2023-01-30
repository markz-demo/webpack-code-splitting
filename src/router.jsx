import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// import Title1 from 'common-ui/components/title1'
import { Title1 } from 'common-ui'
import 'common-ui/less/index.less'
import 'common-ui/init'

const Home = ReactLazy(() => import(/* webpackChunkName: "home" */ './home'))
const Page1 = ReactLazy(() => import(/* webpackChunkName: "page1" */ './page1'))
const Page2 = ReactLazy(() => import(/* webpackChunkName: "page2" */ './page2'))

export default function RootRouter() {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/page1" style={{ marginLeft: 10 }}>Page1</NavLink>
                <NavLink to="/page2" style={{ marginLeft: 10 }}>Page2</NavLink>
            </div>
            <Title1 />
            <div className="border" style={{ padding: 20 }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/page1" element={<Page1 />} />
                    <Route exact path="/page2" element={<Page2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

function ReactLazy(factory) {
    const Lazy = React.lazy(() => factory())
    return class extends React.Component {
        render() {
            return (
                <React.Suspense fallback={null}>
                    <Lazy {...this.props} />
                </React.Suspense>
            )
        }
    }
}