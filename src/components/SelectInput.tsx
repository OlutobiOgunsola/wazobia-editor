import React from 'react'

const BlockSelect = (): React.JSX.Element => {
    return <select className="text-[10px] p-1 border border-gray-200 outline-none" title='Select block type'>
        <option value="paragraph">Paragraph</option>
    </select>
}

export default BlockSelect;