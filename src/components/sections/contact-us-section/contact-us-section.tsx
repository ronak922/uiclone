import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, forwardRef, HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { mcn } from "../../../lib/utils";
import styles from "./contact-us-section.module.css";

const contactTypes = [
  {
    id: "say-hi",
    label: "Say Hi",
  },
  {
    id: "get-quote",
    label: "Get a Quote",
  },
] as const;

const formSchema = z.object({
  contactType: z.enum([
    contactTypes[0].id,
    ...contactTypes.map((type) => type.id),
  ] as const),
  name: z
    .string()
    .regex(/^[a-zA-Z\s]*$/, "Name must contain only letters")
    .max(50, "Name is too long")
    .default(""),
  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address"
    )
    .max(50, "Email is too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
});

type ContactUsSectionProps = {
  /**
   * Only for storybook demo purposes
   */
  demoStory?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const ContactUsSection = forwardRef<HTMLDivElement, ContactUsSectionProps>(
  ({ demoStory, ...restProps }, ref) => {
    const [] = useState<
      (typeof contactTypes)[number]["id"]
    >(contactTypes[0].id);

    const form = useForm<z.infer<typeof formSchema>>({
      mode: "all",
      resolver: zodResolver(formSchema),
      defaultValues: {
        contactType: contactTypes[0].id,
        name: "",
        email: "",
        message: "",
      },
    });

    const className = mcn([styles["contact-us-section"], restProps.className]);

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
      if (!form.formState.isValid) return;
      if (demoStory) return console.log("Contact Us Form Data:", values);

      const { contactType: type, name, email, message } = values;
      const apiUri = "https://66c3d83bd057009ee9c1554a.mockapi.io/deri/dzr/api";

      try {
        const response = await fetch(`${apiUri}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            name,
            email,
            message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Thank you for your message");

          const yes = confirm(
            `Demo Mode: Would you like to view the message you just sent? You will be redirected to the mock API messages endpoint:\n${apiUri}/messages/${(data as { id: string }).id}`
          );

          if (yes) {
            window.location.href = `${apiUri}/messages/${(data as { id: string }).id}`;
          }

          return form.reset();
        }

        if (data === "Max number of elements reached for this resource!") {
          alert(
            "Message limit reached! Our database can only hold up to 100 messages :D"
          );
          form.reset();
          return;
        }

        alert("Failed to send message. Please try again.");
      } catch (error) {
        alert("Internal server error. Please try again later.");
        form.reset();
      }
    };

    return (
      <>
        <section {...{ ref, ...restProps, className }}>
          <div className={styles["contact-us-section__header"]}>
            
          </div>
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              form.handleSubmit(handleSubmit)(e);
            }}
          >
            
            
          </form>
        </section>
      </>
    );
  }
);


export default ContactUsSection;
