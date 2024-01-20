import React from "react";

export default function FormatDescription({ children }) {
  const description = children;
  const regex =
    /(`([^`]+)`)|(\*([^*]+)\*)|(_([^_]+)_)|(~([^~]+)~)|(\[([^\]]+)\]\(([^)]+)\))|\n/g;
  const parts = [];
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(description)) !== null) {
    const [
      fullMatch,
      code,
      codeContent,
      bold,
      boldContent,
      italic,
      italicContent,
      strikethrough,
      strikethroughContent,
      link,
      linkText,
      linkHref,
    ] = match;
    const index = match.index;

    if (index > lastIndex) {
      parts.push(
        description
          .substring(lastIndex, index)
          .split("\n")
          .map((line, lineIndex, arr) => (
            <React.Fragment key={`${index}-${lineIndex}`}>
              {line}
              {lineIndex < arr.length - 1 && <br />}
            </React.Fragment>
          ))
      );
    }

    if (code) {
      parts.push(
        <code className="bg-gray-200 px-1 rounded-md" key={index}>
          {codeContent}
        </code>
      );
    } else if (bold) {
      parts.push(<strong key={index}>{boldContent}</strong>);
    } else if (italic) {
      parts.push(<em key={index}>{italicContent}</em>);
    } else if (strikethrough) {
      parts.push(<del key={index}>{strikethroughContent}</del>);
    } else if (link) {
      parts.push(
        <a href={linkHref} key={index} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      );
    } else if (fullMatch === "\n") {
      parts.push(<br key={index} />);
    }

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < description.length) {
    parts.push(
      description
        .substring(lastIndex)
        .split("\n")
        .map((line, lineIndex, arr) => (
          <React.Fragment key={`last-${lineIndex}`}>
            {line}
            {lineIndex < arr.length - 1 && <br />}
          </React.Fragment>
        ))
    );
  } else {
    parts.pop();
  }

  return <p>{parts.flat()}</p>;
}
