// import utils from 'common-ui/utils'
import { utils } from 'common-ui'

export default function Button1() {
    const onClick = () => {
        utils.test('button1')
    }
    return (
        <div className="common-button1">
            <div>Im a common button1</div>
            <button onClick={onClick}>Click</button>
        </div>
    )
}