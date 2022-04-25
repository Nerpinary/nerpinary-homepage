import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import {gridItem} from "../components/grid-item";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular posts
            </Heading>
        </Container>
    </Layout>
)

export default Posts