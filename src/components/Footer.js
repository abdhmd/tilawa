const Footer = () => {

  const shadow = {
    boxShadow: " rgba(17, 12, 60, 0.05) 0px 48px 100px 0px;",
  };

  return (
    <div style={shadow} className="my-6 p-6 text-center bg-skin-background rounded-lg">
      <h2 className="flex w-full justify-center items-center flex-row-reverse gap-1 text-lg">
        <span>تلاوة</span>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        <span>{new Date().getFullYear()}</span>
      </h2>
    </div>
  );
};

export default Footer;
