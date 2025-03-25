"use client";

import React, { useState, useRef } from "react";

export default function FormFile({
    label = "선택된 파일 없음",
    accept = "image/*",
    disabled = false,
    className,
    ...props
}) {
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        if (e.target.files) setFile(e.target.files[0]);
    };

    return (
        <label
            className={`flex items-center gap-1 cursor-pointer ${
                className || ""
            }`}
        >
            <input
                ref={inputRef}
                type="file"
                accept={accept}
                hidden
                onChange={handleChange}
                disabled={disabled}
                {...props}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
            >
                <path
                    fill="#23252A"
                    d="M8.2 15.575h-.125c-1.15 0-2.4-.475-3.175-1.2a3.98 3.98 0 0 1-1.275-2.9v-7.75c0-1.075.525-2.05 1.45-2.675A3.36 3.36 0 0 1 8.15.65l.05.025c.125.05.275.075.425.175 1.15.6 1.85 1.675 1.85 2.9v6.624c0 .675-.225 1.3-.65 1.8a.56.56 0 0 1-.175.176c-.475.425-1.025.65-1.65.65-.7 0-1.375-.325-1.825-.85a2.83 2.83 0 0 1-.675-1.825V4.8c0-.3.25-.575.575-.575s.575.25.575.575v5.55c0 .4.15.8.4 1.1.225.275.6.45.95.45.325 0 .6-.126.85-.35l.1-.1c.25-.3.4-.675.4-1.075v-6.65c0-.8-.45-1.5-1.25-1.9L8.075 1.8a.9.9 0 0 0-.2-.075L7.8 1.7a2.32 2.32 0 0 0-2.1.275c-.625.4-.95 1.025-.95 1.725v7.75c0 .75.35 1.525.925 2.075.575.524 1.55.9 2.425.9.85.024 1.65-.3 2.275-.876.6-.574.925-1.324.9-2.1V5.426c0-.3.25-.575.575-.575s.575.25.575.575v6.025c.025 1.075-.425 2.125-1.25 2.925-.825.75-1.9 1.2-2.975 1.2"
                ></path>
            </svg>
            <span className="text-green text-sm font-medium leading-6 underline">
                {file !== null ? file.name : label}
            </span>
        </label>
    );
}
