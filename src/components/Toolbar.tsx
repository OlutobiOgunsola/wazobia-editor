import React from 'react'
import BlockSelect from './SelectInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faImage, faAlignLeft, faAlignRight, faAlignCenter, faBold, faItalic, faList, faListOl, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Toolbar = (): React.JSX.Element => {
    return <div className='flex flex-row h-6'>
        <BlockSelect />
        <div className="h-full bg-white border border-gray-200 w-14 flex-row flex justify-between items-center px-2">
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faLink} size="xs"/>
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faImage} size="xs"/>
        </div>
        <div className="h-full bg-white border border-gray-200 w-20 flex-row flex justify-between items-center px-2">
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faAlignLeft} size="xs"/>
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faAlignRight} size="xs"/>
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faAlignCenter} size="xs"/>
        </div>
        <div className="h-full bg-white border border-gray-200 w-14 flex-row flex justify-between items-center px-2">
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faBold} size="xs"/>
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faItalic} size="xs"/>
        </div>
        <div className="h-full bg-white border border-gray-200 w-20 flex-row flex justify-between items-center px-2">
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faList} size="xs"/>
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faListOl} size="xs"/>
            <FontAwesomeIcon className="opacity-50 hover:opacity-100" icon={faBarsStaggered} size="xs"/>
        </div>
    </div>
}

export default Toolbar