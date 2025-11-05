import * as React from 'react';
import {
    Section,
    Row,
    Text,
    Column,
    Link,
    Img,
    Html,
    Head,
    Body,
    Tailwind,
    pixelBasedPreset
} from "@react-email/components";


export default function NotificationEmail() {
    return (
        <Html>
            <Head></Head>
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
            <Body>
                <Section className="my-[16px]">
                    <Section className="mt-[16px]">
                        <Row>
                            <Text className="m-0 font-semibold text-[24px] text-blue-500 leading-[24px]">
                                Vaši zprávu jsme úspěšně přijali a brzy se Vám ozveme
                            </Text>
                            <Text className="m-0 mt-[8px] font-semibold text-[16px] text-gray-900 leading-[32px]">
                                Naším cílem je, aby výsledek splnil Vaše představy do posledního detailu.
                                Pokud nám chcete upřesnit rozsah prací nebo zaslat fotografie interiéru, můžete odpovědět.
                            </Text>
                            <Text className="mt-[8px] text-[16px] text-gray-500 leading-[24px]">
                                Odpovíme Vám nejpozději do 48 hodin. Těšíme se na spolupráci!
                            </Text>
                        </Row>
                    </Section>
                    <Section className="max-w-4xl">
                        <Row className="mt-[16px]">
                            <Column className="min-w-1/2 max-w-[50%] pr-[8px] max-h-[50%] min-h-1/2">
                                <Link href="#">
                                    <Img
                                        alt="Stagg Electric Kettle"
                                        className="w-full rounded-[12px] object-cover"
                                        height={288}
                                        src="https://www.malirbeda.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsterka-bezova-edited.34b77b5a.webp&w=2048&q=75"
                                    />
                                </Link>
                            </Column>
                            <Column className="min-w-1/2 max-w-[50%] pr-[8px] max-h-[50%] min-h-1/2">
                                <Link href="#">
                                    <Img
                                        alt="Ode Grinder"
                                        className="w-full rounded-[12px] object-cover"
                                        width={288}
                                        height={288}
                                        src="https://www.malirbeda.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsterka-oranzova-edited.f21d5003.png&w=3840&q=75"
                                    />
                                </Link>
                            </Column>
                        </Row>
                        <Row className="mt-[16px] mb-[16px]">
                            <Column className="min-w-1/2 max-w-[50%] pr-[8px] max-h-[50%] min-h-1/2">
                                <Link href="#">
                                    <Img
                                        alt="Atmos Vacuum Canister"
                                        className="w-full rounded-[12px] object-cover"
                                        height={288}
                                        src="https://www.malirbeda.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsterka-seda-televize-edited.50a30419.webp&w=2048&q=75"
                                    />
                                </Link>
                            </Column>
                            <Column className="min-w-1/2 max-w-[50%] pr-[8px] max-h-[50%] min-h-1/2">
                                <Link href="#">
                                    <Img
                                        alt="Clyde Electric Kettle"
                                        className="w-full rounded-[12px] object-cover"
                                        height={288}
                                        src="https://www.malirbeda.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffontego-medenna.54b61643.webp&w=2048&q=75"
                                    />
                                </Link>
                            </Column>
                        </Row>
                    </Section>
                    <Section>
                        <Row className="mt-[16px]">
                            <Text className="m-0 font-semibold text-[16px] text-gray-900 leading-[32px]">
                                S pozdravem a přáním pěkného zbytku dne Vám přeje,
                            </Text>
                            <Text className="m-0 m-t-4 font-semibold text-[16px] text-gray-900 leading-[32px]">
                                Bedřich Dufek
                            </Text>
                        </Row>
                    </Section>
                    <Section>
                        <Row className='max-w-32 max-h-16 mt-[16px]'>
                            <Img
                                alt="Logo firmy Malíř Béďa"
                                className="bject-cover"
                                height={16}
                                src="https://www.malirbeda.cz/logo/malir-beda-logo.png"
                            />
                        </Row>
                    </Section>
                </Section>
            </Body>
            </Tailwind>
        </Html>

    )
}