import { zodResolver } from "@hookform/resolvers/zod"
import '../styles/ContactPage.css'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})
export const ContactPage = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            message: '',
        }
    })
    const onSubmit = (data) => {
        console.log(data)

    }
    return (
        <div className="contact-page">
            <div className="detail-contact">
                <div className='contact-main'>
                    <div className='contact-text'>
                        <h3>Contact us</h3>
                        <p>We're open for any suggestion or just to have a chat</p>
                    </div>
                    <div className="about-contact">
                        <div className="item-contact">
                            <h3>Address:</h3>
                            <a href="">198 West 21th Street, Suite 721 New York NY 10016</a>
                        </div>
                        <div className="item-contact">
                            <h3>Email:</h3>
                            <a href="">info@yoursite.com</a>
                        </div>
                        <div className="item-contact">
                            <h3>Phone:</h3>
                            <a href="">+ 1235 2355 98</a>
                        </div>
                    </div>
                    <div className='form-contact'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="input" placeholder="Your username" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="input" placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea className="textarea" placeholder="Your message" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Send Message</Button>
                            </form>
                        </Form>
                    </div>
                    <div className="contact-media">
                        <h3>Follow us here</h3>
                        <div className="media-detail">
                            <a href="">Facebook</a>
                            <a href="">Twitter</a>
                            <a href="">Instagram</a>
                            <a href="">Tiktok</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168579.10186074695!2d105.77838111905197!3d20.98834494481175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1726754545294!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
