import CardList from "@/components/CardList"
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
 HoverCard,
 HoverCardContent,
 HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
 Sheet,
 SheetTrigger,
} from "@/components/ui/sheet"


import { Progress } from "@/components/ui/progress"

import { Badge, BadgeCheck, Candy, Citrus, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppLineChart from "@/components/AppLineChart"



const SingleUserPage = () => {
  return (
    <div>
     <Breadcrumb>
  <BreadcrumbList>
  {/* single item */}
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    {/* end of single item */}
    <BreadcrumbSeparator />

    {/* single item */}
    {/* <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem> */}
      {/* end of single item */}
    {/* <BreadcrumbSeparator /> */}

    {/* single item */}
    <BreadcrumbItem>
      <BreadcrumbPage>Peter Parker</BreadcrumbPage>
    </BreadcrumbItem>
      {/* end of single item */}
  </BreadcrumbList>
</Breadcrumb>

{/* container */}
<div className="mt-4 flex flex-col xl:flex-row gap-8">
 {/* left */}
 <div className="w-full xl:w-1/3 space-y-6">
 {/* user badges container */}
 <div className="bg-primary-foreground p-4 rounded-lg">
  <h1 className="text-xl font-semibold">User Badges</h1>
  <div className="flex gap-4 mt-4">
  <HoverCard>
  <HoverCardTrigger>
   <BadgeCheck size={36} className="rounded-full p-1"/>
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className="font-bold mb-2">Verified User</h1>
    <p className="text-sm text-muted-foreground">
     This user has been verified by the admin.</p>
  </HoverCardContent>
</HoverCard>

                <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>

  </div>
 </div>

 {/* INFORMATION CONTAINER */}
 <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>Peter.Parker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>peter.parker@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
 

 {/* cardlist container */}
 <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
  <CardList title="Recent Transaction"/>
 </div>
 </div>

 {/* right */}
 <div className="w-full xl:w-2/3 space-y-6">
 {/* user card container */}
 <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>Pete</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Peter Parker</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptas distinctio ab ipsa commodi fugiat labore quos veritatis
              cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam
              in, quis quia.
            </p>
          </div>

 {/* chart container */}
 <div className="bg-primary-foreground p-4 rounded-lg">
  <h1 className="text-xl font-semibold">User Activity
  </h1>
  <AppLineChart 
  /></div>
 </div>

</div>
    </div>
  )
}

export default SingleUserPage