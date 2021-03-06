/** @jsx jsx */
import React from "react"
import { jsx, Text, Heading, Link, Button, Box } from 'theme-ui';

import Layout from "../components/layout"
import Form from '../components/form';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text variant="body">
      From <strong>March 20th</strong> to <strong>March 29th, 2020</strong>, join me and the other entrepreneurial developers in this community in building a minimum viable product for your next software-as-a-service idea.
    </Text>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        mt: 3,
      }}
    >
      <Link href="#sign-up">
        <Button sx={{ mt: 2 }}>
          <Text variant="body">Join us!</Text>
        </Button>
      </Link>
    </Box>
    <Heading as="h2" sx={{ mt: 4 }}>What is the Seven Day SaaS challenge?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      The 7DSaaS challenge is a software development jam designed to help you, an <i>entrepreneurially minded full-stack web developer</i>, to build a fully-functional MVP for your next SaaS idea within a seven day period.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      If you're serious about launching a successful SaaS, you should validate your current problem + solution hypothesis as quickly as possible, so you can either start making a profit or discard it and move on to the next product.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      This challenge will help you do just that.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Why is this a thing?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      I was planning for a <Link href="https://itch.io/jam/7drl-challenge-2020">week-long game jam</Link>, and realized I'd rather spend the time building a software startup and working towards financial independence.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      As developers, the biggest challenge we face is figuring out how to avoid spending all of our time coding. Software is only 10% of what constitutes a successful SaaS, and the rest lies in finding a good problem, determining product-market fit, sales, and all of the other not-so-fun stuff that we like to pretend doesn't have to happen.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      But it does have to happen. And I wanted a community to hold me accountable to only spending a week building my MVP, so that after doing the "fun stuff," I could be freed up to focus on what <i>really</i> mattered.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      So... welcome to 7DSaaS – a jam for building a <strong>profitable software product</strong>.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>But the 20th to the 29th is nine days!</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      Yep, you read that right. You get to pick the seven-day stretch that works best for you within those nine days. But you have to stick to those seven days – scout's honor.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Who are you, anyway?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      Glad you asked! I'm a <Link href="https://elliotbonneville.com/">full-stack software developer and startup consultant</Link> based in Providence, RI. I've launched three non-software-related startups, and now I'm focusing on leveraging my developer skills to build a profitable SaaS.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      I also run a <Link href="https://meetup.com/react-ri">React meetup in Rhode Island</Link>, where I <Link href="https://www.youtube.com/channel/UCZQUVwy120wwA3hSnRiawiw?view_as=subscriber">speak regularly</Link>.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }} id="sign-up">Join us</Heading>
    <Text variant='body' sx={{ mt: 2 }}>
      Sign up below to get instant access to our Slack and become a part of our community. You'll also get an invite to the mailing list, but don't worry – you can just ignore that (also, I don't send you 💩 emails).
    </Text>
    <Form />
  </Layout >
)

export default IndexPage
