import React, { useEffect } from "react";

export default function NameDivs({ user, onDelete }) {
    return (


        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "5px",
            }}
        >
            {/* <div>
            <input type="text">test</input>
        </div> */}

            <p>{user.name}</p>

            <button
                onClick={onDelete}
                style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 8px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                delete
            </button>


        </div>
    );
}

// dodać usuniecie osoby, przekazać kliknięcie do góry. props, funkcja, która aktualizuje stan. stan i funkcję przekazuję jako propsa