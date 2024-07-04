import React from 'react'

const Block = ({ blockObject, HandleInput }: { blockObject: Record<string, any>, HandleInput: (id: number, value: any) => void}): React.JSX.Element => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const handleInput = (event: React.SyntheticEvent) => {
        const value = divRef?.current?.innerHTML;
        console.log('value', value)
        return HandleInput(blockObject.id, value)
    }
    
    React.useEffect(()=>{
        if(blockObject.focus) {
            divRef?.current?.focus();
        }
    }, [])
    
    return <>
        {/* {blockObject.type === "p" && <p contentEditable className="text-xs outline-none">
            {blockObject.content}
        </p> } */}
        <div
            className={`outline-none text-xs py-2 ${blockObject.type === "link" ? "text-blue-700 hover:underline" : ""}`}
            ref={divRef}
            contentEditable={blockObject.type !== "link"}
            data-placeholder="Add new paragraph"
            dangerouslySetInnerHTML={{__html: blockObject.content}}
            onInput={handleInput}
        ></div>
    </>
}

export default Block