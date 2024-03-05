import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onSaveProject, onCancel }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handelProjectSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDate = dueDateRef.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDate.trim() === "") {
            //call function to show modal with
            return;
        }
        onSaveProject({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        });
    }

    function handelCancel() {
        onCancel();
    }
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={handelCancel} className="text-stone-800">Cancel</button></li>
                <li><button onClick={handelProjectSave} className="bg-stone-800 px-6 py-2 text-stone-50 rounded-md">Save</button></li>
            </menu>
            <div>
                <Input ref={titleRef} label="Title" ></Input>
                <Input ref={descriptionRef} label="Description" textarea={true} ></Input>
                <Input ref={dueDateRef} type="date" label="Due Date" ></Input>
            </div>
        </div>
    )
}