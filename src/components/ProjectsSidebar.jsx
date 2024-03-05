import Button from './Button'

export default function ProjectsSidebar({ onAddProject, projectsList }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl">Projects</h2>
            <div>
                <Button onClick={onAddProject}>Add Project</Button>
            </div>
            <ul className='mt-8'>
                {projectsList.map((project) => (
                    <li key={project.id}>
                        <button className='w-full text-left px-4 py-2 rounded-sm my-1 text-stone-100'>{project.title}</button>
                    </li>
                ))}
            </ul>
        </aside>
    )
} 