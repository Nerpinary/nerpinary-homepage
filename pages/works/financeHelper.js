import {Container, Badge, Link, List, ListItem} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from "../../components/work";
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout>
            <Container>
                <Title>
                    Finance Assistant <Badge>2022</Badge>
                </Title>
                <P>
                    Finance Assistant - convenient calculations of savings and expenses
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://finance-helper-kappa.vercel.app/">
                            https://finance-helper-kappa.vercel.app/ <ExternalLinkIcon mx="px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, TypeScript, NextJS</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/FinHelp.webp" alt="Finance Helper" />
            </Container>
        </Layout>
    )
}
export default Work