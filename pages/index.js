import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button
} from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {BioSection, BioYear} from "../components/bio";

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a front-end developer based in Russia!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Maxim Sitnikov
                    </Heading>
                    <p>Digital Craftzman</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/MS.webp"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About me
                </Heading>
                <Paragraph>
                    Hi there, welcome to my app!<br />
                    I&apos;m Max. Front-end developer based in Saint-Petersburg.<br />
                    IT is my entire life and I’m glad to share with you some of my projects. I’m constantly studying new technologies and practices of top developers to expand my stack. But the main thing that drives me forward to learn something new is the desire to surpass myself.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1993</BioYear>
                    Born in Ulan-Ude, Russia.
                </BioSection>
                <BioSection>
                    <BioYear>2005</BioYear>
                    First steps in IT – studying QuickBasic.
                </BioSection>
                <BioSection>
                    <BioYear>2009</BioYear>
                    First projects on HTML, CSS.
                </BioSection>
                <BioSection>
                    <BioYear>2013</BioYear>
                    Studying Information Security at Irkutsk State University.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Studying JavaScript, Git, React, Webpack, PHP. First job as a full-stack developer in Saint-Petersburg.
                </BioSection>
                <BioSection>
                    <BioYear>2021 to present</BioYear>
                    Projects
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Music, Technologies, Auto, Gaming, Movies and Anime
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">On the web</Heading>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page