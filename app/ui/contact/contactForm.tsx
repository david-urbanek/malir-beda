'use client'

import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle } from "lucide-react"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Form from "next/form"
import { useActionState } from "react"
import { handleFormSubmission } from "@/app/lib/actions"
import {createPortal} from "react-dom";

const initialState = {
    message: "",
    errors: {} as Record<string, string>,
    success: false,
}

const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    message: "",
}

export default function ContactForm() {
    const [formData, setFormData] = useState(initialValues)
    const [state, formAction, pending] = useActionState(handleFormSubmission, initialState)
    const [visible, setVisible] = useState(false)

    // zobrazí alert a případně resetuje formulář
    useEffect(() => {
        if (state.message) {
            setVisible(true)
            const timer = setTimeout(() => setVisible(false), 10000)
            return () => clearTimeout(timer)
        }

    }, [state])

    useEffect(() => {
        if (state.success) {
            setFormData(initialValues)
            console.log(formData)
        }
    }, [state.success])

    // ovládání polí (zachovává hodnoty)
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <>
                {visible &&
                    createPortal(
                        <div className="fixed top-4 right-4 z-[9999]">
                            <Alert
                                variant={state.success ? "default" : "destructive"}
                                className="shadow-lg w-72"
                            >
                                {state.success ? (
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                ) : (
                                    <AlertCircle className="h-4 w-4 text-red-600" />
                                )}
                                <div>
                                    <AlertTitle>
                                        {state.success ? "Odesláno ✅" : "Chyba"}
                                    </AlertTitle>
                                    <AlertDescription>{state.message}</AlertDescription>
                                </div>
                            </Alert>
                        </div>
                        , document.body,
                    )}

            <Form action={formAction}>
                <FieldSet className="min-w-1/2 max-w-100">
                    {/* --- Kontaktní údaje --- */}
                    <FieldGroup>
                        <div className="flex gap-4">
                            <div>
                                <Field>
                                    <FieldLabel htmlFor="name">Jméno:</FieldLabel>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Jan"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </Field>
                                {state.errors?.name && <FieldError>{state.errors.name}</FieldError>}
                            </div>

                            <div>
                                <Field>
                                    <FieldLabel htmlFor="surname">Příjmení:</FieldLabel>
                                    <Input
                                        id="surname"
                                        name="surname"
                                        placeholder="Novák"
                                        type="text"
                                        value={formData.surname}
                                        onChange={handleChange}
                                    />
                                </Field>
                                {state.errors?.surname && <FieldError>{state.errors.surname}</FieldError>}
                            </div>
                        </div>

                        <Field>
                            <FieldLabel htmlFor="email">Email:</FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="jan.novak@email.cz"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {state.errors?.email && <FieldError>{state.errors.email}</FieldError>}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="phone">Telefon:</FieldLabel>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+420 734 575 101"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {state.errors?.phone && <FieldError>{state.errors.phone}</FieldError>}
                        </Field>

                        <FieldSeparator />

                        {/* --- Adresa projektu --- */}
                        <div className="flex flex-col gap-0">
                            <FieldLegend>Adresa projektu:</FieldLegend>
                            <FieldDescription>Zadejte město a adresu Vašeho projektu</FieldDescription>
                        </div>

                        <div className="flex gap-4">
                            <div>
                                <Field>
                                    <FieldLabel htmlFor="city">Město:</FieldLabel>
                                    <Input
                                        id="city"
                                        name="city"
                                        type="text"
                                        placeholder="Brno"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </Field>
                                {state.errors?.city && <FieldError>{state.errors.city}</FieldError>}
                            </div>

                            <div>
                                <Field>
                                    <FieldLabel htmlFor="address">Ulice + Číslo:</FieldLabel>
                                    <Input
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="Pekářská 12/3"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </Field>
                                {state.errors?.address && <FieldError>{state.errors.address}</FieldError>}
                            </div>
                        </div>

                        <FieldSeparator />

                        {/* --- Zpráva --- */}
                        <Field>
                            <FieldLabel htmlFor="message">Zpráva:</FieldLabel>
                            <FieldDescription>Napište mi, s čím bych Vám mohl pomoct</FieldDescription>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Dobrý den, měl bych zájem o..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Field>
                        {state.errors?.message && <FieldError>{state.errors.message}</FieldError>}

                        {/* --- Tlačítko --- */}
                        <Button disabled={pending} className='bg-blue-400 hover:bg-blue-500'>
                            {pending ? "Odesílání..." : "Odeslat nezávaznou poptávku"}
                        </Button>
                    </FieldGroup>
                </FieldSet>
            </Form>
        </>
    )
}
