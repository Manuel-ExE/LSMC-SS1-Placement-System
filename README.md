# SS1 Department Placement Test System

**Lagos State Senior Model College, Ojo**

Offline examination and department placement application for SS1 students (Science / Arts / Commercial).

## Quick start (HTML — no install)

1. Download [`app/index.html`](app/index.html)
2. Copy it to the Desktop
3. Open with **Google Chrome** or **Microsoft Edge** (File → Open)

## Windows EXE (recommended for school PCs)

### Download a built EXE

1. Open **[Releases](https://github.com/Manuel-ExE/LSMC-SS1-Placement-System/releases)**
2. Download either:
   - **Installer** (`LSMC-SS1-Placement-*-win-x64.exe`) — installs to Program Files, creates shortcuts
   - **Portable** (`LSMC-SS1-Placement-*-portable.exe`) — single file, no install (good for USB)

### Build the EXE yourself (GitHub Actions)

1. Go to **Actions** → **Build Windows EXE** → **Run workflow**
2. Or push a version tag:
   ```bash
   git tag v1.16.0
   git push origin v1.16.0
   ```
3. When the workflow finishes, download the EXE from the **Artifacts** or the new **Release**

### Build locally (Windows)

```bash
npm install
npm run dist:win
```

Output appears in the `dist/` folder.

## Features

- Teacher dashboard, students, question bank, examinations
- Offline IndexedDB storage (no internet required for exams)
- USB workflow: export exam packages (no answers) → collect responses → grade on master PC
- Department placement recommendations with teacher review for borderline cases
- Full backup / restore

## Data note

Student data stays **on the computer** (IndexedDB). Always create a **Full Backup** from Import & Export before reinstalling or moving PCs.

## Version

**1.16.0**

School: Lagos State Senior Model College, Ojo · Motto: *IN GOD WE TRUST*
