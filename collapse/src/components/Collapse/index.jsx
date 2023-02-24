import React, {useState} from "react";

export function Collapse({title, open, children}) {
    const [switcher, setSwitcher] = useState(open)
    return (
        <div>
            <button className="btn" onClick={()=> {
                setSwitcher(!switcher)
            }}>{title ? title : 'Button'}</button>
            <div className={switcher ? 'open' : 'closed'}>
                {children}
            </div>
        </div>
    )
}