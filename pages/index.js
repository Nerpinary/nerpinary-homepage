import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    List,
    ListItem,
    Link, Icon
} from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {BioSection, BioYear} from "../components/bio";
// import {IoLogoInstagram, IoLogoGithub, IoLogoYoutube} from "react-icons/all";

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
                        src="/images/MS.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Maxim is a front-end developer based in Saint-Petersburg. He has an interest in studying new development technologies, the practices of current top developers and the desire to surpass himself
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
                    <BioYear>2011</BioYear>
                    Graduated from high school in Irkutsk, Russia.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Learning the javascript programming language. In August of the same year already found a job as a front-end developer
                </BioSection>
                <BioSection>
                    <BioYear>2021 to present</BioYear>
                    Works
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
                <List>
                    {/*<ListItem>*/}
                    {/*    <Link href="https://github.com/nerpinary" target="_blank">*/}
                    {/*        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>*/}
                    {/*            @nerpinary*/}
                    {/*        </Button>*/}
                    {/*    </Link>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                    {/*    <Link href="https://www.instagram.com/musicfail/" target="_blank">*/}
                    {/*        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>*/}
                    {/*            @musicfail*/}
                    {/*        </Button>*/}
                    {/*    </Link>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                    {/*    <Link href="https://www.youtube.com/channel/UC_455xYAbwAVr5PWgK0svXA" target="_blank">*/}
                    {/*        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoYoutube} />}>*/}
                    {/*            My Youtube channel*/}
                    {/*        </Button>*/}
                    {/*    </Link>*/}
                    {/*</ListItem>*/}
                </List>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page