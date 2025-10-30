import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input";

export default function ContactForm() {
    return (
        <FieldSet>
            <FieldGroup>
                <div className='flex gap-4'>
                    <Field>
                    <FieldLabel htmlFor="name">Jméno:</FieldLabel>
                    <Input id="name" placeholder="Jan" type='text'/>
                </Field>
                    <Field>
                        <FieldLabel htmlFor="surname">Příjmení:</FieldLabel>
                        <Input id="surname" placeholder='Novák' type='text'/>
                        <FieldError className='hidden'>Choose another username.</FieldError>
                    </Field>
                </div>
                <Field>
                    <FieldLabel htmlFor="email">Email:</FieldLabel>
                    <Input id="email" type="email" placeholder="jan.novak@email.cz>"/>
                </Field>
                <Field>
                    <FieldLabel htmlFor="phone">Telefon:</FieldLabel>
                    <Input id="phone" type="tel" placeholder="+420 734 575 101"/>
                </Field>
                <div className='flex gap-4'>
                <Field>
                    <FieldLabel htmlFor="city">Město:</FieldLabel>
                    <Input id="city" type='text' placeholder="Brno"/>
                </Field>
                <Field>
                    <FieldLabel htmlFor="address">Ulice + Číslo:</FieldLabel>
                    <Input id="address" type='text' placeholder="Pekářská 12/3"/>
                </Field>
                </div>
                <Field>
                    <FieldLabel htmlFor="message">Zpráva:</FieldLabel>
                    <Input id="message" type='text' placeholder="Dobrý den, měl bych zájem o..."/>
                </Field>

            </FieldGroup>
        </FieldSet>
    )
}