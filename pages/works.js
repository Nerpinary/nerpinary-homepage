import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import {WorkGridItem} from "../components/grid-item";

import thumbFinHelp from "../public/images/FinHelp.webp"


const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="financeHelper" title="Finance Assistant" thumbnail={thumbFinHelp}>
                            Finance Assistant - convenient calculations of savings and expenses
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works