"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Contact as LucideContact,
  FolderPen,
  ImagePlus,
  Link as LucideLink,
} from "lucide-react";
import axios from "axios";

import { contact, deleteContact } from "@/actions/admin/contact";

import { ContactSchema } from "@/schemas";

import { cn } from "@/lib/utils";

import { Contact } from "@prisma/client";

import { useCurrentUser } from "@/hooks/use-current-user";

import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/textarea";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import CardWrapper from "@/components/ui/card-wrapper";
import MotionDiv from "@/components/animation/motion-div";

const ContactForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [editingContact, setEditingContact] = useState({
    name: "",
    icon: "",
    url: "",
  });

  const { update } = useSession();

  const [contactData, setContactData] = useState<Contact[] | null>();

  const user = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const data = await axios
          .get(`/api/contacts/${user?.id}`)
          .then((res) => res.data.contacts);

        setContactData(data);
      }
    };

    fetchData();
  }, [user]);

  const defaultValues = {
    name: editingContact.name || "",
    icon: editingContact.icon || "",
    url: editingContact.url || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    startTransition(() => {
      contact(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setSuccess("");
          }
          if (data.success) {
            update();
            setSuccess(data.success);
            setError("");

            // Reset both form values and editingContact state
            reset({
              name: "",
              icon: "",
              url: "",
            });

            setEditingContact({
              name: "",
              icon: "",
              url: "",
            });

            setValue("icon", "");
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  const handleEditContact = (contact: Contact) => {
    // Populate the form fields with the contact details

    setEditingContact({
      name: contact.name,
      icon: contact.icon,
      url: contact.url,
    });

    reset({
      name: contact.name,
      icon: contact.icon,
      url: contact.url,
    });
  };

  const handleDeleteContact = (contactId: string) => {
    startTransition(() => {
      deleteContact(contactId)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setSuccess("");
          }
          if (data.success) {
            update();
            setSuccess(data.success);
            setError("");
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="Contact"
        HeaderIcon={LucideContact}
        subHeaderLabel="Change your Contact details"
        disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start z-0 mt-5"
        >
          {/* User Inputs -- Name */}
          <Input
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
            icon={FolderPen}
            error={errors.name?.message}
            disabled={isPending}
            value={defaultValues.name}
            register={register("name")}
          />

          {/* User Inputs -- Url */}
          <Input
            label="Link"
            name="url"
            type="text"
            placeholder="Link"
            icon={LucideLink}
            error={errors.url?.message}
            disabled={isPending}
            value={defaultValues.url}
            register={register("url")}
          />

          {/* User Inputs -- Icon(SVG) */}
          <Textarea
            label="Icon ( svg )"
            name="icon"
            Icon={ImagePlus}
            value={defaultValues.icon}
            setValue={setValue}
            disabled={isPending}
            error={errors.icon?.message}
            register={register}
          />

          {/* Add Add Button */}
          <Button disabled={isPending} type="submit" className="px-6 my-2 w-24">
            Add
          </Button>

          {/* Sucess Message */}
          {success && <FormSuccess message={success} />}

          {/* Error Message */}
          {error && <FormError message={error} />}
        </form>

        {/* Show Contacts */}
        <div className="w-full mt-10 flex flex-col gap-4">
          <label className="text-primary-foreground font-semibold text-xl">
            All Contacts
          </label>
          {contactData && contactData.length > 0 ? (
            <ul className="border border-input p-2 mt-4 rounded-md shadow-sm bg-border">
              {contactData.map((contact, i) => (
                <li
                  key={i}
                  className={cn(
                    "flex max-md:flex-col max-md:gap-4 items-start md:items-center justify-between py-4",
                    i !== contactData.length - 1 && " border-b border-input"
                  )}
                >
                  <Link
                    href={contact.url}
                    target="_blank"
                    className="flex gap-2 items-center group"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: contact.icon }}
                      className="svg"
                    ></div>
                    <span className="font-semibold text-secondary-foreground group-hover:text-foreground duration-300">
                      {contact.name}
                    </span>
                  </Link>
                  <div className="flex max-md:w-full gap-4">
                    <Button
                      className="bg-secondary hover:bg-secondary hover:opacity-70 w-24"
                      onClick={() => handleEditContact(contact)}
                    >
                      Edit
                    </Button>
                    <Button
                      destructive
                      className="w-20 md:w-24"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h3 className="my-6 border border-input py-4 w-full rounded-md bg-border">
              No Conacts Added
            </h3>
          )}
        </div>
      </CardWrapper>
    </MotionDiv>
  );
};

export default ContactForm;
