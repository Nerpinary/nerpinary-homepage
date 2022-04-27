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
                    Finance Helper <Badge>2022</Badge>
                </Title>
                <P>
                    Finance Helper - convenient calculations of savings and expenses
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
                        <span>React Native, NextJS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/FinHelp.png" alt="Eisenhof" />
            </Container>
        </Layout>
    )
}
export default Work