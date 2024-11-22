import React from "react";
import { Link, Outlet } from "react-router-dom";

export default () => (
    <div className='d-flex flex-column min-vh-100 overflow-x-hidden p-2 bg-danger-subtle'>

        <main className='flex-fill'>
            <Link to={"/"}>Home</Link>
            <Link to={"/game"}>Game</Link>
            <Link to={"/score"}>Score</Link>

            <Outlet />
        </main>

        <footer className='text-center p-2 m-0'>
            Designed and created by YcWong @2024
        </footer>
    </div>
);