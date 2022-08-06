export default function Inspire() {
    const randInt = Math.floor(Math.random() * 5) + 1
    return (
        <div className="absolute">
            <img
                className="h-screen w-screen"
                src={`/bg/${randInt}.jpg`}
            />
            <div className="absolute top-64 pl-64">
                <h1 className="text-9xl font-bold text-white w-2/3 bg-red-400">his font looks horrible</h1>
                <p className="text-white text-2xl">- AI</p>
            </div>
        </div>
    )
}
