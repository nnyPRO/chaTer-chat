// src\app\(dashboard)\dashboard\layout.tsx
import { BottomNav } from "@/components/BottomNav"
import Dashboard from "@/components/Dashboard"
import { DrawerHeader, Sidebar } from "@/components/Sidebar"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Dashboard>{children}</Dashboard>
    )
}