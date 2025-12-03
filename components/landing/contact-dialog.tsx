"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

export function ContactDialog() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const fundTypeRef = useRef<HTMLButtonElement>(null);
  const fundSizeRef = useRef<HTMLButtonElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    fundType: "",
    fundSize: "",
  });
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!showDemoModal) {
      setFormData({
        name: "",
        email: "",
        company: "",
        fundType: "",
        fundSize: "",
      });
    }
  }, [showDemoModal]);

  const handleDemoRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("Please fill out all required fields.");
      nameRef.current?.focus();
      return;
    }
    if (!formData.email) {
      toast.error("Please fill out all required fields.");
      emailRef.current?.focus();
      return;
    }
    if (!formData.company) {
      toast.error("Please fill out all required fields.");
      companyRef.current?.focus();
      return;
    }
    if (!formData.fundType) {
      toast.error("Please fill out all required fields.");
      fundTypeRef.current?.focus();
      return;
    }
    if (!formData.fundSize) {
      toast.error("Please fill out all required fields.");
      fundSizeRef.current?.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowDemoModal(false);
        toast.success("Your demo request has been submitted successfully!");
      } else {
        console.error("Failed to submit demo request");
        toast.error("Failed to submit demo request. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
      {/* <Toaster position="top-right" className="mt-20" /> */}
      <DialogTrigger asChild>
        <button
          onClick={() => setShowDemoModal(true)}
          className="group relative flex items-center justify-center gap-2 overflow-hidden bg-obsidian px-6 md:px-8 py-3 md:py-4 text-md font-medium text-white transition-all bg-gray-900 hover:shadow-lg"
        >
          <span className="relative z-10 ">Request Access</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-[500px] p-4 sm:p-6 rounded-xl bg-black text-white">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Request a Demo</DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-white">
            Fill out the form below and our team will get in touch with you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDemoRequest} className="space-y-4 mt-3">
          <div className="space-y-2">
            <Label className="mb-4" htmlFor="name">Name</Label>
            <Input
              ref={nameRef}
              id="name"
              placeholder="Your name"
              required
              className="h-10 bg-gray-900 border-gray-700 text-white"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="mb-4" htmlFor="email">Business Email</Label>
            <Input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="your.name@company.com"
              required
              className="h-10 bg-gray-900 border-gray-700 text-white"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="mb-4" htmlFor="company">Company Name</Label>
            <Input
              ref={companyRef}
              id="company"
              placeholder="Your company"
              required
              className="h-10 bg-gray-900 border-gray-700 text-white"
              value={formData.company}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="mb-4" htmlFor="fund-type">Fund Type</Label>
            <Select
              required
              value={formData.fundType}
              onValueChange={(value) => setFormData({ ...formData, fundType: value })}
            >
              <SelectTrigger ref={fundTypeRef} id="fund-type" className="h-10 bg-black text-white border-gray-700">
                <SelectValue placeholder="Select fund type" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-gray-700">
                <SelectItem value="venture-capital">Venture Capital</SelectItem>
                <SelectItem value="private-equity">Private Equity</SelectItem>
                <SelectItem value="family-office">Family Office</SelectItem>
                <SelectItem value="angel-investor">Angel Investor</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="mb-4" htmlFor="fund-size">Fund Size (Assets Under Management)</Label>
            <Select
              required
              value={formData.fundSize}
              onValueChange={(value) => setFormData({ ...formData, fundSize: value })}
            >
              <SelectTrigger ref={fundSizeRef} id="fund-size" className="h-10 bg-black text-white border-gray-700">
                <SelectValue placeholder="Select fund size" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-gray-700">
                <SelectItem value="1-10m">$ 1-10M</SelectItem>
                <SelectItem value="10-20m">$ 10-20M</SelectItem>
                <SelectItem value="20-50m">$ 20-50M</SelectItem>
                <SelectItem value="50-100m">$ 50-100M</SelectItem>
                <SelectItem value="200-500m">$ 200-500M</SelectItem>
                <SelectItem value="500m-1b">$ 500M - 1B</SelectItem>
                <SelectItem value="1b+">$ 1B+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
            <Button
              type="submit"
              className="w-full bg-white hover:bg-gray-200 text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Book a Demo'
              )}
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  );
}