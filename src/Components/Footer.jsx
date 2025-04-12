import { communityLinks, platformLinks, resourcesLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((Link, index) => (
                            <li key={index}>
                                <a 
                                    className="text-neutral-300 hover:text-white" 
                                    href={Link.href}
                                >
                                    {Link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((Link, index) => (
                            <li key={index}>
                                <a 
                                    className="text-neutral-300 hover:text-white" 
                                    href={Link.href}
                                >
                                    {Link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((Link, index) => (
                            <li key={index}>
                                <a 
                                    className="text-neutral-300 hover:text-white" 
                                    href={Link.href}
                                >
                                    {Link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
