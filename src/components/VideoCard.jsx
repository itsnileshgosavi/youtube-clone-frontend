import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom"
import fallbackImage from '../assets/img/video-placeholder.gif';


export function VideoCard({ title, channel, thumbnail, uploaded, views, channelAvatar, id }) {
    return (
        <Card className="w-full md:w-[350px] lg:w-[350px] border-none shadow-none">
            <Link to={`/watch/${id}`}>
                <img 
                    src={thumbnail} 
                    alt={title} 
                    className="w-full h-auto rounded-lg cursor-pointer" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                    }}
                />
            </Link>
            
            <CardContent className="flex flex-row gap-2">
                <Avatar className="w-10 h-10 m-2 mt-3 cursor-pointer">
                    <AvatarImage src={channelAvatar} />
                    <AvatarFallback>{channel.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                    <CardTitle className="text-md font-medium font-openSans line-clamp-2 cursor-pointer mt-2">{title} </CardTitle>
                    <div className="flex flex-row gap-2">
                        <CardDescription className="text-xs text-gray-500 cursor-pointer"> {channel} </CardDescription>
                        <CardDescription className="text-xs text-gray-500"> {views} views </CardDescription>
                        <CardDescription className="text-xs text-gray-500"> {uploaded ? uploaded : "Uploaded "} </CardDescription>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
