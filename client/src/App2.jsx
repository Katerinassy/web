import Catalog from "./pages/catalog";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Question from "./pages/questions";


function CatalogPage() {
    return (
        <div className='App2'>
            <Header />
            <Catalog />
            <Question />
            <Footer />
        </div>
    );
}

export default CatalogPage;