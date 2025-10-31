'use server';

import { z } from "zod";
import {Resend} from "resend";

const formSchema = z.object({
    name: z.string().min(1, "Zadejte své jméno."),
    surname: z.string().min(1, "Zadejte své příjmení."),
    email: z.email("Zadejte platnou e-mailovou adresu."),
    phone: z.string().min(1, "Zadejte telefonní číslo."),
    city: z.string().min(1, "Zadejte město."),
    address: z.string().min(1, "Zadejte ulici a číslo popisné."),
    message: z.string().optional(),
});

export type FormState = {
    message: string
    success: boolean
    errors: {
        name?: string
        surname?: string
        email?: string
        phone?: string
        city?: string
        address?: string
        message?: string
    }
}

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function handleFormSubmission(initialState: {message: string}, formData: FormData,): Promise<FormState> {

    const validatedData = formSchema.safeParse({
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        city: formData.get('city'),
        address: formData.get('address'),
        message: formData.get('message'),
    });

    if (!validatedData.success) {

        const errors = validatedData.error.issues.reduce((acc, error) => {
            const fieldName = error.path[0] as string
            acc[fieldName] = error.message
            return acc
        }, {} as Record<string, string>)

        return {
            message: 'Nastala chyba při odesílání formuláře. Zkontrolujte, že máte vyplněná všechna povinná pole.',
            success: false,
            errors: errors
        }
    }

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'urbanek.dav@email.cz',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>Second email</strong>!</p>'
    });

    return {
        message: 'Váše poptávka byla úspěšně odeslána. Brzy Vás budu kontaktovat.',
        success: true,
        errors: {}
    }


    // Here you can handle the form data, e.g., save it to a database or send an email
}