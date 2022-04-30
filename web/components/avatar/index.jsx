import React from "react";
import Image from "next/image";
import "./avatar.scss";

export function Avatar() {
    return (
        <div>
            <Image src="/logo.svg" alt="logo" />
        </div>
    );
}
