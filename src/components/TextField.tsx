import React from 'react'
import Block from './Block';
import AddBlockButton from './AddBlockButton'

// const fields = [
//     {
//         id: 1,
//         type: "p",
//         content: "<p>Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor sit amet</p>",
//         src: null
//     },
//     {
//         id: 2,
//         type: "img",
//         content: null,
//         src: "imgSrc"
//     }
// ]

interface Field {
    id: number,
    type: string,
    content: string,
    focus: boolean,
}
const TextField = (): React.JSX.Element => {
    const generateObjectID = (): number => {
        return Math.floor(Math.random() * 1000000000);
    }
    const [fields, setFields] = React.useState([{id: generateObjectID(), type: '', content: '', focus: false}]);
    const HandleInput = (id: number, value: any):void => {
        console.log('handlign input', id, value)
        fields.forEach(field => {
            if(field.id === id) {
                field.type = "p";
                field.content = `<p>${value}</p>`;
            }
        })
    }
    const HandleImageUpload = (imageBlob: string | ArrayBuffer): void => {
        console.log(imageBlob)
        // create field object
        const newFieldObject = {
            id: generateObjectID(),
            type: "img",
            content: `<img class="w-auto h-60" src=${imageBlob} />`,
            focus: false
        }
        // append to fields array
        const currFields = fields.filter((field) => (field.content !== ""));
        currFields.push(newFieldObject);
        // set fields array
        setFields(oldFields => ([...currFields, {id: generateObjectID(), type: '', content: '', focus: true}]));
        console.log("fields", fields)
    }
    const HandleVideoUpload = (videoURL: string): void => {
        console.log(videoURL)
        // create field object
        const newFieldObject = {
            id: generateObjectID(),
            type: "iframe",
            content: `<iframe class="w-full aspect-video" src=${videoURL} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            focus: false
        }
        
        // append to fields array
        const currFields = fields.filter((field) => (field.content !== ""));
        console.log("new field", currFields)
        currFields.push(newFieldObject);
        // set fields array
        setFields(oldFields => ([...currFields, {id: generateObjectID(), type: '', content: '', focus: true}]));
        console.log("fields", currFields, fields)
    }
    return <div className="py-2 h-60 overflow-y-scroll no-scrollbar">
        {
            fields.map((field: Field) => (<Block HandleInput={HandleInput} blockObject={field} key={field.id}/>))
        }
        <AddBlockButton HandleVideoUpload={HandleVideoUpload} HandleImageUpload={HandleImageUpload} />
    </div>
}

export default TextField