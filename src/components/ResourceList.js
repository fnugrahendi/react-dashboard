import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'

const ResourceList = () => {
    const { resources, getResources } = useContext(AppContext)

    useEffect(() => {
        getResources()
    }, [])

    return (
        <div>
            Resource List
            <ul>
                {
                    resources.map((resource, idx) => {
                        return (
                            <li key={'resource' + idx}>{resource.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ResourceList