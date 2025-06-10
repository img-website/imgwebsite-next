"use client"
import Link from "next/link";
import {
    Home,
    Package2,
    Settings2,
    Circle,
    ChartBarStacked,
    Rss,
    Shuffle,
    Feather,
    GlobeLock,
    AlignRight,
    Users
} from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ResizablePanel } from "@/components/ui/resizable";
import { useMainContext } from "@/app/context/main-context";
import { useEffect } from "react";
const Leftbar = () => {
    const { widthCall, widthProcess, handleResize, pathname } = useMainContext();

    const menuData = [
        {
            title: "Dashboard",
            icon: Home,
            path: "/admin"
        },
        {
            title: "Categories",
            icon: ChartBarStacked,
            path: "/admin/category",
            children: [
                {
                    title: "All Category",
                    path: "/admin/category",
                },
                {
                    title: "Add",
                    path: "/admin/category/add",
                },
            ]
        },
        {
            title: "Blogs",
            icon: Rss,
            path: "/admin/post",
            partOf: "blogs",
            children: [
                {
                    title: "All Blog",
                    path: "/admin/post",
                    partOf: "blogs",
                },
                {
                    title: "Add",
                    path: "/admin/post/add",
                    partOf: "blogs",
                },
            ]
        },
        {
            title: "Random Blog",
            icon: Shuffle,
            path: "/random-blog",
            partOf: "blogs",
        },
        {
            title: "Featured Blog",
            icon: Feather,
            path: "/featured-blog",
            partOf: "blogs",
        },
        {
            title: "Origins",
            icon: GlobeLock,
            path: "/admin/origins",
            children: [
                {
                    title: "All Origins",
                    path: "/admin/origins",
                },
                {
                    title: "Add Origin",
                    path: "/admin/origins/add",
                },
            ]
        },
        {
            title: "Users",
            icon: Users,
            path: "/admin/users",
            children: [
                {
                    title: "All Users",
                    path: "/admin/users",
                },
                {
                    title: "Add User",
                    path: "/admin/users/add",
                },
            ]
        }
    ]


    const generatePathsMapping = (menuData) => {
        let pathsMapping = {};

        menuData.forEach((menuItem) => {
            // Add parent path and active value
            pathsMapping[menuItem.path] = menuItem.path;

            // Check if children exist, and loop over them
            if (menuItem.children) {
                menuItem.children.forEach((child) => {
                    // Set child path and parent's active value
                    pathsMapping[child.path] = menuItem.path;
                });
            }
        });

        return pathsMapping;
    };

    // Call the function
    const dynamicPathsMapping = generatePathsMapping(menuData);

    const defaultValue = dynamicPathsMapping[pathname] || "admin";


    return (
        <ResizablePanel
            defaultSize={20}
            minSize={3}
            maxSize={25}
            onResize={(event, size) => handleResize(size)}
            className={`${widthCall ? '![flex:3_1_0px] min-w-[75px] transition-all duration-300 ease-in-out' : ''} ${widthProcess ? '![flex:0_1_190px]' : ''} hidden border-r bg-muted/40 md:block @container`}
        >
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 shrink-0">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="size-6" />
                        <span className="@[280px]:block hidden">IMG Admin</span>
                    </Link>
                    {!widthCall &&
                        <div className="flex ml-auto">
                            <AlignRight/>
                        </div>
                    }
                </div>
                <ScrollArea className="flex-1 overflow-hidden">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Accordion type="single" collapsible defaultValue={defaultValue}>
                            {
                                menuData && menuData.map((item, index) => {
                                    return (
                                        item?.children ?
                                            <AccordionItem key={index} value={item?.path} className="py-2">
                                                <AccordionTrigger className={`flex !no-underline items-center gap-3 rounded-lg px-3 py-2 ${(pathname.includes(item?.path) && widthCall) ? 'text-primary bg-muted' : 'text-muted-foreground'} transition-all hover:text-primary ${widthCall && '[&_.lucide-chevron-down]:hidden'}`}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>

                                                            <div>
                                                                <item.icon className="size-4" />
                                                            </div>
                                                        </TooltipTrigger>
                                                        {widthCall &&
                                                            <TooltipContent className="ml-8" side="right">
                                                                <div className="flex items-center gap-3 px-3 py-2 text-primary border-b font-bold transition-all hover:text-primary">
                                                                    <item.icon className="size-4" /> {item?.title}
                                                                </div>
                                                                {
                                                                    item?.children?.map((child, index) => {
                                                                        return (
                                                                            <Link
                                                                                key={index}
                                                                                href={child?.path}
                                                                                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                                                                            >
                                                                                <div>
                                                                                    <Circle className="size-2 ml-2" />
                                                                                </div>
                                                                                {child?.title}
                                                                            </Link>

                                                                        )
                                                                    })
                                                                }
                                                            </TooltipContent>
                                                        }
                                                    </Tooltip>
                                                    {!widthCall && <span className="mr-auto">{item?.title}</span>}
                                                </AccordionTrigger>
                                                {!widthCall &&
                                                    <AccordionContent className="py-2">
                                                        {
                                                            item?.children?.map((child, index) => {
                                                                return (
                                                                    <Link
                                                                        key={index}
                                                                        href={child?.path}
                                                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname === child?.path ? 'text-primary bg-muted' : 'text-muted-foreground'} transition-all hover:text-primary`}
                                                                    >
                                                                        <Circle className="size-2 ml-2" />
                                                                        {child?.title}
                                                                    </Link>
                                                                )
                                                            })
                                                        }
                                                    </AccordionContent>
                                                }
                                            </AccordionItem>
                                            :
                                            <AccordionItem key={index} value="admin" className="py-2">
                                                <Link
                                                    href={item?.path}
                                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname === item?.path ? 'text-primary bg-muted' : 'text-muted-foreground'} transition-all hover:text-primary`}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div>
                                                                <item.icon className="size-4" />
                                                            </div>
                                                        </TooltipTrigger>
                                                        {widthCall &&
                                                            <TooltipContent className="ml-8" side="right">
                                                                <Link
                                                                    href={item?.path}
                                                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                                                                >
                                                                    <div>
                                                                        <item.icon className="size-4" />
                                                                    </div>
                                                                    {item?.title}
                                                                </Link>
                                                            </TooltipContent>
                                                        }
                                                    </Tooltip>
                                                    {!widthCall && item?.title}
                                                </Link>
                                            </AccordionItem>
                                    );
                                })
                            }
                        </Accordion>
                    </nav>
                </ScrollArea>
                <div className="mt-auto p-4">
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                    <Settings2 className="size-4" />
                                </div>
                            </TooltipTrigger>
                            {widthCall &&
                                <TooltipContent side="right">Setting</TooltipContent>
                            }
                        </Tooltip>
                        {!widthCall && "Setting"}
                    </Link>
                </div>
            </div>
        </ResizablePanel>
    )
}

export default Leftbar