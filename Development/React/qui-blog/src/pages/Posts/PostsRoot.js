import { Outlet } from "react-router";
import PostsNavigation from "../../components/PostsNavigation";

function PostsRootLayout(){
    return(
        <>
            <PostsNavigation />
            <Outlet />
        </>
    )
}

export default PostsRootLayout;