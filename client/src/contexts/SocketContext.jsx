import { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

export const SocketContext = createContext(null)

export const SocketProvider = ({children}) => {
    const [socket, setSocket] = useState(null);

    // useEffect(() => {
    //     const newSocket = io(import.meta.env.VITE_SERVER_ORIGIN);

    //     newSocket.on("connect", () => {
    //         console.log("Socket connected:", newSocket.id);
    //     });
    //     newSocket.on("connect_error", (err) => {
    //         console.error("Socket connection error:", err);
    //     }); 
    //     setSocket(newSocket);

    //     return () => {
    //         newSocket.close();
    //     };

    // }, []);

    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}