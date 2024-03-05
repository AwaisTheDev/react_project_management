import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import ProjectEmptyState from "./components/ProjectEmptyState";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,//will save id for selected project 
    projects: []
  })

  function handelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  console.log(projectState);

  function handelProjectSave(projectData) {

    // use the project data object and add a unique id 
    const newProjectData = {
      ...projectData,
      id: Math.random().toString(16).slice(2)
    }
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProjectData]
      }
    })
  }

  function handelCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  let pageContent;

  if (projectState.selectedProjectId === undefined) {
    pageContent = <ProjectEmptyState onAddProject={handelAddProject}></ProjectEmptyState>;
  } else if (projectState.selectedProjectId === null) {
    pageContent = <NewProject onSaveProject={handelProjectSave} onCancel={handelCancelAddProject}></NewProject>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handelAddProject} projectsList={projectState.projects}></ProjectsSidebar>
      {pageContent}
    </main>
  );
}

export default App;
