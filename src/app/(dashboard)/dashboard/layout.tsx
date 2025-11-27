import { BottomNav } from "@/components/BottomNav"
import { Sidebar } from "@/components/Sidebar"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen">

            <Sidebar />  {/* Desktop */}

            {/* 2. ส่วนเนื้อหา (เปลี่ยนไปเรื่อยๆ) */}
            <main className="flex-1 overflow-y-auto">
                {children} {/* for page.tsx */}
            </main>

            <BottomNav /> {/* Mobile */}

        </div>
    )
}