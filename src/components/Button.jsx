export default function Button({ children, ...props }) {
    return (
        <button {...props} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 hover:bg-stone-600 text-stone-300">{children}</button>
    )
}