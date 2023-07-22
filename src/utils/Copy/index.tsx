import React, { ReactNode } from "react"
import CopyToClipboard from "react-copy-to-clipboard"

export const MyCopyToClipboard = (props: React.PropsWithChildren<{
    className?: string,
    text: string,
    onCopy: Function, // ()=>{}
    children?: ReactNode,
}>) => {
    return (
        <CopyToClipboard text={props.text} onCopy={() => props.onCopy()}>
            <div className={props.className}>
                {props.children}
            </div>
        </CopyToClipboard>
    )
}
