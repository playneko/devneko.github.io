import React from 'react';
import gfm from 'remark-gfm';
import Chip from '@material-ui/core/Chip';
import ReactMarkdown from 'react-markdown';
import Avatar from '@material-ui/core/Avatar';
import { DiscussionEmbed } from 'disqus-react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import htmlParser from 'react-markdown/plugins/html-parser';
import CircularProgress from '@material-ui/core/CircularProgress';
import { emphasize, withStyles } from '@material-ui/core/styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

// 컴포넌트
// 타이틀
import Title from "../component/Title";
// 모델
import DetailModel from "../model/DetailModel";

// 타이틀 세팅
const useTitle = Title();

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

const Categorys = (props) => {
  return (
    props.map(item => (
      <Chip
        size="small"
        color="primary"
        avatar={<Avatar>C</Avatar>}
        label={item ? item : "카테고리 없음"}
      />
    ))
  );
}

const Tags = (props) => {
  return (
    props.map(item => (
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb component="a" label={"#" + item} />
      </Breadcrumbs>
    ))
  );
}

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

const Detail = (props) => {
  // 상세 내용 취득
  const detailId = props.match.params.id;
  const getDetailData = DetailModel(detailId);
  const detailData = getDetailData[0];
  var boardTitle = "Playneko - 아키하바라와 개발정보를 공유하는 블로그 입니다.";
  var boardArticle = "";
  var boardDate = "";
  var boardCat = [];
  var boardTag = [];

  const renderers = {
      tableCell: TableCellBlock,
      inlineCode: InlineCodeBlock,
      blockquote: BlockQuoteBlock,
      code: ({language, value}) => {
          return <SyntaxHighlighter style={okaidia} language={language} children={value} />
      },
  }

  if (detailData) {
      boardTitle = detailData.board_title;
      boardArticle = detailData.board_article;
      boardDate = detailData.board_date;
      boardCat = detailData.cat_name;
      boardTag = detailData.tag_name;
  }

  // 타이틀 변경
  useTitle("Playneko - " + boardTitle);

  if (detailData) {
      return (
          <div className="detailStyle-content">
            <div className="detailArticleTtitle">{boardTitle}</div>
            <div>
              {Categorys(boardCat)} <Chip 
                size="small"
                color="secondary"
                variant="outlined"
                avatar={<Avatar>T</Avatar>}
                label={boardDate ? boardDate : "0000/00/00 00:00"}
              />
            </div>
            <ReactMarkdown plugins={[gfm]} skipHtml={false} escapeHtml={false} astPlugins={[parseHtml]} renderers={renderers} children={boardArticle} />
            <div className="detailArticleTag">{Tags(boardTag)}</div>
            <DiscussionEmbed
                shortname='playneko-github-io'
                config={
                    {
                        url: '',
                        identifier: detailId,
                        title: boardTitle,
                        language: 'en_EN'
                    }
                }
            />
          </div>
      );
  } else {
      return (
          <div className="detailStyle-content progressbar">
            <CircularProgress disableShrink />
          </div>
      );
  }
}

export default Detail;
