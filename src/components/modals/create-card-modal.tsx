"use client";

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
import TagPill from "../tag-pill";
import { Plus, X } from "lucide-react";
import VibePill from "../vibe-pill";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { createDreamSchema } from "@/lib/validations";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const CreateCardModal = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [availableTags, setAvailableTags] = useState<string[]>([
    "School",
    "Age",
    "Dramatic",
    "Inspiring",
  ]);
  const [selectedVibe, setSelectedVibe] = useState<string>("");
  const tagInputRef = useRef<HTMLInputElement>(null);
  const VIBE_TAGS = [
    {
      tag: "Funny",
      color: "#F1A62D",
    },
    {
      tag: "Wholesome",
      color: "#C7B9FF",
    },
    {
      tag: "Challenging",
      color: "#FFEBA6",
    },
    {
      tag: "Inspiring",
      color: "#CFFF98",
    },
  ];
  const form = useForm<z.infer<typeof createDreamSchema>>({
    resolver: zodResolver(createDreamSchema),
    defaultValues: {
      message: "",
      tags: [],
      vibe: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof createDreamSchema>) {
    toast("submitted")
    console.log(values);
  }

  return (
    <div className="inter-font">
      <Dialog>
        <DialogTrigger>
          <Button className="py-1.5 px-2.5 italic font-medium bg-[#BFABEA] hover:bg-[#a88ce5] rounded-[90px] inter-font shadow-[0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33,inset_0px_-2.4px_0px_0px_#0000001A]">
            Write on the wall
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`bg-[url("/assets/pattern-bg.svg")] inter-font w-[600px] 2xl:h-[751px] lg:h-[600px]`}
        >
          <DialogHeader>
            <DialogTitle className="text-[32px]/[28px] -tracking-[1px] font-semibold">
              Write on the wall
            </DialogTitle>
            <DialogDescription className="text-[14px]/[22px] font-normal text-[#3C3C4399]">
              Search preferred themes, tags, vibes or one of the trending
              ones......
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px]/[16px] font-normal">
                      What is your dream?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        id="message-2"
                        {...field}
                        className="caveat-font h-[140px] bg-[#F7F7F7] "
                      />
                    </FormControl>
                    <FormDescription className="text-[13px]/[16px] text-[#27282B]">
                      Not more than 200 words character
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px]/[16px] font-normal">
                      Tags
                    </FormLabel>
                    <FormControl>
                      <div className="grid w-full gap-3 h-fit bg-white">
                        {/* Tag pills */}
                        <div className="flex gap-2 h-fit flex-wrap">
                          {availableTags.map((item, index) => (
                            <TagPill
                              key={`${item}-${index}`}
                              tag={item}
                              selectedTags={field.value || []}
                              setSelectedTags={(newTags) =>
                                field.onChange(newTags)
                              }
                            />
                          ))}
                        </div>

                        {/* Add custom tag input */}
                        <div className="flex items-center gap-2">
                          {!isAddingTag ? (
                            <button
                              type="button"
                              onClick={() => {
                                setIsAddingTag(true);
                                setTimeout(
                                  () => tagInputRef.current?.focus(),
                                  0
                                );
                              }}
                              className="flex items-center gap-1 text-[15px]/[16px] text-[#27282B] font-normal hover:text-[#BFABEA] transition-colors"
                            >
                              <Plus size={16} />
                              <span>Add custom tags</span>
                            </button>
                          ) : (
                            <div className="relative flex items-center">
                              <input
                                ref={tagInputRef}
                                type="text"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" && newTag.trim()) {
                                    const trimmedTag = newTag.trim();
                                    if (
                                      !(field.value || []).includes(trimmedTag)
                                    ) {
                                      field.onChange([
                                        ...(field.value || []),
                                        trimmedTag,
                                      ]);
                                    }
                                    setAvailableTags((prev) => [
                                      ...new Set([...prev, trimmedTag]),
                                    ]);
                                    setNewTag("");
                                    setIsAddingTag(false);
                                  } else if (e.key === "Escape") {
                                    setIsAddingTag(false);
                                    setNewTag("");
                                  }
                                }}
                                onBlur={() => {
                                  const trimmedTag = newTag.trim();
                                  if (
                                    trimmedTag &&
                                    !availableTags.includes(trimmedTag)
                                  ) {
                                    setAvailableTags((prev) => [
                                      ...prev,
                                      trimmedTag,
                                    ]);
                                    if (
                                      !(field.value || []).includes(trimmedTag)
                                    ) {
                                      field.onChange([
                                        ...(field.value || []),
                                        trimmedTag,
                                      ]);
                                    }
                                  }
                                  setIsAddingTag(false);
                                  setNewTag("");
                                }}
                                placeholder="Type and press Enter"
                                className="text-[13px]/[18px] px-3 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#BFABEA] focus:border-transparent"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setIsAddingTag(false);
                                  setNewTag("");
                                }}
                                className="absolute right-2 text-gray-400 hover:text-gray-600"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormDescription className="text-[13px]/[16px] text-[#27282B]">
                      Choose at least one tag (or add your own)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vibe"
                render={({ field }) => (
                  <FormItem className="grid w-full gap-3 h-fit bg-white">
                    <FormLabel className="text-[15px]/[16px] font-normal">
                      What&apos;s the vibe?
                    </FormLabel>
                    <FormControl>
                      <div className="flex gap-2 h-fit">
                        {VIBE_TAGS.map(({ tag, color }) => (
                          <VibePill
                            key={tag}
                            tag={tag}
                            color={color}
                            selectedVibe={field.value}
                            setSelectedVibe={(val: string) =>
                              field.onChange(val)
                            }
                          />
                        ))}
                      </div>
                    </FormControl>
                    <FormDescription className="text-[15px]/[16px] text-[#27282B] font-normal">
                      Note you can only select one vibe per dream !!!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="py-3 min-w-full  px-2.5 text-black text-[16px]/[24px] italic font-medium bg-[#BFABEA] hover:bg-[#a88ce5] rounded-[90px] inter-font shadow-[0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33,inset_0px_-2.4px_0px_0px_#0000001A]"
              >
                Write on the wall
              </Button>
            </form>
          </Form>

          {/* <div className="grid w-full ">
            <Label
              htmlFor="message-2"
              className="text-[15px]/[16px] font-normal"
            >
              What is your dream?
            </Label>
            <Textarea
              placeholder="Type your message here."
              id="message-2"
              className="caveat-font h-[140px] bg-[#F7F7F7] "
            />
            <p className="text-[13px]/[16px] text-[#27282B]">
              Not more than 200 words character
            </p>
          </div> */}

          {/* <div className="grid w-full gap-3 h-fit bg-white">
            <Label
              htmlFor="message-2"
              className="text-[15px]/[16px] font-normal"
            >
              Tags
            </Label>
            <div className="flex gap-2 h-fit flex-wrap">
              {availableTags.map((item, index) => (
                <TagPill
                  key={`${item}-${index}`}
                  tag={item}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              {!isAddingTag ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingTag(true);
                    setTimeout(() => tagInputRef.current?.focus(), 0);
                  }}
                  className="flex items-center gap-1 text-[15px]/[16px] text-[#27282B] font-normal hover:text-[#BFABEA] transition-colors"
                >
                  <Plus size={16} />
                  <span>Add custom tags</span>
                </button>
              ) : (
                <div className="relative flex items-center">
                  <input
                    ref={tagInputRef}
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && newTag.trim()) {
                        const trimmedTag = newTag.trim();
                        if (!selectedTags.includes(trimmedTag)) {
                          setAvailableTags((prev) => [
                            ...new Set([...prev, trimmedTag]),
                          ]);
                          setSelectedTags((prev) => [...prev, trimmedTag]);
                        }
                        setNewTag("");
                        setIsAddingTag(false);
                      } else if (e.key === "Escape") {
                        setIsAddingTag(false);
                        setNewTag("");
                      }
                    }}
                    onBlur={() => {
                      const trimmedTag = newTag.trim();
                      if (trimmedTag && !availableTags.includes(trimmedTag)) {
                        setAvailableTags((prev) => [...prev, trimmedTag]);
                        if (!selectedTags.includes(trimmedTag)) {
                          setSelectedTags((prev) => [...prev, trimmedTag]);
                        }
                      }
                      setIsAddingTag(false);
                      setNewTag("");
                    }}
                    placeholder="Type and press Enter"
                    className="text-[13px]/[18px] px-3 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#BFABEA] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingTag(false);
                      setNewTag("");
                    }}
                    className="absolute right-2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>
          </div> */}

          {/* <div className="grid w-full gap-3 h-fit bg-white">
            <Label
              htmlFor="message-2"
              className="text-[15px]/[16px] font-normal"
            >
              What&apos;s the vibe?
            </Label>
            <div className="flex gap-2 h-fit">
              {VIBE_TAGS.map(({ tag, color }) => (
                <VibePill
                  tag={tag}
                  color={color}
                  selectedVibe={selectedVibe}
                  setSelectedVibe={setSelectedVibe}
                />
              ))}
            </div>
            <p className="text-[15px]/[16px] text-[#27282B] font-normal">
              Note you can only select one vibe per dream !!!
            </p>
          </div> */}

          {/* <Button className="py-3  px-2.5 text-black text-[16px]/[24px] italic font-medium bg-[#BFABEA] hover:bg-[#a88ce5] rounded-[90px] inter-font shadow-[0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33,inset_0px_-2.4px_0px_0px_#0000001A]">
            Write on the wall
          </Button> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateCardModal;
