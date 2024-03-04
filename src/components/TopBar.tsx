import { ColorModeToggle } from "./ColorModeToggle";
import { Button } from "./ui/button";



export function TopBar() {
    return (<div className="flex flex-row w-full gap-4">
        <div className="flex flex-row items-center justify-center gap-4 w-full pl-24">
            <h1 className="text-xl font-bold">*Your Project Name Here*</h1>
            <Button variant="outline">Connect</Button>
        </div>
        <div className="flex flex-row-reverse">
            <ColorModeToggle />
        </div>
    </div>)
}