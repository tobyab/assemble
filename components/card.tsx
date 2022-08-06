export default function Card() {
    let name = "hello world"
    let desc = "this is an example of a description. this is also a longer description that is slightly more descriptive"
        return (
            <div className="flex space-x-4">
                <div className="p-4 w-1/2 text-left bg-gray-100 rounded-md">
                    <img
                        src="/bg/3.jpg"
                        className="rounded-md"
                        alt={name}
                        height="500"
                        width="600"
                    />
                    <h1 className="bold text-2xl pt-4">{name}</h1>
                    <p>{desc}</p>
                </div>

                <div className="p-4 w-1/2 text-left bg-gray-100 rounded-md">
                    <img
                        src="/bg/1.jpg"
                        className="rounded-md"
                        alt={name}
                        height="500"
                        width="600"
                    />
                    <h1 className="bold text-2xl pt-4">{name}</h1>
                    <p>{desc}</p>
                </div>

                <div className="p-4 w-1/2 text-left bg-gray-100 rounded-md">
                    <img
                        src="/bg/5.jpg"
                        className="rounded-md"
                        alt={name}
                        height="500"
                        width="600"
                    />
                    <h1 className="bold text-2xl pt-4">{name}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        )
}