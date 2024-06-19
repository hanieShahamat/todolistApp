import AddBtn from "./AddBtn";
import Header from "./Header";
import List from "./List";



const MainContainer = () => {
  return (
    <div className="container mx-auto my-auto px-12 pt-8 bg-neutral-50 max-w-lg">
      <Header />
      <List
      />
      <AddBtn />
    </div>
  );
};

export default MainContainer;
