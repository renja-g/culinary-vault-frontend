# Tech Stack
- Next.js 15
- TypeScript
- Tailwind CSS
- Shadcn UI

- Supabase GraphQL Backend



# Component Library (shadcn/ui)

## Add Components
You can now start adding components to your project.
```bash
pnpm dlx shadcn@latest add button
```

The command above will add the Button component to your project. You can then import it like this:
```tsx
import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

Component list:
```
Components
Accordion
Alert
Alert Dialog
Aspect Ratio
Avatar
Badge
Breadcrumb
Button
Calendar
Card
Carousel
Chart
Checkbox
Collapsible
Combobox
Command
Context Menu
Data Table
Date Picker
Dialog
Drawer
Dropdown Menu
Form
Hover Card
Input
Input OTP
Label
Menubar
Navigation Menu
Pagination
Popover
Progress
Radio Group
Resizable
Scroll Area
Select
Separator
Sheet
Sidebar
Skeleton
Slider
Sonner
Switch
Table
Tabs
Textarea
Toast
Toggle
Toggle Group
Tooltip
```