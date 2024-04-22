import React from "react"
import styles from "./TypeInput.module.scss"

interface Option {
    value: string | number,
    label: string
}

interface InputInterface {
    arr: Option[],
    select: any,
    title: string
}

export const TypeInput: React.FC<InputInterface> = ({arr, select, title}) => {

    return(
        <div className={styles.inputWrapper}>
                    <div className={styles.labelInput}>{title}</div>
                    <select className={styles.select} {...select}>
                        {arr.map((item, i)=>{
                            return <option key={title+i} value={item.value}> {item.label}</option>
                        })}
                    </select>
                </div>
    )
}