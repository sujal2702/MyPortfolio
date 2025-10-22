# Remove all dark mode classes from all component files
$files = @(
    "components\sections\ProjectsSection.tsx",
    "components\sections\SkillsSection.tsx",
    "components\ui\Navbar.tsx",
    "components\ui\Footer.tsx",
    "components\ui\ProjectCard.tsx",
    "components\ui\SkillIcon.tsx",
    "components\layout\PageWrapper.tsx",
    "pages\Home.tsx",
    "pages\About.tsx",
    "pages\Projects.tsx",
    "pages\Contact.tsx"
)

foreach ($file in $files) {
    $filePath = Join-Path $PSScriptRoot $file
    if (Test-Path $filePath) {
        Write-Host "Processing: $file"
        (Get-Content $filePath -Raw) -replace '\s*dark:[^\s"]+', '' | Set-Content $filePath -NoNewline
    }
}

Write-Host "All files processed!"
