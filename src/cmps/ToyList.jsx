import React from 'react'

import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({toys, onRemove }) {
    return (
        <div className='main-container-toy'>
            {toys.map((toy) => {
                return <ToyPreview  onRemove={onRemove} key={toy._id} toy={toy} />
            })}
        </div>
    )
}
