export default function Container({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className=" mx-auto bg-white  flex flex-col min-h-screen relative">
            {children}
        </div>
    )
}