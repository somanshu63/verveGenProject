import cms from "../images/cms.jpg";

function Home() {
  return (
    <div>
      <div className="flex items-start justify-between px-16 py-24">
        <div className="w-2/5">
          <h2 className="text-2xl mb-8 tracking-widest">
            Content Management System
          </h2>
          <p className="text-base text-justify tracking-widest">
            A Content Management System (CMS) is a software application used to
            create, manage, and modify digital content without needing
            specialized technical knowledge. It provides a user-friendly
            interface to manage the creation and modification of content, making
            it accessible for non-technical users.
          </p>
        </div>
        <div className="w-2/5">
          <img src={cms} alt="cms" className="w-full"></img>
        </div>
      </div>
    </div>
  );
}
export default Home;
