from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    r = client.get("/api/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_project_crud():
    r = client.post("/api/projects", json={"name": "Kitchen", "client": "A", "room_type": "Kitchen"})
    assert r.status_code == 201
    pid = r.json()["id"]
    assert client.get(f"/api/projects/{pid}").status_code == 200
    assert client.delete(f"/api/projects/{pid}").status_code == 204
    assert client.get(f"/api/projects/{pid}").status_code == 404
