interface AdminTemplateProps {
  metaHeader: React.ReactNode;
  main: React.ReactNode;
}

const AdminTemplate = ({
  metaHeader,
  main: mainSection,
}: AdminTemplateProps) => {
  return (
    <div className='min-h-screen overflow-hidden bg-neutral-100 transition duration-500 dark:bg-gray-900'>
      {metaHeader}
      {mainSection}
    </div>
  );
};

export default AdminTemplate;
