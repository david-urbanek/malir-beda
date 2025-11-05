import {Body, Container, Html, Link, Text} from "@react-email/components";

export default function newLeadEmail({name, surname, email, phone, city, address, message}: {name: string, surname:  string, email: string, phone: string, city: string, address: string, message: string | undefined}) {
    return(
        <Html>
            <Body>
                <Container>
                    <Text>Jméno: {name} {surname}</Text>
                    <Text>
                        Email: <Link href={`mailto:${email}`}>{email}</Link>
                    </Text>
                   <Text>
                       Telefon: <Link href={`tel:${phone}`}>{phone}</Link>
                   </Text>
                    <Text>Město: {city}</Text>
                    <Text>Adresa: {address}</Text>
                    <Text>Zpráva: {message}</Text>
                </Container>
            </Body>
        </Html>

    )
}