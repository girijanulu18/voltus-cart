import {
    FaApple,
    FaHeadphones,
    FaBreadSlice,
    FaGamepad,
    FaBaby,
    FaGlassWhiskey,
    FaHdd,
    FaHeadphonesAlt,
    FaAlignRight
} from 'react-icons/fa';

function ShopScreen() {
    const items = [
        FaHdd,
        FaHeadphonesAlt,
        FaApple,
        FaBreadSlice,
        FaHeadphones,
        FaGlassWhiskey,
        FaGamepad,
        FaBaby,
        FaAlignRight 
    ];

    return (
        <div className="container text-center pt-4">
            <h3 className="mb-4">Voltus Cart</h3>
            <div className="row row-cols-3 g-4">
                {items.map((Icon, idx) => (
                    <div className="col" key={idx}>
                        <div className="border rounded shadow-sm p-4">
                            <Icon size={32} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopScreen;
