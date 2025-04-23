import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
      <p>2 days ago</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://th.bing.com/th/id/OIP.4SR6TO3mFy1tiwnZ-i-xWgHaHz?pid=ImgDet&w=178&h=188&c=7&dpr=1.7" />
          </Avatar>
        </Button>
        <div>
          <h1>Company name</h1>
          <p>india</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
