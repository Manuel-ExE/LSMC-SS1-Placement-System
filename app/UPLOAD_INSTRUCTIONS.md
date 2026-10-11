# Upload the full application HTML

To complete the Windows EXE build:

1. Download `SS1-Placement-System.html` from your Grok chat (v1.16.0).
2. On GitHub: open this repo → **app/** folder → **Add file** → **Upload files**.
3. Upload the file and **rename it to** `index.html` (replace the stub).
4. Go to **Actions** → **Build Windows EXE** → **Run workflow**.
5. When finished, download the EXE from the workflow **Artifacts**.

Alternatively, split the HTML into the six part files listed in the workflow (`p1c0.txt` … `p2c2.txt`) if the single file is too large for the web upload (unlikely at ~260 KB).

After a successful build you will get:
- Installer: `LSMC-SS1-Placement-*-win-x64.exe`
- Portable: `LSMC-SS1-Placement-*-portable.exe`
