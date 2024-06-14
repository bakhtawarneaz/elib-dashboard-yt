// import { Button } from '@/components/ui/button';
// import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-react';
// import { Link } from 'react-router-dom';

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge';

 //import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/components/ui/table';

//import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
//import Tabs from '@shadcn/ui/tabs';
//import Tabs from '@/components/ui/Tabs';

import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

function HomePage() {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return ( 
        <>
            <main className='home-main'>
                <div className='home-topBar'>
                    <h1>Hello Wolfgang</h1>
                    <p>Here you can see an overview of your most important tasks, as well relevant data on employees and recruiting processes </p>
                </div>
                <div className="home-content">
                    <div className="full-col">
                        <div className="col-4">
                            <div className="common-heading">
                                <p>Inbox</p>
                                <span><img src={"/src/assets/h1.png"} />Tasks</span>
                            </div>
                            <Tabs defaultValue="account" className="w-[400px] custom-tab">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="all_task">All tasks</TabsTrigger>
                                    <TabsTrigger value="employees">Employees</TabsTrigger>
                                    <TabsTrigger value="recruiting">Recruiting</TabsTrigger>
                                </TabsList>
                                <TabsContent value="all_task">
                                    <div className="tab-con">
                                        <div className="pic">
                                            <img src={"/src/assets/Avatar.png"} />     
                                        </div>
                                        <div className="disc">
                                            <p>Diana Jones requested vacation</p>   
                                            <p>from 05.06.2024 to 20.05.2024</p>
                                        </div>    
                                    </div>
                                    <div className="tab-con">
                                        <div className="pic">
                                            <img src={"/src/assets/Avatar.png"} />     
                                        </div>
                                        <div className="disc">
                                            <p>Diana Jones requested vacation</p>   
                                            <p>from 05.06.2024 to 20.05.2024</p>
                                        </div>    
                                    </div>
                                    <div className="tab-con">
                                        <div className="pic">
                                            <img src={"/src/assets/Avatar.png"} />     
                                        </div>
                                        <div className="disc">
                                            <p>Diana Jones requested vacation</p>   
                                            <p>from 05.06.2024 to 20.05.2024</p>
                                        </div>    
                                    </div>
                                    <div className="tab-con">
                                        <div className="pic">
                                            <img src={"/src/assets/Avatar.png"} />     
                                        </div>
                                        <div className="disc">
                                            <p>Diana Jones requested vacation</p>   
                                            <p>from 05.06.2024 to 20.05.2024</p>
                                        </div>    
                                    </div>
                                    <div className="tab-con">
                                        <div className="pic">
                                            <img src={"/src/assets/Avatar.png"} />     
                                        </div>
                                        <div className="disc">
                                            <p>Diana Jones requested vacation</p>   
                                            <p>from 05.06.2024 to 20.05.2024</p>
                                        </div>    
                                    </div>
                                </TabsContent>
                                <TabsContent value="employees">
                                    <div className="tab-con">
                                        <div className="pic">
                                            <img src={"/src/assets/Avatar.png"} />     
                                        </div>
                                        <div className="disc">
                                            <p>Diana Jones requested vacation</p>   
                                            <p>from 05.06.2024 to 20.05.2024</p>
                                        </div>    
                                    </div>
                                </TabsContent>
                                <TabsContent value="recruiting">
                                    <div className="tab-con">
                                        <div className="pic">
                                            <img src={"/src/assets/Avatar.png"} />     
                                        </div>
                                        <div className="disc">
                                            <p>Diana Jones requested vacation</p>   
                                            <p>from 05.06.2024 to 20.05.2024</p>
                                        </div>    
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                        <div className="col-8">
                            <div className="common-heading">
                                <p>Calendar</p>
                                <span><img src={"/src/assets/h1.png"} />Calendar</span>
                            </div>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border custom-calander"
                            />
                        </div>
                    </div>
                    <div className="full-col">
                        <div className="col-4">
                            <div className="common-heading">
                                <p>Recruiting</p>
                                <span><img src={"/src/assets/h1.png"} />Recruiting</span>
                            </div>
                            <div className="f1">
                                <img src={"/src/assets/f1.png"} />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="common-heading">
                                <p>Employee development</p>
                                <span><img src={"/src/assets/h1.png"} />Employee</span>
                            </div>
                            <div className="f1">
                                <img src={"/src/assets/f2.png"} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="flex min-h-screen w-full flex-col">
                    <main className="flex flex-1 flex-col gap-4 md:gap-6">
                        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                            <Card x-chunk="dashboard-01-chunk-0">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Revenue
                                    </CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-1">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Subscriptions
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+2350</div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-2">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+12,234</div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-3">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Active Now
                                    </CardTitle>
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+573</div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                                <CardHeader className="flex flex-row items-center">
                                    <div className="grid gap-2">
                                        <CardTitle>Transactions</CardTitle>
                                        <CardDescription>
                                            Recent transactions from your store.
                                        </CardDescription>
                                    </div>
                                    <Button asChild size="sm" className="ml-auto gap-1">
                                        <Link to="#">
                                            View All
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Customer</TableHead>
                                                <TableHead className="hidden xl:table-column">
                                                    Type
                                                </TableHead>
                                                <TableHead className="hidden xl:table-column">
                                                    Status
                                                </TableHead>
                                                <TableHead className="hidden xl:table-column">
                                                    Date
                                                </TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $250.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Olivia Smith</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        olivia@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Refund
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Declined
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-24
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $150.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Noah Williams</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        noah@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Subscription
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-25
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $350.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Emma Brown</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        emma@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-26
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $450.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-27
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $550.00
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-5">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-8">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                            <AvatarFallback>OM</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Olivia Martin
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                olivia.martin@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$1,999.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/02.png" alt="Avatar" />
                                            <AvatarFallback>JL</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Jackson Lee
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                jackson.lee@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$39.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/03.png" alt="Avatar" />
                                            <AvatarFallback>IN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Isabella Nguyen
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                isabella.nguyen@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$299.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/04.png" alt="Avatar" />
                                            <AvatarFallback>WK</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                William Kim
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                will@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$99.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/05.png" alt="Avatar" />
                                            <AvatarFallback>SD</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Sofia Davis
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                sofia.davis@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$39.00</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </main>
                </div>
            </main> */}
        </>
    );
}

export default HomePage;
