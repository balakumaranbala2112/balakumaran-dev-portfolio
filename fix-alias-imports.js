import fs from "fs";
import path from "node:path";

const rootDir = path.join(process.cwd(), "src");

/* Recursively walk through all folders */
function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    // Folder → recurse
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
      continue;
    }

    // Only JS/JSX files
    if (!fullPath.endsWith(".js") && !fullPath.endsWith(".jsx")) continue;

    let content = fs.readFileSync(fullPath, "utf8");

    // ✅ Fix Components imports (any depth)
    content = content.replace(
      /from\s+["'](\.{1,2}\/)+components\/([^"']+)["']/g,
      `from "@/components/$2"`,
    );

    // ✅ Fix Styles imports (any depth)
    content = content.replace(
      /from\s+["'](\.{1,2}\/)+styles\/([^"']+)["']/g,
      `from "@/styles/$2"`,
    );

    // ✅ Fix Assets imports (any depth)
    content = content.replace(
      /from\s+["'](\.{1,2}\/)+assets\/([^"']+)["']/g,
      `from "@/assets/$2"`,
    );

    // Save back
    fs.writeFileSync(fullPath, content, "utf8");
  }
}

walk(rootDir);

console.log("✅ All imports converted to alias (@/...) successfully!");
