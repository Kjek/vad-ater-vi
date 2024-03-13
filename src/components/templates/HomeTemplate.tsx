interface HomeTemplateProps {
  metaHeader: React.ReactNode;
  header: React.ReactNode;
  main: React.ReactNode;
}

const HomeTemplate = ({
  metaHeader,
  header,
  main: mainSection,
}: HomeTemplateProps) => {
  return (
    <div className='min-h-screen overflow-hidden bg-neutral-100 transition duration-500 dark:bg-gray-900'>
      {metaHeader}
      {header}
      {mainSection}
    </div>
  );
};

export default HomeTemplate;
