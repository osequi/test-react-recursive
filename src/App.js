import Recursive from "react-recursive";

function App() {
  const tree = {
    title: "Menu",
    nodes: staticItems,
    activeMenuItem: "Introduction 3-2",
  };
  return (
    <ul>
      <Recursive tree {...tree} keyName="title">
        {(iteration) => {
          const { props, hasNodes, renderNodes } = iteration;
          const { title, activeMenuItem, isActive } = props;
          const isActive2 = title === activeMenuItem;
          const title2 = isActive ? `${title} *` : title;
          const title3 = isActive2 ? `${title} *` : title;
          console.log("iteration:", iteration);
          return (
            <li>
              <p>
                {title3} ... {iteration?.depth ?? -1}
              </p>
              {hasNodes && <ul>{renderNodes({ isActive: isActive2 })}</ul>}
            </li>
          );
        }}
      </Recursive>
    </ul>
  );
}

const staticItems = [
  {
    variant: "section",
    title: "Overview",
    isActive: false,
    nodes: [
      {
        variant: "item",
        title: "Introduction",
        href: "/edo/introduction",
        isActive: false,
        nodes: [
          {
            variant: "item",
            title: "Introduction 1",
            href: "/edo/principles",
            isActive: false,
          },
          {
            variant: "item",
            title: "Introduction 2",
            href: "/edo/principles",
            isActive: false,
          },
          {
            variant: "section",
            title: "Introduction 3",
            isActive: false,
            nodes: [
              {
                variant: "item",
                title: "Introduction 3-1",
                href: "/edo/principles",
                isActive: false,
              },
              {
                variant: "item",
                title: "Introduction 3-2",
                href: "/edo/principles",
                isActive: false,
              },
              {
                variant: "item",
                title: "Introduction 3-3",
                isActive: false,
              },
            ],
          },
        ],
      },
      {
        variant: "item",
        title: "Principles",
        href: "/edo/principles",
        isActive: false,
      },
      {
        variant: "item",
        title: "Features",
        href: "/edo/features",
        isActive: false,
      },
      {
        variant: "item",
        title: "Guidelines",
        href: "/edo/guidelines",
        isActive: false,
      },
      {
        variant: "item",
        title: "Tech stack",
        href: "/edo/tech-stack",
        isActive: false,
      },
      {
        variant: "item",
        title: "Code sample",
        href: "/edo/code-sample",
        isActive: false,
      },
      {
        variant: "item",
        title: "Release notes",
        href: "/edo/release-notes",
        isActive: false,
      },
    ],
  },
];

export default App;
