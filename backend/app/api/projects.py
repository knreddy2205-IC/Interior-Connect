from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/api/projects", tags=["projects"])


class ProjectIn(BaseModel):
    name: str
    client: str
    room_type: str
    budget: float | None = None


class Project(ProjectIn):
    id: int


# In-memory store for the starter; replace with a database later.
_projects: dict[int, Project] = {
    1: Project(id=1, name="Living Room Refresh", client="Sample Client", room_type="Living Room", budget=150000),
}


@router.get("", response_model=list[Project])
def list_projects() -> list[Project]:
    return list(_projects.values())


@router.get("/{project_id}", response_model=Project)
def get_project(project_id: int) -> Project:
    if project_id not in _projects:
        raise HTTPException(status_code=404, detail="Project not found")
    return _projects[project_id]


@router.post("", response_model=Project, status_code=201)
def create_project(payload: ProjectIn) -> Project:
    new_id = max(_projects, default=0) + 1
    project = Project(id=new_id, **payload.model_dump())
    _projects[new_id] = project
    return project


@router.delete("/{project_id}", status_code=204)
def delete_project(project_id: int) -> None:
    if _projects.pop(project_id, None) is None:
        raise HTTPException(status_code=404, detail="Project not found")
