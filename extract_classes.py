import re

# Read JSX file
with open('./src/components/layout/Navbar.jsx', 'r') as f:
    jsx_content = f.read()

# Find all className values
class_pattern = r'className=(?:{`([^`]*)`|"([^"]*)"|\'([^\']*)\')'
matches = re.findall(class_pattern, jsx_content)

# Extract unique classes
classes = set()
for match in matches:
    class_str = match[0] or match[1] or match[2]
    for cls in class_str.split():
        # Clean up template literals
        cleaned = re.sub(r'\$\{.*?\}', '', cls).strip()
        if cleaned and '?' not in cleaned and ':' not in cleaned:
            classes.add(cleaned)

# Generate CSS
css_output = '\n\n'.join([f'.{cls} {{\n  \n}}' for cls in sorted(classes)])

# Write to file
with open('src/styles/components/Navbar.css', 'w') as f:
    f.write(css_output)

print(f'✅ Extracted {len(classes)} CSS classes!')