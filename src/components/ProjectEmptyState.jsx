import noProjectImg from '../assets/no-projects.png'

import Button from './Button'

export default function ProjectEmptyState({ onAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3 flex flex-col">
            <img src={noProjectImg} className='self-center w-16  h-16 object-contain mb-4'></img>
            <h2 className='text-xl font-bold text-stone-500 mb-2'>No project selected</h2>
            <p className='text-stone-600 mb-4'>Select a project or get started</p>
            <p className='mt-8'>
                <Button onClick={onAddProject}>Create a new project</Button>
            </p>
        </div>
    )
}