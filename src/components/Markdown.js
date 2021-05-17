import React from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Text,
  Code,
  Divider,
  Link,
  Checkbox,
  ListItem,
  Heading,
  Image,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

export const defaults = {
  p: props => {
    const { children } = props;
    return <Text mb={2}>{children}</Text>;
  },
  em: props => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: props => {
    const { children } = props;
    return <Code p={2}>{children}</Code>;
  },
  code: props => {
    const { language, value } = props;
    const className = language && `language-${language}`;
    return (
      <pre {...getCoreProps(props)}>
        <Code p={2} className={className || null}>
          {value}
        </Code>
      </pre>
    );
  },
  hr: Divider,
  a: Link,
  img: Image,
  text: props => {
    const { children } = props;
    return <Text as="span">{children}</Text>;
  },
  list: props => {
    const { start, ordered, children, depth } = props;
    const attrs = getCoreProps(props);
    if (start !== null && start !== 1 && start !== undefined) {
      attrs.start = start.toString();
    }
    let Element = UnorderedList;
    let styleType = 'disc';
    if (ordered) {
      Element = OrderedList;
      styleType = 'decimal';
    }
    if (depth === 1) styleType = 'circle';
    return (
      <Element
        spacing={2}
        as={ordered ? 'ol' : 'ul'}
        styleType={styleType}
        pl={4}
        {...attrs}
      >
        {children}
      </Element>
    );
  },
  listItem: props => {
    const { children, checked } = props;
    let checkbox = null;
    if (checked !== null && checked !== undefined) {
      checkbox = (
        <Checkbox isChecked={checked} isReadOnly>
          {children}
        </Checkbox>
      );
    }
    return (
      <ListItem
        {...getCoreProps(props)}
        listStyleType={checked !== null ? 'none' : 'inherit'}
      >
        {checkbox || children}
      </ListItem>
    );
  },
  definition: () => null,
  h1: props => {
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
      <Heading
        my={4}
        as={'h1'}
        size={'2xl'}
        {...props}
      />
    );
  },
  h2: props => {
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
      <Heading
        my={4}
        as={'h2'}
        size={'xl'}
        {...props}
      />
    );
  },
  h3: props => {
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
      <Heading
        my={4}
        as={'h3'}
        size={'lg'}
        {...props}
      />
    );
  },
  h4: props => {
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
      <Heading
        my={4}
        as={'h4'}
        size={'md'}
        {...props}
      />
    );
  },
  inlineCode: props => {
    const { children } = props;
    return <Code {...getCoreProps(props)}>{children}</Code>;
  },
}

export const Markdown = ({children}) => (
  <ReactMarkdown components={defaults}>{children}</ReactMarkdown>
)