import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const CreateCardModal = () => {
  return (
    <div className="inter-font">
      <Dialog>
        <DialogTrigger>
          <Button className="py-1.5 px-2.5 italic font-medium bg-[#BFABEA] hover:bg-[#a88ce5] rounded-[90px] inter-font shadow-[0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33,inset_0px_-2.4px_0px_0px_#0000001A]">
            Write on the wall
          </Button>
        </DialogTrigger>
        <DialogContent className="inter-font h-full">
          <DialogHeader>
            <DialogTitle className="text-[32px]/[28px] -tracking-[1px] font-semibold">
              Write on the wall
            </DialogTitle>
            <DialogDescription className="text-[14px]/[22px] font-normal text-[#3C3C4399]">
              Search preferred themes, tags, vibes or one of the trending
              ones......
            </DialogDescription>
          </DialogHeader>

            <div className="grid w-full gap-3">
              <Label htmlFor="message-2" className="text-[15px]/[16px] font-normal">What is your dream?</Label>
              <Textarea placeholder="Type your message here." id="message-2" className="caveat-font h-[140px]"/>
              <p className="text-[13px]/[16px] text-[#27282B]">
                Not more than 200 words character
              </p>
            </div>

            <div className="grid w-full gap-3">
              <Label htmlFor="message-2" className="text-[15px]/[16px] font-normal">Tags</Label>
              <div className="text-[13px]/[18px] font-medium"># School</div>
              <p className="text-[13px]/[16px] text-[#27282B]">
                Not more than 200 words character
              </p>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateCardModal;
