import React from 'react';
import gfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism'

import DetailModel from "../model/DetailModel";

function InlineCodeBlock(props) {
  return (
    <span style={{background: '#ff0'}}>
      {props.value}
    </span>
  );
}

function BlockQuoteBlock(props) {
  return (
    <td style={{borderLeft: '3px solid rgb(170, 170, 170)', margin: 5, paddingLeft: 10}}>
      {props.children}
    </td>
  );
}

function TableCellBlock(props) {
  let style = {
    textAlign: props.align ? props.align : 'center',
    padding: 5
  };

  if (props.isHeader) {
    style.background = '#ff0';
    style.border = '1px solid #ccc';
    style.boderLeft = 0;
    style.borderRight = 0;
  } else {
    style.borderBottom = '1px solid #eee';
  }

  return (
    <td style={style}>
      {props.children}
    </td>
  );
}

const parseHtml = htmlParser({
    processingInstructions: [{
        shouldProcessNode: (node) => node && node.name === 'span',
        processNode: () => <span style={{color: '#f00'}}/>
    }]
});

export default function Detail(props) {
    // 상세 내용 취득
    const getDetailData = DetailModel(props.match.params.id);
    const detailData = getDetailData[0];
    console.log(detailData);
    var markdown = "";

    const renderers = {
        tableCell: TableCellBlock,
        inlineCode: InlineCodeBlock,
        blockquote: BlockQuoteBlock,
        code: ({language, value}) => {
            return <SyntaxHighlighter style={okaidia} language={language} children={value} />
        },
    }

    if (detailData) {
        markdown = detailData.board_article;
    }

    return (
        <>
        <ReactMarkdown plugins={[gfm]} skipHtml={false} escapeHtml={false} astPlugins={[parseHtml]} renderers={renderers} children={markdown} />
        </>
    );
}
