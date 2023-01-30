// import utils from 'common-ui/utils'
import { utils } from 'common-ui'

export default function Button2() {
    const onClick = () => {
        utils.test('button2')
    }
    return (
        <div className="common-button2">
            <div>Im a common button2</div>
            <button onClick={onClick}>Click</button>
        </div>
    )
}