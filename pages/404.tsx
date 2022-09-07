import Link from "next/link";
import { PageUrls } from "@/utils/index";

export default function Page404() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href={PageUrls.HOME}>
                <a>Go To Home Page</a>
            </Link>
        </div>
    );
}
