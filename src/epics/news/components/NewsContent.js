import React from "react";
import parse from "html-react-parser";
import { Box } from "@chakra-ui/react";

const NewsContent = ({ content = "" }) => {
	return <Box mb={6}>{parse(content)}</Box>;
};

export default NewsContent;
