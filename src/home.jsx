
import './home.less'
import test_big from '@images/test-big.jpg'
import test_small from '@images/test-small.jpg'
import { Button1, Button2, Col, Row, utils } from 'common-ui'

// const { Col, Row } = Grid
// import { Col, Row } from 'common-ui/components/grid'

// import Button1 from 'common-ui/components/button1'
// import Button2 from 'common-ui/components/button2'
// import utils from 'common-ui/utils'

export default function Home() {
    const onClick = () => {
        utils.test('home')
    }
    return (
        <div>
            <h2 className="home-div">Hello World!</h2>
            <button onClick={onClick}>Click</button>
            <div className="mt-16">
                <Button1 />
                <Button2 />
            </div>
            <div className="mt-16">
                <Row>
                    <Col>
                        <div className="border">col1</div>
                    </Col>
                    <Col>
                        <div className="border">col2</div>
                    </Col>
                </Row>
            </div>
            <div className="mt-16">
                <img alt="test" src={test_small} />
                <img alt="test" src={test_big} />
            </div>
        </div>
    )
}